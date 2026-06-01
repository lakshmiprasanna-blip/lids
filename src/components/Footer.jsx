import Image from "next/image";
import Link from "next/link";

const exploreLinks = ["About us", "Academics", "Admissions", "Facilities", "Careers"];
const importantLinks = ["Research Policy", "DCI Data", "NAAC", "NIRF"];

const contactItems = [
  { text: "📞  +91-88 324 84492" },
  { text: "✉️   mailus@lids.com" },
  { text: "📍   Location" },
];

const socialIcons = [
  { href: "#", svg: <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { href: "#", svg: <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="white"/></svg> },
  { href: "#", svg: <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#8E0019"/></svg> },
  { href: "#", svg: <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">

      <div className="container py-16">

        {/* DESKTOP */}
        <div className="hidden md:flex items-start justify-between gap-12">
          <Image src="/assets/footer-logo.webp" alt="LIDS Logo" width={463} height={121} quality={100} className="object-contain shrink-0" />
          <div className="flex flex-col gap-8">
            <div>
              <h5 className="font-semibold mb-3" style={{ color: "#8E0019" }}>Address</h5>
              <p className="text-[#3D3D3D] text-sm leading-relaxed">NH-16, near HP Petrol Pump,<br />Rajanagaram,<br />Rajamahendravaram, Andhra<br />Pradesh 533294</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3" style={{ color: "#8E0019" }}>Contact Us</h5>
              <div className="flex flex-col gap-3">
                {contactItems.map((item, i) => <span key={i} className="text-sm text-[#3D3D3D]">{item.text}</span>)}
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4" style={{ color: "#8E0019" }}>Explore</h5>
            <div className="flex flex-col gap-3">
              {exploreLinks.map((item) => <Link key={item} href="#" className="text-sm text-[#3D3D3D] hover:text-[#8E0019]">{item}</Link>)}
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4" style={{ color: "#8E0019" }}>Important Links</h5>
            <div className="flex flex-col gap-3">
              {importantLinks.map((item) => <Link key={item} href="#" className="text-sm text-[#3D3D3D] hover:text-[#8E0019]">{item}</Link>)}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {socialIcons.map((s, i) => (
              <Link key={i} href={s.href} className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80" style={{ backgroundColor: "#8E0019" }}>{s.svg}</Link>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col gap-8">
<Image src="/assets/footer-logo.webp" alt="LIDS Logo" width={327} height={86} quality={100} className="object-contain mx-auto" />
          <div className="grid grid-cols-2 gap-7">
            <div>
              <h5 className="font-semibold mb-3 text-[#FCAF16]">Address</h5>
              <p className="text-[#3D3D3D] text-sm leading-relaxed">NH-16, near HP Petrol Pump, Rajanagaram, Rajamahendravaram, Andhra Pradesh 533294</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-[#FCAF16]">Contact Us</h5>
              <div className="flex flex-col gap-3">
                {contactItems.map((item, i) => <span key={i} className="text-sm text-[#3D3D3D]">{item.text}</span>)}
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-[#FCAF16]">Explore</h5>
              <div className="flex flex-col gap-2">
                {exploreLinks.map((item) => <Link key={item} href="#" className="text-sm text-[#3D3D3D]">{item}</Link>)}
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-[#FCAF16]">Important Links</h5>
              <div className="flex flex-col gap-2">
                {importantLinks.map((item) => <Link key={item} href="#" className="text-sm text-[#3D3D3D]">{item}</Link>)}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="w-full py-5" style={{ backgroundColor: "#FCAF16" }}>
        <div className="container">

          {/* MOBILE */}
          <div className="md:hidden flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <Link href="#" className="!text-white text-sm">Terms & Conditions</Link>
              <Link href="#" className="!text-white text-sm">Cookie Policy</Link>
            </div>
            <p className="text-white text-sm">Copyright © 2026 LIDS. All rights reserved.</p>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center justify-between">
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