"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import stats from "@/app/data/stats.json";

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
    <section ref={sectionRef} className="relative w-full !py-0">
     <div className="relative w-full h-[500px] md:h-[560px] lg:h-[620px] xl:h-[680px] 2xl:h-[640px] overflow-hidden">
    <Image src="/assets/lids-banner.webp" alt="LIDS Banner" fill priority className="object-cover" style={{ objectPosition: "center 100%" }}/>
    </div>
    <div className="w-full h-[160px] overflow-hidden" style={{backgroundColor: "#20B2AACC",  backdropFilter: "blur(9.6px)", WebkitBackdropFilter: "blur(9.6px)", }}>
     <div className="flex lg:hidden h-full items-center justify-center flex-col gap-1 text-center">
  <span className="text-white text-4xl font-bold leading-none transition-all duration-500">{stats[current].number}

  </span>
  <span className="text-white text-md opacity-90 whitespace-nowrap"> {stats[current].label} </span>
      </div>
      <div className="hidden lg:flex container items-center justify-between w-full h-full">
  {stats.map((stat, index) => (
    <div key={stat.label} className="flex items-center">
      <div className="flex flex-col items-center gap-2 text-center px-1 md:px-3 xl:px-8">
        <span className="font-sans text-white text-[36px] xl:text-[48px] font-bold leading-none">
          {formatIndianNumber(counts[index])}{stat.suffix}
        </span>
        <span className="text-white text-md xl:text-[18px] opacity-90 whitespace-nowrap">{stat.label}</span>
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