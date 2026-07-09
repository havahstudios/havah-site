import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowNE, ArrowRight } from "@/components/ArrowIcon";

const mono = { fontFamily: "var(--font-mono)" } as React.CSSProperties;
const display = { fontFamily: "var(--font-display)" } as React.CSSProperties;

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "62px" }}>

        {/* ── Hero ── */}
        <section className="max-w-[1180px] mx-auto" style={{ padding: "clamp(40px,6vw,88px) clamp(20px,5vw,64px) clamp(40px,5vw,64px)" }}>
          <span className="flex items-center gap-[0.55em]" style={{ ...mono, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
            <span className="w-[6px] h-[6px] rounded-full" style={{ background: "#B5642E" }} />
            Services
          </span>
          <h1 className="m-0 mt-[22px]" style={{ ...display, fontWeight: 800, fontSize: "clamp(40px,6.5vw,88px)", lineHeight: "0.96", letterSpacing: "-0.03em", textTransform: "uppercase", color: "#15171A" }}>
            How we grow<br />your{" "}
            <span style={{ color: "transparent", WebkitTextStroke: "2px #15171A" }}>business</span>.
          </h1>
          <p className="mt-6 mb-0" style={{ fontSize: "clamp(15px,1.3vw,18px)", lineHeight: "1.6", maxWidth: "480px", color: "#6B7280" }}>
            Web design and SEO. We specialize in both so you don&apos;t have to choose between looking good and being found.
          </p>
        </section>

        {/* ── Bento grid ── */}
        <div
          className="max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-3"
          style={{ padding: "0 clamp(20px,5vw,64px)", gap: "12px" }}
        >

          {/* 01 — Brand Identity — DARK, wide */}
          <div
            className="group relative overflow-hidden rounded-2xl flex flex-col justify-between sm:col-span-2 cursor-pointer
              transition-all duration-300 ease-out
              hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(0,0,0,0.28)]"
            style={{ background: "#15171A", padding: "clamp(28px,3vw,44px)", minHeight: "420px" }}
          >
            {/* Concentric copper circles — grow on hover */}
            <svg width="380" height="380" viewBox="0 0 380 380" fill="none"
              className="absolute pointer-events-none transition-transform duration-500 ease-out group-hover:scale-125"
              style={{ top: "-80px", right: "-80px", opacity: 0.28, transformOrigin: "center center" }}>
              <circle cx="190" cy="190" r="180" stroke="#B5642E" strokeWidth="1"/>
              <circle cx="190" cy="190" r="120" stroke="#B5642E" strokeWidth="1"/>
              <circle cx="190" cy="190" r="60" stroke="#B5642E" strokeWidth="1"/>
            </svg>

            <div className="relative z-10">
              <h2 style={{ ...display, fontWeight: 900, fontSize: "clamp(30px,4vw,58px)", letterSpacing: "-0.03em", textTransform: "uppercase", color: "#FFFFFF", margin: "0", lineHeight: "0.92" }}>
                Website<br />Design
              </h2>
            </div>

            <div className="relative z-10">
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "rgba(255,255,255,0.5)", margin: "0 0 22px 0", maxWidth: "400px" }}>
                Custom marketing sites built to rank and convert. Not templates, not page builders — made for your specific business.
              </p>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex flex-wrap gap-2">
                  {["Marketing Sites", "Landing Pages", "Design Systems"].map(tag => (
                    <span key={tag} className="rounded-full" style={{ ...mono, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", background: "rgba(255,255,255,0.07)", padding: "5px 12px" }}>{tag}</span>
                  ))}
                </div>
                <Link href="/contact" className="w-10 h-10 rounded-full flex items-center justify-center no-underline shrink-0 transition-opacity hover:opacity-70" style={{ background: "#B5642E", color: "#FFFFFF", fontSize: "15px" }}><ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>

          {/* 02 — Web Design — COPPER, narrow */}
          <div
            className="group relative overflow-hidden rounded-2xl flex flex-col justify-between cursor-pointer
              transition-all duration-300 ease-out
              hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(181,100,46,0.4)]"
            style={{ background: "#B5642E", padding: "clamp(28px,3vw,44px)", minHeight: "420px" }}
          >
            {/* Cross / plus — rotates and grows on hover */}
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none"
              className="absolute pointer-events-none transition-all duration-500 ease-out group-hover:scale-150 group-hover:rotate-[30deg]"
              style={{ bottom: "60px", right: "-40px", opacity: 0.25, transformOrigin: "center center" }}>
              <line x1="100" y1="0" x2="100" y2="200" stroke="white" strokeWidth="1.5"/>
              <line x1="0" y1="100" x2="200" y2="100" stroke="white" strokeWidth="1.5"/>
            </svg>

            <div className="relative z-10">
              <h2 style={{ ...display, fontWeight: 900, fontSize: "clamp(26px,3.5vw,44px)", letterSpacing: "-0.03em", textTransform: "uppercase", color: "#FFFFFF", margin: "0", lineHeight: "0.92" }}>
                Search<br />SEO
              </h2>
            </div>

            <div className="relative z-10">
              <p style={{ fontSize: "14px", lineHeight: "1.7", color: "rgba(255,255,255,0.62)", margin: "0 0 20px 0" }}>
                Rankings that compound. Technical foundation, on-page strategy, and keyword research — not just the basics.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {["Technical SEO", "On-Page", "Keywords"].map(tag => (
                    <span key={tag} className="rounded-full" style={{ ...mono, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.12)", padding: "5px 10px" }}>{tag}</span>
                  ))}
                </div>
                <Link href="/contact" className="w-10 h-10 rounded-full flex items-center justify-center no-underline self-end transition-opacity hover:opacity-70" style={{ background: "rgba(255,255,255,0.18)", color: "#FFFFFF", fontSize: "15px" }}><ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>

          {/* 03 — Development — LIGHT, narrow */}
          <div
            className="group relative overflow-hidden rounded-2xl flex flex-col justify-between cursor-pointer
              transition-all duration-300 ease-out
              hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(0,0,0,0.1)]"
            style={{ background: "#F2F3F5", padding: "clamp(28px,3vw,44px)", minHeight: "380px" }}
          >
            {/* Diagonal hatch — shifts and expands on hover */}
            <svg width="280" height="280" viewBox="0 0 280 280" fill="none"
              className="absolute pointer-events-none transition-transform duration-500 ease-out group-hover:scale-125 group-hover:translate-x-4"
              style={{ top: "-40px", right: "-40px", opacity: 0.2, transformOrigin: "top right" }}>
              <line x1="0" y1="280" x2="280" y2="0" stroke="#15171A" strokeWidth="1"/>
              <line x1="40" y1="280" x2="280" y2="40" stroke="#15171A" strokeWidth="1"/>
              <line x1="80" y1="280" x2="280" y2="80" stroke="#15171A" strokeWidth="1"/>
              <line x1="120" y1="280" x2="280" y2="120" stroke="#15171A" strokeWidth="1"/>
            </svg>

            <div className="relative z-10">
              <h2 style={{ ...display, fontWeight: 900, fontSize: "clamp(26px,3.5vw,44px)", letterSpacing: "-0.03em", textTransform: "uppercase", color: "#15171A", margin: "0", lineHeight: "0.92" }}>
                Site<br />Speed
              </h2>
            </div>

            <div className="relative z-10">
              <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#6B7280", margin: "0 0 20px 0" }}>
                A slow site ranks lower and loses visitors before the page loads. Speed is built in from day one.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {["Core Web Vitals", "Load Time", "Mobile"].map(tag => (
                    <span key={tag} className="rounded-full" style={{ ...mono, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", background: "#E4E7EC", padding: "5px 10px" }}>{tag}</span>
                  ))}
                </div>
                <Link href="/contact" className="w-10 h-10 rounded-full flex items-center justify-center no-underline self-end transition-opacity hover:opacity-70" style={{ background: "#15171A", color: "#FFFFFF", fontSize: "15px" }}><ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>

          {/* 04 — Growth & SEO — WHITE bordered, wide */}
          <div
            className="group relative overflow-hidden rounded-2xl flex flex-col justify-between sm:col-span-2 cursor-pointer
              transition-all duration-300 ease-out
              hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(0,0,0,0.09)]"
            style={{ background: "#FFFFFF", padding: "clamp(28px,3vw,44px)", minHeight: "380px", border: "1px solid #E4E7EC" }}
          >
            {/* Nested arcs — expand outward on hover */}
            <svg width="380" height="380" viewBox="0 0 380 380" fill="none"
              className="absolute pointer-events-none transition-transform duration-500 ease-out group-hover:scale-125"
              style={{ bottom: "-120px", right: "-120px", opacity: 0.2, transformOrigin: "bottom right" }}>
              <circle cx="190" cy="190" r="175" stroke="#B5642E" strokeWidth="1.5"/>
              <circle cx="190" cy="190" r="110" stroke="#B5642E" strokeWidth="1.5"/>
              <circle cx="190" cy="190" r="50" stroke="#B5642E" strokeWidth="1.5"/>
            </svg>

            <div className="relative z-10">
              <h2 style={{ ...display, fontWeight: 900, fontSize: "clamp(30px,4vw,58px)", letterSpacing: "-0.03em", textTransform: "uppercase", color: "#15171A", margin: "0", lineHeight: "0.92" }}>
                Tracking<br />&amp; Analytics
              </h2>
            </div>

            <div className="relative z-10">
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#6B7280", margin: "0 0 22px 0", maxWidth: "400px" }}>
                You can&apos;t improve what you don&apos;t measure. We set up reporting that shows exactly what&apos;s working — and what isn&apos;t.
              </p>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex flex-wrap gap-2">
                  {["GA4", "Attribution", "Reporting"].map(tag => (
                    <span key={tag} className="rounded-full" style={{ ...mono, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", background: "#F0F2F5", padding: "5px 12px" }}>{tag}</span>
                  ))}
                </div>
                <Link href="/contact" className="w-10 h-10 rounded-full flex items-center justify-center no-underline shrink-0 transition-opacity hover:opacity-70" style={{ background: "#B5642E", color: "#FFFFFF", fontSize: "15px" }}><ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>

        </div>

        {/* ── CTA ── */}
        <section
          className="max-w-[1180px] mx-auto text-center flex flex-col items-center gap-[22px]"
          style={{ padding: "clamp(72px,10vw,140px) clamp(20px,5vw,64px)" }}
        >
          <span className="flex items-center gap-[0.55em]" style={{ ...mono, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
            <span className="w-[6px] h-[6px] rounded-full" style={{ background: "#B5642E" }} />
            Ready?
          </span>
          <h2 className="m-0" style={{ ...display, fontWeight: 800, fontSize: "clamp(34px,5.5vw,72px)", lineHeight: "0.98", letterSpacing: "-0.03em", textTransform: "uppercase", color: "#15171A" }}>
            Tell us what you are building.
          </h2>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full text-white no-underline font-semibold transition-opacity hover:opacity-90"
            style={{ background: "#B5642E", fontSize: "13px", padding: "14px 28px", ...display }}
          >
            Start a project <ArrowNE size={12} />
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
