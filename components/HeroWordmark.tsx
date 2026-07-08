import Link from "next/link";

export default function HeroWordmark() {
  return (
    <section
      className="max-w-[1180px] mx-auto"
      style={{ padding: "clamp(28px,5vw,64px) clamp(20px,5vw,64px) 0" }}
    >
      {/* Eyebrow */}
      <div
        className="flex items-center justify-between border-b pb-4"
        style={{ borderColor: "#DDE1E8" }}
      >
        <span
          className="flex items-center gap-[0.55em]"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#6B7280",
          }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full shrink-0"
            style={{ background: "#B5642E" }}
          />
          Studio — Los Angeles
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#6B7280",
          }}
        >
          Brooklyn / Lisbon
        </span>
      </div>

      {/* Giant HAVAH wordmark */}
      <div
        className="flex items-center justify-center"
        style={{ gap: "clamp(16px,4vw,56px)", padding: "clamp(36px,7vw,88px) 0 clamp(28px,5vw,56px)" }}
      >
        <span
          className="leading-none select-none"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(20px,3vw,34px)",
            color: "#C2C8D2",
          }}
        >
          +
        </span>
        <h1
          className="font-black uppercase text-center m-0"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(64px,17vw,260px)",
            lineHeight: "0.82",
            letterSpacing: "-0.05em",
            color: "#15171A",
          }}
        >
          HAVAH
        </h1>
        <span
          className="leading-none select-none"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(20px,3vw,34px)",
            color: "#C2C8D2",
          }}
        >
          +
        </span>
      </div>

      {/* Body + buttons */}
      <div
        className="flex flex-wrap items-end justify-between"
        style={{ gap: "24px 48px" }}
      >
        <p
          className="m-0"
          style={{
            fontSize: "clamp(16px,1.4vw,19px)",
            lineHeight: "1.55",
            maxWidth: "460px",
            color: "#212429",
          }}
        >
          An independent studio for ambitious teams — identity, web and product
          design, built end to end with the people who care most.
        </p>
        <div className="flex gap-3 shrink-0">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full text-white no-underline font-semibold transition-opacity hover:opacity-90"
            style={{
              background: "#B5642E",
              fontSize: "13px",
              padding: "14px 28px",
              fontFamily: "var(--font-display)",
            }}
          >
            Start a project <span>↗</span>
          </Link>
          <Link
            href="/work"
            className="flex items-center rounded-full no-underline font-semibold transition-colors hover:bg-[#15171A] hover:text-white"
            style={{
              border: "2px solid #15171A",
              color: "#15171A",
              fontSize: "13px",
              padding: "13px 28px",
              fontFamily: "var(--font-display)",
            }}
          >
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}
