import Image from "next/image";
import Link from "next/link";

export default function ShapeDental({ label, title, desc, imageSrc, imageAlt, buttonText, buttonHref, imageLeft = false, mobileTitle, mobileDesc, showMobileCommitment = false  }) {
  const textBlock = (
    <div className="flex-1 flex flex-col gap-6 py-20">
      {label && <p className="text-[#9E2016] text-sm font-semibold tracking-widest uppercase">{label}</p>}
      <h3 className="text-[#1A1A2E] font-semibold leading-tight">{title}</h3>
      <p className="text-[#3D3D3D] text-base leading-relaxed">{desc}</p>
      {buttonText && buttonHref && (
        <Link
          href={buttonHref}
          className="self-start text-[#9E2016] text-base font-medium border border-[#9E2016] rounded-[65px] hover:bg-[#9E2016] hover:text-white transition-all duration-200"
          style={{ width: "160px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {buttonText}
        </Link>
      )}
    </div>
  );

  const imageBlock = (
    <div className="flex-1 flex justify-end">
      <div className="relative w-full max-w-[821px] h-[440px] rounded-2xl overflow-hidden">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
    </div>
  );

  return (
    <>
{showMobileCommitment && (
        <section className="md:hidden w-full py-8 overflow-hidden" style={{ backgroundColor: "#20B2AA" }}>
        <div className="relative px-6 py-8 flex flex-col gap-6">
<div className="absolute top-[-30px] bottom-[-30px] left-0 h-full pointer-events-none" style={{
  width: "50%",
  backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 2px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)",
  backgroundSize: "90px 90px"
}} />
          <h3 className="!text-white font-semibold relative z-10" style={{ fontSize: "24px" }}>
            {mobileTitle || title}
          </h3>
          <p className="text-white text-sm leading-relaxed opacity-90 relative z-10">
            {mobileDesc || desc}
          </p>
        </div>
      </section>
)}
      {/* DESKTOP */}
      <section className="hidden md:block relative w-full bg-white py-8 overflow-hidden">

  {/* TOP RIGHT BLUR CIRCLE */}
  <div
    className="absolute pointer-events-none rounded-full"
    style={{
      width: "831px",
      height: "836px",
      top: "-475px",
      right: "-200px",
      background: "rgba(163, 224, 220, 0.54)",
      filter: "blur(186px)",
      zIndex: 0,
    }}
  />

  <div className="container flex flex-row items-center gap-12 relative z-10">
    {imageLeft ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
  </div>

</section>
    </>
  );
}