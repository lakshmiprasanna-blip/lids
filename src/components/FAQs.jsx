"use client";

import { useState } from "react";

const faqs = [
  { question: "What facilities are available for students at LIDS?", answer: "LIDS provides state-of-the-art facilities including modern dental labs, digital radiography, CBCT scanners, a well-stocked library, sports facilities, hostel accommodation, cafeteria, and 24/7 surveillance." },
  { question: "What facilities are available for students at LIDS?", answer: "LIDS provides state-of-the-art facilities including modern dental labs, digital radiography, CBCT scanners, a well-stocked library, sports facilities, hostel accommodation, cafeteria, and 24/7 surveillance." },
  { question: "Does LIDS provide hostel facilities for students?", answer: "Yes, LIDS provides separate hostel facilities for male and female students with all basic amenities including Wi-Fi, mess, and 24/7 security." },
  { question: "Does LIDS offer postgraduate dental programs?", answer: "Yes, LIDS offers MDS programs in various specializations and PG Diploma programs designed for dental professionals seeking advanced expertise." },
  { question: "What career opportunities are available after completing BDS?", answer: "BDS graduates from LIDS have gone on to work in hospitals, private practices, research institutions, and public health organizations across India and abroad." },
];

export default function FAQs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative w-full overflow-hidden bg-white py-24">

      {/* TOP LEFT BLUR */}
      <div className="absolute pointer-events-none rounded-full" style={{ width: "344px", height: "460px", top: "-147px", left: "183px", background: "#CFEFED", filter: "blur(186px)", transform: "rotate(-90deg)" }} />

      {/* BOTTOM RIGHT BLUR */}
      <div className="absolute pointer-events-none rounded-full" style={{ width: "344px", height: "460px", top: "400px", right: "100px", background: "#CFEFED", filter: "blur(186px)", transform: "rotate(-90deg)" }} />

      <div className="relative z-10 container">

        {/* HEADING */}
        <div className="text-center mb-12">
          <p className="text-[#9E2016] text-xs font-semibold tracking-widest uppercase mb-4">FAQs</p>
          <h3 className="text-[#1A1A1A] font-semibold">Frequently Asked Questions</h3>
        </div>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-4 max-w-[937px] mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-[24px] p-[2px] cursor-pointer"
              style={{ border: "1px solid #A5E7F080" }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              {/* INNER GLASSY BOX */}
              <div
                className="rounded-[16px] px-6 py-6"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.16) 100%)",
                  boxShadow: "inset 0px 2px 12px 0px #FFFFFF40, 0px 6px 6px 0px #EBFDFF33, 0px 1px 3px 0px #FDFFFF08, 0px 13px 8px 0px #F0FDFF08, 0px 22px 9px 0px #E4FFFA1F, 0px 35px 10px 0px #EFFDFF33",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[#1A1A1A] text-base font-medium">{faq.question}</p>
                  <span className="shrink-0">
                    <svg
                      width="20" height="20" viewBox="0 0 20 20" fill="none"
                      className="transition-transform duration-300"
                      style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="#107B71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

                {/* ANSWER */}
                {open === i && (
                  <p className="mt-4 text-[#7A7A7A] text-sm leading-relaxed border-t border-[#A5E7F080] pt-4">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}