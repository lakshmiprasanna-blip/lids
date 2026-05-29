"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Bachelor of Dental Surgery (BDS)",
    years: "5 years",
    image: "/assets/BDS.webp",
    desc: "Start your professional journey with our comprehensive BDS program, where foundational science meets advanced clinical practice.",
  },
  {
    title: "Master of Dental Surgery (MDS)",
    years: "3 years",
    image: "/assets/MDS.webp",
    desc: "Elevate your expertise with our MDS specialisations, designed for dentists aiming to achieve mastery in complex oral healthcare.",
  },
  {
    title: "PG Diploma Programs",
    years: "3 years",
    image: "/assets/PG.webp",
    desc: "Fast-track your career growth with our intensive PG Diploma programs, focusing on specialized clinical skills and the latest dental technologies.",
  },
];

export default function DentalPrograms() {
  return (
    <section className="relative overflow-hidden bg-white py-20">

      {/* TOP LEFT BLUR */}
      <div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{
          width: "344px",
          height: "460px",
          top: "111px",
          left: "76px",
          background: "#CFEFED",
          filter: "blur(186px)",
          transform: "rotate(-90deg)",
        }}
      />

      {/* BOTTOM RIGHT BLUR */}
      <div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{
          width: "344px",
          height: "460px",
          top: "591px",
          left: "1412px",
          background: "#CFEFED",
          filter: "blur(186px)",
          transform: "rotate(-90deg)",
        }}
      />

      <div className="relative z-10 container">
        <div className="text-center mb-16">
          <p className="text-[#9E2016] text-md font-semibold tracking-widest uppercase mb-4">
            OUR PROGRAMS
          </p>
          <h3 className="text-[#1A1A1A] font-semibold">
            Explore Our Comprehensive Dental Programs
          </h3>
          <p className="mt-4 text-[#7A7A7A] text-base max-w-3xl mx-auto">
            Discover a wide range of medical courses tailored to meet your diverse educational needs.
          </p>
        </div>

        {/* 3 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((item, index) => (
            <div key={index} className="w-full rounded-[24px] overflow-hidden">

              {/* IMAGE */}
              <div className="relative h-[280px] overflow-hidden rounded-t-[24px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />

                {/* YEARS BADGE */}
                <div
                  className="absolute top-5 left-5 bg-white rounded-full px-4 py-2"
                  style={{ border: "2px solid #9E20165E" }}
                >
                  <span className="text-[#9E2016] text-[13px] font-medium">{item.years}</span>
                </div>
              </div>

              {/* CONTENT */}
              <div
                className="h-[265px] rounded-b-[24px] p-6 flex flex-col justify-between"
                style={{
                    border: "8px solid #E5F3F25C",
                 
                }}
              >
                <div className="flex flex-col gap-3">
                  <h4 className="text-[#1A1A1A] text-lg font-semibold">{item.title}</h4>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* BUTTON */}
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 border border-[#9E2016] rounded-full text-[#9E2016] text-sm font-medium hover:bg-[#9E2016] hover:text-white transition-all duration-300"
                  style={{ width: "159px", height: "48px" }}
                >
                  Know more <ArrowRight size={16} />
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}