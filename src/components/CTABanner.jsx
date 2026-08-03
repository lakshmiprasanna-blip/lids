import Image from "next/image";

export default function CTABanner({ 
  label, 
  title, 
  desktopImage = "/assets/lids-banner.webp", 
  mobileImage = "/assets/about-mob.webp", 
  align = "center",
  titleClassName,
  labelClassName,
  titleWidth,
  imageStyle = { filter: "blur(0px)", transform: "scale(1.8)", zIndex: 0, objectPosition: "center 130%" },
  mobileImageStyle = { objectFit: "cover", objectPosition: "center 120%", filter: "brightness(1.05)" }
}) {
  
  const isLeft = align === "left";

  return (
    <>
      <section className="md:hidden !py-0 relative w-full overflow-hidden" style={{ height: "440px" }}>
  <img
    src={mobileImage}
    alt={title}
    className="w-full h-full"
    style={mobileImageStyle}
  />
</section>
      {/* Desktop */}
      <section className="hidden md:flex relative w-full h-[560px] overflow-hidden items-center justify-center">
        <Image src={desktopImage} alt={title} fill priority className="object-cover" style={imageStyle} />
        <div  className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(32, 178, 170, 0.608) 0%, rgba(16, 123, 113, 0.608) 100%)", zIndex: 1,
          }}
        />
        <div className={`container relative flex flex-col px-6 w-full max-w-7xl mx-auto gap-2 ${isLeft ? "items-start" : "items-center text-center"}`} style={{ zIndex: 2 }}>
         <p className={`!text-white font-semibold mb-1 font-[var(--font-sans)] ${labelClassName || "!text-[16px]"}`}>{label}</p>
<h3 className={`!text-[56px] font-semibold !text-white [font-family:'Inter',sans-serif] ${titleClassName || ""}`} style={{ width: titleWidth }}>
  {title}
</h3>
        </div>
      </section>
    </>
  );
}