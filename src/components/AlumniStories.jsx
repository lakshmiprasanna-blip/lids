"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

const reviews = [
  {
    quote: '"My journey at Lenora laid the foundation for my career in public health dentistry. The focus on community outreach, hands-on training, and research gave me the skills and confidence I needed. The guidance of my teachers and clinical exposure during my student days have been invaluable in my current role."',
    name: "Dr. Velamala ",
    designation: "BDS 2018 - Prosthodontist, Apollo Hospitals",
    image: "/assets/avinash.webp",
  },
  {
    quote: '"My journey at Lenora laid the foundation for my career in public health dentistry. The focus on community outreach, hands-on training, and research gave me the skills and confidence I needed. The guidance of my teachers and clinical exposure during my student days have been invaluable in my current role."',
    name: "Dr. Velamala Avinash",
    designation: "BDS 2018 - Prosthodontist, Apollo Hospitals",
    image: "/assets/avinash.webp",
  },
  {
    quote: '"My journey at Lenora laid the foundation for my career in public health dentistry. The focus on community outreach, hands-on training, and research gave me the skills and confidence I needed. The guidance of my teachers and clinical exposure during my student days have been invaluable in my current role."',
    name: "Dr. Velamala Avinash",
    designation: "BDS 2018 - Prosthodontist, Apollo Hospitals",
    image: "/assets/avinash.webp",
  },
  {
    quote: '"My journey at Lenora laid the foundation for my career in public health dentistry. The focus on community outreach, hands-on training, and research gave me the skills and confidence I needed. The guidance of my teachers and clinical exposure during my student days have been invaluable in my current role."',
    name: "Dr. Velamala Avinash",
    designation: "BDS 2018 - Prosthodontist, Apollo Hospitals",
    image: "/assets/avinash.webp",
  },
  {
    quote: '"My journey at Lenora laid the foundation for my career in public health dentistry. The focus on community outreach, hands-on training, and research gave me the skills and confidence I needed. The guidance of my teachers and clinical exposure during my student days have been invaluable in my current role."',
    name: "Dr. Velamala Avinash",
    designation: "BDS 2018 - Prosthodontist, Apollo Hospitals",
    image: "/assets/avinash.webp",
  },
];

export default function AlumniStories() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [mobileSlide, setMobileSlide] = useState(0);

  const prev = () => setMobileSlide((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setMobileSlide((c) => (c + 1 >= reviews.length ? 0 : c + 1));

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      
      <div className="container text-center mb-16">
        <p className="text-[#9E2016] text-[18px] font-semibold uppercase mb-4">ALUMNI STORIES</p>
        <h3 className="text-[#1A1A1A] font-semibold">Voices That Echo <br /> Through Generations</h3>
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col gap-6 px-5">
<div className="flex flex-col justify-between p-6 rounded-[24px]" style={{ 
  minHeight: "280px", 
  border: "1px solid #A5E7F07A", 
  boxShadow: "inset 0px 2px 12px 0px #FFFFFF40, inset 0px 13px 8px 0px #C9F9FF33, inset 0px 22px 9px 0px #E8FCFF33",
}}>         <p className="text-[#3D3D3D] text-sm leading-relaxed italic">{reviews[mobileSlide].quote}</p>
          <div className="flex items-center gap-3 mt-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
              <Image src={reviews[mobileSlide].image} alt={reviews[mobileSlide].name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-[#1A1A1A] text-sm font-semibold">{reviews[mobileSlide].name}</p>
              <p className="text-[#7A7A7A] text-xs">{reviews[mobileSlide].designation}</p>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center gap-6">
          <button onClick={prev} className="shrink-0 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200" style={{ width: "48px", height: "48px" }}>
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setMobileSlide(i)} className="rounded-full transition-all duration-300" style={{ width: i === mobileSlide ? "20px" : "8px", height: "8px", background: i === mobileSlide ? "#9E2016" : "#D9D9D9" }} />
            ))}
          </div>
          <button onClick={next} className="shrink-0 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200" style={{ width: "48px", height: "48px" }}>
            <ArrowRight size={20} />
          </button>
        </div> */}
      </div>

      {/* DESKTOP MARQUEE */}
      <div className="hidden md:block relative w-full overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div ref={trackRef} className="flex gap-6" style={{ width: "max-content", animation: "marquee 30s linear infinite", animationPlayState: paused ? "paused" : "running" }}>
          {[...reviews, ...reviews].map((r, i) => (
<div key={i} className="group flex flex-col justify-center p-10 rounded-[24px] shrink-0 bg-[#FFFFFF1A] hover:bg-[#e9faf8] transition-colors duration-300" style={{ 
  width: "708px", 
  minHeight: "322px", 
  border: "1px solid #A5E7F07A", 
  boxShadow: "inset 0px 2px 12px 0px #FFFFFF40, inset 0px 13px 8px 0px #C9F9FF33, inset 0px 22px 9px 0px #E8FCFF33",
}}>            <p className="text-[#3D3D3D] group-hover:text-black text-[18px] leading-relaxed italic">{r.quote}</p>
              <div className="flex items-center gap-3 mt-6">
              <div className="relative w-18 h-18 rounded-full overflow-hidden shrink-0">
              <Image src={r.image} alt={r.name} fill className="object-cover" />
              </div>
            <div>
                <p className="text-[#1A1A1A] group-hover:text-[#8E0019] text-[18px] font-semibold">{r.name}</p>
                <p className="text-[#7A7A7A] text-md">{r.designation}</p>
            </div>
             </div>
           </div>
          ))}
        </div>
      </div>

    <div className="md:hidden flex items-center justify-center gap-10 p-5">
            <button onClick={prev} className="shrink-0 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200" style={{ width: "48px", height: "48px" }}><ArrowLeft size={20} /></button>
            <Link href="/events" className="text-[#9E2016] text-md font-medium border border-[#9E2016] rounded-[65px] hover:bg-[#9E2016] hover:!text-white transition-all duration-200 flex items-center justify-center" style={{ width: "144px", height: "52px" }}>View all</Link>
            <button onClick={next} className="shrink-0 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200" style={{ width: "48px", height: "48px" }}><ArrowRight size={20} /></button>
          </div>

      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}