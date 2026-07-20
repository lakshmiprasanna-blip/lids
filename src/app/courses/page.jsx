"use client";
import { useState, useEffect } from "react";
import DentalPrograms from "@/components/DentalPrograms";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";
import { getPrograms } from "@/lib/getPrograms";

const tabs = ["All Courses", "Under Graduate (U.G)", "Post Graduate (P.G)", "PG Diploma", "Certifications"];

export default function CoursesPage() {
  const [active, setActive] = useState("All Courses");
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    getPrograms().then(setPrograms);
  }, []);

  const filteredPrograms =
    active === "All Courses" ? programs : programs.filter((p) => p.category === active);

  return (
    <main>
      <DentalLegacyCTA
        align="center"
        title="Academics / Courses Offered"
        description="A Legacy of Excellence in Education and Social Responsibility"
        image="/assets/course-banner.webp"
        showButton={false}
        titleClassName="!text-[16px] md:!text-[16px] [font-family:'Inter',sans-serif]! font-bold"
        descriptionClassName="max-w-5xl !text-[32px] md:!text-[48px] [font-family:'Plus_Jakarta_Sans',sans-serif] font-semibold "
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
      <DentalPrograms programs={filteredPrograms} showHeading={false} mobileStack={true} />
    </main>
  );
}