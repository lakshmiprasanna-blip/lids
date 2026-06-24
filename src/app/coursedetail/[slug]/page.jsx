"use client";
import { use, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, X, Search, ChevronDown } from "lucide-react";
import { courses } from "@/app/data/courses";
import CTABanner from "@/components/CTABanner";

function ImageCarousel({ images, current, setCurrent }) {
  return (
    <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden">
      <Image src={images[current]} alt={`Slide ${current + 1}`} fill className="object-cover transition-all duration-500" />
       <div className="absolute inset-0 rounded-xl border-[5px] border-white/40 pointer-events-none"></div>
      <div className="absolute flex items-center" style={{ bottom: "16px", left: "50%", transform: "translateX(-50%)", gap: "4px" }}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? "28px" : "10px", height: "10px", borderRadius: "999px", background: i === current ? "white" : "rgba(255,255,255,0.45)", border: "none", padding: 0, transition: "all 0.3s ease", cursor: "pointer" }} />
        ))}
      </div>
    </div>
  );
}

function HODCard({ hod }) {
  return (
    <div className="flex items-center" style={{ background: "#20B2AA", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.2)", padding: "44px", gap: "20px", height: "352px" }}>
      <div className="flex flex-col gap-3 overflow-hidden" style={{ flex: "1 1 0" }}>
        <h4 className="!text-white font-semibold text-xl">HOD Message</h4>
        <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "16px", lineHeight: "1.7", display: "-webkit-box", WebkitLineClamp: 9, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{hod.message}</p>
      </div>
      <div className="shrink-0 relative" style={{ width: "300px", height: "260px", borderRadius: "14px", border: "3px solid rgba(255,255,255,0.3)", overflow: "hidden", }}>
  <Image src={hod.image} alt={hod.name || "HOD"} fill className="object-cover object-top"/>
  <div className="absolute inset-0 rounded-[14px] border-[5px] border-white/40 pointer-events-none"></div>
</div>
    </div>
  );
}

const tdStyle = (k, last) => ({ color: k === 0 ? "#232323" : "#3D3D3D", fontWeight: k === 0 ? "600" : "400", fontSize: k === 0 ? "16px" : "16px", borderRight: k !== last ? "1px solid #FAFBFD" : "none" });
const thStyle = (i, last) => ({ borderRight: i !== last ? "1px solid #FAFBFD" : "none" });

function DataTable({ data, withViewBtn }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E5F3F2" }}>
      <table className="w-full border-collapse text-[18px]">
        <thead>
          <tr style={{ background: "#20B2AA" }}>
            {data.headers.map((h, i) => <th key={i} className="text-white font-medium px-5 py-4 text-left" style={thStyle(i, data.headers.length - 1)}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, j) => (
            <tr key={j} style={{ background: j % 2 !== 0 ? "#E9F8F6E3" : "white" }}>
              {row.map((cell, k) => (
                <td key={k} className="px-5 py-4 border-b border-[#E5F3F2]" style={tdStyle(k, row.length - 1)}>
                  {withViewBtn && k === row.length - 1
                    ? <button className="px-4 py-1.5 rounded-full text-[#20B2AA] text-md font-medium hover:bg-[#20B2AA] hover:text-white transition" style={{ border: "1.5px solid #20B2AA" }}>View</button>
                    : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CardGrid({ items, current, cols = 3, h = "280px" }) {
  return (
    <div className={`grid grid-cols-${cols} gap-3`}>
      {items.slice(current, current + cols * (h === "180px" ? 2 : 1)).map((item, i) => (
        <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E5F3F2" }}>
          <div className="relative w-full" style={{ height: h }}>
            <Image src={item.image ?? item} alt={item.name ?? `img ${i}`} fill className="object-cover" />
          </div>
          {item.name && (
            <div className="px-4 py-3 bg-white">
              <p className="text-[#1A1A1A] font-semibold text-lg">{item.name}</p>
              <p className="text-[#6B6B6B] text-sm">{item.dept}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CoursePage({ params }) {
  const { slug } = use(params);
  const course = courses[slug];
  const [activeLink, setActiveLink] = useState("Overview");
  const [activeFilter, setActiveFilter] = useState(true);
  const [indexes, setIndexes] = useState({});

  const getIdx = (i) => indexes[i] ?? 0;
  const setIdx = (i, val) => setIndexes((p) => ({ ...p, [i]: val }));
  const getStep = (s) => s.gallery ? 6 : s.achievements ? 3 : 1;
  const getMax  = (s) => (s.gallery?.length ?? s.achievements?.length ?? s.carousel?.length ?? 1) - getStep(s);
  const hasArrows = (s) => s.carousel || s.achievements || s.gallery;

  if (!course) return <div className="container py-20">Course not found.</div>;

  return (
    <main className="bg-white">
      <CTABanner label="Academics / Courses Offered" title="A Legacy of Excellence in Education and Social Responsibility" mobileImage="/assets/about-mob.webp" />

      {/* SEARCH BAR */}
      <div className="w-full py-3 px-6" style={{ background: "#107B71" }}>
        <div className="mx-auto flex items-center justify-center gap-6 flex-wrap" style={{ maxWidth: "1420px", minHeight: "56px" }}>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 w-full max-w-[400px]">
            <Search size={14} className="text-[#7A7A7A] shrink-0" />
            <input type="text" placeholder="Search research papers, authors, departments..." className="text-sm text-[#3D3D3D] outline-none w-full bg-transparent placeholder:text-[#9A9A9A]" />
          </div>
          <button className="flex items-center gap-2 border border-white text-white text-sm px-4 py-2 rounded-full whitespace-nowrap">
            Category <ChevronDown size={14} />
          </button>
          {activeFilter && (
            <button onClick={() => setActiveFilter(null)} className="flex items-center gap-2 bg-white text-[#107B71] text-sm px-4 py-2 rounded-full font-medium whitespace-nowrap">
              {course.title.split("(")[0].trim()} <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex items-start">

        {/* SIDEBAR */}
        <aside className="hidden lg:block shrink-0 sticky top-24 mr-8 overflow-hidden" style={{ width: "340px", borderRadius: "18px", border: "1px solid #E6E6E6", boxShadow: "0px 8px 4px 0px #E8FCFF5C" }}>
          <div className="px-6 py-5" style={{ background: "#20B2AA", borderRadius: "18px 18px 0 0" }}>
            <p className="text-white font-semibold text-[18px] leading-snug">{course.title.split("(")[0].trim()}</p>
          </div>
          <div className="flex flex-col bg-white" style={{ borderRadius: "0 0 18px 18px" }}>
            {course.sidebarLinks.map((link, i) => (
              <button key={link} onClick={() => setActiveLink(link)}
                className={`w-full text-left px-6 py-5 text-[15px] flex items-center justify-between transition-all duration-200 ${i !== course.sidebarLinks.length - 1 ? "border-b border-[#F0F0F0]" : ""} ${activeLink === link ? "text-[#20B2AA] font-medium border-l-4 border-l-[#20B2AA] bg-[#F5FFFE]" : "text-[#6B6B6B] border-l-4 border-l-transparent hover:text-[#20B2AA]"}`}>
                {link}
                {activeLink === link && <ArrowRight size={15} className="shrink-0 text-[#20B2AA]" />}
              </button>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1 min-w-0 flex flex-col gap-10">

          {/* Title block */}
          <div>
            <h2 className="text-[#1A1A1A] font-semibold text-5xl mb-2">{course.title}</h2>
            <p className="text-[#333333] font-medium text-[18px] mb-3">{course.tagline}</p>
            <p className="text-[#656C7B] text-[18px] leading-relaxed mb-6">{course.desc}</p>
            <div className="relative w-full h-[260px] md:h-[520px] rounded-xl overflow-hidden ">
              <Image src={course.image} alt={course.title} fill className="object-cover" />
                <div className="absolute inset-0 rounded-xl border-[5px] border-white/40 pointer-events-none"></div>

            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3" style={{ borderRadius: "16px", border: "2px solid #E5F3F2A1", padding: "28px 32px", background: "#FFFFFF", boxShadow: "0px 6px 6px 0px #EBFDFF33, 0px 13px 8px 0px #C9F9FF33, 0px 22px 9px 0px #E8FCFF33, inset 0px 0px 0px 1px #E5F3F2", backdropFilter: "blur(13.3px)", gap: "20px" }}>
            {course.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center" style={{ borderRight: i !== course.stats.length - 1 ? "1px solid #C8EDED" : "none" }}>
                <p className="font-bold text-4xl mb-1" style={{ color: "#107B71" }}>{stat.value}</p>
                <p className="text-sm whitespace-nowrap" style={{ color: "#6B6B6B" }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Sections */}
          {course.sections.map((section, i) => (
            <div key={i} className="flex flex-col gap-4">

              {/* H3 + arrows */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-[#1A1A1A] font-semibold !text-[32px] flex items-baseline gap-2">
                  <span className="text-[#232323]">{i + 1}.</span> {section.title}
                </h3>
                {hasArrows(section) && (
                  <div className="flex gap-2 shrink-0">
                    <button onClick={() => setIdx(i, Math.max(0, getIdx(i) - getStep(section)))}
                      className="w-9 h-9 rounded-full flex items-center justify-center transition"
                      style={{ border: "1.5px solid #20B2AA", color: "#20B2AA", background: "white" }}>
                      <ArrowLeft size={16} />
                    </button>
                    <button onClick={() => setIdx(i, Math.min(getMax(section), getIdx(i) + getStep(section)))}
                      className="w-9 h-9 rounded-full flex items-center justify-center transition"
                      style={{ background: "#20B2AA", color: "white" }}>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </div>

              {section.content && section.content.split("\n").map((p, j) => <p key={j} className="text-[#333333] text-[18px] leading-relaxed">{p}</p>)}

              {section.highlights && (
                <div className="mt-1">
                  <p className="text-[#333333] font-semibold text-[18px] mb-2">The program focuses on:</p>
                  <ul className="flex flex-col gap-1.5">
                    {section.highlights.map((h, j) => (
                      <li key={j} className="text-[#656C7B] text-[18px] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#656C7B] shrink-0" />{h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.table    && <DataTable data={section.table} withViewBtn={false} />}
              {section.carousel && <ImageCarousel images={section.carousel} current={getIdx(i)} setCurrent={(val) => setIdx(i, val)} />}
              {section.hod      && <HODCard hod={section.hod} />}
              {section.faculty  && <DataTable data={section.faculty} withViewBtn={false} />}
              {section.achievements && <CardGrid items={section.achievements} current={getIdx(i)} cols={3} h="280px" />}
              {section.research && <DataTable data={section.research} withViewBtn={true} />}
              {section.gallery  && <CardGrid items={section.gallery.map(src => src)} current={getIdx(i)} cols={3} h="180px" />}

            </div>
          ))}

        </div>
      </div>
    </main>
  );
}