"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Academics", href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  { label: "Facilities", href: "/facilities" },
  { label: "Research", href: "/research" },
  { label: "Quick links", href: "/quick-links" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="sticky top-0 z-50" style={{ background: "#FFFFFFD6", borderBottom: "1px solid #E6E6E6", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}>    <div className="container h-25 flex items-center justify-between relative">
        <Link href="/" className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <Image src="/assets/lids-logo.svg" alt="LIDS Logo" width={99} height={100} priority className="object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-4 xl:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{ fontFamily: "Inter", fontSize: "16px", fontWeight: 500, lineHeight: "100%", color: isActive ? "#9E2016" : "#3D3D3D" }}
                className="transition-colors duration-200 hover:text-[#9E2016] whitespace-nowrap"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button - desktop only */}
        <Link href="/contact" style={{ backgroundColor: "#9E2016", borderRadius: "65px", border: "1px solid #9E2016", fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 500, color: "#ffffff", whiteSpace: "nowrap", flexShrink: 0, boxShadow: "0px 4px 4px 0px #0000001A, 0px 6px 6px 0px #1A1A1A08, 0px 13px 8px 0px #1A1A1A05, 0px 22px 9px 0px #1A1A1A03, 0px 35px 10px 0px #1A1A1A00, 0px 2px 12px 0px #FFFFFF40 inset",}}
  className="hidden lg:flex items-center cursor-pointer justify-center transition-opacity duration-200 hover:opacity-90 px-4 xl:px-8 py-3">Get in Touch</Link>
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{  borderRadius: "65px"}} className={`block w-6 h-0.5 bg-[#9E2016] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span style={{  borderRadius: "65px"}} className={`block w-6 h-0.5 bg-[#9E2016] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span style={{  borderRadius: "65px"}} className={`block w-6 h-0.5 bg-[#9E2016] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 500, color: isActive ? "#9E2016" : "#3D3D3D" }}
                className="transition-colors duration-200 hover:text-[#9E2016]"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}