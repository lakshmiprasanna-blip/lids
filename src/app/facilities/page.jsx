"use client";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

const cardStyle = {
  border: "2px solid #E5F3F2A1",
  borderRadius: "16px",
  backdropFilter: "blur(13.3px)",
  WebkitBackdropFilter: "blur(13.3px)",
  boxShadow: "inset 0 0 40px 10px rgba(207, 239, 237, 0.6), 0px 6px 6px 0px #EBFDFF33, 0px 13px 8px 0px #C9F9FF33, 0px 22px 9px 0px #E8FCFF33",
};

const facilities = [
  { icon: "/svg/campus.svg",       label: "Our Campus" },
  { icon: "/svg/sports.svg",       label: "Co curricular Activities" },
  { icon: "/svg/facilities.svg",   label: "Research Facilities" },
  { icon: "/svg/library.svg",      label: "Our Library" },
  { icon: "/svg/medical.svg",      label: "Medical Hospital" },
  { icon: "/svg/diagnostic.svg",   label: "Diagnostic Center" },
  { icon: "/svg/mobiledental.svg", label: "Mobile Dental Clinic" },
  { icon: "/svg/workshop.svg",     label: "Workshops" },
  { icon: "/svg/pharma.svg",       label: "Pharmacy Store" },
];

export default function FacilitiesPage() {
  return (
    <main>
      <CTABanner
        label="Facilities"
        title="A Legacy of Excellence in Education and Social Responsibility"
        mobileImage="/assets/about-mob.webp"
      />

      <section className="relative w-full bg-white section-py overflow-hidden">
        <div className="absolute pointer-events-none rounded-full" style={{ width: "1358px", height: "1819px", top: "792px", left: "730px", background: "rgba(207, 239, 237, 0.25)", filter: "blur(186px)", transform: "rotate(-90deg)", zIndex: 0 }} />

        <div className="relative z-10 container">
          <div className="text-center mb-16">
            <p className="text-[#9E2016] text-sm font-semibold tracking-widest uppercase mb-4">FACILITIES</p>
            <h3 className="text-[#1A1A1A] font-semibold">Welcome to the <br /> World of Dental Excellence at LIDS!</h3>
            <p className="mt-4 text-[#333333] text-xl max-w-6xl mx-auto">
              Lenora Institute of Dental Sciences (LIDS) is dedicated to providing high-quality dental education through a balanced approach of academic learning, clinical exposure, and research. With state-of-the-art infrastructure and experienced faculty, we equip our students to be leaders in the field of dentistry.
            </p>
          </div>

         <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {facilities.map((item, i) => (
    <div key={i} className="flex flex-col items-center justify-center gap-4 rounded-[16px] cursor-pointer hover:scale-[1.02] transition-transform duration-300 h-[160px] md:h-[320px]" style={cardStyle}>
      <Image src={item.icon} alt={item.label} width={60} height={60} className="object-contain md:w-[80px] md:h-[80px]" />
      <span className="text-[#1A1A1A] text-sm md:text-base font-medium text-center px-2">{item.label}</span>
    </div>
  ))}
</div>
        </div>
      </section>
    </main>
  );
}