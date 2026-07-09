"use client";

import { useRef } from "react";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/ArrowIcon";

const projects = [
  { name: "Kosher Hibachi LA", meta: "Restaurant", img: "/kosher-hibachi.jpg", href: "https://kosherhibachila.com/", imgPosition: "center 60%" },
  { name: "Luna Blu Jewelry", meta: "E-commerce", img: "https://assets.bigcartel.com/theme_images/141489810/DCDFCBF3-CC0E-4301-8660-91502512F72B_1_201_a.jpeg?auto=format&fit=max&w=1800", href: "https://www.lunablujewelry.com/" },
];

function TiltCard({ w, index }: { w: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)";
    e.currentTarget.style.transition = "transform 0.5s var(--ease-out), box-shadow 0.5s ease";
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transition = "transform 0.1s ease, box-shadow 0.3s ease";
  };

  return (
    <Reveal delay={index * 80}>
      <a
        ref={cardRef}
        href={w.href}
        target={w.href.startsWith("http") ? "_blank" : undefined}
        rel={w.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="work-card flex flex-col bg-white border rounded-xl overflow-hidden no-underline group"
        style={{ borderColor: "#DDE1E8", display: "flex", flexDirection: "column", transition: "transform 0.5s var(--ease-out), box-shadow 0.5s ease" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
      >
        <div className="overflow-hidden bg-[#DDE1E8]" style={{ aspectRatio: "16/11" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={w.img}
            alt={w.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            style={{ filter: "grayscale(0.4) contrast(1.05)", objectPosition: w.imgPosition ?? "center" }}
          />
        </div>
        <div className="flex flex-col gap-2 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3
              className="m-0"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "18px", letterSpacing: "-0.01em", textTransform: "uppercase", lineHeight: "1.05", color: "#15171A" }}
            >
              {w.name}
            </h3>
            <div
              className="w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#15171A] group-hover:border-[#15171A] group-hover:text-white"
              style={{ borderColor: "#DDE1E8", color: "#15171A" }}
            >
              <ArrowRight size={13} />
            </div>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280" }}>
            {w.meta}
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section
      className="max-w-[1180px] mx-auto"
      style={{ padding: "clamp(48px,7vw,96px) clamp(20px,5vw,64px) 0" }}
    >
      <Reveal>
        <div className="flex items-baseline justify-between border-b mb-8 pb-4" style={{ borderColor: "#DDE1E8" }}>
          <span className="flex items-center gap-[0.55em]" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
            <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: "#B5642E" }} />
            Selected Work
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#98A0AD" }}>01 — 02</span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
        {projects.map((w, i) => (
          <TiltCard key={w.name} w={w} index={i} />
        ))}
      </div>
    </section>
  );
}
