// TEMPORARY: CMS doesn't return a category field yet.
// Map slug -> category here until the backend adds one.
// Remove this once /api/courses includes category in its response.
const categoryMap = {
  "coursedetail/bds/": "Under Graduate (U.G)",
  // add more slug: category pairs here as new courses appear in the CMS
};

export async function getPrograms() {
  console.log("TOKEN BEING USED:", process.env.CMS_API_TOKEN);
  try {
    const res = await fetch("https://lids-cms-backend.onrender.com/api/courses", {
      headers: {
        Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Failed to fetch courses:", res.status);
      return [];
    }

    const data = await res.json();
    const courses = data.data || [];

    return courses.map((item) => ({
      slug: item.slug,
      title: item.name,
      years: item.durationLabel,
      image: item.thumbnailImage,
      desc: item.shortDescription,
      category: categoryMap[item.slug] || "Uncategorized",
    }));
  } catch (err) {
    console.error("getPrograms error:", err);
    return [];
  }
}