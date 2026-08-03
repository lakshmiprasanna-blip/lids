"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import OutlineBtn from "@/components/OutlineBtn";

export default function ShapeDental({
  label,
  mobileLabel,
  title,
  desc,
  imageSrc,
  images,
  autoPlayInterval = 4000,
  imageAlt,
  buttonText,
  buttonHref,
  imageLeft = false,
  mobileTitle,
  mobileDesc,
  showBlur = true,
  descClassName,
  descStyle,
}) {
  const carouselImages = images && images.length > 0 ? images : [imageSrc];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (carouselImages.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % carouselImages.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [carouselImages.length, autoPlayInterval]);

  const textBlock = (
    <div className="flex-1 flex flex-col gap-5 py-10">
      {label && <p className="text-[#9E2016] text-[18px] font-semibold uppercase">{label}</p>}
      <h3 className="text-[#1A1A2E] font-semibold leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
      <p className={`text-[18px] ${descClassName || "text-[#656C7B]"}`} style={descStyle} dangerouslySetInnerHTML={{ __html: desc }} />
      {buttonText && buttonHref && (
        <OutlineBtn href={buttonHref} width="196px" height="56px"> {buttonText}</OutlineBtn>
      )}
    </div>
  );

  const imageBlock = (
    <div className="flex-1 flex justify-end">
      <div className="relative w-full max-w-[700px] h-[440px] rounded-2xl overflow-hidden">
        {carouselImages.map((src, i) => (
          <Image key={src + i} src={src} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-opacity duration-700 ease-in-out" style={{ opacity: i === activeIndex ? 1 : 0 }}/>
        ))}
        <div className="absolute inset-0 rounded-2xl border-5 border-white/40 pointer-events-none" />
      </div>
    </div>
  );

  return (
    <>
      {/* MOBILE */}
      <section className="md:hidden w-full bg-white px-5 py-8">
        <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-6">
          {carouselImages.map((src, i) => (
            <Image key={src + i} src={src} alt={imageAlt} fill sizes="100vw" className="object-cover transition-opacity duration-700 ease-in-out"  style={{ opacity: i === activeIndex ? 1 : 0 }} />
          ))}
          <div className="absolute inset-0 rounded-2xl border-5 border-white/40 pointer-events-none" />
        </div>
        <div className="flex flex-col gap-4">
          {(mobileLabel || label) && (
            <p className="text-[#9E2016] text-xl font-semibold uppercase">{mobileLabel || label}</p>
          )}
          <h3 className="text-[#1A1A2E] text-2xl font-semibold leading-tight" dangerouslySetInnerHTML={{ __html: mobileTitle || title }} />
          <p className="text-[#9A9A9A] text-md leading-relaxed">{mobileDesc || desc}</p>
          {buttonText && buttonHref && (
            <OutlineBtn href={buttonHref} width="196px" height="56px"> {buttonText}</OutlineBtn>
          )}
        </div>
      </section>

      {/* DESKTOP */}
      <section className="hidden md:block relative w-full bg-white section-py overflow-hidden">
        {showBlur && (
          <div className="absolute pointer-events-none rounded-full" style={{ width: "831px", height: "836px", top: "-375px", right: "-200px", background: "#A3E0DC8A", filter: "blur(150px)", zIndex: 0 }} />
        )}
        <div className="container flex flex-row items-center gap-12 relative z-10">
          {imageLeft ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
        </div>
      </section>
    </>
  );
}