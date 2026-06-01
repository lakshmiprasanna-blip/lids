"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

const programs = [
  { title: "Bachelor of Dental Surgery (BDS)", years: "5 years", image: "/assets/BDS.webp", desc: "Start your professional journey with our comprehensive BDS program, where foundational science meets advanced clinical practice." },
  { title: "Master of Dental Surgery (MDS)", years: "3 years", image: "/assets/MDS.webp", desc: "Elevate your expertise with our MDS specialisations, designed for dentists aiming to achieve mastery in complex oral healthcare." },
  { title: "PG Diploma Programs", years: "3 years", image: "/assets/PG.webp", desc: "Fast-track your career growth with our intensive PG Diploma programs, focusing on specialized clinical skills and the latest dental technologies." },
];

const events = [
  { category: "Events", type: "Conference", date: "12 September 2025", title: "Annual Dental Conference 2026", desc: "Join us for the Annual Dental Conference 2026 where leading experts in the field of oral health will share the latest trends in dental technology...", image: "/assets/newsevent1.webp" },
  { category: "Events", type: "Workshop", date: "12 September 2025", title: "Community Dental Camp", desc: "As part of our community outreach program, LIDS students and faculty will be conducting a Dental Health Awareness Camp for local residents...", image: "/assets/newsevent1.webp" },
  { category: "Events", type: "Cultural Event", date: "12 September 2026", title: "Freshers' Welcome Party 2026", desc: "Our Freshers' Welcome Party for the new batch of BDS and MDS students was a huge success!", image: "/assets/newsevent1.webp" },
  { category: "Events", type: "Conference", date: "15 October 2025", title: "Oral Health Symposium", desc: "A gathering of leading dental professionals to discuss advancements in oral healthcare...", image: "/assets/newsevent1.webp" },
  { category: "Events", type: "Workshop", date: "20 November 2025", title: "Dental Technology Workshop", desc: "Hands-on workshop covering the latest dental technologies and equipment...", image: "/assets/newsevent1.webp" },
];

const blurStyle = { background: "#CFEFED", filter: "blur(186px)", transform: "rotate(-90deg)" };
const cardStyle = { border: "1px solid #E5F3F25C", backdropFilter: "blur(14.5px)", boxShadow: "inset 0px 2px 12px 0px #FFFFFF40, 0px 6px 6px 0px #EBFDFF33, 0px 13px 13.9px 0px #C9F9FF33" };
const arrowBtn = "shrink-0 flex items-center justify-center rounded-full bg-white border border-[#9E2016] hover:bg-[#9E2016] hover:text-white transition-all duration-200 text-[#9E2016]";
const arrowBtnTeal = "shrink-0 flex items-center justify-center rounded-full bg-[#20B2AA] text-white hover:bg-[#107B71] transition-all duration-200";

export default function DentalPrograms() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? programs.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1 >= programs.length ? 0 : c + 1));
const [prevActive, setPrevActive] = useState(false);
const [nextActive, setNextActive] = useState(false);
  return (
    <section className="relative overflow-hidden bg-white py-10">
      <div className="absolute pointer-events-none z-0 rounded-full" style={{ width: "344px", height: "460px", top: "111px", left: "76px", ...blurStyle }} />
      <div className="absolute pointer-events-none z-0 rounded-full" style={{ width: "344px", height: "460px", top: "591px", left: "1412px", ...blurStyle }} />

      <div className="relative z-10 container">

        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-[#FCAF16] md:text-[#9E2016] text-sm font-semibold tracking-widest uppercase mb-4">OUR PROGRAMS</p>
          <h3 className="text-[#1A1A1A] font-semibold hidden md:block">Explore Our Comprehensive Dental Programs</h3>
          <h3 className="text-[#1A1A1A] font-semibold md:hidden" style={{ fontSize: "28px" }}>Explore Our<br />Dental Programs</h3>
          <p className="mt-4 text-[#7A7A7A] text-base max-w-3xl mx-auto">Discover a wide range of medical courses tailored to meet your diverse educational needs.</p>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((item, i) => (
            <div key={i} className="w-full rounded-[24px] overflow-hidden">
              <div className="relative h-[280px] overflow-hidden rounded-t-[24px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute top-5 left-5 bg-white rounded-full px-4 py-2" style={{ border: "2px solid #9E20165E" }}>
                  <span className="text-[#9E2016] text-[13px] font-medium">{item.years}</span>
                </div>
              </div>
              <div className="h-[265px] rounded-b-[24px] p-6 flex flex-col justify-between" style={{ border: "8px solid #E5F3F25C" }}>
                <div className="flex flex-col gap-3">
                  <h4 className="text-[#1A1A1A] text-lg font-semibold">{item.title}</h4>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed">{item.desc}</p>
                </div>
                <Link href="/programs" className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium border border-[#9E2016] text-[#9E2016] hover:bg-[#9E2016] hover:text-white transition-all duration-300" style={{ width: "159px", height: "48px" }}>
                  Know more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col gap-6">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(calc(-${current * 88}vw))` }}>
              {programs.map((item, i) => (
                <div key={i} className="rounded-[24px] overflow-hidden shrink-0 mr-4" style={{ width: "85vw" }}>
                  <div className="relative overflow-hidden rounded-t-[24px]" style={{ height: "240px" }}>
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                    <div className="absolute top-5 left-5 bg-white rounded-full px-4 py-2" style={{ border: "2px solid #9E20165E" }}>
                      <span className="text-[#9E2016] text-[13px] font-medium">{item.years}</span>
                    </div>
                  </div>
                  <div className="rounded-b-[24px] p-6 flex flex-col gap-4 bg-white" style={{ border: "8px solid #E5F3F25C" }}>
                    <h4 className="text-[#1A1A1A] text-xl font-semibold">{item.title}</h4>
                    <p className="text-[#7A7A7A] text-sm leading-relaxed">{item.desc}</p>
                    <Link href="/programs" className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium" style={{ width: "159px", height: "48px", border: "1px solid #FCAF16", color: "#FCAF16" }}>
                      Know more <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button onClick={prev} className="shrink-0 flex items-center justify-center rounded-full transition-all duration-200" style={{ width: "48px", height: "48px", backgroundColor: prevActive ? "#20B2AA" : "white", border: "1px solid #20B2AA", color: prevActive ? "white" : "#20B2AA" }}>
              <ArrowLeft size={20} />
            </button>
            <button onClick={next} className="shrink-0 flex items-center justify-center rounded-full transition-all duration-200" style={{ width: "48px", height: "48px", backgroundColor: nextActive ? "#20B2AA" : "white", border: "1px solid #20B2AA", color: nextActive ? "white" : "#20B2AA" }}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export function NewsEvents() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const visibleMobile = 1;
  const prev = () => setCurrent((c) => (c === 0 ? events.length - visible : c - 1));
  const next = () => setCurrent((c) => (c + visible >= events.length ? 0 : c + 1));
  const prevMobile = () => setCurrent((c) => (c === 0 ? events.length - 1 : c - 1));
  const nextMobile = () => setCurrent((c) => (c + 1 >= events.length ? 0 : c + 1));
  const visibleEvents = events.slice(current, current + visible);

  return (
    <section className="relative overflow-hidden bg-white py-8">
      <div className="absolute pointer-events-none z-0 rounded-full" style={{ width: "344px", height: "460px", top: "111px", left: "76px", ...blurStyle }} />
      <div className="absolute pointer-events-none z-0 rounded-full" style={{ width: "344px", height: "460px", top: "591px", left: "1412px", ...blurStyle }} />

      <div className="relative z-10 container">
        <div className="flex items-center justify-between mb-16">
          <div>
            <p className="text-[#9E2016] text-sm font-semibold tracking-widest uppercase mb-4">NEWS & EVENTS</p>
            <h3 className="text-[#1A1A1A] font-semibold">Upcoming Events & Campus News</h3>
          </div>
          <Link href="/events" className="text-[#9E2016] text-sm font-medium border border-[#9E2016] rounded-[65px] hover:bg-[#9E2016] hover:text-white transition-all duration-200 flex items-center justify-center" style={{ width: "144px", height: "52px" }}>
            View all
          </Link>
        </div>

        {/* DESKTOP & TABLET */}
        <div className="hidden md:block">
          <div className="relative flex items-center">
            <button onClick={prev} className={arrowBtn} style={{ width: "64px", height: "64px", position: "absolute", left: "-32px", zIndex: 10 }}>
              <ArrowLeft size={20} />
            </button>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
              {visibleEvents.map((item, i) => (
                <div key={i} className="w-full rounded-[24px] overflow-hidden">
                  <div className="relative h-[200px] overflow-hidden rounded-t-[24px]">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                    <div
                      className="absolute top-[25px] left-[25px] text-xs font-medium rounded-[32px] cursor-pointer transition-all duration-200"
                      style={{ padding: "8px 16px", background: "#FFFFFF80", border: "1px solid #9E2016", color: "#9E2016", boxShadow: "inset 0px 2px 12px 0px #FFFFFF40" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#20B2AA"; e.currentTarget.style.color = "white"; e.currentTarget.style.border = "1px solid #20B2AA"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "#FFFFFF80"; e.currentTarget.style.color = "#9E2016"; e.currentTarget.style.border = "1px solid #9E2016"; }}
                    >
                      {item.category}
                    </div>
                  </div>
                  <div className="rounded-b-[24px] p-6 flex flex-col justify-between bg-white h-[220px]" style={cardStyle}>
                    <p className="text-[#7A7A7A] text-xs">{item.type} • {item.date}</p>
                    <h4 className="text-[#1A1A1A] text-lg font-semibold">{item.title}</h4>
                    <p className="text-[#7A7A7A] text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                    <Link href="/events" className="inline-flex items-center gap-2 text-[#9E2016] text-sm font-medium hover:underline mt-2">
                      Know more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={next} className={arrowBtn} style={{ width: "64px", height: "64px", position: "absolute", right: "-32px", zIndex: 10 }}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="md:hidden flex flex-col items-center gap-6">
          <div className="w-full rounded-[24px] overflow-hidden">
            <div className="relative h-[200px] overflow-hidden rounded-t-[24px]">
              <Image src={events[current].image} alt={events[current].title} fill className="object-cover" />
              <div
                className="absolute top-[25px] left-[25px] text-xs font-medium rounded-[32px] cursor-pointer"
                style={{ padding: "8px 16px", background: "#FFFFFF80", border: "1px solid #9E2016", color: "#9E2016" }}
              >
                {events[current].category}
              </div>
            </div>
            <div className="rounded-b-[24px] p-6 flex flex-col gap-3 bg-white" style={cardStyle}>
              <p className="text-[#7A7A7A] text-xs">{events[current].type} • {events[current].date}</p>
              <h4 className="text-[#1A1A1A] text-lg font-semibold">{events[current].title}</h4>
              <p className="text-[#7A7A7A] text-sm leading-relaxed">{events[current].desc}</p>
              <Link href="/events" className="inline-flex items-center gap-2 text-[#9E2016] text-sm font-medium hover:underline">
                Know more <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={prevMobile} className={arrowBtnTeal} style={{ width: "48px", height: "48px" }}>
              <ArrowLeft size={20} />
            </button>
            <button onClick={nextMobile} className={arrowBtnTeal} style={{ width: "48px", height: "48px" }}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}