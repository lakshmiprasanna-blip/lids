const BASE_URL = process.env.CMS_API_BASE_URL || "http://localhost:4010";

const firstTruthy = (...vals) => vals.find((v) => typeof v === "string" && v.trim() !== "") ?? null;

function resolveFileUrl(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export async function getResearch() {
  try {
    const res = await fetch(`${BASE_URL}/api/research-papers`, {
      headers: { Authorization: `Bearer ${process.env.CMS_API_TOKEN}` },
      cache: "no-store",
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`getResearch: ${res.status} ${res.statusText}`, body);
      return [];
    }

    const raw = await res.json();
    const list = raw.data ?? raw ?? [];

    // DIAGNOSTIC — check your terminal (server logs), not the browser console
    console.log(
      "RESEARCH ITEMS:",
      list.map((r) => ({ id: r.id, keys: Object.keys(r) }))
    );

    return list
      .filter((r) => firstTruthy(r.title))
      .map((r, i) => {
        const rawStatus = firstTruthy(r.status);
        const statusLabel = rawStatus
          ? rawStatus.charAt(0).toUpperCase() + rawStatus.slice(1)
          : null;
        const year = r.year ?? r.publishedYear ?? "";

        return {
          id: r.id ?? r._id ?? `research-${i}`,
          title: firstTruthy(r.title) ?? "",
          status: statusLabel && year && !statusLabel.includes("-")
            ? `${statusLabel} - ${year}`
            : statusLabel ?? "",
          dept: firstTruthy(r.department, r.dept) ?? "",
          pdfUrl: resolveFileUrl(firstTruthy(r.pdf, r.pdfUrl, r.file, r.fileUrl)),
        };
      });
  } catch (err) {
    console.error("getResearch error:", err);
    return [];
  }
}