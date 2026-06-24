"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import ShapeDental from "@/components/ShapeDental";
import DentalPrograms, { NewsEvents } from "@/components/DentalPrograms";
import OurCampus from "@/components/OurCampus";
import AlumniStories from "@/components/AlumniStories";
import FAQs from "@/components/FAQs";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";
import { ArrowLeft, ArrowRight } from "lucide-react";
const left = [
  { icon: "/assets/infrastructure.png", title: "State-of-the-Art Infrastructure", desc: "Master with advanced tools such as digital radiography, CBCT & intraoral scanners, 3D technology, microsurgical endodontics and surgical units etc." },
  { icon: "/assets/care.png", title: "Compassionate & Expert Care", desc: "Benefit from a holistic learning environment that combines rigorous medical standards with a genuine commitment to public service." },
];
const right = [
  { icon: "/assets/clinical.png", title: "Strong Clinical Exposure", desc: "Gain hands-on experience through a high volume of diverse patient interactions, with an average monthly turnout of 15,000+ patients." },
  { icon: "/assets/faculty.png", title: "Experienced Faculty", desc: "Receive personalized mentorship designed to bridge the gap between classroom theory and real-world clinical practice." },
];
const facilities = [
  { icon: "/svg/clinical.svg",     label: "Mobile Dental Clinic" },
  { icon: "/svg/camp.svg",     label: "Our Campus" },
        { icon: "/svg/lib.svg",   label: "Our Library" },
        { icon: "/svg/sport.svg",    label: "Our Library" },
        { icon: "/svg/research.svg",   label: "Medical Hospital" },
        { icon: "/svg/cafe.svg",   label: "Medical Hospital" },
        { icon: "/svg/hostell.svg",   label: "Pharmacy Store" },
        { icon: "/svg/transport.svg",   label: "Pharmacy Store" },
        { icon: "/svg/camp.svg", label: "Diagnostic Center" },
        { icon: "/svg/cctv.svg", label: "Diagnostic Center" },
];
const dentalPrograms = [
  { title: "Bachelor of Dental Surgery (BDS)", years: "5 years", image: "/assets/BDS.webp", desc: "Start your professional journey with our comprehensive BDS program, where foundational science meets advanced clinical practice." },
  { title: "Master of Dental Surgery (MDS)", years: "3 years", image: "/assets/MDS.webp", desc: "Elevate your expertise with our MDS specialisations, designed for dentists aiming to achieve mastery in complex oral healthcare." },
  { title: "PG Diploma Programs", years: "3 years", image: "/assets/PG.webp", desc: "Fast-track your career growth with our intensive PG Diploma programs, focusing on specialized clinical skills and the latest dental technologies." },
];
const ExploreBtn = () => <button className="px-8 py-3 rounded-full cursor-pointer text-sm font-medium text-[#9E2016] bg-white  hover:bg-[#9E2016] hover:!text-white transition-all duration-300" style={{ border: "1.5px solid #9E2016" }}>Explore More</button>;

const FeatureList = ({ items }) => (
  <div className="flex flex-col gap-12 flex-1 min-w-0">
    {items.map((item, i) => (
      <div key={i} className="flex items-start gap-4">
       <Image 
  src={item.icon} 
  alt={item.title} 
  width={120} 
  height={120}
  className="shrink-0"
  style={{ width: "120px", height: "120px" }}
/>
        <div className="min-w-0">
          <h4 className="text-[#1A1A1A] text-base font-semibold mb-2 whitespace-nowrap">{item.title}</h4>
          <p className="text-[#7A7A7A] text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
);
export default function Home() {
  const [mobilePage, setMobilePage] = useState(0);

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
     <section className="relative w-full overflow-hidden bg-white section-py">
  <div className="container">

    {/* HEADING */}
    <div className="mb-10 md:mb-16">
      <p className="text-[#9E2016] text-[18px] font-semibold uppercase mb-4 lg:text-center">Why choose LIDS</p>
      <h3 className="text-[#1A1A1A] font-semibold lg:text-center">Excellence in Dental Education and <br /> Patient-Centered Care</h3>
    </div>

    {/* MOBILE + TABLET + 1024px */}
    <div className="xl:hidden flex flex-col gap-8">
      <div className="relative flex items-center justify-center w-full h-[260px]" style={{ background: "radial-gradient(ellipse at center, #CFEFED 0%, transparent 70%)" }}>
        <div className="relative z-10 w-[380px] h-[220px]">
          <Image src="/assets/tooth.gif" alt="Tooth" fill className="object-contain opacity-30" />
        </div>
      </div>
      {[...left, ...right].map((item, i) => (
        <div key={i} className="flex flex-col gap-3">
          <Image src={item.icon} alt={item.title} width={72} height={72} />
          <h4 className="text-[#1A1A1A] text-base font-semibold">{item.title}</h4>
          <p className="text-[#7A7A7A] text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* DESKTOP 1280px+ */}
    <div className="hidden xl:flex items-center justify-between gap-4">
      <FeatureList items={left} />
      <div className="relative flex items-center justify-center shrink-0 w-[420px] h-[420px]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, #abdedb 0%, #CFEFED40 50%, transparent 85%)" }} />
        <div className="relative z-10 w-[480px] h-[357px]">
          <Image src="/assets/tooth.gif" alt="Tooth" fill className="object-contain opacity-30" />
        </div>
      </div>
      <FeatureList items={right} />
    </div>

  </div>
</section>
<OurCampus />
<section className="relative w-full py-25">
  <div className="relative container">
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <div className="absolute rounded-full hidden xl:block" style={{ width: "344px", height: "460px", top: "-200px", left: 0, background: "#CFEFED", filter: "blur(60px)", transform: "rotate(-90deg)", zIndex: 0 }} />
    </div>
    <div className="absolute hidden xl:block pointer-events-none" style={{ width: "279px", height: "347px", bottom: "-133px", left: "-90px", background: "#CFEFED", filter: "blur(70px)", borderRadius: "50%", zIndex: 10 }} />
    <div className="relative z-10 text-center mb-16">
      <p className="text-[#9E2016] text-[18px] font-semibold uppercase mb-4 text-left md:text-center">Facilities Overview</p>
      <h3 className="text-[#1A1A1A] font-semibold text-left md:text-center">Experience World-Class Facilities at LIDS</h3>
      <p className="mt-4 text-[#7A7A7A] text-[18px] max-w-3xl mx-auto text-left md:text-center">
        At LIDS, we believe that true excellence grows in a balanced environment. Our vibrant campus goes beyond the classroom, offering a dynamic range of extracurricular activities and modern amenities designed for your holistic development.
      </p>
    </div>
    <div className="relative z-10 hidden md:grid grid-cols-5 gap-y-12 gap-x-6 max-w-[1080px] mx-auto">
  {facilities.map((item, i) => (
    <div key={i} className="group flex flex-col items-center gap-4 cursor-pointer">
      
      {/* Icon with glass circle background */}
      <div className="relative flex items-center justify-center w-[100px] h-[100px] transition-all duration-300 group-hover:scale-110">
        {/* Glass circle */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "rgba(158, 255, 238, 0.12)",
            boxShadow:
              "0px 15.4964px 6.33945px rgba(26,26,26,0.01), 0px 9.157px 5.635px rgba(26,26,26,0.02), 0px 4.226px 4.226px rgba(26,26,26,0.03), 0px 0.704px 2.113px rgba(26,26,26,0.04), inset 0px 1.409px 8.453px rgba(255,255,255,0.25)",
              border: "0.7px solid #A5E7F0",
          }}
        />
        {/* Icon — centered, 40×40 */}
        <div className="relative w-[40px] h-[40px]">
          <Image
            src={item.icon}
            alt={item.label}
            fill
            className="object-cover transition-all duration-300 group-hover:[filter:brightness(0.6)_saturate(1.5)]"
          />
        </div>
      </div>

      <span className="text-[#20B2AA] group-hover:text-[#107B71] transition-colors duration-300 text-md font-medium text-center">
        {item.label}
      </span>
    </div>
  ))}
</div>
    <div className="relative z-10 hidden xl:flex justify-center mt-10 cursor-pointer"><ExploreBtn /></div>

    {/* Mobile */}
    {(() => {
      const total = Math.ceil(facilities.length / 4);
      const btnClass = "shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200";
      return (
        <div className="relative z-10 md:hidden">
          <div className="grid grid-cols-2 gap-y-10 gap-x-4">
            {facilities.slice(mobilePage * 4, mobilePage * 4 + 4).map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 cursor-pointer">
                <div className="relative w-[99px] h-[99px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
  <div className="relative w-[100px] h-[100px]">
    <Image src={item.icon} alt={item.label} fill className="object-contain transition-opacity duration-300 group-hover:opacity-0" />
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: "#009A7C", WebkitMaskImage: `url(${item.icon})`, maskImage: `url(${item.icon})`, WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" }} />
  </div>
</div>
                <span className="text-[#20B2AA] text-sm font-medium text-center">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-8 mt-10">
            <button type="button" className={btnClass} onClick={() => setMobilePage((p) => (p === 0 ? total - 1 : p - 1))}><ArrowLeft size={20} /></button>
            <div className="flex items-center gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <button key={i} type="button" onClick={() => setMobilePage(i)} className="rounded-full transition-all duration-300" style={{ width: i === mobilePage ? "20px" : "8px", height: "8px", background: i === mobilePage ? "#9E2016" : "#D9D9D9" }} />
              ))}
            </div>
            <button type="button" className={btnClass} onClick={() => setMobilePage((p) => (p === total - 1 ? 0 : p + 1))}><ArrowRight size={20} /></button>
          </div>
        </div>
      );
    })()}

  </div>
</section>
<section className="relative w-full overflow-hidden bg-white">
 <div className="absolute inset-0 pointer-events-none overflow-visible">
<div className="absolute pointer-events-none rounded-full hidden xl:block" style={{ 
  width: "950px", 
  height: "500px", 
  top: "215px", 
  right: "-200px",
  background: "#CFEFED", 
  filter: "blur(100px)",
  mixBlendMode: "multiply",
  zIndex: 0
}} />
</div>
  {/* MOBILE + TABLET + 1024px → up to 1280px */}
  <div className="xl:hidden flex flex-col px-5 gap-6">
    <p className="text-[#9E2016] text-[18px] font-semibold uppercase">OUR COMMITMENT</p>
    <h3 className="text-[#1A1A1A] font-semibold">To Research Excellence of Oral Healthcare</h3>
    <ul className="flex flex-col gap-5 text-md">
      {[
        <>Join a legacy of innovation with over <span className="text-[#8E0019] font-semibold">1,700 + published research papers,</span> contributing high-impact findings to the global dental community.</>,
        <>Engage in a collective ecosystem where students and expert faculty unite to solve the most pressing challenges in <span className="text-[#8E0019] font-semibold">preventative and restorative dentistry.</span></>,
        <>Benefit from an environment that encourages critical thinking, from exploring disease prevention to developing cutting-edge treatment protocols.</>,
        <>Work alongside seasoned specialists to refine your investigative skills, preparing you for a career at the forefront of <span className="text-[#8E0019] font-semibold">dental science and technology.</span></>,
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1 shrink-0"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#23B3AB" /><path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          <p className="text-[#7A7A7A] text-md leading-relaxed">{item}</p>
        </li>
      ))}
    </ul>
    <div className="relative w-full mb-0 h-[420px] md:h-[600px]">
      <div className="absolute pointer-events-none" style={{ width: "320px", height: "320px", top: "0%", right: "-10%", background: "#CFEFED", filter: "blur(80px)", borderRadius: "50%", zIndex: 0 }} />
      <Image src="/assets/research-excellence.webp" alt="Research Excellence" fill className="object-cover pointer-events-none" style={{ zIndex: 1, objectPosition: "65% bottom" }} />
    </div>
  </div>

  {/* DESKTOP 1280px+ */}
  <div className="hidden xl:flex items-center">
    <div className="flex flex-col gap-6 pl-[max(2rem,calc((100vw-1280px)/2+2rem))] w-[47%] shrink-0">
      <p className="text-[#9E2016] text-md font-semibold uppercase">OUR COMMITMENT</p>
      <h3 className="text-[#1A1A1A] font-semibold">To Research Excellence <br /> of Oral Healthcare</h3>
      <ul className="flex flex-col gap-5 mt-2 text-md">
        {[
          <>Join a legacy of innovation with over <span className="text-[#8E0019] font-semibold">1,700+ published research papers,</span> contributing high-impact findings to the global dental community.</>,
          <>Engage in a collective ecosystem where students and expert faculty unite to solve the most pressing challenges in <span className="text-[#8E0019] font-semibold">preventative and restorative dentistry.</span></>,
          <>Benefit from an environment that encourages critical thinking, from exploring disease prevention to developing cutting-edge treatment protocols.</>,
          <>Work alongside seasoned specialists to refine your investigative skills, preparing you for a career at the forefront of <span className="text-[#8E0019] font-semibold">dental science and technology.</span></>,
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 shrink-0"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#23B3AB" /><path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            <p className="text-[#7A7A7A] text-md leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="relative flex-1 h-[692px]">
      <Image src="/assets/research-excellence.webp" alt="Research Excellence" fill className="object-cover pointer-events-none object-right" />
    </div>
  </div>
</section>
<section
  className="relative w-full bg-cover bg-center h-[80vh] md:h-screen py-20"
  style={{
    backgroundImage: "url('/assets/transform-banner.webp')",
    backgroundAttachment: "fixed",
  }}
> 
 <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, #37A89E66 0%, #37A89EFF 100%)", zIndex: 1 }} />
  <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
    <p className="max-w-6xl text-center !text-white font-semibold leading-snug text-xl md:!text-[40px] !font-inter">
      "Transform your passion for dentistry into expertise at LIDS – where innovation, education, and patient care come together to shape the future of dental healthcare."
    </p>
  </div>
</section>
<AlumniStories/>
<NewsEvents/>
<FAQs/>
<DentalLegacyCTA
  title="Design Your Dental Legacy at LIDS"
  description="Whether you are pursuing a BDS or MDS, you will cultivate clinical mastery and
professional independence in a tech-forward environment. Master the art of
dentistry at your own pace, supported by experts dedicated to your success."
  buttonText="Apply Now"
  buttonHref="/admissions"
/>
    </main>
  );
}