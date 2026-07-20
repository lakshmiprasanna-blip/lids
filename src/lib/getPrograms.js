export async function getPrograms() {
  // TEMPORARY placeholder — replace with a real fetch() once the CMS endpoint is ready
  const placeholderPrograms = [
    {
      slug: "bds",
      title: "Bachelor of Dental Surgery (BDS)",
      years: "5 years",
      image: "/assets/BDS.webp",
      desc: "Start your professional journey with our comprehensive BDS program, where foundational science meets advanced clinical practice.",
      category: "Under Graduate (U.G)",
    },
    {
      slug: "mds",
      title: "Master of Dental Surgery (MDS)",
      years: "3 years",
      image: "/assets/MDS.webp",
      desc: "Elevate your expertise with our MDS specialisations, designed for dentists aiming to achieve mastery in complex oral healthcare.",
      category: "Post Graduate (P.G)",
    },
    {
      slug: "pg-diploma",
      title: "PG Diploma Programs",
      years: "3 years",
      image: "/assets/PG.webp",
      desc: "Fast-track your career growth with our intensive PG Diploma programs, focusing on specialized clinical skills and the latest dental technologies.",
      category: "PG Diploma",
    },
  ];

  return placeholderPrograms;
}
// export async function getPrograms() {
//   try {
//     const res = await fetch("YOUR_CMS_ENDPOINT_HERE");

//     if (!res.ok) {
//       console.error("Failed to fetch programs:", res.status);
//       return [];
//     }

//     const data = await res.json();

//     return data.map((item) => ({
//       slug: item.slug,
//       title: item.title,
//       years: item.duration,        // ⚠️ adjust once you share real CMS response
//       image: item.featured_image,  // ⚠️ adjust once you share real CMS response
//       desc: item.description,      // ⚠️ adjust once you share real CMS response
//       category: item.category,     // needed for tab filtering
//     }));
//   } catch (err) {
//     console.error("getPrograms error:", err);
//     return [];
//   }
// }