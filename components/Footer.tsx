import Link from "next/link";
import { ArrowNE } from "@/components/ArrowIcon";

const cols = [
  {
    h: "Studio",
    links: [
      { label: "About", href: "/studio" },
      { label: "Journal", href: "#" },
    ],
  },
  {
    h: "Services",
    links: [
      { label: "Web design", href: "/services" },
      { label: "Landing pages", href: "/services" },
      { label: "SEO", href: "/services" },
      { label: "Analytics", href: "/services" },
    ],
  },
  {
    h: "Connect",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/havah_studios" },
      { label: "LinkedIn", href: "#" },
      { label: "havahstudios@gmail.com", href: "mailto:havahstudios@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="overflow-hidden"
      style={{ background: "#15171A", color: "#FFFFFF", padding: "clamp(48px,7vw,88px) clamp(20px,5vw,64px) 28px" }}
    >
      <div className="max-w-[1180px] mx-auto flex flex-wrap gap-10 justify-between">
        {/* CTA */}
        <div className="flex flex-col">
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A5059" }}>
            Have something to build?
          </span>
          <Link
            href="/contact"
            className="group no-underline relative block overflow-hidden"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4.5vw,56px)", textTransform: "uppercase", letterSpacing: "-0.02em", marginTop: "12px" }}
          >
            {/* Height spacer */}
            <span className="invisible flex items-center gap-[14px]" aria-hidden="true">
              Start a project <ArrowNE size={22} />
            </span>
            {/* Default — white, slides out upward on hover */}
            <span className="absolute inset-0 flex items-center gap-[14px] transition-transform duration-[480ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full" style={{ color: "#FFFFFF" }}>
              Start a project <span style={{ color: "#B5642E" }}><ArrowNE size={22} /></span>
            </span>
            {/* Hover — copper, slides in from below */}
            <span className="absolute inset-0 flex items-center gap-[14px] transition-transform duration-[480ms] ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0" style={{ color: "#B5642E" }}>
              Start a project{" "}
              <span className="inline-block transition-transform duration-[480ms] ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" style={{ color: "#FFFFFF" }}><ArrowNE size={22} /></span>
            </span>
          </Link>
        </div>

        {/* Link columns */}
        <div className="flex gap-10 sm:gap-14 flex-wrap">
          {cols.map((c) => (
            <div key={c.h} className="flex flex-col gap-[10px]">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4A5059", marginBottom: "4px" }}>
                {c.h}
              </span>
              {c.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="no-underline transition-colors hover:text-[#B5642E]"
                  style={{ fontSize: "14px", color: "#FFFFFF", opacity: 0.85 }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Giant HAVAH */}
      <div className="max-w-[1180px] mx-auto" style={{ marginTop: "clamp(40px,6vw,72px)" }}>
        <p
          className="m-0 font-black uppercase leading-none tracking-tight select-none"
          style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(80px,20vw,300px)", lineHeight: "0.8", letterSpacing: "-0.04em", color: "#20242A", WebkitTextStroke: "1px #32363D" }}
        >
          HAVAH
        </p>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1180px] mx-auto flex flex-wrap gap-4 items-center justify-between border-t pt-5 mt-6"
        style={{ borderColor: "#32363D" }}
      >
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="w-[22px] h-[22px] rounded-[5px] flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <circle cx="5" cy="5" r="2" fill="white" opacity="0.7" />
              <circle cx="11" cy="5" r="2" fill="white" opacity="0.7" />
              <circle cx="5" cy="11" r="2" fill="white" opacity="0.7" />
              <circle cx="11" cy="11" r="2" fill="white" opacity="0.3" />
            </svg>
          </div>
          <span className="font-black uppercase" style={{ fontFamily: "var(--font-display)", fontSize: "12px", letterSpacing: "0.06em", color: "#FFFFFF" }}>
            HAVAH
          </span>
        </Link>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#4A5059" }}>
          © 2025 HAVAH Studios
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A5059" }}>
          Los Angeles, CA
        </span>
      </div>
    </footer>
  );
}
