import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import ShapeDental from "@/components/ShapeDental";
import DentalPrograms, { NewsEvents } from "@/components/DentalPrograms";
import OurCampus from "@/components/OurCampus";
import AlumniStories from "@/components/AlumniStories";
import FAQs from "@/components/FAQs";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";
import FacilitiesOverview from "@/components/FacilitiesOverview";
import { getEvents } from "@/lib/getEvents";

const events = await getEvents();

const left = [
  { icon: "/svg/tooth-icon1.svg", title: "State-of-the-Art Infrastructure", desc: "Master with advanced tools such as digital radiography, CBCT & intraoral scanners, 3D technology, microsurgical endodontics and surgical units etc." },
  { icon: "/svg/tooth-icon2.svg", title: "Compassionate & Expert Care", desc: "Benefit from a holistic learning environment that combines rigorous medical standards with a genuine commitment to public service." },
];
const right = [
  { icon: "/svg/tooth-icon3.svg", title: "Strong Clinical Exposure", desc: "Gain hands-on experience through a high volume of diverse patient interactions, with an average monthly turnout of 15,000+ patients." },
  { icon: "/svg/tooth-icon4.svg", title: "Experienced Faculty", desc: "Receive personalized mentorship designed to bridge the gap between classroom theory and real-world clinical practice." },
];
const facilities = [
  { icon: "/svg/clinical.svg",     label: "Clinical Infrastructure" },
  { icon: "/svg/camp.svg",     label: "Our Campus" },
        { icon: "/svg/lib.svg",   label: "Library" },
        { icon: "/svg/sport.svg",    label: "Sports" },
        { icon: "/svg/research.svg",   label: "Research Facilities" },
        { icon: "/svg/cafe.svg",   label: "Cafeteria" },
        { icon: "/svg/hostell.svg",   label: "Hostel" },
        { icon: "/svg/transport.svg",   label: "Transportation" },
        { icon: "/svg/camp.svg", label: "IT & Digital Infrastructure" },
        { icon: "/svg/cctv.svg", label: "24/7 Surveillance" },
];
const dentalPrograms = [
  { title: "Bachelor of Dental Surgery (BDS)", years: "5 years", image: "/assets/BDS.webp", desc: "Start your professional journey with our comprehensive BDS program, where foundational science meets advanced clinical practice." },
  { title: "Master of Dental Surgery (MDS)", years: "3 years", image: "/assets/MDS.webp", desc: "Elevate your expertise with our MDS specialisations, designed for dentists aiming to achieve mastery in complex oral healthcare." },
  { title: "PG Diploma Programs", years: "3 years", image: "/assets/PG.webp", desc: "Fast-track your career growth with our intensive PG Diploma programs, focusing on specialized clinical skills and the latest dental technologies." },
];
const label = "OUR COMMITMENT";
const heading = "To Research Excellence of Oral Healthcare";

const commitmentPoints = [
  <>Join a legacy of innovation with over <span className="text-[#8E0019] font-semibold">1,700+ published research papers,</span> contributing high-impact findings to the global dental community.</>,
  <>Engage in a collective ecosystem where students and expert faculty unite to solve the most pressing challenges in <span className="text-[#8E0019] font-semibold">preventative and restorative dentistry.</span></>,
  <>Benefit from an environment that encourages critical thinking, from exploring disease prevention to developing cutting-edge treatment protocols.</>,
  <>Work alongside seasoned specialists to refine your investigative skills, preparing you for a career at the forefront of <span className="text-[#8E0019] font-semibold">dental science and technology.</span></>,
];

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#23B3AB" />
    <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ExploreBtn = () => <button className="px-8 py-3 rounded-full cursor-pointer text-md font-medium text-[#9E2016] bg-white  hover:bg-[#9E2016] hover:!text-white transition-all duration-300" style={{ border: "1.5px solid #9E2016", boxShadow: "0px 4px 4px 0px #0000001A, 0px 6px 6px 0px #1A1A1A08, 0px 13px 8px 0px #1A1A1A05, 0px 22px 9px 0px #1A1A1A03, 0px 35px 10px 0px #1A1A1A00, 0px 2px 12px 0px #FFFFFF40 inset", }}>Explore More</button>;

const FeatureList = ({ items }) => (
  <div className="flex flex-col gap-12 flex-1 min-w-0">
    {items.map((item, i) => (
      <div key={i} className="flex items-start gap-4">
       <Image  src={item.icon}  alt={item.title}  width={120}  height={120} className="shrink-0" style={{ width: "120px", height: "120px" }}/>
        <div className="min-w-0">
          <h4 className="text-[#1A1A1A] !text-[24px] font-semibold mb-2 whitespace-nowrap">{item.title}</h4>
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
  title="Shaping the future<br/>of dental excellence"
desc="At Lenora Institute of Dental Sciences (LIDS), we offer a transformative dental education that blends academic rigor with hands-on clinical training that provide state-of-the-art infrastructure, cutting-edge research facilities, and a dynamic learning environment. Our programs are designed to mould future dental leaders who are well-equipped to meet the challenges of modern dental practice."  label="LENORA INSTITUTE OF DENTAL SCIENCES"
  mobileLabel="About us"
  imageSrc="/assets/shaping-dental.webp"
  imageAlt="Students at LIDS"
  buttonText="Know more"
  buttonHref="/about"
/>
      <DentalPrograms programs={dentalPrograms} />
     <section className="relative w-full overflow-hidden bg-white py-20">
  <div className="container">

    {/* HEADING */}
    <div className="mb-10 md:mb-16">
      <p className="eyebrow-heading text-[#9E2016] font-semibold uppercase mb-4 text-left lg:text-center">Why choose LIDS</p>
      <h3 className="text-[#1A1A1A] font-semibold lg:text-center">Excellence in Dental Education and <br /> Patient-Centered Care</h3>
    </div>
    <div className="xl:hidden flex flex-col gap-8">
      <div className="relative flex items-center justify-center w-full h-[260px]" style={{ background: "radial-gradient(ellipse at center, #CFEFED 0%, transparent 70%)" }}>
        <div className="relative z-10 w-[380px] h-[220px]">
          <Image src="/assets/tooth.gif" alt="Tooth" fill className="object-contain opacity-30" />
        </div>
      </div>
      {[...left, ...right].map((item, i) => (
        <div key={i} className="flex flex-col gap-3">
          <Image src={item.icon} alt={item.title} width={92} height={92} />
          <h4 className="font-inter text-[#1A1A1A] !text-xl font-semibold">{item.title}</h4>
          <p className="text-[#7A7A7A] text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
    {/* DESKTOP 1280px+ */}
   <div className="hidden xl:flex items-center justify-center">
  <FeatureList items={left} />
  <div className="relative flex items-center justify-center shrink-0" style={{ width: "520px", height: "380px", margin: "0 -80px", zIndex: 0 }}>
    <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(ellipse at center, #ddefee 0%, #CFEFED60 50%, transparent 70%)", transform: "scale(1.4)" }} />
    <div className="relative z-10 w-full h-full" style={{ mixBlendMode: "overlay" }}>
      <Image src="/assets/tooth.gif" alt="Tooth" fill className="object-contain" />
    </div>
  </div>
  <FeatureList items={right} />
</div>

  </div>
</section>
<OurCampus />
<FacilitiesOverview
      eyebrow="FACILITIES Overview"
      heading="Experience World-Class Facilities at LIDS"
      description="At LIDS, we believe that true excellence grows in a balanced environment. Our
vibrant campus goes beyond the classroom, offering a dynamic range of
extracurricular activities and modern amenities designed for your holistic
development."
      facilities={facilities}
    />
 <section className="relative w-full overflow-hidden bg-white !py-0">
      <div className="container absolute inset-0 pointer-events-none overflow-visible">
        <div className="absolute pointer-events-none rounded-full hidden xl:block" style={{ width: "950px", height: "500px", top: "215px", right: "-200px", background: "#CFEFED", filter: "blur(100px)", mixBlendMode: "multiply", zIndex: 0 }}/>
      </div>
      {/* MOBILE + TABLET (< xl) */}
      <div className="xl:hidden flex flex-col px-5 gap-6">
        <p className="text-[#9E2016] text-[18px] font-semibold uppercase text-left">{label}</p>
        <h3 className="text-[#1A1A1A] font-semibold text-left">{heading}</h3>
        <ul className="flex flex-col gap-2 text-md">
          {commitmentPoints.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 shrink-0">{checkIcon}</span>
              <p className="text-[#7A7A7A] text-md leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
        <div className="relative w-full mb-0 h-[350px] md:h-[690px]">
          <div className="absolute pointer-events-none" style={{ width: "320px", height: "320px", top: "0%", right: "-10%", background: "#CFEFED", filter: "blur(80px)", borderRadius: "50%", zIndex: 0 }}/>
          <Image src="/assets/research-excellence.webp" alt="Research Excellence" fill className="object-cover pointer-events-none" style={{ zIndex: 1, objectPosition: "65% bottom" }}/>
        </div>
      </div>

      {/* DESKTOP (xl+) */}
      <div className="hidden xl:flex container items-stretch min-h-[690px]">
  <div className="flex flex-col justify-center gap-4 w-[45%] shrink-0 py-16">
    <p className="text-[#9E2016] text-[18px] font-semibold uppercase">{label}</p>
    <h3 className="text-[#1A1A1A] font-semibold">To Research Excellence <br /> of Oral Healthcare</h3>
    <ul className="flex flex-col gap-5 mt-2 text-md">
      {commitmentPoints.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1 shrink-0">{checkIcon}</span>
          <p className="text-[#7A7A7A] text-md leading-relaxed">{item}</p>
        </li>
      ))}
    </ul>
  </div>
  <div className="relative flex-1 self-stretch min-h-[600px]">
    <Image
      src="/assets/research-excellence.webp"
      alt="Research Excellence"
      fill
      className="object-cover pointer-events-none"
      style={{ objectPosition: "center top" }}
    />
  </div>
</div>
    </section>
<section className="relative w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/assets/transform-banner.webp')", backgroundAttachment: "fixed", height: "640px",}}>
  <div className="absolute inset-0 pointer-events-none" style={{ background: "#37A89E66", zIndex: 1 }} />
  <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
    <p className="max-w-6xl text-center !text-white font-medium leading-snug text-xl md:!text-[40px] italic !font-inter">"Transform your passion for dentistry into expertise at LIDS – where innovation, education, and patient care come together to shape the future of dental healthcare."</p>
  </div>
</section>
<AlumniStories/>
      <NewsEvents events={events} />
<FAQs/>
<DentalLegacyCTA
  title="Design Your Dental Legacy at LIDS"
  description="Whether you are pursuing a BDS or MDS, you will cultivate clinical mastery and
professional independence in a tech-forward environment. Master the art of
dentistry at your own pace, supported by experts dedicated to your success."
  buttonText="Apply Now"
  buttonHref="/admissions"
  imageStyle={{ transform: "scale(1.05)", objectPosition: "center" }}
  mobileImageStyle={{ transform: "scale(1.02)", objectPosition: "50% 20%" }}
/>
    </main>
  );
}