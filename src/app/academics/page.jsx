"use client";
import Image from "next/image";
import Link from "next/link";
import CardGrid from "@/components/CardGrid";
import DentalPrograms from "@/components/DentalPrograms";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";
import FacilitiesOverview from "@/components/FacilitiesOverview";
import academicsData from "@/app/data/academics.json";

const { dentalPrograms, mvvCards, items, facilities } = academicsData;

const tealCell = {
  background: "#107B71",
  border: "2px solid #E5F3F2A1",
  backdropFilter: "blur(13.3px)",
  boxShadow: "inset 0px 0px 20px 0px #EBFDFF66, inset 0px 0px 40px 0px #C9F9FF33",
};

const joinBlobs = [
  { width: "980px", height: "800px", top: "-570px", right: "-300px", background: "#CFEFED", filter: "blur(120px)", zIndex: 0, className: "hidden xl:block" },
  { width: "344px", height: "460px", top: "200px", left: "19px", background: "#CFEFED", filter: "blur(120px)", zIndex: 0, className: "hidden md:block" },
  { width: "486px", height: "500px", top: "740px", left: "1405px", transform: "rotate(-90deg)", background: "#CFEFED", filter: "blur(186px)", zIndex: 0, className: "hidden md:block" },
];

const mobilePairs = [
  { title: items[0].title, desc: items[0].desc, href: items[0].href, src: items[1].src, alt: items[1].alt },
  { title: items[3].title, desc: items[3].desc, href: items[3].href, src: items[2].src, alt: items[2].alt },
];

export default function ContactPage() {
  return (
    <main>
      <DentalLegacyCTA
        align="center"
        title="Our Academics"
        description="Discover a wide range of medical courses tailored to meet your diverse educational needs.Discover a wide range of medical courses tailored to meet your diverse educational needs."
        image="/assets/academics-banner.webp"
        showButton={false}
        priority={true}
        titleClassName="!text-[40px] md:!text-[56px]"
        descriptionClassName="max-w-5xl"
        mobileImagePosition="76% 65%"
        mobileImageStyle={{ transform: "scale(1.01)" }}
      />

      <section className="relative bg-white overflow-hidden !py-5 md:!py-20">
        {joinBlobs.map(({ className, ...style }, i) => (
          <div key={i} className={`absolute pointer-events-none rounded-full ${className}`} style={style} />
        ))}

        <div className="relative z-10 container">
          <div className="text-center mb-12">
            <p className="eyebrow-heading text-[#9E2016] font-semibold uppercase mb-4 pt-10">JOIN LIDS</p>
            <h3 className="text-[#1A1A1A] font-semibold">
              Welcome to the <br /> World of Dental Excellence at LIDS!
            </h3>
            <p className="mt-4 text-[#9A9A9A] md:text-[#656C7B] text-md md:text-[18px] max-w-6xl mx-auto">
              Lenora Institute of Dental Sciences (LIDS) is dedicated to providing high-quality dental education through a balanced approach of academic learning, clinical exposure, and research. With state-of-the-art infrastructure and experienced faculty, we equip our students to be leaders in the field of dentistry.
            </p>
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex flex-col rounded-2xl overflow-hidden">
            {mobilePairs.map((pair, i) => (
              <div key={i}>
                <div className="relative w-full" style={{ height: "307px" }}>
                  <Image src={pair.src} alt={pair.alt} fill sizes="100vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-4 p-6" style={tealCell}>
                  <h4 className="!text-white font-semibold !text-[24px] md:text-2xl">{pair.title}</h4>
                  <p className="text-white/90 text-md leading-relaxed">{pair.desc}</p>
                  <Link href={pair.href} className="self-start bg-white text-[#1A1A1A] text-md font-medium rounded-full px-6 py-2.5">Know more</Link>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden md:grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
            {items.map((item, i) =>
              item.type === "text" ? (
                <div key={i} className="flex flex-col justify-center gap-5 p-12" style={{ ...tealCell, minHeight: "420px" }}>
                  <h4 className="!text-white font-semibold" style={{ fontSize: "32px" }}>{item.title}</h4>
                  <p className="text-white/90 text-[18px] leading-relaxed">{item.desc}</p>
                  <Link href={item.href} className="self-start bg-white text-[#1A1A1A] text-md font-medium rounded-full px-9 py-4 hover:bg-[#9E2016] hover:!text-white transition-all">Know more</Link>
                </div>
              ) : (
                <div key={i} className="relative overflow-hidden" style={{ minHeight: "420px" }}>
                  <Image src={item.src} alt={item.alt} fill sizes="50vw" className="object-cover" />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <DentalPrograms programs={dentalPrograms} mobileTitle="Explore Our Comprehensive Dental Programs" showMobileBlobs={false} />

      <section className="bg-white pt-20 pb-0">
        <div className="container">
          <div className="text-center mb-6">
            <p className="eyebrow-heading text-[#9E2016] font-semibold uppercase mb-4">Academic Approach</p>
            <h3 className="text-[#1A1A1A] font-semibold">A Holistic and Mentorship-Led Learning Approach</h3>
          </div>
          <p className="text-[#333333] text-[18px] w-full max-w-6xl mb-10 md:mx-auto text-center md:text-center">
            At LIDS, our educational approach centers on developing well-rounded dental professionals. We integrate academic learning with hands-on clinical experience to ensure our students gain the practical skills required to excel in real-world dental practices.
          </p>
          <div className="relative w-full container md:mx-auto h-[280px] md:h-[500px] rounded-2xl overflow-hidden mb-16 md:mb-8" style={{ boxShadow: "inset 0 0 0 4px rgba(255, 255, 255, 0.5)" }}>
            <Image src="/assets/academic-approach.webp" alt="LIDS Building" fill sizes="100vw" className="md:object-cover" />
          </div>
        </div>
      </section>

      <CardGrid
        cards={mvvCards}
        cols={3}
        iconSize={80}
        titleColor="#20B2AA"
        desktopClassName="-mt-25 lg:-mt-45"
        mobileClassName="-mt-25"
        cardStyle={{ background: "#FFFFFF", border: "2px solid #20B2AA66", borderRadius: "16px", padding: "32px", boxShadow: "inset 0 6px 6px 0px rgba(207, 239, 237, 0.6), 0px 6px 6px 0px #EBFDFF33, 0px 13px 8px 0px #C9F9FF33, 0px 22px 9px 0px #E8FCFF33", backdropFilter: "blur(13.3px)" }}
        cardBorder=" 2px solid #E5F3F2A1"
      />

      <FacilitiesOverview
  eyebrow="ACADEMIC FACILITIES Overview"
  heading="Experience World-Class Facilities at LIDS"
  description="At LIDS, our educational approach centers on developing well-rounded dental professionals. We integrate academic learning with hands-on clinical experience to ensure our students gain the practical skills required to excel in real-world dental practices."
  facilities={facilities}
  mobileTextAlign="center"
  singleBlob
  hideSingleBlobMobile
/>
      
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