"use client";
import { useState } from "react";
import CTABanner from "@/components/CTABanner";
import DentalPrograms from "@/components/DentalPrograms";

const tabs = ["All Courses", "Under Graduate (U.G)", "Post Graduate (P.G)", "PG Diploma", "Certifications"];

const dentalPrograms = [
  {
    slug: "bds",
    title: "Bachelor of Dental Surgery (BDS)",
    years: "5 years",
    image: "/assets/BDS.webp",
    desc: "Start your professional journey with our comprehensive BDS program, where foundational science meets advanced clinical practice.",
  },
  {
    title: "Master of Dental Surgery (MDS)",
    years: "3 years",
    image: "/assets/MDS.webp",
    desc: "Elevate your expertise with our MDS specialisations, designed for dentists aiming to achieve mastery in complex oral healthcare.",
  },
  {
    title: "PG Diploma Programs",
    years: "3 years",
    image: "/assets/PG.webp",
    desc: "Fast-track your career growth with our intensive PG Diploma programs, focusing on specialized clinical skills and the latest dental technologies.",
  },
];

export default function CoursesPage() {
  const [active, setActive] = useState("All Courses");

  return (
    <main>
      <CTABanner
        label="Academics / Courses Offered"
        title="A Legacy of Excellence in Education and Social Responsibility"
        mobileImage="/assets/about-mob.webp"
      />

      {/* MOBILE TABS — horizontal scroll */}
      <div className="md:hidden w-full overflow-x-auto scrollbar-hide" style={{ background: "#107B71" }}>
        <div className="flex items-center gap-3 px-4 py-4 w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === tab
                  ? "bg-white text-[#107B71] border-white"
                  : "bg-transparent text-white border-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP TABS — centered wrap */}
      <div className="hidden md:flex w-full items-center justify-center gap-4 py-10" style={{ background: "#107B71" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
              active === tab
                ? "bg-white text-[#107B71] border-white"
                : "bg-transparent text-white border-white hover:bg-white hover:text-[#107B71]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards — stacked on mobile, handled inside DentalPrograms */}
      <DentalPrograms programs={dentalPrograms} showHeading={false} mobileStack={true} />
    </main>
  );
}