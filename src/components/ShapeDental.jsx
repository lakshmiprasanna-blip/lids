"use client";

import Image from "next/image";
import Link from "next/link";

export default function ShapeDental() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-20">

      {/* Teal blur — top right */}
      <div
        className="absolute top-[-375px] left-[1142px] w-[831px] h-[836px] rounded-full pointer-events-none"
        style={{ backgroundColor: "#A3E0DC8A", filter: "blur(186px)" }}
      />

      <div className="container flex flex-col md:flex-row items-center gap-12">

        {/* Left — Text */}
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-[#1A1A2E] font-semibold leading-[100%] tracking-[0%]"
            style={{ width: "620px", maxWidth: "100%" }}>
            Shaping the future <br /> of dental excellence
          </h3>
          <p className="text-[#3D3D3D] text-base leading-relaxed">
            At Lenora Institute of Dental Sciences (LIDS), we offer a transformative dental<br/>
            education that blends academic rigor with hands-on clinical training that provide
            state-of-the-art infrastructure, cutting-edge research facilities, and a dynamic
            learning environment. Our programs are designed to mould future dental leaders
            who are well-equipped to meet the challenges of modern dental practice.
          </p>
          <Link
            href="/about"
            className="self-start text-[#9E2016] text-base font-medium border border-[#9E2016] rounded-[65px] hover:bg-[#9E2016] hover:text-white transition-all duration-200"
            style={{
              width: "160px",
              height: "56px",
              padding: "16px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            Know more
          </Link>
        </div>

        {/* Right — Image */}
        <div className="flex-1 flex justify-end">
          <div className="relative w-full max-w-[700px] h-[380px] rounded-2xl overflow-hidden">
            <Image
              src="/assets/shaping-dental.webp"
              alt="Students at LIDS"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}