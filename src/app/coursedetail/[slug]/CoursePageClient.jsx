"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, ArrowLeft, X, ChevronDown } from "lucide-react";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";
import FAQs from "@/components/FAQs";

const SafeImage = ({ src, ...p }) => (src ? <Image src={src} {...p} /> : null);

function ImageCarousel({ images, current, setCurrent }) {
  return (
    <div className="relative w-full h-[240px] md:h-[420px] rounded-2xl overflow-hidden">
      <SafeImage src={images[current]} alt={`Slide ${current + 1}`} fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover transition-all duration-500" />
      <div className="absolute inset-0 rounded-xl border-[5px] border-white/40 pointer-events-none" />
      <div className="absolute flex items-center gap-1" style={{ bottom: "16px", left: "50%", transform: "translateX(-50%)" }}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? "28px" : "10px", height: "10px", borderRadius: "999px", background: i === current ? "white" : "rgba(255,255,255,0.45)", border: "none", padding: 0, transition: "all 0.3s", cursor: "pointer" }} />
        ))}
      </div>
    </div>
  );
}

const HODCard = ({ hod }) => (
  <div
    className="hidden md:grid"
    style={{
      background: "#107B71",
      borderRadius: "24px",
      border: "1px solid rgba(255,255,255,0.2)",
      padding: "44px",
      gap: "20px",
      gridTemplateColumns: "1fr 360px",
      minHeight: "352px",
    }}
  >
    <div className="flex flex-col gap-3 justify-center">
      <h4 className="!text-white font-semibold !text-[32px]">HOD Message</h4>
      <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "18px", lineHeight: "1.7" }}>{hod.message}</p>
    </div>
    <div
      className="relative self-center"
      style={{ width: "360px", aspectRatio: "1 / 1", maxHeight: "264px", borderRadius: "14px", border: "3px solid rgba(255,255,255,0.3)", overflow: "hidden" }}
    >
      <SafeImage src={hod.image} alt={hod.name || "HOD"} fill sizes="360px" className="object-cover object-top" />
      <div className="absolute inset-0 rounded-[14px] border-[5px] border-white/40 pointer-events-none" />
    </div>
  </div>
);

const ViewLink = ({ fileUrl }) => {
  const cls = "px-10 py-3.5 rounded-full text-[#107B71] cursor-pointer text-sm font-medium border-[1.5px] border-[#20B2AA] hover:bg-[#9E2016] hover:!text-white hover:border-transparent transition-all";
  const style = { border: "1.5px solid #20B2AA", width: "98px", height: "37px" };
  return fileUrl
    ? <a href={fileUrl} target="_blank" rel="noopener noreferrer" className={`${cls} !text-[#107B71] no-underline`} style={style}>View</a>
    : <button className={cls} style={{ ...style, border: "1.5px solid #9E2016" }}>View</button>;
};

function DataTable({ data, withViewBtn }) {
  return (
    <div className="rounded-2xl overflow-x-auto" style={{ border: "1px solid #E5F3F2" }}>
      <table className="w-full border-collapse text-[16px] min-w-[500px]">
        <thead>
          <tr style={{ background: "#20B2AA" }}>
            {data.headers.map((h, i) => (
              <th key={i} className="text-white font-medium px-6 py-4 text-left whitespace-nowrap" style={{ borderRight: i !== data.headers.length - 1 ? "1px solid #FAFBFD" : "none" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, j) => {
            const cells = Array.isArray(row) ? row : row && typeof row === "object" ? Object.values(row) : [row];
            return (
              <tr key={j} style={{ background: j % 2 !== 0 ? "#E0F4F3" : "white" }}>
                {cells.map((cell, k) => {
                  const isLast = k === cells.length - 1;
                  const fileUrl = typeof cell === "string" ? cell : cell?.pdfUrl ?? cell?.url ?? cell?.fileUrl ?? cell?.file?.url ?? cell?.attachmentUrl ?? null;
                  return (
                    <td key={k} className={`px-6 py-2 md:px-8 md:py-5 border-b border-[#E5F3F2] ${k <= 1 ? "whitespace-nowrap" : ""}`} style={{ color: k === 0 ? "#232323" : "#3D3D3D", fontWeight: k === 0 ? "600" : "400", borderRight: !isLast ? "1px solid #FAFBFD" : "none" }}>
                      {withViewBtn && isLast ? <ViewLink fileUrl={fileUrl} /> : typeof cell === "object" && cell !== null ? cell.value ?? JSON.stringify(cell) : cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function CardGrid({ items, current, cols = 3, h = "280px" }) {
  const Card = ({ item, i, height }) => (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E5F3F2" }}>
      <div className="relative w-full" style={{ height }}><Image src={item.image ?? item} alt={item.name ?? `img ${i}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
      {item.name && <div className="px-3 py-4 bg-white"><p className="text-[#1A1A1A] font-semibold text-[16px] md:text-[24px]">{item.name}</p><p className="text-[#6B6B6B] text-[14px] md:text-[18px] md:py-2">{item.dept}</p></div>}
    </div>
  );
  return (
    <>
      <div className="md:hidden grid gap-3" style={{ gridTemplateColumns: "1fr" }}>{items.slice(current, current + 1).map((item, i) => <Card key={i} item={item} i={i} height="240px" />)}</div>
      <div className="hidden md:grid gap-3" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>{items.slice(current, current + cols * (h === "180px" ? 2 : 1)).map((item, i) => <Card key={i} item={item} i={i} height={h} />)}</div>
    </>
  );
}

function StatsCarousel({ stats }) {
  const [cur, setCur] = useState(0);
  useEffect(() => {
    if (!stats?.length) return;
    const t = setInterval(() => setCur(c => (c + 1) % stats.length), 2000);
    return () => clearInterval(t);
  }, [stats?.length]);
  if (!stats?.length) return null;
  return (
    <>
      <div className="md:hidden rounded-2xl py-8 text-center" style={{ border: "2px solid #20B2AA30", background: "#FFFFFF", boxShadow: "0px 6px 6px 0px #EBFDFF33, 0px 13px 8px 0px #C9F9FF33" }}>
        <p className="font-bold text-4xl mb-1" style={{ color: "#107B71" }}>{stats[cur]?.value}</p>
        <p className="text-sm" style={{ color: "#6B6B6B" }}>{stats[cur]?.label}</p>
        <div className="flex justify-center gap-1.5 mt-4">{stats.map((_, i) => <button key={i} onClick={() => setCur(i)} className="rounded-full transition-all" style={{ width: i === cur ? "16px" : "6px", height: "6px", background: i === cur ? "#107B71" : "#C8EDED" }} />)}</div>
      </div>
      <div className="hidden md:grid" style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)`, borderRadius: "16px", border: "2px solid ##20B2AA30", padding: "28px 32px", background: "#FFFFFF", boxShadow: "inset 0 0 10px 10px rgba(207, 239, 237, 0.9)", gap: "20px" }}>
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center" style={{ borderRight: i !== stats.length - 1 ? "1px solid #C8EDED" : "none" }}>
            <p className="font-semibold text-[44px] mb-1" style={{ color: "#107B71" }}>{stat.value}</p>
            <p className="text-[18px]" style={{ color: "#6B6B6B" }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function DropdownPanel({ items, onSelect, emptyText, className = "" }) {
  if (items.length === 0 && !emptyText) return null;
  return (
    <div className={`absolute top-full mt-2 bg-white rounded-2xl shadow-lg z-50 overflow-hidden max-h-[320px] overflow-y-auto ${className}`}>
      {items.length > 0
        ? items.map(c => <button key={c.slug} onClick={() => onSelect(c.slug, c.title)} className="w-full text-left px-4 py-3 text-sm text-[#3D3D3D] hover:bg-[#F5FFFE] border-b border-[#F0F0F0] last:border-b-0">{c.title}</button>)
        : <p className="px-4 py-3 text-sm text-[#9A9A9A]">{emptyText}</p>}
    </div>
  );
}

export default function CoursePage({ course, allCourses = [] }) {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(-1);
  const [activeFilter, setActiveFilter] = useState(true);
  const [indexes, setIndexes] = useState({});
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null); // "search" | "category" | null

  const overviewRef = useRef(null), sectionRefs = useRef([]), searchRef = useRef(null), categoryRef = useRef(null);
  const otherCourses = allCourses;
  const searchResults = search.trim() ? allCourses.filter(c => c.title.toLowerCase().includes(search.trim().toLowerCase())) : [];

  useEffect(() => {
    const close = e => { if (!searchRef.current?.contains(e.target) && !categoryRef.current?.contains(e.target)) setOpenDropdown(null); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
const goToCourse = (slug, title) => {
  setOpenDropdown(null);
  if (title) setSearch(title);
  const shortSlug = slug.split("/").filter(Boolean).pop(); // last non-empty segment
  router.push(`/coursedetail/${shortSlug}`);
};
  const getIdx = i => indexes[i] ?? 0;
  const setIdx = (i, val) => setIndexes(p => ({ ...p, [i]: val }));
  const getStep = s => (s.gallery ? 6 : s.achievements ? 3 : 1);
  const getLen = s => s.gallery?.length ?? s.achievements?.length ?? s.carousel?.length ?? 1;
  const getMax = s => (Math.max(1, Math.ceil(getLen(s) / getStep(s))) - 1) * getStep(s);
  const getMobileMax = s => Math.max(0, getLen(s) - 1);
  const hasArrows = s => s.carousel || s.achievements || s.gallery;
  const scrollToTarget = target => {
    setActiveLink(target);
    const el = target === -1 ? overviewRef.current : sectionRefs.current[target];
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
  };

  if (!course) return <div className="container py-20">Course not found.</div>;
 const shortTitle = course.title.match(/\(([^)]+)\)/)?.[1] ?? course.title;

 const breadcrumbs = (
  <span className="flex items-center gap-2 flex-wrap justify-center">
    <Link href="/academics" className="hover:underline !text-white">Academics</Link>
    <span className="text-white">/</span>
    <Link href="/courses" className="hover:underline !text-white">Courses Offered</Link>
    <span className="text-white">/</span>
    <span className="text-white">{shortTitle}</span>
  </span>
);
  return (
    <main className="bg-white">
  <DentalLegacyCTA
  align="center"
  title={breadcrumbs}
  description="A Legacy of Excellence in Education and Social Responsibility"
  image="/assets/coursedetail-banner.webp"
  showButton={false}
  priority={true}
  titleClassName="!text-[16px] md:!text-[16px] [font-family:'Inter',sans-serif] !font-medium"
  descriptionClassName="max-w-5xl !text-[32px] md:!text-[48px] [font-family:'Plus_Jakarta_Sans',sans-serif] font-semibold "
  mobileImagePosition="55% 65%"
  mobileImageStyle={{ transform: "scale(1.01)" }}
/>
      {/* SEARCH BAR */}
      <div className="w-full py-3 px-4" style={{ background: "#107B71" }}>
        <div className="mx-auto flex items-center justify-center gap-3 flex-wrap" style={{ maxWidth: "1420px", minHeight: "48px" }}>
          <div ref={searchRef} className="relative w-full max-w-[600px]">
            <div className="flex items-center gap-2 bg-white rounded-full px-3 !py-4 w-full">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-[#20B2AA] shrink-0"><circle cx="10" cy="10" r="6.5" /><line x1="15.5" y1="15.5" x2="22" y2="22" /></svg>
              <input type="text" placeholder="Search..." value={search} onChange={e => { setSearch(e.target.value); setOpenDropdown("search"); }} onFocus={() => search && setOpenDropdown("search")} className="text-sm text-[#3D3D3D] outline-none w-full bg-transparent placeholder:text-[#9A9A9A]" />
            </div>
            {openDropdown === "search" && <DropdownPanel items={searchResults} onSelect={goToCourse} emptyText={search.trim() ? "No courses found" : null} className="left-0 right-0" />}
          </div>

          <div ref={categoryRef} className="relative">
            <button onClick={() => setOpenDropdown(d => (d === "category" ? null : "category"))} className="flex items-center gap-2 border border-white text-white text-md px-8 py-3 rounded-full whitespace-nowrap">
              Category <ChevronDown size={13} className={`transition-transform ${openDropdown === "category" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "category" && <DropdownPanel items={otherCourses} onSelect={goToCourse} className="left-0 min-w-[240px]" />}
          </div>

          {activeFilter && (
            <button onClick={() => { setActiveFilter(null); router.push("/courses"); }} className="flex items-center gap-2 bg-white text-[#107B71] text-md px-9 py-3 rounded-full font-medium whitespace-nowrap">
              {course.title.split("(")[0].trim()} <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="container mx-auto px-4 md:px-6 !py-18 flex items-start gap-0 md:gap-8">
        <aside className="hidden lg:block shrink-0 sticky top-24 overflow-hidden" style={{ width: "300px", borderRadius: "18px", border: "1px solid #E6E6E6", boxShadow: "0px 8px 4px 0px #E8FCFF5C" }}>
          <div className="px-5 py-4" style={{ background: "#20B2AA", borderRadius: "18px 18px 0 0" }}><p className="text-white font-semibold text-[16px] leading-snug">{course.title.split("(")[0].trim()}</p></div>
          <div className="flex flex-col bg-white" style={{ borderRadius: "0 0 18px 18px" }}>
            {course.sidebarLinks.map((link, i) => (
              <button key={link.label} onClick={() => scrollToTarget(link.target)} className={`w-full text-left px-5 py-8 text-[18px] flex items-center justify-between transition-all duration-200 ${i !== course.sidebarLinks.length - 1 ? "border-b border-[#F0F0F0]" : ""} ${activeLink === link.target ? "text-[#20B2AA] font-medium" : "text-[#6B6B6B] border-l-4 border-l-transparent hover:text-[#20B2AA]"}`}>
                {link.label}
                {activeLink === link.target && <ArrowRight size={24} className="shrink-0 text-[#20B2AA]" />}
              </button>
            ))}
          </div>
        </aside>

        <div className="flex-1 min-w-0 flex flex-col gap-8">
          <div ref={overviewRef}>
            <h2 className="text-[#1A1A1A] font-semibold text-3xl md:text-5xl mb-4">{course.title}</h2>
            <p className="text-[#333333] font-medium text-[18px] mb-4">{course.tagline}</p>
            <p className="text-[#656C7B] text-[18px] leading-relaxed mb-5">{course.desc}</p>
            <div className="relative w-full h-[220px] md:h-[520px] rounded-xl overflow-hidden">
              <SafeImage src={course.image} alt={course.title} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 rounded-xl border-[5px] border-white/40 pointer-events-none" />
            </div>
          </div>

          <StatsCarousel stats={course.stats} />

          {course.sections.map((section, i) => (
            <div key={i} ref={el => (sectionRefs.current[i] = el)} className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-[#1A1A1A] font-semibold flex items-baseline gap-2 !text-[24px] md:text-[32px]"><span>{i + 1}.</span> {section.title}</h3>
                {hasArrows(section) && (
                  <div className="hidden md:flex gap-2 shrink-0">
                    <button onClick={() => setIdx(i, Math.max(0, getIdx(i) - getStep(section)))} className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer border-[1.5px] border-[#20B2AA] text-[#20B2AA] bg-white hover:bg-[#20B2AA] hover:text-white active:bg-[#20B2AA] active:text-white transition-colors"><ArrowLeft size={15} /></button>
                    <button onClick={() => setIdx(i, Math.min(getMax(section), getIdx(i) + getStep(section)))} className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer border-[1.5px] border-[#20B2AA] text-[#20B2AA] bg-white hover:bg-[#20B2AA] hover:text-white active:bg-[#20B2AA] active:text-white transition-colors"><ArrowRight size={16} /></button>
                  </div>
                )}
              </div>

              {section.content?.split("\n").map((p, j) => <p key={j} className="text-[#333333] text-[18px] leading-relaxed">{p}</p>)}
              {section.htmlContent && <div className="text-[#333333] text-[18px] leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_strong]:font-semibold [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:text-xl [&_h3]:font-semibold [&_p]:mb-2" dangerouslySetInnerHTML={{ __html: section.htmlContent }} />}

              {section.highlights && (
                <div>
                  <p className="text-[#333333] font-semibold text-[18px] mb-2">The program focuses on:</p>
                  <ul className="flex flex-col gap-1.5">{section.highlights.map((h, j) => <li key={j} className="text-[#656C7B] text-[18px] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#656C7B] shrink-0" />{h}</li>)}</ul>
                </div>
              )}

              {section.table && <DataTable data={section.table} withViewBtn={section.title === "Research & Academic Development"} />}
              {section.carousel && <ImageCarousel images={section.carousel} current={getIdx(i)} setCurrent={val => setIdx(i, val)} />}
              {section.hod && <HODCard hod={section.hod} />}
              {section.faculty && <DataTable data={section.faculty} withViewBtn={false} />}
              {section.achievements && <CardGrid items={section.achievements} current={getIdx(i)} cols={3} h="280px" />}
              {section.research && <DataTable data={section.research} withViewBtn={true} />}
              {section.gallery && <CardGrid items={section.gallery} current={getIdx(i)} cols={3} h="180px" />}
              {section.faqs && <FAQs faqs={section.faqs} bare />}

              {hasArrows(section) && (
                <div className="md:hidden flex items-center justify-center gap-3">
                  <button onClick={() => setIdx(i, Math.max(0, getIdx(i) - 1))} disabled={getIdx(i) === 0} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: "1.5px solid #20B2AA", color: "#20B2AA", background: "white", opacity: getIdx(i) === 0 ? 0.4 : 1 }}><ArrowLeft size={16} /></button>
                  <button onClick={() => setIdx(i, Math.min(getMobileMax(section), getIdx(i) + 1))} disabled={getIdx(i) >= getMobileMax(section)} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#20B2AA", color: "white", opacity: getIdx(i) >= getMobileMax(section) ? 0.4 : 1 }}><ArrowRight size={16} /></button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <DentalLegacyCTA align="left" title={<>Ready to Shape<br />Your Future in Dentistry?</>} description="Embark on a transformative journey with Lenora Institute of Dental Sciences. Whether you're pursuing a BDS (Undergraduate) or MDS (Postgraduate) degree, LIDS provides you with the skills, clinical experience, and mentorship needed to succeed as a dental professional." buttonText="Apply Now" buttonHref="/academics" image="/assets/transparent-banner.webp" mobileImageStyle={{ transform: "scale(1.0)", objectPosition: "70% 50%" }}
  overlayGradient = "linear-gradient(90deg, rgba(32, 178, 170, 0.64) 0%, rgba(16, 123, 113, 0.64) 100%)"/>
    </main>
  );
}