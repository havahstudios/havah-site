"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    title: "Rankings compound.",
    desc: "SEO builds over time. The work we do in month one is still paying off in month twelve.",
  },
  {
    title: "Design that sells.",
    desc: "We don't design for awards. We design for the person deciding whether to trust you enough to buy.",
  },
  {
    title: "You own it.",
    desc: "Your site, your rankings, your content. No mystery, no lock-in, no dependency on us.",
  },
];

export default function Advantage() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % slides.length);
        setVisible(true);
      }, 280);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[idx];

  return (
    <section
      className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center"
      style={{
        padding: "clamp(64px,9vw,120px) clamp(20px,5vw,64px)",
        gap: "clamp(32px,5vw,72px)",
      }}
    >
      {/* Left: 3-pill graphic — tablet and desktop only */}
      <div
        className="hidden md:flex items-center justify-center rounded-xl bg-white overflow-visible"
        style={{ border: "1px solid #15171A", aspectRatio: "1/0.78" }}
      >
        {/* Whole stack bobs up/down together */}
        <div className="flex flex-col items-center" style={{ animation: "hv-float 3.2s ease-in-out infinite" }}>
          {/* Brown — top, squishes first */}
          <div
            className="rounded-full"
            style={{
              width: "clamp(120px,16vw,200px)",
              height: "clamp(40px,5vw,62px)",
              border: "1.5px solid #15171A",
              background: "#B5642E",
              animation: "hv-squish 3.2s ease-in-out infinite",
              animationDelay: "0s",
            }}
          />
          {/* White — middle, squishes slightly after */}
          <div
            className="rounded-full"
            style={{
              width: "clamp(120px,16vw,200px)",
              height: "clamp(40px,5vw,62px)",
              border: "1.5px solid #15171A",
              background: "#FFFFFF",
              marginTop: "-10px",
              animation: "hv-squish 3.2s ease-in-out infinite",
              animationDelay: "0.18s",
            }}
          />
          {/* White — bottom, squishes last */}
          <div
            className="rounded-full"
            style={{
              width: "clamp(120px,16vw,200px)",
              height: "clamp(40px,5vw,62px)",
              border: "1.5px solid #15171A",
              background: "#FFFFFF",
              marginTop: "-10px",
              animation: "hv-squish 3.2s ease-in-out infinite",
              animationDelay: "0.36s",
            }}
          />
        </div>
      </div>

      {/* Right: auto-cycling text */}
      <div>
        <span
          className="flex items-center gap-[0.55em]"
          style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}
        >
          <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: "#B5642E" }} />
          Why HAVAH
        </span>

        {/* Fading text block */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.28s ease, transform 0.28s ease",
          }}
        >
          <h2
            className="mt-[18px] mb-0"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(34px,4.6vw,60px)",
              lineHeight: "0.98",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#15171A",
            }}
          >
            {slide.title}
          </h2>
          <p
            className="mt-[18px] mb-7"
            style={{ fontSize: "clamp(15px,1.3vw,17px)", lineHeight: "1.6", color: "#6B7280", maxWidth: "380px" }}
          >
            {slide.desc}
          </p>
        </div>

      </div>
    </section>
  );
}
