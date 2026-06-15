import Image from "next/image";
import Link from "next/link";

export default function ShapeDental({
  label,
  mobileLabel,
  title,
  desc,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref,
  imageLeft = false,
  mobileTitle,
  mobileDesc,
  showBlur = true
}) {
  const textBlock = (
    <div className="flex-1 flex flex-col gap-6 py-5">
      {label && (
        <p className="text-[#9E2016] text-xl font-semibold uppercase">{label}</p>
      )}
      <h3 className="text-[#1A1A2E] font-semibold leading-tight">{title}</h3>
      <p className="text-[#3D3D3D] text-base ">{desc}</p>
      {buttonText && buttonHref && (
        <Link
  href={buttonHref}
  className="self-start text-[#9E2016] text-base font-medium border border-[#9E2016] rounded-[65px] hover:bg-[#9E2016] hover:!text-white transition-all duration-200"
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
      <div className="absolute inset-0 rounded-2xl border-5 border-white/40 pointer-events-none" />
    </div>
  </div>
);
  return (
    <>
      {/* MOBILE */}
      <section className="md:hidden w-full bg-white px-5 py-8">
        <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-6">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          {(mobileLabel || label) && (
            <p className="text-[#9E2016] text-xl font-semibold uppercase">
              {mobileLabel || label}
            </p>
          )}
          <h3 className="text-[#1A1A2E] text-2xl font-semibold leading-tight">
            {mobileTitle || title}
          </h3>
          <p className="text-[#3D3D3D] text-sm leading-relaxed">
            {mobileDesc || desc}
          </p>
          {buttonText && buttonHref && (
            <Link
              href={buttonHref}
              className="self-start text-[#9E2016] text-sm font-medium border border-[#9E2016] rounded-[65px] hover:bg-[#9E2016] hover:text-white transition-all duration-200"
              style={{ width: "140px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {buttonText}
            </Link>
          )}
        </div>
      </section>

      {/* DESKTOP */}
      <section className="hidden md:block relative w-full bg-white section-py overflow-hidden">
        {showBlur && (
  <div
    className="absolute pointer-events-none rounded-full"
    style={{ width: "831px", height: "836px", top: "-475px", right: "-200px", background: "rgba(163, 224, 220, 0.54)", filter: "blur(186px)", zIndex: 0 }}
  />
)}
        <div className="container flex flex-row items-center gap-12 relative z-10">
          {imageLeft ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
        </div>
      </section>
    </>
  );
}