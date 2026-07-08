"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQs from "@/components/FAQs";
import CardGrid from "@/components/CardGrid";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";
import { ArrowLeft, ArrowRight } from "lucide-react";
import OurCampus from "@/components/OurCampus";

const tabs = ["Application Steps", "BDS", "MDS"];

const content = {
  "Application Steps": [
    { label: "Check Eligibility", desc: "Verify you meet 10+2 PCB requirements, minimum 50% marks, and valid NEET qualification." },
    { label: "Fill Online Application", desc: "Complete the application form on our official portal with your academic and details." },
    { label: "Submit Documents", desc: "Upload academic certificates, NEET scorecard, photo ID, and passport-size photo." },
    { label: "Merit List Publication", desc: "Merit list is published on the institute website based on NEET scores." },
    { label: "Attend Counseling", desc: "Selected candidates attend the counseling session for seat allocation and verification." },
    { label: "Confirm Admission", desc: "Pay the admission fee, and confirm your enrollment for the academic year." },
  ],
  "BDS": [
    { label: "Duration", desc: "5 years including 1 year internship." },
    { label: "Eligibility", desc: "10+2 with PCB, minimum 50% marks and valid NEET score." },
    { label: "Seats", desc: "100 seats available per academic year." },
  ],
  "MDS": [
    { label: "Duration", desc: "3 years postgraduate program." },
    { label: "Eligibility", desc: "BDS degree with internship completion and valid NEET-MDS score." },
    { label: "Specializations", desc: "Multiple specializations available across dental disciplines." },
  ],
};

const cardStyle = {
  background: "#9EFFEE1F",
  border: "1px solid #20B2AA69",
  borderRadius: "24px",
  padding: "12px",
  boxShadow: "inset 0px 2px 12px 0px #FFFFFF40, 0px 6px 6px 0px #E5F3F208, 0px 13px 8px 0px #9EFFEE05, 0px 22px 9px 0px #9EFFEE03, 0px 35px 10px 0px #C9F9FF00",
};
const admissionFaqs = [
  { question: "How do I apply for BDS at LIDS?", answer: "Apply online through the admissions portal by filling out the application form and submitting required documents." },
  { question: "What is the eligibility for BDS admission?", answer: "Candidates must have completed 10+2 with Physics, Chemistry, and Biology with a minimum of 50% marks and a valid NEET score." },
  { question: "What is the eligibility for BDS admission?", answer: "Candidates must have completed 10+2 with Physics, Chemistry, and Biology with a minimum of 50% marks and a valid NEET score." },
  { question: "What is the eligibility for BDS admission?", answer: "Candidates must have completed 10+2 with Physics, Chemistry, and Biology with a minimum of 50% marks and a valid NEET score." },
  { question: "What is the eligibility for BDS admission?", answer: "Candidates must have completed 10+2 with Physics, Chemistry, and Biology with a minimum of 50% marks and a valid NEET score." },
];
const innerStyle = {
  background: "#FFFFFF",
  borderRadius: "16px",
  // padding: "40px 48px",
  minHeight: "520px",
};
const ExploreBtn = () => <button className="px-8 py-3 rounded-full cursor-pointer text-sm font-medium text-[#9E2016] bg-white  hover:bg-[#9E2016] hover:!text-white transition-all duration-300" style={{ border: "1.5px solid #9E2016" }}>Explore Campus Life</button>;

const mvvCards = [
  { 
    icon: "/svg/admission-1.svg", 
    mobileImage: "/assets/about-mission-mob.webp", 
    title: "Extensive Clinical Exposure", 
    desc: "LIDS offers 355+ dental units with high OPD patient flow, providing students hands-on experience from day one. Real patient exposure ensures graduates are confident and practice-ready." 
  },
  { 
    icon: "/svg/admission-2.svg", 
    title: "Mentorship-Driven Faculty", 
    desc: "Our faculty are highly qualified dental professionals who provide personalized mentorship. Students receive guidance in clinical practice, research, and career development." 
  },
  { 
    icon: "/svg/admission-3.svg", 
    title: "Research & Innovation Focus", 
    mobileDesc: "To create a positive impact on society through quality dental education, community service, and oral health awareness. We aim to be recognised for academic excellence, research, and responsible practice, while nurturing future dental professionals.",
    desc: "With over 1,700 published research papers, LIDS integrates research opportunities into both BDS and MDS programs. Students gain practical experience contributing to advancements in dental science." 
  },
  { 
    icon: "/svg/admission-4.svg", 
    title: "State-of-the-Art Infrastructure", 
    mobileDesc: "To create a positive impact on society through quality dental education, community service, and oral health awareness. We aim to be recognised for academic excellence, research, and responsible practice, while nurturing future dental professionals.",
    desc: "From modern dental labs to advanced diagnostic tools like CBCT and intraoral scanners, LIDS provides cutting-edge technology. Students train with industry-standard equipment for clinical excellence." 
  },
  { 
    icon: "/svg/admission-5.svg", 
    title: "Holistic Development & Well-Being", 
    mobileDesc: "To create a positive impact on society through quality dental education, community service, and oral health awareness. We aim to be recognised for academic excellence, research, and responsible practice, while nurturing future dental professionals.",
    desc: "LIDS emphasizes overall student growth through wellness programs, counseling, sports, and cultural activities. We ensure a balanced environment for both academic and personal development." 
  },
  { 
    icon: "/svg/admission-6.svg", 
    title: "Inclusivity & Community ", 
    mobileDesc: "To create a positive impact on society through quality dental education, community service, and oral health awareness. We aim to be recognised for academic excellence, research, and responsible practice, while nurturing future dental professionals.",
    desc: "We provide equal opportunities for all students and actively participate in community outreach programs. LIDS fosters empathy, social responsibility, and ethical dental practice." 
  },
];


export default function AdmissionsPage() {
 const [active, setActive] = useState("Application Steps");
  
  return (
    <main>
 {/* <CTABanner
  label="Our Academics"
  title="Discover a wide range of medical courses tailored to meet your diverse educational needs.Discover a wide range of medical courses tailored to meet your diverse educational needs."
 titleClassName="!text-[18px] w-[930px] font-[family-name:var(--font-inter)]"
labelClassName="!text-[56px] font-['Plus_Jakarta_Sans']"
  align="center"
  desktopImage="/assets/contact-banner.webp"
  mobileImage="/assets/about-mob.webp"
  imageStyle={{ zIndex: 0, objectPosition: "center center" }}
/> */}
<DentalLegacyCTA
  align="center"
  title="Admissions"
  description="Discover a wide range of medical courses tailored to meet your diverse educational needs.Discover a wide range of medical courses tailored to meet your diverse educational needs."
  image="/assets/admission-banner.webp"
  showButton={false}
  titleClassName="!text-[40px] md:!text-[56px]"
  descriptionClassName="max-w-5xl"
/>
<div className="relative">
  <section className="relative bg-white section-py">
    <div className="hidden md-block absolute pointer-events-none rounded-full" style={{ width: "344px", height: "460px", top: "106px", left: "17px", transform: "rotate(-90deg)", background: "rgba(207,239,237,0.70)", filter: "blur(126px)", zIndex: 0 }} />
    <div className="hidden md-block absolute pointer-events-none rounded-full" style={{ width: "900px", height: "600px", top: "-300px", right: "-200px", background: "rgba(207,239,237,0.4)", filter: "blur(120px)", zIndex: 0 }} />
    <div className="hidden md-block absolute pointer-events-none rounded-full" style={{ width: "851px", height: "1141px", top: "1031px", right: "-511px", transform: "rotate(-90deg)", background: "rgba(207,239,237,0.42)", filter: "blur(186px)", zIndex: 0 }} />
    <div className="relative z-10 container">
      <div className="text-center mb-12">
        <p className="text-[#9E2016] text-xl font-semibold uppercase mb-4">LEARNING BY DOING</p>
        <h3 className="text-[#1A1A1A] font-semibold">Welcome to the <br /> World of Dental Excellence at LIDS!</h3>
        <p className="mt-4 text-[#333333] text-[18px] max-w-5xl mx-auto">
          Lenora Institute of Dental Sciences (LIDS) is dedicated to providing high-quality dental education through a balanced approach of academic learning, clinical exposure, and research. With state-of-the-art infrastructure and experienced faculty, we equip our students to be leaders in the field of dentistry.
        </p>
      </div>
      <div style={cardStyle} className="max-w-6xl mx-auto">
        <div className="px-[10px] py-[20px] md:px-[48px] md:py-[40px]" style={innerStyle}>
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-1 rounded-full p-2" style={{ background: "#F5F5F5", border: "1px solid #E0E0E0" }}>
              {tabs.map((tab) => (
                <button key={tab} onClick={() => setActive(tab)}
                  className="whitespace-nowrap px-4 py-2 rounded-full text-[14px] md:text-[18px] font-medium transition-all duration-300"
                  style={{ background: active === tab ? "#20B2AA" : "transparent", color: active === tab ? "#fff" : "#107B71" }}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {content[active].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="11" fill="#20B2AA" />
                  <path d="M6.5 11l3.5 3.5 5.5-5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-[#3D3D3D] text-md md:text-[18px] leading-relaxed text-left">
                  <span className="text-[#20B2AA] font-semibold">{item.label}</span>
                  {" : "}{item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<section className="bg-white pt-10 pb-0">
        <div className="container">
          <div className="text-center mb-6">
            <p className="text-[#9E2016] text-xl font-semibold uppercase mb-4">
              Why choose us?
            </p>
            <h3 className="text-[#1A1A1A] font-semibold">What Sets Us Apart</h3>
          </div>
        </div>
      </section>
 <CardGrid cards={mvvCards} cols={3} iconSize={64} titleColor="#20B2AA" desktopClassName="-mt-10" mobileClassName="-mt-5" /> 

<OurCampus
  showBlob={true}
  label="Infrastructure"
  title={<>State-of-the-Art <br /> Facilities for Clinical Excellence</>}
  subtitle="World-class infrastructure that supports an advanced learning environment for dental students. Our campus is equipped with 355+ dental units, modern simulation labs, and cutting-edge technology, ensuring that students gain hands-on experience in a professional setting."
  buttonClassName="mb-10"
  buttonText = "Explore Facilities"
/>
<FAQs image="/assets/students.webp" imageAlt="Students" faqs={admissionFaqs} />
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