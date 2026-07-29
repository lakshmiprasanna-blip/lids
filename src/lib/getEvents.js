export async function getEvents() {
  const placeholderEvents = [
    { id: 1, category: "Events", type: "Conference", date: "12 September 2025", title: "Annual Dental Conference 2026", desc: "Join us for the Annual Dental Conference 2026 where leading experts in the field of oral health will share the latest trends in dental technology...", image: "/assets/newsevent1.webp" },
    { id: 2, category: "Events", type: "Workshop", date: "12 September 2025", title: "Community Dental Camp", desc: "As part of our community outreach program, LIDS students and faculty will be conducting a Dental Health Awareness Camp for local residents...", image: "/assets/newsevent1.webp" },
    { id: 3, category: "Events", type: "Cultural Event", date: "12 September 2026", title: "Freshers' Welcome Party 2026", desc: "Our Freshers' Welcome Party for the new batch of BDS and MDS students was a huge success!", image: "/assets/newsevent1.webp" },
    { id: 4, category: "Events", type: "Conference", date: "15 October 2025", title: "Oral Health Symposium", desc: "A gathering of leading dental professionals to discuss advancements in oral healthcare...", image: "/assets/newsevent1.webp" },
    { id: 5, category: "Events", type: "Workshop", date: "20 November 2025", title: "Dental Technology Workshop", desc: "Hands-on workshop covering the latest dental technologies and equipment...", image: "/assets/newsevent1.webp" },
  ];

  return placeholderEvents;
}

// export async function getEvents() {
//   try {
//     const res = await fetch("http://localhost:4010/uploads/media", {
//       next: { revalidate: 3600 }, // re-fetches at most once per hour
//     });

//     if (!res.ok) {
//       console.error("Failed to fetch events:", res.status);
//       return [];
//     }

//     const data = await res.json();

//     return data.map((item) => ({
//       id: item.id,
//       category: item.category,        // ⚠️ replace with real field name
//       type: item.type,                // ⚠️ replace with real field name
//       date: item.date,                // ⚠️ may need formatting, e.g. new Date(item.date).toLocaleDateString(...)
//       title: item.title,              // ⚠️ replace with real field name
//       desc: item.description,         // ⚠️ replace with real field name
//       image: item.image,              // ⚠️ might be item.image.url or item.featured_image, depends on CMS
//     }));
//   } catch (err) {
//     console.error("getEvents error:", err);
//     return []; // fallback so the page doesn't crash if the API is down
//   }
// }