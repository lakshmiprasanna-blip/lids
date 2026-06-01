"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";

const reviews = [
  {
    quote: '"My journey at Lenora laid the foundation for my career in public health dentistry. The focus on community outreach, hands-on training, and research gave me the skills and confidence I needed. The guidance of my teachers and clinical exposure during my student days have been invaluable in my current role."',
    name: "Dr. Velamala Avinash",
    designation: "BDS 2018 - Prosthodontist, Apollo Hospitals",
    image: "/assets/alumni/avinash.webp",
  },
  {
    quote: '"My journey at Lenora laid the foundation for my career in public health dentistry. The focus on community outreach, hands-on training, and research gave me the skills and confidence I needed. The guidance of my teachers and clinical exposure during my student days have been invaluable in my current role."',
    name: "Dr. Velamala Avinash",
    designation: "BDS 2018 - Prosthodontist, Apollo Hospitals",
    image: "/assets/alumni/avinash.webp",
  },
  {
    quote: '"My journey at Lenora laid the foundation for my career in public health dentistry. The focus on community outreach, hands-on training, and research gave me the skills and confidence I needed. The guidance of my teachers and clinical exposure during my student days have been invaluable in my current role."',
    name: "Dr. Velamala Avinash",
    designation: "BDS 2018 - Prosthodontist, Apollo Hospitals",
    image: "/assets/alumni/avinash.webp",
  },
  {
    quote: '"My journey at Lenora laid the foundation for my career in public health dentistry. The focus on community outreach, hands-on training, and research gave me the skills and confidence I needed. The guidance of my teachers and clinical exposure during my student days have been invaluable in my current role."',
    name: "Dr. Velamala Avinash",
    designation: "BDS 2018 - Prosthodontist, Apollo Hospitals",
    image: "/assets/alumni/avinash.webp",
  },
  {
    quote: '"My journey at Lenora laid the foundation for my career in public health dentistry. The focus on community outreach, hands-on training, and research gave me the skills and confidence I needed. The guidance of my teachers and clinical exposure during my student days have been invaluable in my current role."',
    name: "Dr. Velamala Avinash",
    designation: "BDS 2018 - Prosthodontist, Apollo Hospitals",
    image: "/assets/alumni/avinash.webp",
  },
];

export default function AlumniStories() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  return (
    <section className="w-full bg-white py-8 overflow-hidden">

      {/* HEADING */}
      <div className="container text-center mb-16">
        <p className="text-[#9E2016] text-xs font-semibold tracking-widest uppercase mb-4">ALUMNI STORIES</p>
        <h3 className="text-[#1A1A1A] font-semibold">
          Voices That Echo <br /> Through Generations
        </h3>
      </div>

      {/* MARQUEE TRACK */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{
            width: "max-content",
            animation: "marquee 30s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 rounded-[24px] shrink-0"
              style={{
                width: "708px",
                minHeight: "322px",
                background: "#FFFFFF1A",
                border: "1px solid #A5E7F07A",
                boxShadow: `
                  inset 0px 2px 12px 0px #FFFFFF40,
                  0px 1px 3px 0px #FAFAFA0A,
                  0px 6px 6px 0px #F6F6F608,
                  0px 13px 8px 0px #EEEEEE05,
                  0px 22px 9px 0px #D8D8D803
                `,
              }}
            >
              <p className="text-[#3D3D3D] text-base leading-relaxed italic">{r.quote}</p>
              <div className="flex items-center gap-3 mt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image src={r.image} alt={r.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[#1A1A1A] text-sm font-semibold">{r.name}</p>
                  <p className="text-[#7A7A7A] text-xs">{r.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="flex justify-center mt-12">
        <Link
          href="/alumni"
          className="text-[#9E2016] text-sm font-medium border border-[#9E2016] rounded-[65px] hover:bg-[#9E2016] hover:text-white transition-all duration-200 flex items-center justify-center"
          style={{ width: "144px", height: "52px", padding: "16px 32px" }}
        >
          View all
        </Link>
      </div>

      {/* MARQUEE ANIMATION */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
}