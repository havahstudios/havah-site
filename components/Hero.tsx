import Link from "next/link";
import ScramblePill from "@/components/ScramblePill";
import { ArrowNE } from "@/components/ArrowIcon";

export default function Hero() {
  return (
    <section className="bg-white">
      <div
        className="max-w-[1180px] mx-auto"
        style={{ padding: "clamp(28px,4vw,56px) clamp(20px,5vw,64px) clamp(28px,4vw,52px)" }}
      >
        {/* Eyebrow */}
        <div className="hero-eyebrow flex items-center justify-between mb-10">
          <span
            className="flex items-center gap-2"
            style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}
          >
            <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: "#B5642E" }} />
            Studio — Los Angeles
          </span>
          <span className="hidden sm:block" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
            Los Angeles, CA
          </span>
        </div>

        {/* Headline + floating pill */}
        <div className="relative mb-10">
          <h1
            className="m-0 font-black uppercase"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px,8.5vw,108px)", lineHeight: "0.92", letterSpacing: "-0.02em", color: "#15171A" }}
          >
            <span className="hero-clip">
              <span className="flex items-center flex-wrap gap-4" style={{ marginBottom: "0.06em" }}>
                <span className="whitespace-nowrap">We Design</span>
                <span className="pill-float">
                  <ScramblePill
                    className="hero-pill"
                    style={{
                      background: "#B5642E",
                      fontSize: "clamp(20px,3vw,44px)",
                      padding: "0.2em 0.6em",
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      letterSpacing: "0.02em",
                    }}
                  />
                </span>
              </span>
            </span>
            <span className="hero-clip"><span>That Get</span></span>
            <span className="hero-clip"><span>Found And</span></span>
            <span className="hero-clip">
              <span>
                <span style={{ color: "transparent", WebkitTextStroke: "3px #15171A" }}>Sell.</span>
              </span>
            </span>
          </h1>
        </div>

        {/* Bottom row */}
        <div className="hero-body flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="m-0" style={{ fontSize: "15px", lineHeight: "1.65", color: "#5A6070", maxWidth: "340px", fontFamily: "var(--font-display)" }}>
            We build websites that rank on Google and convert the people who find them. One team, no hand-offs.
          </p>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full text-white no-underline font-semibold transition-opacity hover:opacity-80"
              style={{ background: "#B5642E", fontSize: "13px", padding: "14px 28px", fontFamily: "var(--font-display)" }}
            >
              Start a project <ArrowNE size={12} />
            </Link>
            <Link
              href="/work"
              className="flex items-center rounded-full no-underline font-semibold transition-colors hover:bg-[#15171A] hover:text-white"
              style={{ border: "2px solid #15171A", color: "#15171A", fontSize: "13px", padding: "13px 28px", fontFamily: "var(--font-display)" }}
            >
              View work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
