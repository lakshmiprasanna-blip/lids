import Image from "next/image";
import Banner from "@/components/Banner";
import ShapeDental from "@/components/ShapeDental";
import DentalPrograms from "@/components/DentalPrograms";
import OurCampus from "@/components/OurCampus";
const left = [
  { icon: "/assets/infrastructure.svg", title: "State-of-the-Art Infrastructure", desc: "Master with advanced tools such as digital radiography, CBCT & intraoral scanners, 3D technology, microsurgical endodontics and surgical units etc." },
  { icon: "/assets/care.svg", title: "Compassionate & Expert Care", desc: "Benefit from a holistic learning environment that combines rigorous medical standards with a genuine commitment to public service." },
];
const right = [
  { icon: "/assets/clinical.svg", title: "Strong Clinical Exposure", desc: "Gain hands-on experience through a high volume of diverse patient interactions, with an average monthly turnout of 15,000+ patients." },
  { icon: "/assets/faculty.svg", title: "Experienced Faculty", desc: "Receive personalized mentorship designed to bridge the gap between classroom theory and real-world clinical practice." },
];
const facilities = [
  { icon: "/assets/facilities-icon1.svg",     label: "Clinical Infrastructure" },
  { icon: "/assets/facilities-icon2.svg",       label: "Our Campus" },
  { icon: "/assets/facilities-icon3.svg",      label: "Library" },
  { icon: "/assets/facilities-icon4.svg",       label: "Sports" },
  { icon: "/assets/facilities-icon5.svg",     label: "Research Facilities" },
  { icon: "/assets/facilities-icon6.svg",    label: "Cafeteria" },
  { icon: "/assets/facilities-icon7.svg",       label: "Hostel" },
  { icon: "/assets/facilities-icon8.svg",    label: "Transportation" },
  { icon: "/assets/facilities-icon9.svg",           label: "IT & Digital Infrastructure" },
  { icon: "/assets/facilities-icon10.svg", label: "24/7 Surveillance" },
];
const FeatureList = ({ items }) => (
  <div className="flex flex-col gap-12 flex-1 min-w-0">
    {items.map((item, i) => (
      <div key={i} className="flex items-start gap-4">
        <Image src={item.icon} alt={item.title} width={90} height={90} className="shrink-0 mt-1" />
        <div className="min-w-0">
          <h4 className="text-[#1A1A1A] text-base font-semibold mb-2 whitespace-nowrap">{item.title}</h4>
          <p className="text-[#7A7A7A] text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
);
export default function Home() {
  return (
    <main>
      <Banner />
      <ShapeDental />
      <DentalPrograms />
      <section className="relative w-full overflow-hidden bg-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[#9E2016] text-md font-semibold tracking-widest uppercase mb-4">WHY CHOOSE LIDS</p>
            <h3 className="text-[#1A1A1A] font-semibold">
              Excellence in Dental Education and <br /> Patient-Centered Care
            </h3>
          </div>
          <div className="flex items-center justify-between gap-8">
            <FeatureList items={left} />
            <div className="relative flex items-center justify-center shrink-0 w-[420px] h-[520px]">
              <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(ellipse at center, #CFEFED 0%, transparent 70%)" }} />
              <div className="relative z-10 w-[400px] h-[700px]">
                <Image src="/assets/tooth.gif" alt="Tooth" fill className="object-contain opacity-40" />
              </div>
            </div>
            <FeatureList items={right} />
          </div>
        </div>
      </section>
<OurCampus />
      <section className="relative w-full overflow-hidden bg-white py-20">
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: "344px", height: "460px",
            top: "-147px", left: "183px",
            background: "#CFEFED",
            filter: "blur(186px)",
            transform: "rotate(-90deg)",
          }}
        />

        <div className="relative z-10 container">
          <div className="text-center mb-16">
            <p className="text-[#9E2016] text-md font-semibold tracking-widest uppercase mb-4">FACILITIES OVERVIEW</p>
            <h3 className="text-[#1A1A1A] font-semibold">Experience World-Class Facilities at LIDS</h3>
            <p className="mt-4 text-[#7A7A7A] text-base max-w-2xl mx-auto">
              At LIDS, we believe that true excellence grows in a balanced environment. Our vibrant campus goes beyond the classroom, offering a dynamic range of extracurricular activities and modern amenities designed for your holistic development.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-y-12 gap-x-6">
            {facilities.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-[200px] h-[100px] rounded-full flex items-center justify-center" >
  <Image src={item.icon} alt={item.label} width={150} height={150} />
</div>
                <span className="text-[#20B2AA] text-sm font-medium text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="relative w-full overflow-hidden bg-white">
  <div
    className="absolute pointer-events-none rounded-full"
    style={{
      width: "950px", height: "627px",
      top: "147px", right: "-100px",
      background: "#CFEFED",
      filter: "blur(186px)",
    }}
  />
  <div className="flex items-center">
    <div className="flex flex-col gap-6 pl-[max(2rem,calc((100vw-1280px)/2+2rem))] w-[47%] shrink-0">
      <p className="text-[#9E2016] text-md font-semibold tracking-widest uppercase">OUR COMMITMENT</p>
      <h3 className="text-[#1A1A1A] font-semibold">
        To Research Excellence <br /> of Oral Healthcare
      </h3>
      <ul className="flex flex-col gap-5 mt-2">
        {[
          <>Join a legacy of innovation with over <span className="text-[#8E0019] font-semibold">1,700+ published research papers,</span> contributing high-impact findings to the global dental community.</>,
          <>Engage in a collective ecosystem where students and expert faculty unite to solve the most pressing challenges in <span className="text-[#8E0019] font-semibold">preventative and restorative dentistry.</span></>,
          <>Benefit from an environment that encourages critical thinking, from exploring disease prevention to developing cutting-edge treatment protocols.</>,
          <>Work alongside seasoned specialists to refine your investigative skills, preparing you for a career at the forefront of <span className="text-[#8E0019] font-semibold">dental science and technology.</span></>,
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="#23B3AB" />
                <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-[#7A7A7A] text-md leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="relative flex-1 h-[675px]">
      <Image
        src="/assets/research-excellence.webp"
        alt="Research Excellence"
        fill
        className="object-cover object-right"
      />
    </div>

  </div>
</section>
{/* QUOTE BANNER */}
<section className="w-full bg-white flex items-center justify-center h-[540px]">
  <div className="max-w-6xl w-full px-6">
    <p className="text-center font-semibold text-[#333333] text-[40px] leading-[1.3]">
      "Transform your passion for dentistry into expertise at LIDS – where innovation, education, and patient care come together to shape the future of dental healthcare."
    </p>
  </div>
</section>
    </main>
  );
}