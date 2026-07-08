"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Only show on pointer devices (not touch)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.body.classList.add("custom-cursor");
    setActive(true);

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [role=button]")) setHovered(true);
      else setHovered(false);
    };

    const loop = () => {
      // Ring lags behind dot with lerp
      rx += (mx - rx) * 0.28;
      ry += (my - ry) * 0.28;

      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot) dot.style.transform = `translate(${mx}px,${my}px)`;
      if (ring) ring.style.transform = `translate(${rx}px,${ry}px)`;

      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("custom-cursor");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!active) return null;

  return (
    <>
      {/* Dot — snaps to cursor */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          width: hovered ? "10px" : "6px",
          height: hovered ? "10px" : "6px",
          background: "#B5642E",
          borderRadius: "50%",
          marginLeft: hovered ? "-5px" : "-3px",
          marginTop: hovered ? "-5px" : "-3px",
          transition: "width .18s ease, height .18s ease, margin .18s ease",
        }}
      />
      {/* Ring — follows with lag */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99998,
          width: hovered ? "44px" : "28px",
          height: hovered ? "44px" : "28px",
          border: "1.5px solid rgba(181,100,46,0.55)",
          borderRadius: "50%",
          marginLeft: hovered ? "-22px" : "-14px",
          marginTop: hovered ? "-22px" : "-14px",
          transition: "width .28s ease, height .28s ease, margin .28s ease",
        }}
      />
    </>
  );
}
