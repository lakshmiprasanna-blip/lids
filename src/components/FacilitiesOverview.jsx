"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import OutlineBtn from "./OutlineBtn";

const circleShadow =
  "0px 15.5px 6.3px rgba(26,26,26,0.01), 0px 9.2px 5.6px rgba(26,26,26,0.02), 0px 4.2px 4.2px rgba(26,26,26,0.03), 0px 0.7px 2.1px rgba(26,26,26,0.04), inset 0px 1.4px 8.5px rgba(255,255,255,0.25)";

const navBtn =
  "shrink-0 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200 w-12 h-12";

function FacilityCard({ item }) {
  return (
    <div className="group flex flex-col items-center gap-4 cursor-pointer">
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110 w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
        <div className="absolute inset-0 rounded-full" style={{ background: "rgba(158,255,238,0.12)", boxShadow: circleShadow, border: "0.7px solid #A5E7F0" }} />
        <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)" }} />
        <div className="relative w-[28px] h-[28px] md:w-[40px] md:h-[40px]">
          <Image src={item.icon} alt={item.label} fill className="object-cover transition-all duration-300 group-hover:[filter:brightness(0.6)_saturate(1.5)]" />
        </div>
      </div>
      <span className="text-[#20B2AA] group-hover:text-[#107B71] transition-colors duration-300 text-sm md:text-md font-medium text-center">{item.label}</span>
    </div>
  );
}

export default function FacilitiesOverview({
  eyebrow = "Facilities Overview",
  heading = "Experience World-Class Facilities at LIDS",
  description = "At LIDS, we believe that true excellence grows in a balanced environment. Our vibrant campus goes beyond the classroom, offering a dynamic range of extracurricular activities and modern amenities designed for your holistic development.",
  facilities = [],
  blobColor = "#CFEFED",
  buttonText = "Explore More",
}) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(facilities.length / 4);
  const prev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage((p) => (p + 1 >= totalPages ? 0 : p + 1));
  const visible = facilities.slice(page * 4, page * 4 + 4);

  return (
    <section className="relative w-full py-25">
      <div className="relative container">
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute rounded-full hidden xl:block" style={{ width: 344, height: 460, top: -200, left: 0, background: blobColor, filter: "blur(60px)", transform: "rotate(-90deg)" }} />
          <div className="absolute rounded-full" style={{ width: 279, height: 347, bottom: -80, left: -90, background: blobColor, filter: "blur(170px)", zIndex: 10 }} />
        <div className="absolute rounded-full xl:hidden" style={{ width: "154px", height: "204px", top: "-150px", right: "-200px", background: blobColor, filter: "blur(120px)", zIndex: 0 }} />
  <div className="absolute rounded-full xl:hidden" style={{ width: "154px", height: "204px", bottom: "-100px", left: "-200px", background: blobColor, filter: "blur(120px)", zIndex: 0 }} />

        </div>

        <div className="relative z-10 text-left md:text-center mb-16">
          <p className="text-[#9E2016] text-[18px] font-semibold uppercase mb-4">{eyebrow}</p>
          <h3 className="text-[#1A1A1A] font-semibold">{heading}</h3>
          <p className="mt-4 text-[#656C7B] text-[18px] max-w-[1062px] mx-auto">{description}</p>
        </div>

        {/* Grid: mobile shows 4 paginated, desktop shows all */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-y-10 md:gap-y-12 gap-x-4 md:gap-x-6 max-w-[1080px] mx-auto">
          {(facilities.length > 4 ? { mobile: visible } : null) && (
            <>
              <div className="contents md:hidden">
                {visible.map((item, i) => <FacilityCard key={i} item={item} />)}
              </div>
              <div className="contents max-md:hidden">
                {facilities.map((item, i) => <FacilityCard key={i} item={item} />)}
              </div>
            </>
          )}
        </div>

        {/* Desktop button */}
        <div className="relative z-10 hidden md:flex justify-center mt-10">
          <OutlineBtn href="/facilities" width="159px" height="48px">{buttonText}</OutlineBtn>
        </div>
        <div className="relative z-10 md:hidden flex items-center justify-center gap-10 p-5">
          <button onClick={prev} className={navBtn}><ArrowLeft size={20} /></button>
          <Link href="/facilities" className="text-[#9E2016] text-md font-medium border border-[#9E2016] rounded-[65px] hover:bg-[#9E2016] hover:!text-white transition-all duration-200 flex items-center justify-center flex-shrink-0" style={{ width: "159px", height: "48px" }}>
            Explore More
          </Link>
          <button onClick={next} className={navBtn}><ArrowRight size={20} /></button>
        </div>
      </div>
    </section>
  );
}