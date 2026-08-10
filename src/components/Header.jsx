"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import navData from "@/app/data/nav.json";

const navLinks = navData.headerLinks;
const quickLinks = navData.quickLinks;

function QuickLinksDropdown({ label, isActive }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{ fontFamily: "Inter", fontSize: "16px", fontWeight: 500, lineHeight: "100%", color: isActive ? "#9E2016" : "#3D3D3D" }}
        className="flex items-center gap-1 transition-colors duration-200 hover:text-[#9E2016] whitespace-nowrap cursor-pointer"
      >
        {label}
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-3 bg-white rounded-2xl shadow-lg overflow-hidden z-50 min-w-[160px]" style={{ border: "1px solid #E6E6E6" }}>
          {quickLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="block px-5 py-3 text-sm text-[#3D3D3D] hover:bg-[#F5FFFE] hover:text-[#9E2016] whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileQuickLinks({ label, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 500, color: "#3D3D3D" }}
        className="flex items-center gap-1 transition-colors duration-200 hover:text-[#9E2016] cursor-pointer"
      >
        {label}
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="flex flex-col gap-3 mt-3 pl-4">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onNavigate}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500, color: "#3D3D3D" }}
              className="transition-colors duration-200 hover:text-[#9E2016]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

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
            if (link.dropdown) return <QuickLinksDropdown key={link.label} label={link.label} isActive={quickLinks.some((q) => q.href === pathname)} />;
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
            if (link.dropdown) return <MobileQuickLinks key={link.label} label={link.label} onNavigate={() => setMenuOpen(false)} />;
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
