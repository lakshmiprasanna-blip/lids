import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import ShapeDental from "@/components/ShapeDental";
import DentalPrograms, { NewsEvents } from "@/components/DentalPrograms";
import OurCampus from "@/components/OurCampus";
import AlumniStories from "@/components/AlumniStories";
import FAQs from "@/components/FAQs";
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
      <ShapeDental
  title="Shaping the future of dental excellence"
  desc="At Lenora Institute of Dental Sciences (LIDS), we offer a transformative dental education that blends academic rigor with hands-on clinical training that provide state-of-the-art infrastructure, cutting-edge research facilities, and a dynamic learning environment. Our programs are designed to mould future dental leaders who are well-equipped to meet the challenges of modern dental practice."
  mobileTitle="Our Commitment"
  mobileDesc="At LIDS, we offer a transformative dental education that blends academic rigor with hands-on clinical training. Located in the heart of Andhra Pradesh, we provide state-of-the-art infrastructure, cutting-edge research facilities, and a dynamic learning environment. Our programs are designed to mold future dental leaders who are well-equipped to meet the challenges of modern dental practice."
  imageSrc="/assets/shaping-dental.webp"
  imageAlt="Students at LIDS"
  buttonText="Know more"
  buttonHref="/about"
  showMobileCommitment={true}
/>
      <DentalPrograms />
      <section className="relative w-full overflow-hidden bg-white py-20">
  <div className="container">

    {/* HEADING */}
    <div className="mb-16">
      <p className="text-[#FCAF16] md:text-[#9E2016] text-md font-semibold tracking-widest uppercase mb-4 md:text-center">Why choose LIDS</p>
      <h3 className="text-[#1A1A1A] font-semibold hidden md:block text-center">Excellence in Dental Education and <br /> Patient-Centered Care</h3>
      <h3 className="text-[#1A1A1A] font-semibold md:hidden">We Are Always Open<br />for Health Services</h3>
    </div>
    <div className="md:hidden flex flex-col gap-6">
      <div className="relative w-full h-[260px] rounded-2xl overflow-hidden">
  <Image src="/assets/whychoose-mob.webp" alt="Why Choose LIDS" fill className="object-cover" />
</div>
  <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
    <div className="flex gap-4" style={{ width: "max-content" }}>
      {[...left, ...right].map((item, i) => (
        <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl shrink-0" style={{ width: "327px", border: "1px solid #E5F3F2" }}>
          <Image src={item.icon} alt={item.title} width={48} height={48} />
          <h4 className="text-[#1A1A1A] font-semibold">{item.title}</h4>
          <p className="text-[#7A7A7A] text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>
    {/* DESKTOP */}
    <div className="hidden md:flex items-center justify-between gap-8">
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
              <div key={i} className="group flex flex-col items-center gap-4 cursor-pointer">
  <div className="w-[200px] h-[100px] rounded-full flex items-center justify-center">
    <Image src={item.icon} alt={item.label} width={150} height={150} className="transition-all duration-300  group-hover:drop-shadow-[0_0_0px_#107B71]"/>
  </div>
  <span className="text-[#20B2AA] group-hover:text-[#107B71] transition-colors duration-300 text-sm font-medium text-center">
    {item.label}
  </span>
</div>
            ))}
          </div>
        </div>
      </section>
<section className="relative w-full overflow-hidden bg-white">
  <div className="absolute pointer-events-none rounded-full" style={{ width: "950px", height: "627px", top: "147px", right: "-100px", background: "#CFEFED", filter: "blur(186px)" }} />
{/* MOBILE */}
<div className="md:hidden flex flex-col">
  <div className="relative w-full h-[280px] rounded-2xl overflow-hidden" style={{ margin: "24px 24px 0" , width: "calc(100% - 48px)" }}>
    <Image src="/assets/research-mob.webp" alt="Research Excellence" fill className="object-cover" />
  </div>
  <div className="relative px-6 py-8 flex flex-col gap-4">
    {/* gradient behind text only */}
    <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(165, 231, 240, 0.6) 100%)" }} />
    <h3 className="text-[#1A1A1A] font-semibold" style={{ fontSize: "28px" }}>Our Research<br />Excellence</h3>
    <p className="text-[#7A7A7A] text-sm leading-relaxed">
      Research at LIDS focuses on making significant contributions to the world of dentistry. With a track record of 1,700+ publications, our faculty and students work together to drive advancements in dental care. We aim to tackle the most pressing issues in oral health, from disease prevention to new treatment methodologies. Students are encouraged to engage in research projects and collaborate with experts, fostering an environment of innovation.
    </p>
  </div>
</div>

  {/* DESKTOP */}
  <div className="hidden md:flex items-center">
    <div className="flex flex-col gap-6 pl-[max(2rem,calc((100vw-1280px)/2+2rem))] w-[47%] shrink-0">
      <p className="text-[#9E2016] text-md font-semibold tracking-widest uppercase">OUR COMMITMENT</p>
      <h3 className="text-[#1A1A1A] font-semibold">To Research Excellence <br /> of Oral Healthcare</h3>
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
      <Image src="/assets/research-excellence.webp" alt="Research Excellence" fill className="object-cover object-right" />
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
<AlumniStories/>
<NewsEvents/>
<FAQs/>
<section className="relative w-full h-[604px] overflow-hidden flex items-center justify-center">
  <Image
    src="/assets/dentallegacy.webp"
    alt="CTA Banner"
    fill
    className="object-cover"
    style={{ filter: "blur(0px)", transform: "scale(1.05)", zIndex: 0 }}
  />

  {/* OVERLAY */}
  <div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(90deg, rgba(32,178,170,0.85) 0%, rgba(16,123,113,0.85) 100%)",
      zIndex: 1,
    }}
  />

  {/* CONTENT */}
  <div className="relative text-center flex flex-col items-center gap-6 px-6 max-w-4xl" style={{ zIndex: 2 }}>
    <h3 className="font-semibold" style={{ color: "white" }}>
      Design Your Dental Legacy at LIDS
    </h3>
    <p className="text-base leading-relaxed max-w-2xl" style={{ color: "white", opacity: 0.9 }}>
      Whether you are pursuing a BDS or MDS, you will cultivate clinical mastery and
      professional independence in a tech-forward environment. Master the art of
      dentistry at your own pace, supported by experts dedicated to your success.
    </p>
    <Link
      href="/admissions"
      className="hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
      style={{
        backgroundColor: "#9E2016",
        color: "white",
        fontSize: "14px",
        fontWeight: 500,
        padding: "16px 32px",
        borderRadius: "65px",
      }}
    >
      Apply Now
    </Link>
  </div>

</section>
    </main>
  );
}