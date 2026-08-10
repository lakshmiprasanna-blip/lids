import Image from "next/image";
import Link from "next/link";
import navData from "@/app/data/nav.json";

const { exploreLinks, importantLinks, addressLines, contactItems, socialIcons } = navData.footer;

function ContactItem({ icon, text, filterIcon, href }) {
  const content = (
    <>
      <span style={filterIcon ? { filter: "grayscale(1) brightness(0)" } : undefined}>{icon}</span> {text}
    </>
  );
  if (!href) return content;
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="!text-[#3D3D3D] hover:!text-[#8E0019] transition-colors duration-200">
      {content}
    </a>
  );
}

function Address({ lines, joiner }) {
  return lines.map((line, i) => (
    <span key={i}>
      {line}
      {i < lines.length - 1 && joiner}
    </span>
  ));
}

export default function Footer() {
  return (
  <footer className="w-full" style={{ background: `linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(90deg, rgba(32, 178, 170, 0.064) 0%, rgba(16, 123, 113, 0.064) 100%)`, }}>
      <div className="container py-16">
     {/* DESKTOP */}
<div className="hidden xl:flex items-start justify-between gap-6 xl:gap-12">
          <Image src="/assets/footer-logo.webp" alt="LIDS Logo" width={463} height={121} quality={100} className="object-contain shrink-0 w-[463px] h-[121px]" />
          <div className="flex flex-col gap-8">
            <div>
  <h5 className="font-semibold mb-5 text-[24px]" style={{ color: "#8E0019" }}>Address</h5>
  <p className="text-[#3D3D3D] text-md leading-relaxed" style={{ width: "220px" }}><Address lines={addressLines} joiner={<br />} /></p>
</div>
            <div>
              <h5 className="font-semibold mb-3 text-[24px]" style={{ color: "#8E0019" }}>Contact Us</h5>
              <div className="flex flex-col gap-3">
                {contactItems.map((item, i) => <span key={i} className="text-md !text-[#3D3D3D]"><ContactItem {...item} /></span>)}
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
        <Image src={s.icon} alt="social" width={40} height={40} className="w-10 h-10 xl:w-[84px] xl:h-[84px]" />
      </Link>
    ))}
  </div>
        </div>

        {/* MOBILE */}
       {/* MOBILE + TABLET */}
<div className="xl:hidden flex flex-col gap-8 w-full">
  <Image src="/assets/footer-logo.webp" alt="LIDS Logo" width={327} height={86} quality={100} className="object-contain self-start w-[327px] h-[86px] md:w-[420px] md:h-auto" />
  <div className="grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-10 w-full">
    <div>
      <h5 className="font-semibold mb-3 text-xl !text-[#8E0019]">Address</h5>
      <p className="!text-[#3D3D3D] leading-relaxed max-w-[260px]" style={{ fontSize: "clamp(14px, 2vw, 20px)" }}>
        <Address lines={addressLines} joiner=" " />
      </p>
    </div>
    <div>
      <h5 className="font-semibold mb-3 text-xl !text-[#8E0019]">Contact Us</h5>
      <div className="flex flex-col gap-3">
        {contactItems.map((item, i) => <span key={i} className="text-sm !text-[#3D3D3D]"><ContactItem {...item} /></span>)}
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
  <div className="flex items-center justify-center md:justify-start gap-3">
    {socialIcons.map((s, i) => (
      <Link key={i} href={s.href} className="w-14 h-14 rounded-full flex items-center justify-center hover:opacity-80">
        <Image src={s.icon} alt="social" width={56} height={56} className="w-14 h-14" />
      </Link>
    ))}
  </div>
</div>

      </div>
<div className="w-full py-5 bg-[#8E0019]">
  <div className="container">
    {/* MOBILE & TABLET */}
    <div className="max-w-[340px] xl:hidden flex flex-col items-center gap-4">
      <div className="flex items-center gap-6">
        <Link href="#" className="!text-white text-md">Terms & Conditions</Link>
        <Link href="#" className="!text-white text-md">Cookie Policy</Link>
      </div>
      <p className="text-white text-md whitespace-nowrap">Copyright © 2026 LIDS. All rights reserved.</p>
    </div>
    {/* DESKTOP */}
    <div className="hidden xl:flex items-center justify-between">
      <p className="text-white text-md">Copyright © 2026 LIDS. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <Link href="#" className="!text-white text-md">Terms & Conditions</Link>
        <Link href="#" className="!text-white text-md">Cookie Policy</Link>
      </div>
    </div>
  </div>
</div>

    </footer>
  );
}