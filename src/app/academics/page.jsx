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
import FacilitiesOverview from "@/components/FacilitiesOverview";


const dentalPrograms = [
  { title: "Bachelor of Dental Surgery (BDS)", years: "5 years", image: "/assets/BDS.webp", desc: "Start your professional journey with our comprehensive BDS program, where foundational science meets advanced clinical practice." },
  { title: "Master of Dental Surgery (MDS)", years: "3 years", image: "/assets/MDS.webp", desc: "Elevate your expertise with our MDS specialisations, designed for dentists aiming to achieve mastery in complex oral healthcare." },
  { title: "PG Diploma Programdentas", years: "3 years", image: "/assets/PG.webp", desc: "Fast-track your career growth with our intensive PG Diploma programs, focusing on specialized clinical skills and the latest dental technologies." },
];

const ExploreBtn = () => <button className="px-8 py-3 rounded-full cursor-pointer text-sm font-medium text-[#9E2016] bg-white  hover:bg-[#9E2016] hover:!text-white transition-all duration-300" style={{ border: "1.5px solid #9E2016" }}>Explore More</button>;

const mvvCards = [
  { 
    icon: "/assets/mentor.gif", 
    mobileImage: "/assets/about-mission-mob.webp", 
    title: "Mentorship-Led Learning", 
    mobileDesc: "To empower students by combining strong theoretical knowledge with meaningful practical training. We provide extensive hands-on learning and regular access to patient care so students gain sufficient clinical experience and become well-rounded professionals. ",
    desc: "Our students benefit from personalized mentorship throughout their academic journey, where faculty members provide guidance on clinical procedures, research, and career." 
  },
  { 
    icon: "/assets/hands.gif", 
    title: "Hands-On Training", 
    desc: "From the very first year, students are immersed in clinical environments, treating patients under the supervision of experienced faculty, ensuring that theoretical knowledge is applied in practice." 
  },
  { 
    icon: "/assets/learning.gif", 
    title: "Interdisciplinary Learning", 
    mobileDesc: "To create a positive impact on society through quality dental education, community service, and oral health awareness. We aim to be recognised for academic excellence, research, and responsible practice, while nurturing future dental professionals.",
    desc: "Our students have the opportunity to engage in interdisciplinary learning, collaborating with peers from different specialties, ensuring a broader understanding of dental sciences." 
  },
];
const items = [
  {
    type: "text",
    title: "Academics at LIDS",
    desc: "Our BDS and MDS programs are designed to create dental professionals who excel in clinical practice, research, and community service. Through rigorous academic training, hands-on clinical experience, and mentorship from world-class faculty.",
    href: "/courses",
  },
  { type: "image", src: "/assets/joinlids-1.webp", alt: "Academics" },
  { type: "image", src: "/assets/joinlids-2.webp", alt: "Students" },
  {
    type: "text",
    title: "Research Opportunities",
    desc: "At LIDS, both BDS and MDS students are encouraged to explore their academic interests through research. Students have access to:",
    href: "/research",
  },
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
const tealCell = {
  background: "#107B71",
  border: "2px solid #E5F3F2A1",
  backdropFilter: "blur(13.3px)",
  WebkitBackdropFilter: "blur(13.3px)",
  boxShadow: "inset 0px 6px 6px 0px #EBFDFF33, inset 0px 13px 8px 0px #C9F9FF33, inset 0px 22px 9px 0px #E8FCFF33",
};
const mobilePairs = [
  { title: items[0].title, desc: items[0].desc, href: items[0].href, src: items[1].src, alt: items[1].alt },
  { title: items[3].title, desc: items[3].desc, href: items[3].href, src: items[2].src, alt: items[2].alt },
];
export default function ContactPage() {
    const [mobilePage, setMobilePage] = useState(0);
  
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
  title="Our Academics"
  description="Discover a wide range of medical courses tailored to meet your diverse educational needs.Discover a wide range of medical courses tailored to meet your diverse educational needs."
  image="/assets/academics-banner.webp"
  showButton={false}
  titleClassName="!text-[40px] md:!text-[56px]"
  descriptionClassName="max-w-5xl"
/>
   <section className="relative bg-white overflow-hidden">
      <div className="absolute pointer-events-none rounded-full hidden xl:block" style={{ width: "800px", height: "800px", top: "-200px", right: "-300px", background: "rgba(207,239,237,0.4)", filter: "blur(120px)", zIndex: 0 }} />
      <div className="relative z-10 container">
        <div className="text-center mb-12">
          <p className="eyebrow-heading text-[#9E2016] font-semibold uppercase mb-4">JOIN LIDS</p>
          <h3 className="text-[#1A1A1A] font-semibold">Welcome to the <br /> World of Dental Excellence at LIDS!</h3>
          <p className="mt-4 text-[#9A9A9A] md:text-[#656C7B] text-md md:text-[18px] max-w-6xl mx-auto">
            Lenora Institute of Dental Sciences (LIDS) is dedicated to providing high-quality dental education through a balanced approach of academic learning, clinical exposure, and research. With state-of-the-art infrastructure and experienced faculty, we equip our students to be leaders in the field of dentistry.
          </p>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col rounded-2xl overflow-hidden">
          {mobilePairs.map((pair, i) => (
            <div key={i}>
              <div className="relative w-full" style={{ height: "260px" }}>
                <Image src={pair.src} alt={pair.alt} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-4 p-6" style={tealCell}>
                <h4 className="!text-white font-semibold !text-[24px] md:text-2xl">{pair.title}</h4>
                <p className="text-white/90 text-md leading-relaxed">{pair.desc}</p>
                <Link href={pair.href} className="self-start bg-white text-[#1A1A1A] text-md font-medium rounded-full px-6 py-2.5">Know more</Link>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
          {items.map((item, i) =>
            item.type === "text" ? (
              <div key={i} className="flex flex-col justify-center gap-5 p-12" style={{ ...tealCell, minHeight: "420px" }}>
                <h4 className="!text-white font-semibold" style={{ fontSize: "32px" }}>{item.title}</h4>
                <p className="text-white/90 text-[18px] leading-relaxed">{item.desc}</p>
                <Link href={item.href} className="self-start bg-white text-[#1A1A1A] text-md font-medium rounded-full px-9 py-4 hover:bg-gray-100 transition-all">Know more</Link>
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
            <p className="eyebrow-heading text-[#9E2016] font-semibold uppercase mb-4">
              Academic Approach
            </p>
            <h3 className="text-[#1A1A1A] font-semibold">A Holistic and Mentorship-Led Learning Approach</h3>
          </div>
          <p className="text-[#333333] text-[18px] w-full max-w-6xl mb-10 md:mx-auto text-center md:text-center">
          At LIDS, our educational approach centers on developing well-rounded dental professionals. We integrate academic learning with hands-on clinical experience to ensure our students gain the practical skills required to excel in real-world dental practices.
          </p>
           <div className="relative w-full md:max-w-6xl md:mx-auto h-[280px] md:h-[500px] rounded-2xl overflow-hidden mb-16 md:mb-8"
  style={{ boxShadow: "inset 0 0 0 4px rgba(255, 255, 255, 0.5)" }}>
  <Image src="/assets/academic-approach.webp" alt="LIDS Building" fill className="md:object-cover" />
</div>
        </div>
      </section>
 <CardGrid cards={mvvCards} cols={3} iconSize={80} titleColor="#20B2AA" desktopClassName="-mt-10" mobileClassName="-mt-25"/> 
<FacilitiesOverview
      eyebrow="ACADEMIC FACILITIES Overview"
      heading="Experience World-Class Facilities at LIDS"
      description="At LIDS, we believe that true excellence grows in a balanced environment. Our
vibrant campus goes beyond the classroom, offering a dynamic range of
extracurricular activities and modern amenities designed for your holistic
development."
      facilities={facilities}
      blobColor="false"
    />


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