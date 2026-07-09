"use client";

import { useState, useEffect, useRef } from "react";

const WORDS = ["WEBSITES", "PAGES", "SITES", "STORES"];
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScramblePill({ style, className }: { style?: React.CSSProperties; className?: string }) {
  const [text, setText] = useState(WORDS[0]);
  const wordIdxRef = useRef(0);
  const scrambleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const runScramble = (target: string) => {
      if (scrambleRef.current) clearInterval(scrambleRef.current);
      const steps = 20;
      const duration = 600;
      let step = 0;

      scrambleRef.current = setInterval(() => {
        step++;
        const resolved = Math.floor((step / steps) * target.length);
        let out = "";
        for (let i = 0; i < target.length; i++) {
          if (i < resolved) {
            out += target[i];
          } else {
            out += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setText(out);
        if (step >= steps) {
          clearInterval(scrambleRef.current!);
          setText(target);
        }
      }, duration / steps);
    };

    const timer = setInterval(() => {
      wordIdxRef.current = (wordIdxRef.current + 1) % WORDS.length;
      runScramble(WORDS[wordIdxRef.current]);
    }, 2800);

    return () => {
      clearInterval(timer);
      if (scrambleRef.current) clearInterval(scrambleRef.current);
    };
  }, []);

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full text-white shrink-0${className ? ` ${className}` : ""}`}
      style={{ ...style, minWidth: "4ch" }}
    >
      {text}
    </span>
  );
}
