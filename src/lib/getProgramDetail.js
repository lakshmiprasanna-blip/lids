const BASE_URL = process.env.CMS_API_BASE_URL || "https://lids-cms-backend.onrender.com";

function normalizeSlug(raw) {
  if (!raw) return raw;
  return raw.replace(/^\/?coursedetail\//, "").replace(/\/$/, "");
}

// treats "" as missing too, unlike ??
const firstTruthy = (...vals) => vals.find((v) => typeof v === "string" && v.trim() !== "") ?? null;

function resolveImageUrl(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

function stripHtml(html) {
  return (html ?? "").replace(/<[^>]+>/g, "").trim();
}

// Body structure confirmed as: <p><strong>tagline</strong></p><p>description</p>
function extractIntro(html) {
  if (!html) return { tagline: "", desc: "" };

  const boldMatch = html.match(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/i);
  const tagline = boldMatch ? stripHtml(boldMatch[2]) : "";

  const htmlWithoutBold = boldMatch ? html.replace(boldMatch[0], "") : html;
  const desc = stripHtml(htmlWithoutBold);

  return { tagline, desc };
}

export async function getProgramDetail(slug) {
  try {
    const listRes = await fetch(`${BASE_URL}/api/courses`, {
      headers: { Authorization: `Bearer ${process.env.CMS_API_TOKEN}` },
      cache: "no-store",
    });
    if (!listRes.ok) return null;
    const listData = await listRes.json();
    const match = (listData.data || []).find((c) => normalizeSlug(c.slug) === slug);
    if (!match) return null;

    const detailRes = await fetch(`${BASE_URL}/api/courses/${match.id}`, {
      headers: { Authorization: `Bearer ${process.env.CMS_API_TOKEN}` },
      cache: "no-store",
    });
    if (!detailRes.ok) return null;
    const raw = await detailRes.json();

    const groups = raw.sections ?? [];
    const allWidgetsRaw = groups.flatMap((g) => g.widgets ?? []);

    const introWidget = allWidgetsRaw[0]?.type === "rich-text" ? allWidgetsRaw[0] : null;

    const allWidgets = introWidget ? allWidgetsRaw.slice(1) : allWidgetsRaw;

    const intro = introWidget ? extractIntro(introWidget.body) : { tagline: "", desc: "" };

    const statsWidget = allWidgets.find((w) => w.type === "key-value-grid");
    const stats = statsWidget
      ? statsWidget.rows.map((r) => ({ value: r.value?.trim(), label: r.label?.trim() }))
      : [];

    const sections = [];
    for (const widget of allWidgets) {
      if (widget.type === "key-value-grid") continue;
      const hasTitle = widget.title && widget.title.trim() !== "";
      const fields = widgetToFields(widget);

      // "card-grid" is reused for both achievements and gallery — split by title.
      if (fields.achievements && /gallery|infrastructure/i.test(widget.title ?? "")) {
        fields.gallery = fields.achievements;
        delete fields.achievements;
      }

      if (hasTitle) {
        sections.push({ title: widget.title, ...fields });
      } else if (sections.length > 0) {
        Object.assign(sections[sections.length - 1], fields);
      }
    }

    return {
      title: raw.name,
      tagline: intro.tagline,
      desc: intro.desc || raw.shortDescription || "",
      image: resolveImageUrl(raw.thumbnailImage),
      stats,
      sections,
      sidebarLinks: buildSidebarLinks(sections),
    };
  } catch (err) {
    console.error("getProgramDetail error:", err);
    return null;
  }
}

function widgetToFields(widget) {
  switch (widget.type) {
    case "rich-text":
      return { htmlContent: widget.body ?? "" };

    case "image":
      return {
        carousel: (widget.images ?? [])
          .map((img) => resolveImageUrl(firstTruthy(img.imageUrl, img.url, typeof img === "string" ? img : null)))
          .filter(Boolean),
      };

    case "card-grid":
      return {
        achievements: (widget.items ?? [])
          .map((item) => ({
            image: resolveImageUrl(firstTruthy(item.imageUrl, item.image)),
            name: item.name ?? "",
            dept: item.subtitle ?? item.dept ?? "",
          }))
          .filter((item) => item.image),
      };
    case "table":
      return {
        table: {
          headers: (widget.columns ?? []).map((c) => c.label ?? c.title ?? c),
          rows: (widget.rows ?? []).map((row) => {
            const cellMap = row.cells ?? row; 
            return (widget.columns ?? []).map((col) => cellMap[col.id] ?? "");
          }),
        },
      };

    case "profile":
      return {
        hod: {
          image: resolveImageUrl(firstTruthy(widget.imageUrl, widget.image, widget.photo, widget.avatar)),
          name: widget.name ?? "",
          message: firstTruthy(widget.body, widget.message, widget.bio, widget.text) ?? "",
        },
      };

    case "faq":
      return {
        faqs: (widget.items ?? widget.questions ?? []).map((q) => ({
          question: q.question ?? q.title ?? "",
          answer: q.answer ?? q.body ?? "",
        })),
      };

    default:
      console.warn("Unknown widget type:", widget.type, widget);
      return {};
  }
}

function buildSidebarLinks(sections) {
  return [{ label: "Overview", target: -1 }, ...sections.map((s, i) => ({ label: s.title, target: i }))];
}