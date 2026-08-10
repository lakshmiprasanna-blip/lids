import CardGrid from "@/components/CardGrid";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";
import ResearchFilterBar from "@/components/ResearchFilterBar";
import { getResearch } from "@/lib/getResearch";
import researchData from "@/app/data/research.json";

const { mvvCards } = researchData;

function StatusBadge({ status }) {
  const styles = {
    Published: { bg: "#20B2AA", text: "#FFFFFF", border: "#20B2AA" },
    Ongoing: { bg: "#FFF3CD", text: "#FEAC13", border: "#FEAC1361" },
    Completed: { bg: "#FFFFFF", text: "#107B71", border: "#20B2AA" },
  };
  const key = Object.keys(styles).find((k) => status.startsWith(k));
  const s = styles[key] || { bg: "transparent", text: "#20B2AA", border: null };

  return (
    <span className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap" style={{ background: s.bg, color: s.text, border: s.border ? `1px solid ${s.border}` : "none" }}>
      {status}
    </span>
  );
}

const uniq = (arr, key) => [...new Set(arr.map((r) => r[key]))].filter(Boolean);

export default async function ResearchPage({ searchParams }) {
  const params = await searchParams;
  const research = await getResearch();

  const { q = "", department = "", year = "", type = "" } = params || {};
  const query = q.toLowerCase();

  const departments = uniq(research, "dept");
  const years = uniq(research, "year").sort((a, b) => b - a);
  const types = uniq(research, "type");

  const filtered = research.filter((r) =>
    r.title.toLowerCase().includes(query) &&
    (!department || r.dept === department) &&
    (!year || String(r.year) === year) &&
    (!type || r.type === type)
  );

  return (
    <main className="bg-white min-h-screen">
      <DentalLegacyCTA
        align="center"
        title="Research Publications"
        description="Discover a wide range of medical courses tailored to meet your diverse educational needs.Discover a wide range of medical courses tailored to meet your diverse educational needs."
        image="/assets/research-banner.webp"
        showButton={false}
        priority={true}
        titleClassName="!text-[40px] md:!text-[56px]"
        descriptionClassName="max-w-5xl"
        mobileImagePosition="55% 65%"
        mobileImageStyle={{ transform: "scale(1.01)" }}
      />

      <ResearchFilterBar params={params} departments={departments} years={years} types={types} />

      <div className="relative">
        <div className="absolute pointer-events-none" style={{ width: "1400px", height: "1400px", borderRadius: "50%", background: "#CFEFED", opacity: 0.25, filter: "blur(80px)", top: "0px", right: "-500px", zIndex: 0 }} />
        <div className="container mx-auto px-6 py-12">
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E5F3F2" }}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ minWidth: "800px" }}>
                <thead>
                  <tr style={{ background: "#20B2AA" }}>
                    {["#", "Title/Description", "Status", "Department", "View"].map((h, i) => (
                      <th key={i} className="text-white font-medium px-5 py-4 text-left text-[24px]" style={{ borderRight: i !== 4 ? "1px solid #FFFFFF" : "none", textAlign: i >= 2 ? "center" : "left" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((row, j) => (
                    <tr key={row.id} style={{ background: j % 2 !== 0 ? "#D2F0EE99" : "white", borderBottom: "1px solid #E5F3F2" }}>
                      <td className="px-5 py-4 text-[#3D3D3D] font-medium text-sm" style={{ borderRight: "1px solid #E5F3F2", width: "60px" }}>{j + 1}</td>
                      <td className="px-10 py-4 text-[#333333] text-md leading-relaxed" style={{ borderRight: "1px solid #E5F3F2", minWidth: "260px" }}>{row.title}</td>
                      <td className="px-5 py-4 text-center" style={{ borderRight: "1px solid #E5F3F2", width: "160px" }}><StatusBadge status={row.status} /></td>
                      <td className="px-7 py-4 text-[#232323] text-md text-center" style={{ borderRight: "1px solid #E5F3F2", width: "160px" }}>{row.dept}</td>
                      <td className="px-5 py-4 text-center" style={{ width: "100px" }}>
                        {row.pdfUrl ? (
                          <a href={row.pdfUrl} target="_blank" rel="noopener noreferrer" className="px-10 py-3.5 rounded-full !text-[#107B71] no-underline cursor-pointer text-sm font-medium border-[1.5px] border-[#20B2AA] hover:bg-[#9E2016] hover:!text-white hover:border-transparent transition-all">VIEW</a>
                        ) : (
                          <button className="px-10 py-3.5 rounded-full text-[#107B71] cursor-pointer text-sm font-medium border-[1.5px] border-[#20B2AA] hover:bg-[#9E2016] hover:text-white hover:border-transparent transition-all">VIEW</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <CardGrid cards={mvvCards} cols={3} showBlob={false} label="RESEARCH POLICY" title="Our Research Policy" bgColor="#EAF8F7" headingAlign="center" titleColor="#107B71" mobileButtonText="Explore More" mobileButtonHref="/facilities" className="!py-15 md:!py-20 lg:!py-30" />

      <DentalLegacyCTA
        align="left"
        title={<>Ready to Shape<br />Your Future in Dentistry?</>}
        description="Embark on a transformative journey with Lenora Institute of Dental Sciences. Whether you're pursuing a BDS (Undergraduate) or MDS (Postgraduate) degree, LIDS provides you with the skills, clinical experience, and mentorship needed to succeed as a dental professional."
        buttonText="Apply Now"
        buttonHref="/academics"
        image="/assets/transparent-banner.webp"
        priority={true}
        imageStyle={{ transform: "scale(1.05)", objectPosition: "center" }}
        mobileImageStyle={{ transform: "scale(1.0)", objectPosition: "80% 20%" }}
      />
    </main>
  );
}