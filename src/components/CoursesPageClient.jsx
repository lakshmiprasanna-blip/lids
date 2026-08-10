"use client";
import { useState } from "react";
import DentalPrograms from "@/components/DentalPrograms";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";
import Link from "next/link";

const tabs = ["All Courses", "Under Graduate (U.G)", "Post Graduate (P.G)", "PG Diploma", "Certifications"];
const breadcrumbs = (
  <span className="flex items-center gap-2 flex-wrap justify-center">
    <Link href="/academics" className="hover:underline" style={{ color: "#FFFFFF" }}>
      Academics
    </Link>
    <span>/</span>
    <span>Courses Offered</span>
  </span>
);
export default function CoursesPageClient({ initialPrograms = [] }) {
  const [active, setActive] = useState("All Courses");

  const filteredPrograms =
    active === "All Courses" ? initialPrograms : initialPrograms.filter((p) => p.category === active);

  return (
    <main>
      <DentalLegacyCTA
  align="center"
  title={breadcrumbs}
  description="A Legacy of Excellence in Education and Social Responsibility"
  image="/assets/course-banner.webp"
  showButton={false}
  priority={true}
  titleClassName="!text-[16px] md:!text-[16px] ![font-family:'Inter',sans-serif] !font-medium"
  descriptionClassName="max-w-5xl !text-[32px] md:!text-[48px] [font-family:'Plus_Jakarta_Sans',sans-serif] font-semibold "
/>

      <div className="md:hidden w-full overflow-x-auto scrollbar-hide" style={{ background: "#107B71" }}>
        <div className="flex items-center gap-3 px-4 py-4 w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium border transition-all cursor-pointer duration-300 ${
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

      <div className="hidden md:flex w-full items-center justify-center gap-4 py-10" style={{ background: "#107B71" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 md:px-4 lg:px-6 py-2.5 md:py-2.5 lg:py-2.5 rounded-full text-sm font-medium border cursor-pointer transition-all duration-300 ${
              active === tab
                ? "bg-white text-[#107B71] border-white"
                : "bg-transparent text-white border-white hover:bg-white hover:text-[#107B71]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <DentalPrograms programs={filteredPrograms} showHeading={false} mobileStack={true} />
      <DentalLegacyCTA
              title="Design Your Dental Legacy at LIDS"
              description="Whether you are pursuing a BDS or MDS, you will cultivate clinical mastery and professional independence in a tech-forward environment. Master the art of dentistry at your own pace, supported by experts dedicated to your success."
              buttonText="Apply Now"
              buttonHref="/admissions"
              imageStyle={{ transform: "scale(1.05)", objectPosition: "center" }}
              mobileImageStyle={{ transform: "scale(1.02)", objectPosition: "50% 20%" }}
            />
    </main>
  );
}