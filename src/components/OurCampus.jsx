"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const images = [
  { src: "/assets/ourcampus-1.webp", alt: "Campus 1" },
  { src: "/assets/ourcampus-2.webp", alt: "Campus 2" },
  { src: "/assets/ourcampus-3.webp", alt: "Campus 3" },
  { src: "/assets/ourcampus-1.webp", alt: "Campus 4" },
  { src: "/assets/ourcampus-2.webp", alt: "Campus 5" },
];

export default function OurCampus() {
  const [activeIndex, setActiveIndex] = useState(1); // start at index 1 so both sides have images
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [viewportW, setViewportW] = useState(1440);
  const containerRef = useRef(null);
  const dragThreshold = 60;

  const CENTER_W = 1000;
  const CENTER_H = 500;
  const SIDE_W = 940;
  const SIDE_H = 380;
  const GAP = 20;
  const TRACK_H = CENTER_H + 40;

  useEffect(() => {
    const update = () => setViewportW(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Center card is centered in viewport
  // Left card: ends just before center card (bleeds off left edge)
  // Right card: starts just after center card (bleeds off right edge)
  const getLeft = (diff, dragApplied = 0) => {
    const centerStart = (viewportW - CENTER_W) / 2;

    if (diff === 0) return centerStart + dragApplied;
    if (diff === -1) return centerStart - SIDE_W - GAP + dragApplied;
    if (diff === 1) return centerStart + CENTER_W + GAP + dragApplied;
    if (diff === -2) return centerStart - SIDE_W * 2 - GAP * 2 + dragApplied;
    if (diff === 2) return centerStart + CENTER_W + SIDE_W + GAP * 2 + dragApplied;
    return -9999;
  };

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    if (dragOffset < -dragThreshold && activeIndex < images.length - 1) {
      setActiveIndex((p) => p + 1);
    } else if (dragOffset > dragThreshold && activeIndex > 0) {
      setActiveIndex((p) => p - 1);
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const onTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.touches[0].clientX - startX);
  };

  return (
    <section
      className="relative w-full py-20"
      style={{
        background: "white",
        overflow: "hidden",
      }}
    >
       <div
    className="absolute pointer-events-none rounded-full"
    style={{
      width: "344px",
      height: "460px",
      top: "80px",
      left: "0px",
      background: "#CFEFED",
      filter: "blur(60px)",
      transform: "rotate(-90deg)",
      zIndex: 0,
    }}
  />
  <div
    className="absolute pointer-events-none rounded-full"
    style={{
      width: "344px",
      height: "460px",
      bottom: "0px",
      right: "0px",
      background: "#CFEFED",
      filter: "blur(60px)",
      transform: "rotate(-90deg)",
      zIndex: 0,
    }}
  />
      {/* Heading */}
      <div className="text-center mb-10 px-6">
        <p className="text-[#9E2016] text-md font-semibold tracking-widest uppercase mb-3">
          OUR CAMPUS
        </p>
        <h3 className="text-[#1A1A1A] font-semibold text-3xl md:text-4xl">
          Experience World-Class Facilities at LIDS
        </h3>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="relative w-full select-none"
        style={{
          height: `${TRACK_H}px`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
      >
        {images.map((img, i) => {
          const diff = i - activeIndex;
          if (Math.abs(diff) > 2) return null;

          const isActive = diff === 0;
          const width = isActive ? CENTER_W : SIDE_W;
          const height = isActive ? CENTER_H : SIDE_H;
          const dragApplied = isDragging ? dragOffset : 0;
          const left = getLeft(diff, dragApplied);
          const top = TRACK_H / 2 - height / 2;
          const zIndex = isActive ? 20 : 10 - Math.abs(diff);
          const opacity = Math.abs(diff) >= 2 ? 0 : 1;

          return (
            <div
              key={i}
              onClick={() => !isDragging && !isActive && setActiveIndex(i)}
              className="absolute overflow-hidden"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                left: `${left}px`,
                top: `${top}px`,
                zIndex,
                opacity,
                borderRadius: isActive ? "16px" : "12px",
                transition: isDragging
                  ? "none"
                  : "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                border: isActive ? "4px solid rgba(243, 255, 254, 0.36)" : "none",
                boxShadow: isActive
                  ? "0px 13px 7.3px 0px rgba(158, 255, 238, 0.12)"
                  : "none",
                cursor: isActive
                  ? isDragging ? "grabbing" : "grab"
                  : "pointer",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                draggable={false}
                className="object-cover pointer-events-none"
                style={{
                  filter: isActive ? "none" : "brightness(0.75)",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button
          className="px-8 py-3 rounded-full text-sm font-medium text-[#9E2016] bg-white"
          style={{ border: "1.5px solid #9E2016" }}
        >
          Explore Campus Life
        </button>
      </div>
    </section>
  );
}