"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import CardGrid from "@/components/CardGrid";
import ShapeDental from "@/components/ShapeDental";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";

const mvvCards = [
  { 
    icon: "/svg/about-mission.svg", 
    title: "Our Mission", 
    desc: "To empower the next generation of dental professionals by bridging the gap between classroom theory and real-world practice." 
  },
  { 
    icon: "/svg/about-mission.svg", 
    title: "Our Purpose", 
    desc: "Inspired by the vision of Dr. K. Lakshma Reddy (KLR Garu), our purpose remains clear: to make quality dental care accessible to all, while developing dentists who create meaningful impact in every life they touch." 
  },
  { 
    icon: "/svg/about-mission.svg", 
    title: "Our Vision", 
    desc: "To transform society through exceptional dental education, dedicated community service, and proactive oral health advocacy." 
  },
];

const coreValues = [
  { icon: "/assets/corevalues.svg",   title: "Entrepreneurial Growth",  desc: "Guided to grow with confidence and independence. With close mentorship and personal support, they learn at their own pace while developing the skills and mindset to lead, manage, and build their own dental careers." },
  { icon: "/assets/corevalues.svg",title: "Service to Community",    desc: "Dentistry goes beyond the classroom. Through regular outreach camps and public health initiatives, students actively serve communities while gaining meaningful real-world experience." },
  { icon: "/assets/corevalues.svg", title: "Practice First Learning", desc: "We believe confidence comes from doing. From early clinical exposure to direct patient care, students learn through real-world practice under supervision preparing them for independent clinical work from day one." },
  { icon: "/assets/corevalues.svg",  title: "Continuous Improvement",  desc: "We encourage curiosity and growth. Through ongoing research, skill development programs, and clinical learning, students and faculty stay updated and keep evolving together." },
];

const doctors = [
  { image: "/assets/doctor1.webp", name: "Mrs. K. Nagamani", role: "Founder & Director" },
  { image: "/assets/doctor1.webp", name: "Mrs. K. Nagamani", role: "Founder & Director" },
  { image: "/assets/doctor1.webp", name: "Mrs. K. Nagamani", role: "Founder & Director" },
  { image: "/assets/doctor1.webp", name: "Mrs. K. Nagamani", role: "Founder & Director" },
];

export default function AboutPage() {
  const [docPage, setDocPage] = useState(0);
  return (
    <main>
      <CTABanner
       label="About us"
        title="A Legacy of Excellence in Education and Social Responsibility"
        mobileImage="/assets/about-mob.webp" />
      <section className="relative bg-white py-10 md:py-20">
   
  <div className="relative z-10 container">
    <div className="relative w-full md:max-w-5xl md:mx-auto h-[280px] md:h-[477px] rounded-2xl overflow-hidden mb-6 md:mb-8"
      style={{ boxShadow: "inset 0 0 0 4px rgba(255, 255, 255, 0.5)" }}>
      <Image src="/assets/lids-building.webp" alt="LIDS Building" loading="lazy" fill className="object-cover" />
      <div className="absolute inset-0 rounded-2xl border-5 border-white/40 pointer-events-none" />
    </div>
    <div className=" text-center mb-6">
      <p className="text-[#9E2016] text-[18px] font-semibold uppercase mb-4">Lenora Institute of Dental Sciences (LIDS)</p>
      <h3 className="text-[#1A1A1A] font-semibold">Shaping the Future of Oral Healthcare</h3>
    </div>
    <p className="text-[#656C7B] text-[18px] leading-relaxed w-full md:max-w-[100%] lg:w-[1180px] md:mx-auto md:text-center">
      Situated in Rajahmundry, Andhra Pradesh, LIDS is more than a dental institution — 
      it's a vibrant hub for innovation, academic excellence, and patient-centric care. 
      As a premier institution under the KLR Group, we empower the next generation of 
      dental leaders through a dynamic blend of high-tech research, hands-on clinical 
      training, and passionate mentorship. Whether you are a future student or looking 
      for cutting-edge dentistry, LIDS is where expertise meets compassion.
    </p>
  </div>
</section>

      <CardGrid cards={mvvCards} cols={3} showBlob={true}/>
      <ShapeDental
  label="APPROACH"
  title="Our Philosophy"
  desc="At LIDS, we believe dental education must go beyond knowledge shaping professionals with skill, ethics, and a deep sense of responsibility. Every student learns not just to treat, but to serve. Through real patient exposure and guided clinical practice, learning extends far beyond the classroom, building both competence and compassion."
  imageSrc="/assets/philosophy.webp"
  imageAlt="Our Philosophy"
   showBlur = {false}
/>
{/* FOUNDER MESSAGE */}
<section className="w-full py-8 bg-[#35908D]">
  <div className="container">
    {/* MOBILE */}
<div className="md:hidden flex flex-col gap-6 rounded-[24px] p-6" style={{
      border: "1px solid #20B2AA30",
      boxShadow: "0px 2px 12px 0px #FFFFFF40 inset, 0px 1px 3px 0px #1A1A1A0A, 0px 6px 6px 0px #E5F3F208, 0px 13px 8px 0px #9EFFEE05, 0px 22px 9px 0px #9EFFEE03, 0px 35px 10px 0px #C9F9FF00"
    }}>
      <div className="relative w-full overflow-hidden rounded-2xl" style={{height: "280px" }}>
        <Image src="/assets/founder.webp" alt="Dr. Katireddy Lakshma Reddy" fill className="object-cover" />
      </div>
      <p className="!text-[#9E2016] text-[18px] font-semibold uppercase opacity-80">MESSAGE</p>
      <h3 className="!text-white font-semibold" style={{ fontSize: "32px" }}>A Message from Our Founder</h3>
      <p className="text-white text-[18px] leading-relaxed opacity-90 italic">For 37 remarkable years, the KLR Group of Institutions has been a beacon of knowledge, shaping futures with unwavering dedication. At its heart lies the visionary spirit of Dr. Katireddy Lakshma Reddy Garu, whose belief in the transformative power of education has inspired generations. His vision is not just a dream it is a living legacy that continues to uplift and empower.</p>
      <p className="text-white text-[18px] leading-relaxed opacity-90 italic">KLR envisioned an institution where students grow not just academically, but as confident, innovative & socially responsible individuals. His mission extended beyond classrooms, aiming to create a better society. Over the years, we've embraced challenges as Stepping stones, turning them into opportunities for growth.</p>
      <div>
        <p className="text-white font-semibold text-[18px] mb-2">Dr. Katireddy Lakshma Reddy</p>
        <p className="text-md" style={{ color: "#A5E7F0" }}>Founder & Chairman, KLR group</p>
      </div>
    </div>
    {/* DESKTOP */}
<div className="hidden md:flex items-center gap-6 lg:gap-10 rounded-[24px] p-6 lg:p-[40px]"
  style={{ border: "1px solid rgba(32, 178, 170, 0.19)", boxShadow: "0px 2px 12px 0px rgba(255,255,255,0.25) inset" }}>
  <div className="relative shrink-0 w-[280px] lg:w-[460px] max-w-full h-[380px] lg:h-[521px] rounded-[12px] overflow-hidden">
    <Image src="/assets/founder.webp" alt="Dr. Katireddy Lakshma Reddy" fill className="object-cover"/>
  </div>
  <div className="flex flex-col gap-4 lg:gap-6 flex-1 min-w-0 lg:pt-[46px] lg:pb-[6px]">
    <p className="text-[#9E2016] text-[18px] font-semibold uppercase opacity-80">MESSAGE</p>
    <h3 className="!text-white font-semibold text-lg lg:!text-[40px] whitespace-nowrap md:whitespace-normal xl:whitespace-nowrap">A Message from Our Founder</h3>
    <p className="text-white lg:text-[16px] leading-relaxed opacity-90 italic">For 37 remarkable years, the KLR Group of Institutions has been a beacon of knowledge, shaping futures with unwavering dedication. At its heart lies the visionary spirit of Dr. Katireddy Lakshma Reddy Garu, whose belief in the transformative power of education has inspired generations. His vision is not just a dream it is a living legacy that continues to uplift and empower.</p>
    <p className="text-white lg:text-[16px] leading-relaxed opacity-90 italic">Dr. KLR envisioned an institution where students grow not just academically, but as confident, innovative & socially responsible individuals. His mission extended beyond classrooms, aiming to create a better society. Over the years, we've embraced challenges as Stepping stones, turning them into opportunities for growth.</p>
    <div>
      <p className="text-white font-semibold lg:text-[18px]">Dr. Katireddy Lakshma Reddy</p>
      <p className="text-md" style={{ color: "#A5E7F0" }}>Founder & Chairman, KLR group</p>
    </div>
  </div>
</div>

  </div>
</section>
<CardGrid title="Our Core Values" cards={coreValues} cols={2} minHeight={280} titleFontSize="24px" showBlob={true} blobs={[ { width: "368.38px", height: "470px", top: "-90px", right: 0, background: "rgba(207, 239, 237, 0.63)", filter: "blur(93px)", transform: "rotate(-91.53deg)", zIndex: 0 }, { width: "199px", height: "254px", top: "659px", left: "34px", background: "#CFEFED", filter: "blur(70px)", borderRadius: "50%", zIndex: 10 }, ]}
/><ShapeDental
  label="LEGACY"
  title="KLR Group of Institutions"
  desc="KLR Group of Institutions, founded under The Boon Education, Environment, and Rural Development Society, has been dedicated to transforming lives through education for over 25 years. With a mission to provide academic, technical, medical, and professional education, we focus on empowering rural students by equipping them with the skills and knowledge needed to succeed in a rapidly evolving world. Our founder, Dr. K. Lakshma Reddy, envisioned a society where education is a powerful tool for social and economic progress, particularly in underserved rural areas."
  imageSrc="/assets/instituition.webp"
  imageAlt="KLR Group"
  buttonText="Visit our Website"
  buttonHref="https://klr.edu.in"
  imageLeft={false}
  showBlur={false}
/>

<section className="relative bg-white py-24">
   <div className="absolute inset-0 pointer-events-none">
    <div className="absolute rounded-full hidden xl:block" style={{ width: "368.38px", height: "470px", top: "-99px", left: "-126px", background: "#CFEFED", filter: "blur(93px)", transform: "rotate(90.53deg)", zIndex: 0 }} />
  </div>

  <div className="container relative z">
    <div className="text-center mb-12">
      <p className="text-[#9E2016] text-[18px] font-semibold uppercase mb-4">OUR CORE TEAM</p>
      <h3 className="text-[#1A1A1A] font-semibold">Meet Our Professional Doctors</h3>
    </div>

    {/* Desktop */}
    <div className="hidden md:grid grid-cols-4 gap-6">
      {doctors.map((doc, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <div className="w-[340px] max-w-full h-[440px] rounded-[16px] overflow-hidden relative">
  <Image src={doc.image} alt={doc.name} fill className="object-cover" style={{ objectPosition: "center 30%", transform: "scale(1.5)", transformOrigin: "center 100%" }} />
  <div className="absolute inset-0 rounded-[16px] border-4 border-white/40 pointer-events-none" />
</div>
          <p className="text-[#1A1A1A] font-semibold text-[24px]">{doc.name}</p>
          <p className="text-[#7A7A7A] text-[18px]">{doc.role}</p>
        </div>
      ))}
    </div>

    {/* Mobile */}
    <div className="md:hidden flex flex-col items-center gap-6">
      <div className="w-full rounded-[16px] overflow-hidden relative" style={{ height: "380px"}}>
  <Image src={doctors[docPage].image} alt={doctors[docPage].name} width={400} height={380} className="object-cover w-full h-full scale-125 translate-y-[-5%]" />
  <div className="absolute inset-0 rounded-[16px] border-4 border-white/40 pointer-events-none" />
</div>
     <p className="text-[#1A1A1A] font-semibold text-[24px] -mb-2">{doctors[docPage].name}</p>
      <p className="text-[#7A7A7A] text-xl -mb-1">{doctors[docPage].role}</p>

      <div className="flex items-center justify-center gap-8">
  <button type="button" onClick={() => setDocPage((p) => (p === 0 ? doctors.length - 1 : p - 1))} className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200">
    <ArrowLeft size={18} />
  </button>
  <div className="flex items-center gap-2">
    {doctors.map((_, i) => (
      <button key={i} type="button" onClick={() => setDocPage(i)} className="rounded-full transition-all duration-300" style={{ width: i === docPage ? "6px" : "4px", height: i === docPage ? "6px" : "4px", background: i === docPage ? "#9E2016" : "#9E201666" }} />
    ))}
  </div>
  <button type="button" onClick={() => setDocPage((p) => (p === doctors.length - 1 ? 0 : p + 1))} className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200">
    <ArrowRight size={18} />
  </button>
</div>
    </div>

  </div>
</section>
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