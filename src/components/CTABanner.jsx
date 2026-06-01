import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  return (
    <>
     <section className="md:hidden relative w-full overflow-hidden" style={{ height: "440px" }}>
  <img
    src="/assets/about-mob.webp"
    alt="CTA Banner"
    className="w-full h-full"
    style={{ objectFit: "cover", objectPosition: "center 120%", filter: " brightness(1.05)" }}
  />
</section>
      <section className="hidden md:flex relative w-full h-[560px] overflow-hidden items-center justify-center">
        <Image
          src="/assets/lids-banner.webp"
          alt="CTA Banner"
          fill
          className="object-cover"
          style={{ filter: "blur(0px)", transform: "scale(1.8)", zIndex: 0, objectPosition: "center 230%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(32,178,170,0.85) 0%, rgba(16,123,113,0.85) 100%)",
            zIndex: 1,
          }}
        />
        <div className="relative text-center flex flex-col items-center gap-6 px-6 max-w-4xl" style={{ zIndex: 2 }}>
          <p className="!text-white text-md font-semibold tracking-widest mb-4">About us</p>
          <h3 className="font-semibold !text-white">
            A Legacy of Excellence in Education and Social Responsibility
          </h3>
        </div>
      </section>
    </>
  );
}