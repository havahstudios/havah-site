"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const services = [
  { n: "01", t: "Website Design", cat: "Sites · Landing pages" },
  { n: "02", t: "SEO", cat: "Rankings · Traffic" },
  { n: "03", t: "Performance", cat: "Speed · Core Web Vitals" },
  { n: "04", t: "Analytics", cat: "Tracking · Reporting" },
];

export default function ServicesList() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      className="max-w-[1180px] mx-auto"
      style={{ padding: "clamp(56px,8vw,112px) clamp(20px,5vw,64px) 0" }}
    >
      <Reveal>
        <div className="flex items-baseline justify-between border-b mb-9 pb-4" style={{ borderColor: "#DDE1E8" }}>
          <span className="flex items-center gap-[0.55em]" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
            <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: "#B5642E" }} />
            What we do
          </span>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {services.map(({ n, t, cat }) => {
          const isHovered = hovered === n;
          const anyHovered = hovered !== null;

          return (
            <a
              key={n}
              href="/services"
              className="service-row flex items-center gap-[14px] no-underline border-b"
              style={{ padding: "clamp(10px,1.4vw,18px) 8px", borderColor: "#DDE1E8" }}
              onMouseEnter={() => setHovered(n)}
              onMouseLeave={() => setHovered(null)}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#98A0AD", width: "36px", flexShrink: 0, transition: "color 0.3s ease", ...(isHovered && { color: "#B5642E" }) }}>
                {n}
              </span>
              <h3
                className="service-title m-0 flex-1 min-w-0"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(28px,6vw,82px)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  color: isHovered ? "#15171A" : (anyHovered ? "transparent" : (n === "01" ? "#15171A" : "transparent")),
                  WebkitTextStroke: isHovered ? "none" : (anyHovered ? "1.5px #C2C8D2" : (n === "01" ? "none" : "1.5px #C2C8D2")),
                  transition: "color 0.3s ease, -webkit-text-stroke 0.3s ease",
                }}
              >
                {t}
              </h3>
              <span className="hidden md:block" style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280", flexShrink: 0, opacity: isHovered ? 1 : 0, transition: "opacity 0.2s ease" }}>
                {cat}
              </span>
              <div
                className="hidden sm:flex w-10 h-10 rounded-full border items-center justify-center shrink-0 transition-all"
                style={{
                  borderColor: isHovered ? "#15171A" : "#DDE1E8",
                  background: isHovered ? "#15171A" : "transparent",
                  color: isHovered ? "#FFFFFF" : "#15171A",
                  fontSize: "16px",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateX(0)" : "translateX(-8px)",
                }}
              >
                →
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
