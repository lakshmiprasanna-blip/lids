"use client";
import { useState } from "react";
import Image from "next/image";
import OutlineBtn from "./OutlineBtn";
import ApplyModal from "./ApplyModal";

export default function DentalLegacyCTA({
  title = "Design Your Dental Legacy at LIDS",
  description = "Whether you are pursuing a BDS or MDS, you will cultivate clinical mastery and professional independence in a tech-forward environment. Master the art of dentistry at your own pace, supported by experts dedicated to your success.",
  buttonText = "Apply Now",
  image = "/assets/dentallegacy.webp",
  mobileImage,
  align = "center",
  showButton = true,
  titleClassName,
  priority = false,
  descriptionClassName,
  imageStyle = { transform: "scale(1.05)" },
  imagePosition = "center",
  mobileImageStyle = { transform: "scale(1.05)" },
  mobileImagePosition = "left 50%",
  overlayGradient = "linear-gradient(90deg, rgba(32, 178, 170, 0.688) 0%, rgba(16, 123, 113, 0.688) 100%)",
  buttonBgColor = "#9E2016",
}) {
  const isLeft = align === "left";
  const [showApply, setShowApply] = useState(false);

  return (
    <section className="relative w-full h-[440px] md:h-[560px] overflow-hidden flex items-center justify-center">
      <div className="md:hidden absolute inset-0">
        <Image
          src={mobileImage || image}
          alt={title}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
          style={{ zIndex: 0, objectPosition: mobileImagePosition, ...mobileImageStyle }}
        />
      </div>
      <div className="hidden md:block absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
          style={{ zIndex: 0, objectPosition: imagePosition, ...imageStyle }}
        />
      </div>
      <div className="absolute inset-0" style={{ background: overlayGradient, zIndex: 1 }} />
      <div
        className={`container relative flex flex-col gap-6 px-6 w-full mx-auto items-center text-center ${isLeft ? "md:items-start md:text-left" : ""}`}
        style={{ zIndex: 2 }}
      >
        <h3 className={`font-semibold !text-white ${titleClassName || ""}`}>{title}</h3>
        <p className={`text-md md:text-[18px] !text-white leading-snug ${descriptionClassName || "max-w-3xl"}`} style={{ opacity: 0.9 }}>
          {description}
        </p>
        {showButton && (
          <OutlineBtn onClick={() => setShowApply(true)} bgColor={buttonBgColor} textColor="white" disableHover className="px-[42px] py-4 text-base font-medium !text-white hover:opacity-90 transition-opacity duration-200">
            {buttonText}
          </OutlineBtn>
        )}
      </div>
      <ApplyModal open={showApply} onClose={() => setShowApply(false)} />
    </section>
  );
}