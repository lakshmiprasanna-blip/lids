"use client";
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import CardGrid from "@/components/CardGrid";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";
const research = [
  { id: 2, title: "Knowledge And Awareness Among Post Graduate Students On Kennedy-applegate Rules For Partially Edentulous Arches ...", status: "Ongoing - 2026", dept: "PROSTHODONTICS - PG" },
  { id: 1, title: "Knowledge And Awareness Among Post Graduate Students On Kennedy-applegate Rules For Partially Edentulous Arches ...", status: "Published - 2018", dept: "PROSTHODONTICS - PG" },
  { id: 4, title: "Knowledge And Awareness Among Post Graduate Students On Kennedy-applegate Rules For Partially Edentulous Arches ...", status: "Published - 2018", dept: "PROSTHODONTICS - PG" },
  { id: 3, title: "Knowledge And Awareness Among Post Graduate Students On Kennedy-applegate Rules For Partially Edentulous Arches ...", status: "Completed - 2025", dept: "PROSTHODONTICS - PG" },
  { id: 6, title: "Knowledge And Awareness Among Post Graduate Students On Kennedy-applegate Rules For Partially Edentulous Arches ...", status: "Completed - 2025", dept: "PROSTHODONTICS - PG" },
  { id: 5, title: "Knowledge And Awareness Among Post Graduate Students On Kennedy-applegate Rules For Partially Edentulous Arches ...", status: "Published - 2018", dept: "PROSTHODONTICS - PG" },
  { id: 8, title: "Knowledge And Awareness Among Post Graduate Students On Kennedy-applegate Rules For Partially Edentulous Arches ...", status: "Published - 2018", dept: "PROSTHODONTICS - PG" },
  { id: 7, title: "Knowledge And Awareness Among Post Graduate Students On Kennedy-applegate Rules For Partially Edentulous Arches ...", status: "Completed - 2025", dept: "PROSTHODONTICS - PG" },
  { id: 9, title: "Knowledge And Awareness Among Post Graduate Students On Kennedy-applegate Rules For Partially Edentulous Arches ...", status: "Ongoing - 2026", dept: "PROSTHODONTICS - PG" },
  { id: 10, title: "Knowledge And Awareness Among Post Graduate Students On Kennedy-applegate Rules For Partially Edentulous Arches ...", status: "Completed - 2025", dept: "PROSTHODONTICS - PG" },
];
const mvvCards = [
  {
    icon: "/svg/ethic.svg", 
    title: "Ethical Research Standards", 
    desc: "All research publications follows strict ethical guidelines approved by our Institutional Ethics Committee (IEC), ensuring patient safety, data privacy, and scientific integrity." 
  },
  { 
    icon: "/svg/collab.svg", 
    title: "Collaborative Research", 
    desc: "LIDS encourages inter-departmental and inter-institutional collaboration, with active partnerships with hospitals, universities, and research bodies across India." 
  },
  { 
    icon: "/svg/recognize.svg", 
    title: "Publication & Recognition", 
    desc: "Faculty and students are encouraged to publish in peer-reviewed journals. LIDS supports research grants, conference attendance, and recognizes outstanding contributions annually." 
  },
];
function StatusBadge({ status }) {
  const isPublished = status.startsWith("Published");
  const isOngoing = status.startsWith("Ongoing");
    const isCompleted = status.startsWith("Completed");
   const color = isPublished ? "#20B2AA" : isOngoing ? "#FFF3CD" : isCompleted ? "#FFFFFF" : "transparent";
   const textColor = isPublished ? "#FFFFFF" : isOngoing ? "#FEAC13" : isCompleted ? "#107B71" : "#20B2AA";
 const border = isPublished ? "1px solid #20B2AA" : isOngoing ? "1px solid #FEAC1361" : isCompleted ? "1px solid #20B2AA" : "none";

   return (
    <span className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap" style={{ background: color, color: textColor, border }}>
      {status}
    </span>
  );
}

export default function ResearchPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("Department");
  const [year, setYear] = useState("Year");
  const [type, setType] = useState("Research");

  const filtered = research.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-white min-h-screen">
<DentalLegacyCTA
  align="center"
  title="Research Publications"
  description="Discover a wide range of medical courses tailored to meet your diverse educational needs.Discover a wide range of medical courses tailored to meet your diverse educational needs."
  image="/assets/research-banner.webp"
  showButton={false}
  titleClassName="!text-[40px] md:!text-[56px]"
  descriptionClassName="max-w-5xl"
/>
      <div className="w-full py-4 px-6" style={{ background: "#107B71" }}>
        <div className="mx-auto flex items-center gap-4 flex-wrap justify-center" style={{ maxWidth: "1000px" }}>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2.5 flex-1 min-w-[280px] max-w-7xl">
            <Search size={15} className="text-[#9A9A9A] shrink-0" />
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search research papers, authors, departments..." className="text-sm text-[#3D3D3D] outline-none w-full bg-transparent placeholder:text-[#9A9A9A]" />
          </div>
          {[["Department", dept, setDept], ["Year", year, setYear], ["Research", type, setType]].map(([label, val, set]) => (
            <button key={label} className="flex items-center gap-2 border border-white text-white text-md px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-white hover:text-[#107B71] transition-all">
              {val} <ChevronDown size={14} />
            </button>
          ))}
        </div>
      </div>
      <div className="relative">
         <div
    className="absolute pointer-events-none"
    style={{
      width: "1400px",
      height: "1400px",
      borderRadius: "50%",
      background: "#CFEFED",
      opacity: 0.25,
      filter: "blur(80px)",
      top: "0px",
      right: "-500px",
      zIndex: 0,
    }}
  />
<div className="max-w-7xl mx-auto px-6 py-12">
  <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E5F3F2" }}>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse" style={{ minWidth: "800px" }}>
        <thead>
          <tr style={{ background: "#20B2AA" }}>
            {["#", "Title/Description", "Status", "Department", "View"].map((h, i) => (
              <th
                key={i}
                className="text-white font-medium px-5 py-4 text-left text-[24px]"
                style={{
                  borderRight: i !== 4 ? "1px solid #FFFFFF" : "none",
                  textAlign: i >= 2 ? "center" : "left",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtered.map((row, j) => (
            <tr key={j} style={{ background: j % 2 !== 0 ? "#E9F8F6E3" : "white", borderBottom: "1px solid #E5F3F2" }}>
              <td className="px-5 py-4 text-[#3D3D3D] font-medium text-sm
              " style={{ borderRight: "1px solid #E5F3F2", width: "60px" }}>
                {row.id}
              </td>
              <td className="px-5 py-4 text-[#333333] text-md leading-relaxed" style={{ borderRight: "1px solid #E5F3F2", minWidth: "260px" }}>
                {row.title}
              </td>
              <td className="px-5 py-4 text-center" style={{ borderRight: "1px solid #E5F3F2", width: "160px" }}>
                <StatusBadge status={row.status} />
              </td>
              <td className="px-5 py-4 text-[#232323] text-md text-center" style={{ borderRight: "1px solid #E5F3F2", width: "160px" }}>
                {row.dept}
              </td>
              <td className="px-5 py-4 text-center" style={{ width: "100px" }}>
                <button className="px-5 py-1.5 rounded-full text-[#107B71] cursor-pointer text-sm font-medium hover:bg-[#20B2AA] hover:text-white transition-all" style={{ border: "1.5px solid #20B2AA" }}>
                  VIEW
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
      <CardGrid cards={mvvCards} cols={3} showBlob={false}  label="RESEARCH POLICY"
  title="Our Research Policy"
  bgColor="#EAF8F7"
  headingAlign="center"/>
<DentalLegacyCTA
  align="left"
  title={<>Ready to Shape<br />Your Future in Dentistry?</>}
  description="Embark on a transformative journey with Lenora Institute of Dental Sciences. Whether you're pursuing a BDS (Undergraduate) or MDS (Postgraduate) degree, LIDS provides you with the skills, clinical experience, and mentorship needed to succeed as a dental professional."
  buttonText="Apply Now"
  buttonHref="/academics"
  image="/assets/transparent-banner.webp"
  imageStyle={{ transform: "scale(1.05)", objectPosition: "center" }}
  mobileImageStyle={{ transform: "scale(1.0)", objectPosition: "80% 20%" }}
/>
    </main>
  );
}