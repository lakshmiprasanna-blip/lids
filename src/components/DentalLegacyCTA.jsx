import Image from "next/image";
import Link from "next/link";

export default function DentalLegacyCTA({
  title = "Design Your Dental Legacy at LIDS",
  description = "Whether you are pursuing a BDS or MDS, you will cultivate clinical mastery and professional independence in a tech-forward environment. Master the art of dentistry at your own pace, supported by experts dedicated to your success.",
  buttonText = "Apply Now",
  buttonHref = "/admissions",
  image = "/assets/dentallegacy.webp",
  mobileImage,
  align = "center",
  showButton = true,
  titleClassName,
  descriptionClassName,
  imageStyle = { transform: "scale(1.05)", objectPosition: "center" },
  mobileImageStyle = { transform: "scale(1.05)", objectPosition: "center" },
}) {
  const isLeft = align === "left";

  return (
    <section className="relative w-full h-[604px] overflow-hidden flex items-center justify-center">
      {/* Mobile image */}
      <div className="md:hidden absolute inset-0">
        <Image
          src={mobileImage || image}
          alt={title}
          fill
          className="object-cover"
          style={{ zIndex: 0, ...mobileImageStyle }}
        />
      </div>
      {/* Desktop image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          style={{ zIndex: 0, ...imageStyle }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(32,178,170,0.64) 0%, rgba(16,123,113,0.64) 100%)", zIndex: 1 }}
      />
      <div
        className={`relative flex flex-col gap-6 px-6 w-full max-w-7xl mx-auto items-center text-center ${
          isLeft ? "md:items-start md:text-left" : ""
        }`}
        style={{ zIndex: 2 }}
      >
        <h3 className={`font-semibold !text-white ${titleClassName || ""}`}>{title}</h3>
        <p className={`text-md md:text-[18px] leading-relaxed !text-white ${descriptionClassName || "max-w-2xl"}`} style={{ opacity: 0.9 }}>
          {description}
        </p>
        {showButton && (
       <Link href={buttonHref} className="max-w-2xl whitespace-nowrap !text-white text-base font-medium px-[42px] py-4 rounded-[65px] shadow-[0px_4px_4px_0px_#0000001A,0px_6px_6px_0px_#1A1A1A08,0px_13px_8px_0px_#1A1A1A05,0px_22px_9px_0px_#1A1A1A03,0px_35px_10px_0px_#1A1A1A00,0px_2px_12px_0px_#FFFFFF40_inset] bg-[#9E2016] hover:opacity-90 transition-opacity duration-200">{buttonText}</Link>
        )}
      </div>
    </section>
  );
}