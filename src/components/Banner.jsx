"use client";

import Image from "next/image";

const stats = [
  { number: "355+",      label: "Dental Unit Chairs" },
  { number: "18+",       label: "Academic Experience" },
  { number: "1,00,000+", label: "Patients per annum" },
  { number: "1700+",     label: "Research Publications" },
  { number: "98+",       label: "Yearly Surgeries" },
];

export default function Banner() {
  return (
    <section className="relative w-full">

      {/* Banner Image */}
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image src="/assets/lids-banner.webp" alt="LIDS Banner" fill priority className="object-cover !top-[-55px] !h-[calc(100%+55px)]" />
      </div>

      {/* Stats Bar */}
      <div className="w-full flex items-center py-6 md:py-0 md:h-[120px]" style={{ backgroundColor: "#20B2AACC" }}>
        <div className="container grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 w-full">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-4 md:gap-10">
              <div className="flex flex-col items-center gap-1 w-full text-center px-2 md:px-10">
                <span className="text-white text-2xl md:text-4xl font-bold leading-none">{stat.number}</span>
                <span className="text-white text-xs md:text-sm opacity-90 whitespace-nowrap">{stat.label}</span>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block shrink-0" style={{ width: "1px", height: "30px", backgroundColor: "#E6E6E6" }} />
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
    
  );
}