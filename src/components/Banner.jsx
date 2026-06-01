"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { number: "355+",      label: "Dental Unit Chairs" },
  { number: "18+",       label: "Academic Experience" },
  { number: "1,00,000+", label: "Patients per annum" },
  { number: "1700+",     label: "Research Publications" },
  { number: "98+",       label: "Yearly Surgeries" },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % stats.length), 2000);
    return () => clearInterval(timer);
  }, []);  return (
    <section className="relative w-full">

      {/* MOBILE */}
      <div className="md:hidden relative w-full h-[580px] overflow-hidden">
        <Image src="/assets/banner-mob.webp" alt="LIDS Banner" fill priority className="object-cover" style={{ objectPosition: "center 40%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(360deg, #107B71 7.97%, rgba(4, 146, 144, 0.82) 36.52%, rgba(165, 231, 240, 0) 58.91%, rgba(255, 255, 255, 0) 78.52%)" }} />
        <div className="absolute bottom-8 left-0 right-0 px-6 flex flex-col gap-3">
          <p className="text-[#FFF0D2] text-sm font-medium">Welcome to LIDS</p>
          <h3 className="!text-[#FAFBFD] font-bold" style={{ fontSize: "32px", lineHeight: "1.2" }}>A Place to Study Dentistry with Real Clinical Exposure</h3>
          <p className="text-white text-sm leading-relaxed opacity-90">Join LIDS and experience hands-on learning, cutting-edge technology, and a dynamic curriculum that prepares you for success in the world of dentistry</p>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block relative w-full h-[500px] lg:h-[600px] overflow-hidden">
        <Image src="/assets/lids-banner.webp" alt="LIDS Banner" fill priority className="object-cover" style={{ objectPosition: "center 40%" }} />
      </div>

     {/* MOBILE STATS */}
<div className="md:hidden w-full overflow-x-auto scrollbar-hide" style={{ backgroundColor: "#E6E6E6" }}>
  <div className="flex" style={{ width: `${stats.length * 100}vw` }}>
    {stats.map((stat, i) => (
      <div key={i} className="flex items-center gap-6 px-6 py-6" style={{ width: "100vw" }}>
        <span className="font-bold leading-none" style={{ fontSize: "46px", color: "#107B71" }}>
          {stat.number}
        </span>
        <span className="font-medium" style={{ fontSize: "18px", color: "#656C7B" }}>
          {stat.label}
        </span>
        <div className="shrink-0 h-10 ml-auto" style={{ width: "1px", backgroundColor: "#AAAAAA" }} />
      </div>
    ))}
  </div>
</div>
      <div className="hidden md:flex items-center w-full md:h-[120px]" style={{ backgroundColor: "#20B2AACC" }}>
        <div className="container flex items-center justify-between w-full">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center">
              <div className="flex flex-col items-center gap-1 text-center px-4 md:px-8">
                <span className="text-white text-4xl font-bold leading-none">{stat.number}</span>
                <span className="text-white text-sm opacity-90 whitespace-nowrap">{stat.label}</span>
              </div>
              {index < stats.length - 1 && (
                <div className="shrink-0" style={{ width: "1px", height: "30px", backgroundColor: "#E6E6E6" }} />
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}