"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowNE } from "@/components/ArrowIcon";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Services", href: "/services" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] border-b border-[#DDE1E8]"
      style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(10px)" }}
    >
      <div
        className="max-w-[1180px] mx-auto h-[62px] flex items-center justify-between gap-6"
        style={{ padding: "0 clamp(20px,5vw,64px)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline shrink-0" onClick={() => setOpen(false)}>
          <div className="w-[28px] h-[28px] rounded-[7px] bg-[#15171A] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="5" cy="5" r="2" fill="white" opacity="0.85" />
              <circle cx="11" cy="5" r="2" fill="white" opacity="0.85" />
              <circle cx="5" cy="11" r="2" fill="white" opacity="0.85" />
              <circle cx="11" cy="11" r="2" fill="white" opacity="0.4" />
            </svg>
          </div>
          <span className="font-black text-[13px] text-[#15171A] uppercase" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}>
            HAVAH
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className="relative no-underline py-1"
                style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: active ? "#15171A" : "#6B7280", transition: "color .22s ease" }}
              >
                {label}
                {active && <span className="absolute left-0 w-full" style={{ height: "2px", background: "#B5642E", bottom: "-2px" }} />}
              </Link>
            );
          })}
        </nav>

        {/* Right — desktop */}
        <div className="hidden md:flex items-center gap-[18px] shrink-0">
          <span className="flex items-center gap-[7px]">
            <span className="w-[7px] h-[7px] rounded-full shrink-0" style={{ background: "#18A05A", boxShadow: "0 0 0 3px rgba(24,160,90,0.18)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280" }}>Taking on projects</span>
          </span>
          <Link href="/contact" className="flex items-center gap-1.5 rounded-full text-white text-[12px] font-semibold no-underline transition-opacity hover:opacity-90" style={{ background: "#B5642E", padding: "9px 18px", fontFamily: "var(--font-display)" }}>
            Let&apos;s talk <ArrowNE size={11} />
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 shrink-0 bg-transparent border-0 p-1"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ cursor: "pointer" }}
        >
          <span className="block h-[1.5px] bg-[#15171A] transition-all duration-300" style={{ transform: open ? "rotate(45deg) translate(4.5px,4.5px)" : "none" }} />
          <span className="block h-[1.5px] bg-[#15171A] transition-all duration-300" style={{ opacity: open ? 0 : 1 }} />
          <span className="block h-[1.5px] bg-[#15171A] transition-all duration-300" style={{ transform: open ? "rotate(-45deg) translate(4.5px,-4.5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 border-t border-[#DDE1E8]"
        style={{ maxHeight: open ? "400px" : "0", background: "rgba(255,255,255,0.97)", backdropFilter: "blur(10px)" }}
      >
        <nav className="flex flex-col px-6 py-5 gap-4">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="no-underline py-1"
                style={{ fontFamily: "var(--font-mono)", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: active ? "#B5642E" : "#15171A" }}
              >
                {label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-[#DDE1E8] flex items-center justify-between">
            <span className="flex items-center gap-[7px]">
              <span className="w-[7px] h-[7px] rounded-full" style={{ background: "#18A05A" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280" }}>Taking on projects</span>
            </span>
            <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center gap-1.5 rounded-full text-white text-[12px] font-semibold no-underline" style={{ background: "#B5642E", padding: "8px 16px", fontFamily: "var(--font-display)" }}>
              Let&apos;s talk <ArrowNE size={11} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
