"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import CardGrid from "@/components/CardGrid";
import DentalPrograms from "@/components/DentalPrograms";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";
import { ArrowLeft, ArrowRight } from "lucide-react";


const dentalPrograms = [
  { title: "Bachelor of Dental Surgery (BDS)", years: "5 years", image: "/assets/BDS.webp", desc: "Start your professional journey with our comprehensive BDS program, where foundational science meets advanced clinical practice." },
  { title: "Master of Dental Surgery (MDS)", years: "3 years", image: "/assets/MDS.webp", desc: "Elevate your expertise with our MDS specialisations, designed for dentists aiming to achieve mastery in complex oral healthcare." },
  { title: "PG Diploma Programs", years: "3 years", image: "/assets/PG.webp", desc: "Fast-track your career growth with our intensive PG Diploma programs, focusing on specialized clinical skills and the latest dental technologies." },
];
const facilities = [
  { icon: "/svg/mobiledental.svg",     label: "Mobile Dental Clinic" },
  { icon: "/svg/campus.svg",     label: "Our Campus" },
        { icon: "/svg/sports.svg", label: "Co curricular Activities" },
        { icon: "/svg/facilities.svg",   label: "Research Facilities" },
        { icon: "/svg/library.svg",    label: "Our Library" },
        { icon: "/svg/medical.svg",   label: "Medical Hospital" },
        { icon: "/svg/diagnostic.svg", label: "Diagnostic Center" },
        { icon: "/svg/mobiledental.svg",     label: "Mobile Dental Clinic" },
        { icon: "/svg/workshop.svg",  label: "Workshops" },
        { icon: "/svg/pharma.svg",   label: "Pharmacy Store" },
];
const ExploreBtn = () => <button className="px-8 py-3 rounded-full cursor-pointer text-sm font-medium text-[#9E2016] bg-white  hover:bg-[#9E2016] hover:!text-white transition-all duration-300" style={{ border: "1.5px solid #9E2016" }}>Explore More</button>;

const mvvCards = [
  { 
    icon: "/assets/mentor.gif", 
    mobileImage: "/assets/about-mission-mob.webp", 
    title: "Our Mission", 
    mobileDesc: "To empower students by combining strong theoretical knowledge with meaningful practical training. We provide extensive hands-on learning and regular access to patient care so students gain sufficient clinical experience and become well-rounded professionals. ",
    desc: "To empower the next generation of dental professionals by bridging the gap between classroom theory and real-world practice." 
  },
  { 
    icon: "/assets/hands.gif", 
    title: "Our Purpose", 
    desc: "Inspired by the vision of Dr. K. Lakshma Reddy (KLR Garu), our purpose remains clear: to make quality dental care accessible to all, while developing dentists who create meaningful impact in every life they touch." 
  },
  { 
    icon: "/assets/learning.gif", 
    title: "Our Vision", 
    mobileDesc: "To create a positive impact on society through quality dental education, community service, and oral health awareness. We aim to be recognised for academic excellence, research, and responsible practice, while nurturing future dental professionals.",
    desc: "To transform society through exceptional dental education, dedicated community service, and proactive oral health advocacy." 
  },
];
const items = [
  {
    type: "text",
    title: "Academics at LIDS",
    desc: "Our BDS and MDS programs are designed to create dental professionals who excel in clinical practice, research, and community service. Through rigorous academic training, hands-on clinical experience, and mentorship from world-class faculty.",
    href: "/courses",
  },
  { type: "image", src: "/assets/academic-lab.webp", alt: "Academics" },
  { type: "image", src: "/assets/academic-students.webp", alt: "Students" },
  {
    type: "text",
    title: "Research Opportunities",
    desc: "At LIDS, both BDS and MDS students are encouraged to explore their academic interests through research. Students have access to:",
    href: "/research",
  },
];

const tealCell = {
  background: "#20B2AA",
  border: "2px solid #E5F3F2A1",
  backdropFilter: "blur(13.3px)",
  WebkitBackdropFilter: "blur(13.3px)",
  boxShadow: "inset 0px 6px 6px 0px #EBFDFF33, inset 0px 13px 8px 0px #C9F9FF33, inset 0px 22px 9px 0px #E8FCFF33",
};
export default function ContactPage() {
    const [mobilePage, setMobilePage] = useState(0);
  
  return (
    <main>
 <CTABanner
  label="Our Academics"
  title="Discover a wide range of medical courses tailored to meet your diverse educational needs.Discover a wide range of medical courses tailored to meet your diverse educational needs."
 titleClassName="!text-[18px] w-[930px] font-[family-name:var(--font-inter)]"
labelClassName="!text-[56px] font-['Plus_Jakarta_Sans']"
  align="center"
  desktopImage="/assets/contact-banner.webp"
  mobileImage="/assets/about-mob.webp"
  imageStyle={{ zIndex: 0, objectPosition: "center center" }}
/>

 <section className="relative bg-white section-py overflow-hidden">
      {/* blur orb */}
      <div className="absolute pointer-events-none rounded-full" style={{ width: "800px", height: "800px", top: "-200px", right: "-300px", background: "rgba(207,239,237,0.4)", filter: "blur(120px)", zIndex: 0 }} />

      <div className="relative z-10 container">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#9E2016] text-sm font-semibold uppercase mb-4">JOIN LIDS</p>
          <h3 className="text-[#1A1A1A] font-semibold">Welcome to the <br /> World of Dental Excellence at LIDS!</h3>
          <p className="mt-4 text-[#333333] text-base max-w-2xl mx-auto">
            Lenora Institute of Dental Sciences (LIDS) is dedicated to providing high-quality dental education through a balanced approach of academic learning, clinical exposure, and research. With state-of-the-art infrastructure and experienced faculty, we equip our students to be leaders in the field of dentistry.
          </p>
        </div>

        {/* 2x2 Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
  {items.map((item, i) =>
    item.type === "text" ? (
      <div key={i} className="flex flex-col justify-center gap-5 p-8" style={{ ...tealCell, minHeight: "420px" }}>
        <h4 className="!text-white font-semibold !text-[32px]">{item.title}</h4>
        <p className="text-white/90 text-sm leading-relaxed">{item.desc}</p>
        <Link href={item.href} className="self-start bg-white text-[#1A1A1A] text-sm font-medium rounded-full px-6 py-2.5 hover:bg-gray-100 transition-all">Know more</Link>
      </div>
    ) : (
      <div key={i} className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <Image src={item.src} alt={item.alt} fill className="object-cover" />
      </div>
    )
  )}
</div>
      </div>
    </section>
<DentalPrograms programs={dentalPrograms} />

<section className="bg-white pt-20 pb-0">
        <div className="container">
          <div className="text-center mb-6">
            <p className="text-[#9E2016] text-xl font-semibold uppercase mb-4">
              Academic Approach
            </p>
            <h3 className="text-[#1A1A1A] font-semibold">A Holistic and Mentorship-Led Learning Approach</h3>
          </div>
          <p className="text-[#7A7A7A] text-sm leading-relaxed w-full md:w-[935px] mb-10 md:mx-auto md:text-center">
          At LIDS, our educational approach centers on developing well-rounded dental professionals. We integrate academic learning with hands-on clinical experience to ensure our students gain the practical skills required to excel in real-world dental practices.
          </p>
           <div className="relative w-full md:max-w-6xl md:mx-auto h-[280px] md:h-[500px] rounded-2xl overflow-hidden mb-16 md:mb-8"
  style={{ boxShadow: "inset 0 0 0 4px rgba(255, 255, 255, 0.5)" }}>
  <Image src="/assets/academic-approach.webp" alt="LIDS Building" fill className="object-cover" />
</div>
        </div>
      </section>
 <CardGrid cards={mvvCards} cols={3} iconSize={80} titleColor="#20B2AA" desktopClassName="-mt-10" mobileClassName="-mt-5"/> 
 <section className="relative w-full overflow-hidden py-20">
   <div className="absolute pointer-events-none rounded-full" style={{ width: "344px", height: "460px", left: "183px", background: "#CFEFED", filter: "blur(150px)", transform: "rotate(-90deg)", zIndex: 0 }} />
   <div className="relative z-10 container">
     <div className="text-center mb-16">
       <p className="text-[#9E2016] text-md font-semibold uppercase mb-4 text-left md:text-center">Facilities Overview</p>
       <h3 className="text-[#1A1A1A] font-semibold text-left md:text-center">Experience World-Class Facilities at LIDS</h3>
       <p className="mt-4 text-[#7A7A7A] text-base max-w-2xl mx-auto text-left md:text-center">
         At LIDS, we believe that true excellence grows in a balanced environment. Our vibrant campus goes beyond the classroom, offering a dynamic range of extracurricular activities and modern amenities designed for your holistic development.
       </p>
     </div>
 
     {/* Desktop */}
     <div className="hidden md:grid grid-cols-5 gap-y-12 gap-x-6 max-w-[1080px] mx-auto">
       {facilities.map((item, i) => (
         <div key={i} className="group flex flex-col items-center gap-4 cursor-pointer">
           <div className="relative w-[99px] h-[99px] rounded-full flex items-center justify-center border transition-colors duration-300" style={{ background: "#9EFFEE1F", borderColor: "#a1dbd8", boxShadow: "0px 1px 3px 0px #1A1A1A0A, 0px 6px 6px 0px #1A1A1A08, 0px 13px 8px 0px #1A1A1A05, 0px 22px 9px 0px #1A1A1A03, 0px 2px 12px 0px #FFFFFF40 inset" }}>
             <div className="relative w-[40px] h-[40px]">
               <Image src={item.icon} alt={item.label} fill className="object-contain transition-opacity duration-300 group-hover:opacity-0" />
               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: "#009A7C", WebkitMaskImage: `url(${item.icon})`, maskImage: `url(${item.icon})`, WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" }} />
             </div>
           </div>
           <span className="text-[#20B2AA] group-hover:text-[#107B71] transition-colors duration-300 text-sm font-medium text-center">{item.label}</span>
         </div>
       ))}
     </div>
 <div className="hidden xl:flex justify-center mt-15 cursor-pointer"><ExploreBtn /></div>

     {/* Mobile */}
     {(() => {
       const total = Math.ceil(facilities.length / 4);
       const btnClass = "shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200";
       return (
         <div className="md:hidden">
           <div className="grid grid-cols-2 gap-y-10 gap-x-4">
             {facilities.slice(mobilePage * 4, mobilePage * 4 + 4).map((item, i) => (
               <div key={i} className="flex flex-col items-center gap-4 cursor-pointer">
                 <div className="relative w-[99px] h-[99px] rounded-full flex items-center justify-center border" style={{ background: "#9EFFEE1F", borderColor: "#a1dbd8", boxShadow: "0px 1px 3px 0px #1A1A1A0A, 0px 6px 6px 0px #1A1A1A08, 0px 13px 8px 0px #1A1A1A05, 0px 22px 9px 0px #1A1A1A03, 0px 2px 12px 0px #FFFFFF40 inset" }}>
                   <div className="relative w-[40px] h-[40px]">
                     <Image src={item.icon} alt={item.label} fill className="object-contain" />
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


<DentalLegacyCTA
  align="left"
 title={<>Ready to Shape<br />Your Future in Dentistry?</>}
  description="Embark on a transformative journey with Lenora Institute of Dental Sciences. Whether you're pursuing a BDS (Undergraduate) or MDS (Postgraduate) degree, LIDS provides you with the skills, clinical experience, and mentorship needed to succeed as a dental professional."
  buttonText="Apply Now"
  buttonHref="/academics"
  image="/assets/transparent-banner.webp"
/>
    </main>
  );
}