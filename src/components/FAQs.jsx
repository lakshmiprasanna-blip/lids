"use client";
import { useState } from "react";
import Image from "next/image";

const defaultFaqs = [
  { question: "What facilities are available for students at LIDS?", answer: "LIDS provides state-of-the-art facilities including modern dental labs, digital radiography, CBCT scanners, a well-stocked library, sports facilities, hostel accommodation, cafeteria, and 24/7 surveillance." },
  { question: "Does LIDS provide hostel facilities for students?", answer: "Yes, LIDS provides separate hostel facilities for male and female students with all basic amenities including Wi-Fi, mess, and 24/7 security." },
  { question: "Does LIDS offer postgraduate dental programs?", answer: "Yes, LIDS offers MDS programs in various specializations and PG Diploma programs designed for dental professionals seeking advanced expertise." },
  { question: "What career opportunities are available after completing BDS?", answer: "BDS graduates from LIDS have gone on to work in hospitals, private practices, research institutions, and public health organizations across India and abroad." },
];

const faqItemStyle = {
  background: "#F6FDFE",
  boxShadow: "0px 1px 3px 0px #1A1A1A00, 0px 6px 6px 0px #1A1A1A00, 0px 13px 8px 0px #1A1A1A05, 0px 22px 9px 0px #1A1A1A03, 0px 35px 10px 0px #1A1A1A00, inset 0px -264px 12px 0px #FFFFFF40",
};

const FaqList = ({ faqs, columns, open, setOpen }) => (
  <div className={`grid gap-4 ${columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
    {faqs.map((faq, i) => (
      <div key={i} className="rounded-[24px] p-[2px] cursor-pointer" style={{ border: "1px solid #A5E7F080" }} onClick={() => setOpen(open === i ? null : i)}>
        <div className="rounded-[16px] px-6 py-6" style={faqItemStyle}>
          <div className="flex items-center justify-between gap-4">
            <p className="text-[#1A1A1A] text-md md:text-[24px] font-medium">{faq.question}</p>
            <span className="shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform duration-300" style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#107B71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          {open === i && <p className="mt-4 text-[#7A7A7A] text-md md:text-[18px] leading-relaxed">{faq.answer}</p>}
        </div>
      </div>
    ))}
  </div>
);

export default function FAQs({
  columns = 1,
  faqs = defaultFaqs,
  image = null,
  imageAlt = "FAQ Image",
  bare = false,
  fullWidth = false,
}) {
  const [open, setOpen] = useState(null);

  if (bare) return (
    <div className={fullWidth ? "w-full" : "max-w-[700px]"}>
      <FaqList faqs={faqs} columns={columns} open={open} setOpen={setOpen} />
    </div>
  );

  return (
    <section className="relative w-full bg-white py-20">
      <div className="absolute pointer-events-none rounded-full" style={{ width: "344px", height: "460px", top: "-147px", left: "183px", background: "#CFEFED", filter: "blur(186px)", transform: "rotate(-90deg)" }} />
      <div className="absolute pointer-events-none rounded-full" style={{ width: "344px", height: "460px", top: "400px", right: "100px", background: "#CFEFED", filter: "blur(186px)", transform: "rotate(-90deg)" }} />

      <div className="relative z-10 container">
        {image ? (
          <>
            <div className="lg:hidden flex flex-col gap-6">
              <p className="eyebrow-heading text-[#9E2016] font-semibold uppercase">FAQs</p>
              <h3 className="text-[#1A1A1A] font-semibold">Frequently Asked Questions</h3>
              <div className="relative w-full h-[260px] rounded-2xl overflow-hidden">
                <Image src={image} alt={imageAlt} fill className="object-cover object-center" />
              </div>
              <FaqList faqs={faqs} columns={columns} open={open} setOpen={setOpen} />
            </div>
            <div className="hidden lg:flex flex-row gap-12 items-start">
              <div className="flex-none" style={{ width: "700px" }}>
                <p className="eyebrow-heading text-[#9E2016] font-semibold uppercase mb-4">FAQs</p>
                <h3 className="text-[#1A1A1A] font-semibold mb-10">Frequently Asked Questions</h3>
                <FaqList faqs={faqs} columns={columns} open={open} setOpen={setOpen} />
              </div>
              <div className="flex-1 flex items-start" style={{ marginTop: "120px" }}>
                <div className="relative w-full rounded-2xl overflow-hidden" style={{ minHeight: "520px" }}>
                  <Image src={image} alt={imageAlt} fill className="object-cover object-center" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-12">
              <p className="eyebrow-heading text-[#9E2016] font-semibold uppercase mb-4">FAQs</p>
              <h3 className="text-[#1A1A1A] font-semibold">Frequently Asked Questions</h3>
            </div>
            <div className={fullWidth ? "w-full" : "max-w-[937px] mx-auto"}>
              <FaqList faqs={faqs} columns={columns} open={open} setOpen={setOpen} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}