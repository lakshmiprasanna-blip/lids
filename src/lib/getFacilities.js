const BASE_URL = process.env.CMS_API_BASE_URL || "https://lids-cms-backend.onrender.com";

function resolveImageUrl(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export async function getFacilities() {
  try {
    const res = await fetch(`${BASE_URL}/api/facilities`, {
      headers: { Authorization: `Bearer ${process.env.CMS_API_TOKEN}` },
      cache: "no-store",
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`getFacilities: ${res.status} ${res.statusText}`, body);
      return [];
    }

    const raw = await res.json();
    const list = raw.data ?? raw ?? [];

    return list
      .filter((f) => f.label && f.label.trim() !== "") // skip empty/placeholder rows like the two blank ones in your CMS screenshot
      .map((f, i) => ({
        id: f.id ?? f._id ?? `facility-${i}`,
        icon: resolveImageUrl(f.icon ?? f.iconUrl),
        hoverImage: resolveImageUrl(f.hoverImage ?? f.hoverImageUrl),
        label: f.label ?? "",
      }));
  } catch (err) {
    console.error("getFacilities error:", err);
    return [];
  }
}