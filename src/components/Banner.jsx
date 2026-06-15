"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { number: "355+",      label: "Dental Unit Chairs",     target: 355,    suffix: "+" },
  { number: "18+",       label: "Academic Experience",     target: 18,     suffix: "+" },
  { number: "1,00,000+", label: "Patients per annum",      target: 100000, suffix: "+" },
  { number: "1700+",     label: "Research Publications",   target: 1700,   suffix: "+" },
  { number: "98+",       label: "Yearly Surgeries",        target: 98,     suffix: "+" },
];

function formatIndianNumber(num) {
  return num.toLocaleString("en-IN");
}

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % stats.length), 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 3000;
          const startTime = performance.now();

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts(stats.map((stat) => Math.floor(stat.target * eased)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(stats.map((stat) => stat.target));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative w-full">

      <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
        <Image src="/assets/lids-banner.webp" alt="LIDS Banner" fill priority className="object-cover" style={{ objectPosition: "center 40%" }} />
      </div>

      <div className="w-full h-[100px] overflow-hidden" style={{ backgroundColor: "#20B2AACC" }}>

        {/* Mobile: single stat auto-cycling */}
        <div className="flex md:hidden h-full items-center justify-center flex-col gap-1 text-center">
          <span className="text-white text-4xl font-bold leading-none transition-all duration-500">
            {stats[current].number}
          </span>
          <span className="text-white text-md opacity-90 whitespace-nowrap">
            {stats[current].label}
          </span>
        </div>

        {/* Desktop: all stats in a row */}
        <div className="hidden md:flex container items-center justify-between w-full h-full">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center">
              <div className="flex flex-col items-center gap-2 text-center px-1 md:px-3 xl:px-8">
                <span className="text-white text-2xl xl:text-4xl font-bold leading-none">
                  {formatIndianNumber(counts[index])}{stat.suffix}
                </span>
                <span className="text-white text-xs xl:text-sm opacity-90 whitespace-nowrap">{stat.label}</span>
              </div>
              {index < stats.length - 1 && (
                <div className="shrink-0" style={{ width: "1px", height: "30px", backgroundColor: "#E6E6E6" }} />
              )}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}