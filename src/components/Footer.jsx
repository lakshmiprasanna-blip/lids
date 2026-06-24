import Image from "next/image";
import Link from "next/link";

const exploreLinks = ["About us", "Academics", "Admissions", "Facilities", "Careers"];
const importantLinks = ["Research Policy", "DCI Data", "NAAC", "NIRF"];

const contactItems = [
 { text: <><span style={{ filter: "grayscale(1) brightness(0)" }}>📞</span>  +91-88 324 84492</> },
  { text: "✉️   mailus@lids.com" },
  { text: "📍   Location" },
];

const socialIcons = [
  { href: "#", icon: "/svg/facebook.svg" },
  { href: "#", icon: "/svg/instagram.svg" },
  { href: "#", icon: "/svg/youtube.svg" },
  { href: "#", icon: "/svg/whatsapp.svg" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">

      <div className="container py-16">

     {/* DESKTOP */}
<div className="hidden xl:flex items-start justify-between gap-6 xl:gap-12">
          <Image src="/assets/footer-logo.webp" alt="LIDS Logo" width={463} height={121} quality={100} className="object-contain shrink-0" />
          <div className="flex flex-col gap-8">
            <div>
  <h5 className="font-semibold mb-5 text-[24px]" style={{ color: "#8E0019" }}>Address</h5>
  <p className="text-[#3D3D3D] text-md leading-relaxed" style={{ width: "220px" }}>NH-16, near HP Petrol Pump,<br />Rajanagaram,<br />Rajamahendravaram, Andhra<br />Pradesh 533294</p>
</div>
            <div>
              <h5 className="font-semibold mb-3 text-[24px]" style={{ color: "#8E0019" }}>Contact Us</h5>
              <div className="flex flex-col gap-3">
                {contactItems.map((item, i) => <span key={i} className="text-md !text-[#000000]">{item.text}</span>)}
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-7 text-[24px]" style={{ color: "#8E0019" }}>Explore</h5>
            <div className="flex flex-col gap-7">
              {exploreLinks.map((item) => <Link key={item} href="#" className="text-[18px] !text-[#000000] hover:text-[#8E0019]">{item}</Link>)}
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-7 text-[24px] whitespace-nowrap" style={{ color: "#8E0019" }}>Important Links</h5>
            <div className="flex flex-col gap-7">
              {importantLinks.map((item) => <Link key={item} href="#" className="text-[18px] !text-[#000000] hover:text-[#8E0019]">{item}</Link>)}
            </div>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
    {socialIcons.map((s, i) => (
      <Link key={i} href={s.href} className="w-10 h-10 xl:w-[84px] xl:h-[84px] rounded-full flex items-center justify-center hover:opacity-80">
        <Image src={s.icon} alt="social" width={40} height={40} className="xl:w-[84px] xl:h-[84px]" />
      </Link>
    ))}
  </div>
        </div>

        {/* MOBILE */}
        <div className="xl:hidden flex flex-col gap-8">
  <Image src="/assets/footer-logo.webp" alt="LIDS Logo" width={327} height={86} quality={100} className="object-contain" />
  <div className="grid grid-cols-2 gap-7">
    <div>
      <h5 className="font-semibold mb-3 text-xl !text-[#8E0019]">Address</h5>
     <p className="!text-[#3D3D3D] leading-relaxed" style={{ fontSize: "clamp(14px, 2vw, 20px)" }}>NH-16, near HP Petrol Pump, Rajanagaram, Rajamahendravaram, Andhra Pradesh 533294</p>
    </div>
    <div>
      <h5 className="font-semibold mb-3 text-xl !text-[#8E0019]">Contact Us</h5>
      <div className="flex flex-col gap-3">
        {contactItems.map((item, i) => <span key={i} className="text-sm !text-[#3D3D3D]">{item.text}</span>)}
      </div>
    </div>
    <div>
      <h5 className="font-semibold mb-3 text-xl !text-[#8E0019]">Explore</h5>
      <div className="flex flex-col gap-2">
        {exploreLinks.map((item) => <Link key={item} href="#" className="text-sm !text-[#3D3D3D]">{item}</Link>)}
      </div>
    </div>
    <div>
      <h5 className="font-semibold mb-3 text-xl !text-[#8E0019]">Important Links</h5>
      <div className="flex flex-col gap-2">
        {importantLinks.map((item) => <Link key={item} href="#" className="text-sm !text-[#3D3D3D]">{item}</Link>)}
      </div>
    </div>
  </div>
  <div className="flex items-center justify-center gap-3">
    {socialIcons.map((s, i) => (
      <Link key={i} href={s.href} className="w-14 h-14 rounded-full flex items-center justify-center hover:opacity-80">
        <Image src={s.icon} alt="social" width={56} height={56} />
      </Link>
    ))}
  </div>
</div>

      </div>
<div className="w-full py-5 bg-[#8E0019]">
  <div className="container">
    {/* MOBILE & TABLET */}
    <div className="xl:hidden flex flex-col items-center gap-4">
      <div className="flex items-center gap-6">
        <Link href="#" className="!text-white text-sm">Terms & Conditions</Link>
        <Link href="#" className="!text-white text-sm">Cookie Policy</Link>
      </div>
      <p className="text-white text-sm">Copyright © 2026 LIDS. All rights reserved.</p>
    </div>
    {/* DESKTOP */}
    <div className="hidden xl:flex items-center justify-between">
      <p className="text-white text-sm">Copyright © 2026 LIDS. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <Link href="#" className="!text-white text-sm">Terms & Conditions</Link>
        <Link href="#" className="!text-white text-sm">Cookie Policy</Link>
      </div>
    </div>
  </div>
</div>

    </footer>
  );
}