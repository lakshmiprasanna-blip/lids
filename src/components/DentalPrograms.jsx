"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import OutlineBtn from "./OutlineBtn";
import { getEvents } from "@/lib/getEvents";

const blurStyle = { background: "#CFEFED", filter: "blur(196px)", transform: "rotate(-90deg)" };
const cardStyle = { border: "1px solid #E5F3F25C", backdropFilter: "blur(14.5px)", boxShadow: " 0px 6px 6px 0px #EBFDFF33, 0px 13px 13.9px 0px #C9F9FF33" };
const cardGlow = { boxShadow: "inset 0 0 10px 10px rgba(198, 228, 226, 0.9)" };
const arrowBtn = "shrink-0 flex items-center justify-center rounded-full bg-white border border-[#9E2016] hover:bg-[#9E2016] hover:text-white transition-all duration-200 text-[#9E2016] cursor-pointer";
const imgWrap = "relative overflow-hidden";
const imgClass = "object-cover transition-transform duration-500 group-hover:scale-110";
const contentClass = "transition-colors duration-300 group-hover:bg-[#9EFFEE1F]";

export default function DentalPrograms({
  label = "OUR PROGRAMS",
  title = "Explore Our Comprehensive Dental Programs",
  mobileTitle = "Explore Our\nDental Programs",
  subtitle = "Discover a wide range of medical courses tailored to meet your diverse educational needs.",
  programs = [],
  linkHref = "/programs",
  linkText = "Know more",
  showHeading = true,
  buttonText = "Know More",
  mobileStack = false,
  
}) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? programs.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1 >= programs.length ? 0 : c + 1));

  return (
<section className="relative bg-white section-py">
  <div className="absolute pointer-events-none z-0 rounded-full hidden xl:block" style={{ width: "344px", height: "460px", top: "111px", left: "76px", background: "#CFEFED", filter: "blur(60px)", transform: "rotate(-90deg)" }} />
  <div className="absolute pointer-events-none z-[2] rounded-full hidden xl:block" style={{ width: "344px", height: "460px", bottom: "0px", right: "0px", background: "#CFEFED", filter: "blur(60px)", transform: "rotate(-90deg)" }} />
  <div className="absolute pointer-events-none z-0 rounded-full xl:hidden" style={{ width: "180px", height: "180px", top: "54px", right: "-40px", background: "#CFEFED", filter: "blur(50px)" }} />
  <div className="absolute pointer-events-none z-0 rounded-full xl:hidden" style={{ width: "171px", height: "229px", bottom: "60px", left: "-40px", background: "#CFEFED", filter: "blur(50px)" }} />

  <div className="relative z-10 container">
    {showHeading && (
      <div className="text-center mb-10 space-y-4">
        <p className="eyebrow-heading text-[#9E2016] font-semibold uppercase mb-4 text-left md:text-center">{label}</p>
        <h3 className="text-[#1A1A1A] font-semibold hidden md:block text-center">{title}</h3>
        <h3 className="text-[#1A1A1A] font-semibold md:hidden text-left" style={{ fontSize: "28px" }}>{mobileTitle}</h3>
        <p className="mt-4 text-[#7A7A7A] text-[18px] max-w-7xl mx-auto text-left md:text-center">{subtitle}</p>
      </div>
    )}
    {/* Desktop grid: xl (1280px) and up */}
    <div className="hidden xl:grid xl:grid-cols-3 gap-6">
      {programs.map((item, i) => (
        <div key={i} className="group w-full rounded-[24px] overflow-hidden bg-white" style={cardGlow}>
          <div className={`${imgWrap} h-[280px] rounded-t-[24px]`}>
            <Image src={item.image} alt={item.title} fill className={imgClass} />
            <div className="absolute top-5 left-5 bg-[#FFFFFFCC] rounded-full px-4 py-1" style={{ border: "2px solid #9E20165E" }}>
              <span className="text-[#9E2016] text-[14px] font-medium">{item.years}</span>
            </div>
          </div>
          <div className={`${contentClass} h-[280px] rounded-b-[24px] p-6 flex flex-col justify-between`} style={{ border: "10px solid #E5F3F25C" }}>
            <div className="flex flex-col gap-3">
              <h4 className="card-title text-lg font-semibold">{item.title}</h4>
              <p className="text-[#7A7A7A] text-md leading-relaxed">{item.desc}</p>
            </div>
            <OutlineBtn href="/facilities" width="159px" height="48px" icon={false}>{buttonText}</OutlineBtn>
          </div>
        </div>
      ))}
    </div>
    {/* Carousel: below xl (mobile, tablet, 1024px) */}
    {!mobileStack && (
      <div className="flex flex-col gap-6 xl:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {programs.map((item, i) => (
              <div
                key={i}
                className="group rounded-[24px] overflow-hidden shrink-0 mr-4 bg-white"
                style={{ width: "calc(100% - 1rem)", ...cardGlow }}
              >
                <div className={`${imgWrap} rounded-t-[24px]`} style={{ height: "240px" }}>
                  <Image src={item.image} alt={item.title} fill className={imgClass} />
                  <div className="absolute top-5 left-5 bg-white rounded-full px-4 py-2" style={{ border: "2px solid #9E20165E" }}>
                    <span className="text-[#9E2016] text-sm font-medium">{item.years}</span>
                  </div>
                </div>
                <div className={`${contentClass} h-[265px] md:h-[220px] rounded-b-[16px] p-6 flex flex-col justify-between`} style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.16) 100%)", border: "1px solid #A5E7F07A", backdropFilter: "blur(14.5px)", WebkitBackdropFilter: "blur(14.5px)", boxShadow: "inset 0px 2px 12px 0px #FFFFFF40, 0px 6px 6px 0px #EBFDFF33, 0px 13px 13.9px 0px #C9F9FF33" }}>
                  <h4 className="text-[#1A1A1A] text-xl font-semibold">{item.title}</h4>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed">{item.desc}</p>
                  <Link href={item.href || linkHref} className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium" style={{ width: "159px", height: "48px", border: "1px solid #9E2016", color: "#9E2016" }}>
                    {linkText} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 mt-2">
          <button onClick={prev} className="shrink-0 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200" style={{ width: "48px", height: "48px" }}><ArrowLeft size={20} /></button>
          <div className="flex items-center gap-2">
            {programs.map((_, i) => (
              <button key={i} type="button" onClick={() => setCurrent(i)} className="rounded-full transition-all duration-300" style={{ width: "8px", height: "8px", background: i === current ? "#9E2016" : "#D9D9D9" }} />
            ))}
          </div>
          <button onClick={next} className="shrink-0 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200" style={{ width: "48px", height: "48px" }}><ArrowRight size={20} /></button>
        </div>
      </div>
    )}
  </div>
</section>
  );
}

export function NewsEvents({ events = [], buttonText = "View all" }) {
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1280) setItemsPerPage(3);
      else if (width >= 1024) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);
  const prev = () => setCurrent((c) => (c === 0 ? Math.max(events.length - itemsPerPage, 0) : c - 1));
  const next = () => setCurrent((c) => (c + itemsPerPage >= events.length ? 0 : c + 1));
  if (events.length === 0) return null;
  return (
    <section className="relative bg-white section-py overflow-x-clip">
      <div className="absolute pointer-events-none z-0 rounded-full" style={{ width: "344px", height: "460px", top: "111px", left: "76px", ...blurStyle }} />
  <div className="absolute pointer-events-none z-0 rounded-full" style={{ width: "417px", height: "400px", top: "569px", left: "1626px", background: "#CFEFED", opacity: 0.51, filter: "blur(186px)", }}/>      <div className="relative z-10 container">
        <div className="flex items-center justify-between mb-16">
          <div>
            <p className="eyebrow-heading text-[#9E2016] text-center md:text-left font-semibold uppercase mb-4">NEWS & EVENTS</p>
            <h3 className="text-[#1A1A1A] text-center md:text-left font-semibold">Upcoming Events & Campus News</h3>
          </div>
          <div className="hidden md:block">
            <OutlineBtn href="/facilities" width="159px" height="48px"> {buttonText}</OutlineBtn>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative flex items-center px-2">
            <button onClick={prev} className={arrowBtn} style={{ width: "56px", height: "56px", position: "absolute", left: "-15px", zIndex: 10 }}><ArrowLeft size={20} /></button>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6 flex-1">
              {events.slice(current, current + itemsPerPage).map((item, i) => (
                <div key={item.id ?? i} className="group w-full rounded-[24px] overflow-hidden bg-white" style={cardGlow}>
                  <div className={`${imgWrap} h-[220px] xl:h-[260px] rounded-t-[24px] bg-[#F2F2F2]`}>
                    {item.image && (
                      <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 33vw" priority={i === 0} className={imgClass} />
                    )}                    <div className="absolute top-[20px] left-[20px] xl:top-[25px] xl:left-[25px] text-xs font-medium rounded-[32px] cursor-pointer transition-all duration-200" style={{ padding: "6px 14px", background: "#FFFFFF80", border: "1px solid #9E2016", color: "#9E2016" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#20B2AA"; e.currentTarget.style.color = "white"; e.currentTarget.style.border = "1px solid #20B2AA"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "#FFFFFF80"; e.currentTarget.style.color = "#9E2016"; e.currentTarget.style.border = "1px solid #9E2016"; }}>
                      {item.category}
                    </div>
                  </div>
                  <div className={`${contentClass} rounded-b-[24px] p-5 xl:p-6 flex flex-col justify-between gap-2 h-[240px] xl:h-[260px]`} style={{ border: "10px solid #E5F3F25C" }}>
                    <p className="text-[#7A7A7A] text-sm xl:text-md">{item.type} • {item.date}</p>
                    <h2 className="text-[#1A1A1A] text-[17px] xl:text-[20px] font-semibold leading-snug">{item.title}</h2>
                    <p className="text-[#9A9A9A] text-sm xl:text-md leading-relaxed line-clamp-3">{item.desc}</p>
                    <Link href="/events" className="inline-flex items-center gap-2 text-[#9E2016] text-sm xl:text-md font-medium group mt-2">
                      <span className="group-hover:underline">Know more</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={next} className={arrowBtn} style={{ width: "56px", height: "56px", position: "absolute", right: "-15px", zIndex: 10 }}><ArrowRight size={20} /></button>
          </div>
        </div>

        <div className="lg:hidden flex flex-col gap-6">
          <div className="group w-full rounded-[24px] overflow-hidden bg-white" style={cardGlow}>
            <div className={`${imgWrap} h-[200px] rounded-t-[24px] bg-[#F2F2F2]`}>
              {events[current].image && (
                <Image src={events[current].image} alt={events[current].title} fill sizes="100vw" className={imgClass} />
              )}              <div className="absolute top-[25px] left-[25px] text-xs font-medium rounded-[32px]" style={{ padding: "8px 16px", background: "#20B2AA", border: "1px solid #20B2AA", color: "white" }}> {events[current].category}
              </div>
            </div>
            <div className={`${contentClass} rounded-b-[24px] p-6 flex flex-col gap-3`} style={cardStyle}>
              <p className="text-[#7A7A7A] text-xs">{events[current].type} • {events[current].date}</p>
              <h4 className="text-[#1A1A1A] text-lg font-semibold">{events[current].title}</h4>
              <p className="text-[#7A7A7A] text-sm leading-relaxed line-clamp-2">{events[current].desc}</p>
              <Link href="/events" className="inline-flex items-center gap-2 text-[#9E2016] text-md font-medium hover:underline">Know more <ArrowRight size={14} /></Link>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <button onClick={prev} className="shrink-0 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200" style={{ width: "48px", height: "48px" }}><ArrowLeft size={20} /></button>
            <Link href="/events" className="text-[#9E2016] text-md font-medium border border-[#9E2016] rounded-[65px] hover:bg-[#9E2016] hover:!text-white transition-all duration-200 flex items-center justify-center" style={{ width: "144px", height: "52px" }}>View all</Link>
            <button onClick={next} className="shrink-0 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200" style={{ width: "48px", height: "48px" }}><ArrowRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}