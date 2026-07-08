"use client";

import { useRef } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const projects = [
  { name: "Kosher Hibachi LA", meta: "Restaurant", year: "2025", img: "/kosher-hibachi.jpg", href: "https://kosherhibachila.com/", index: "01", imgPosition: "center 60%" },
  { name: "Benny's Grill LA", meta: "Restaurant", year: "2025", img: "/bennys-grill.jpg", href: "https://www.bennysgrilllosangeles.com/", index: "02" },
  { name: "Luna Blu Jewelry", meta: "E-commerce", year: "2025", img: "https://assets.bigcartel.com/theme_images/141489810/DCDFCBF3-CC0E-4301-8660-91502512F72B_1_201_a.jpeg?auto=format&fit=max&w=1800", href: "https://www.lunablujewelry.com/", index: "03" },
];

function WorkCard({ w, i }: { w: typeof projects[0]; i: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const tx = (e.clientX - r.left) / r.width - 0.5;
    const ty = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${tx * 6}deg) rotateX(${-ty * 6}deg) translateY(-4px)`;
  };

  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transition = "transform 0.1s ease";
    if (imgRef.current) imgRef.current.style.filter = "grayscale(0) contrast(1.05)";
  };

  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
    e.currentTarget.style.transition = "transform 0.55s var(--ease-out)";
    if (imgRef.current) imgRef.current.style.filter = "grayscale(0.35) contrast(1.08)";
  };

  return (
    <Reveal delay={i * 60}>
      <a
        ref={cardRef}
        href={w.href}
        target={w.href.startsWith("http") ? "_blank" : undefined}
        rel={w.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="work-card relative block overflow-hidden rounded-2xl no-underline group"
        style={{
          aspectRatio: "4/3",
          background: "#0A0C0F",
          transition: "transform 0.55s var(--ease-out)",
        }}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={w.img}
          alt={w.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04]"
          style={{ filter: "grayscale(0.35) contrast(1.08)", transition: "transform 0.7s var(--ease-out), filter 0.5s ease", objectPosition: w.imgPosition ?? "center" }}
        />

        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,12,15,0.9) 0%, rgba(10,12,15,0.15) 50%, transparent 100%)" }}
        />

        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between" style={{ padding: "22px 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)" }}>
              {w.meta}
            </span>
            <h3
              className="m-0"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(16px,2vw,24px)",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                lineHeight: 1,
              }}
            >
              {w.name}
            </h3>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", flexShrink: 0 }}>
            {w.index}
          </span>
        </div>

        <div
          className="absolute bottom-0 left-0 h-[2px] group-hover:w-full"
          style={{ width: "0%", background: "#B5642E", transition: "width 0.5s var(--ease-out)" }}
        />
      </a>
    </Reveal>
  );
}


export default function WorkPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "62px" }}>

        {/* Header */}
        <section
          className="max-w-[1180px] mx-auto"
          style={{ padding: "clamp(40px,6vw,88px) clamp(20px,5vw,64px) 0" }}
        >
          <span
            className="hero-eyebrow flex items-center gap-[0.55em]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}
          >
            <span className="w-[6px] h-[6px] rounded-full" style={{ background: "#B5642E" }} />
            Selected Work
          </span>

          <h1
            className="m-0 mt-5 font-black uppercase"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,6.5vw,88px)", lineHeight: "0.96", letterSpacing: "-0.03em", color: "#15171A" }}
          >
            <span className="hero-clip"><span>Work that</span></span>
            <span className="hero-clip">
              <span>
                earns its{" "}
                <span style={{ color: "transparent", WebkitTextStroke: "2px #15171A" }}>keep.</span>
              </span>
            </span>
          </h1>
        </section>

        {/* Grid */}
        <section
          className="max-w-[1180px] mx-auto"
          style={{ padding: "clamp(40px,5vw,60px) clamp(20px,5vw,64px) clamp(64px,9vw,120px)" }}
        >
          {/* 4-col grid: top row fills 2+2, middle row is col-start-2 spanning 2 (centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="sm:col-span-2">
              <WorkCard w={projects[0]} i={0} />
            </div>
            <div className="sm:col-span-2">
              <WorkCard w={projects[1]} i={1} />
            </div>
            <div className="sm:col-start-2 sm:col-span-2">
              <WorkCard w={projects[2]} i={2} />
            </div>
          </div>

          {/* Ghost peek — more work hiding below */}
          <Reveal delay={240}>
            <div className="relative mt-4" style={{ height: "88px", overflow: "hidden" }}>
              {/* Two ghost card tops */}
              <div
                className="grid gap-4 pointer-events-none select-none"
                style={{ gridTemplateColumns: "1fr 1fr", opacity: 0.1 }}
              >
                <div className="rounded-2xl" style={{ aspectRatio: "4/3", background: "#15171A" }} />
                <div className="rounded-2xl" style={{ aspectRatio: "4/3", background: "#15171A" }} />
              </div>
              {/* Gradient fade to white */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 40%, #ffffff 80%)" }}
              />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3 pb-1">
                <div style={{ width: "28px", height: "1px", background: "#A0A8B4" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7280" }}>
                  More sites on the way
                </span>
                <div style={{ width: "28px", height: "1px", background: "#A0A8B4" }} />
              </div>
            </div>
          </Reveal>

        </section>

      </main>
      <Footer />
    </>
  );
}
