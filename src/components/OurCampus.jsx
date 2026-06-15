"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  { src: "/assets/ourcampus-1.webp", alt: "Campus 1" },
  { src: "/assets/ourcampus-2.webp", alt: "Campus 2" },
  { src: "/assets/ourcampus-3.webp", alt: "Campus 3" },
  { src: "/assets/ourcampus-1.webp", alt: "Campus 4" },
  { src: "/assets/ourcampus-2.webp", alt: "Campus 5" },
];

const CENTER_W = 1000, CENTER_H = 500, SIDE_W = 940, SIDE_H = 380, GAP = 20, TRACK_H = 540;
const Blob = ({ style }) => <div className="absolute pointer-events-none rounded-full hidden xl:block" style={{ width: "344px", height: "460px", background: "#CFEFED", filter: "blur(60px)", transform: "rotate(-90deg)", zIndex: 0, ...style }} />;
const ExploreBtn = () => <button className="px-8 py-3 rounded-full cursor-pointer text-sm font-medium text-[#9E2016] bg-white  hover:bg-[#9E2016] hover:!text-white transition-all duration-300" style={{ border: "1.5px solid #9E2016" }}>Explore Campus Life</button>;

export default function OurCampus() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [viewportW, setViewportW] = useState(1440);
  const containerRef = useRef(null);

  useEffect(() => {
    const update = () => setViewportW(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const getLeft = (diff, drag = 0) => {
    const c = (viewportW - CENTER_W) / 2;
    const map = { 0: c, "-1": c - SIDE_W - GAP, 1: c + CENTER_W + GAP, "-2": c - SIDE_W * 2 - GAP * 2, 2: c + CENTER_W + SIDE_W + GAP * 2 };
    return (map[diff] ?? -9999) + drag;
  };

  const dragStart = (x) => { setIsDragging(true); setStartX(x); setDragOffset(0); };
  const dragMove = (x) => { if (isDragging) setDragOffset(x - startX); };
  const dragEnd = () => {
    if (!isDragging) return;
    if (dragOffset < -60 && activeIndex < images.length - 1) setActiveIndex((p) => p + 1);
    else if (dragOffset > 60 && activeIndex > 0) setActiveIndex((p) => p - 1);
    setIsDragging(false); setDragOffset(0);
  };

  const ArrowBtn = ({ onClick, children }) => (
    <button onClick={onClick} className="w-12 h-12 flex items-center justify-center rounded-full border border-[#9E2016] text-[#9E2016] bg-white active:bg-[#9E2016] active:text-white transition-all duration-200">{children}</button>
  );

  const dragHandlers = {
    onMouseDown: (e) => dragStart(e.clientX), onMouseMove: (e) => dragMove(e.clientX), onMouseUp: dragEnd, onMouseLeave: dragEnd,
    onTouchStart: (e) => dragStart(e.touches[0].clientX), onTouchMove: (e) => dragMove(e.touches[0].clientX), onTouchEnd: dragEnd,
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <Blob style={{ top: 0, left: 0 }} />
        <Blob style={{ bottom: 0, right: 0 }} />
      </div>

      <div className="mb-10 px-6 text-left md:text-center">
        <p className="text-[#9E2016] text-md font-semibold uppercase mb-3">OUR CAMPUS</p>
        <h3 className="text-[#1A1A1A] font-semibold text-3xl md:text-4xl">Experience World-Class Facilities at LIDS</h3>
      </div>

      {/* MOBILE + TABLET + 1024px → up to 1280px */}
      <div className="xl:hidden flex flex-col gap-5 px-5">
        <div className="relative w-full rounded-2xl overflow-hidden select-none h-[240px] md:h-[420px]"  style={{ cursor: isDragging ? "grabbing" : "grab" }}   {...dragHandlers}>
          <Image src={images[activeIndex].src} alt={images[activeIndex].alt} fill className="object-cover pointer-events-none" draggable={false} />
          <div className="absolute inset-0 rounded-2xl border-2 border-white/40 pointer-events-none" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <ArrowBtn onClick={() => setActiveIndex((p) => Math.max(0, p - 1))}><ArrowLeft size={20} /></ArrowBtn>
          <div className="flex items-center gap-2">
            {images.map((_, i) => <button key={i} onClick={() => setActiveIndex(i)} className="rounded-full transition-all duration-300" style={{ width: i === activeIndex ? "20px" : "8px", height: "8px", background: i === activeIndex ? "#9E2016" : "#D9D9D9" }} />)}
          </div>
          <ArrowBtn onClick={() => setActiveIndex((p) => Math.min(images.length - 1, p + 1))}><ArrowRight size={20} /></ArrowBtn>
        </div>
        <div className="flex justify-center"><ExploreBtn /></div>
      </div>

      {/* DESKTOP 1280px+ */}
      <div ref={containerRef} className="hidden xl:block relative w-full select-none" style={{ height: `${TRACK_H}px`, cursor: isDragging ? "grabbing" : "grab" }} {...dragHandlers}>
        {images.map((img, i) => {
          const diff = i - activeIndex;
          if (Math.abs(diff) > 2) return null;
          const isActive = diff === 0;
          const w = isActive ? CENTER_W : SIDE_W, h = isActive ? CENTER_H : SIDE_H;
          const radius = isActive ? "16px" : "12px";
          return (
            <div key={i} onClick={() => !isDragging && !isActive && setActiveIndex(i)} className="absolute overflow-hidden"
              style={{ width: w, height: h, left: getLeft(diff, isDragging ? dragOffset : 0), top: TRACK_H / 2 - h / 2, zIndex: isActive ? 20 : 10 - Math.abs(diff), opacity: Math.abs(diff) >= 2 ? 0 : 1, borderRadius: radius, transition: isDragging ? "none" : "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)", border: isActive ? "4px solid rgba(243,255,254,0.36)" : "none", boxShadow: isActive ? "0px 13px 7.3px 0px rgba(158,255,238,0.12)" : "none", cursor: isActive ? (isDragging ? "grabbing" : "grab") : "pointer" }}>
              <Image src={img.src} alt={img.alt} fill draggable={false} className="object-cover pointer-events-none" style={{ filter: isActive ? "none" : "brightness(0.75)" }} />
              <div className="absolute inset-0 pointer-events-none" style={{ borderRadius: radius, border: "5px solid rgba(255,255,255,0.4)" }} />
            </div>
          );
        })}
      </div>
      <div className="hidden xl:flex justify-center mt-10"><ExploreBtn /></div>
    </section>
  );
}