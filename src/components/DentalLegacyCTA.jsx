import Image from "next/image";
import Link from "next/link";

export default function DentalLegacyCTA({
  title = "Design Your Dental Legacy at LIDS",
  description = "Whether you are pursuing a BDS or MDS, you will cultivate clinical mastery and professional independence in a tech-forward environment. Master the art of dentistry at your own pace, supported by experts dedicated to your success.",
  buttonText = "Apply Now",
  buttonHref = "/admissions",
  image = "/assets/dentallegacy.webp",
  align = "center",
}) {
  const isLeft = align === "left";

  return (
    <section className="relative w-full h-[604px] overflow-hidden flex items-center justify-center">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        style={{ transform: "scale(1.05)", zIndex: 0 }}
      />
      <div
        className="absolute inset-0"

        style={{ background: "linear-gradient(90deg, rgba(32,178,170,0.64) 0%, rgba(16,123,113,0.64) 100%)", zIndex: 1 }}
      />
      <div
        className={`relative flex flex-col gap-6 px-6 w-full max-w-7xl mx-auto ${isLeft ? "items-start text-left" : "items-center text-center"}`}
        style={{ zIndex: 2 }}
      >
        <h3 className="font-semibold !text-white">{title}</h3>
        <p className="text-[18px] leading-relaxed max-w-2xl !text-white" style={{ opacity: 0.9 }}>
          {description}
        </p>
        <Link
          href={buttonHref}
          className="hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
          style={{ backgroundColor: "#9E2016", color: "white", fontSize: "14px", fontWeight: 500, padding: "16px 32px", borderRadius: "65px" }}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}