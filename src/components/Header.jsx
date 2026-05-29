"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Facilities", href: "/facilities" },
  { label: "Research", href: "/research" },
  { label: "Quick links", href: "/quick-links" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container h-25 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/lids-logo.svg"
            alt="LIDS Logo"
            width={99}
            height={100}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "100%",
                  color: isActive ? "#9E2016" : "#3D3D3D",
                }}
                className="transition-colors duration-200 hover:text-[#9E2016] whitespace-nowrap gap-6"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          style={{
            backgroundColor: "#9E2016",
            borderRadius: "65px",
            border: "1px solid #9E2016",
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingLeft: "32px",
            paddingRight: "32px",
            width: "162px",
            height: "48px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
          className="hidden lg:flex transition-opacity duration-200 hover:opacity-90"
        >
          Get in Touch
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: isActive ? "#9E2016" : "#3D3D3D",
                }}
                className="transition-colors duration-200 hover:text-[#9E2016]"
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            style={{
              backgroundColor: "#9E2016",
              borderRadius: "65px",
              padding: "12px 32px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              color: "#ffffff",
              textAlign: "center",
            }}
            className="hover:opacity-90 transition-opacity duration-200"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}