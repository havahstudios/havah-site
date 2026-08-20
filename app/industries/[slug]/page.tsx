import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowNE } from "@/components/ArrowIcon";
import { industryPages, getIndustryPage } from "@/lib/industries";

export function generateStaticParams() {
  return industryPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription };
}

// Renders "[text](href)" inside a plain string as real links, everything else as text.
function renderWithLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return <span key={i}>{part}</span>;
    const [, label, href] = match;
    return (
      <Link key={i} href={href} className="underline" style={{ color: "#15171A" }}>
        {label}
      </Link>
    );
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) notFound();

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "62px" }}>
        {/* Hero */}
        <section className="bg-white">
          <div
            className="max-w-[1180px] mx-auto"
            style={{ padding: "clamp(28px,4vw,56px) clamp(20px,5vw,64px) clamp(28px,4vw,52px)" }}
          >
            <div className="flex items-center justify-between mb-10">
              <span
                className="flex items-center gap-2"
                style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}
              >
                <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: "#B5642E" }} />
                {page.eyebrow}
              </span>
              <span
                className="hidden sm:block"
                style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}
              >
                Los Angeles, CA
              </span>
            </div>

            <h1
              className="m-0 mb-10 font-black uppercase"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,7vw,88px)", lineHeight: "0.98", letterSpacing: "-0.02em", color: "#15171A" }}
            >
              {page.headline[0]}{" "}
              <span
                style={{
                  background: "#B5642E",
                  color: "#fff",
                  fontSize: "0.55em",
                  padding: "0.2em 0.55em",
                  borderRadius: "0.15em",
                  display: "inline-block",
                }}
              >
                {page.headline[1]}
              </span>
              <br />
              {page.headline[2]}
            </h1>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <p className="m-0" style={{ fontSize: "17px", lineHeight: "1.65", color: "#5A6070", maxWidth: "460px", fontFamily: "var(--font-display)" }}>
                {page.subtext}
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

        {/* Pain points */}
        <Reveal>
          <section className="max-w-[1180px] mx-auto" style={{ padding: "clamp(48px,6vw,88px) clamp(20px,5vw,64px) 0" }}>
            <div className="flex items-baseline justify-between border-b mb-8 pb-4" style={{ borderColor: "#DDE1E8" }}>
              <span className="flex items-center gap-[0.55em]" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
                <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: "#B5642E" }} />
                Why {page.industry.toLowerCase()} sites underperform
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {page.painPoints.map((p) => (
                <div key={p.title}>
                  <h3
                    className="m-0 mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "19px", letterSpacing: "-0.01em", color: "#15171A" }}
                  >
                    {p.title}
                  </h3>
                  <p className="m-0" style={{ fontSize: "15px", lineHeight: "1.7", color: "#5A6070" }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Deliverables */}
        <Reveal>
          <section className="max-w-[1180px] mx-auto" style={{ padding: "clamp(56px,7vw,100px) clamp(20px,5vw,64px) 0" }}>
            <div className="flex items-baseline justify-between border-b mb-8 pb-4" style={{ borderColor: "#DDE1E8" }}>
              <span className="flex items-center gap-[0.55em]" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
                <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: "#B5642E" }} />
                What we build
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-9">
              {page.deliverables.map((d) => (
                <div key={d.title}>
                  <h3
                    className="m-0 mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "16px", letterSpacing: "-0.01em", color: "#15171A" }}
                  >
                    {d.title}
                  </h3>
                  <p className="m-0" style={{ fontSize: "14px", lineHeight: "1.65", color: "#5A6070" }}>
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Proof */}
        <Reveal>
          <section className="max-w-[1180px] mx-auto" style={{ padding: "clamp(56px,7vw,100px) clamp(20px,5vw,64px) 0" }}>
            {page.caseStudy ? (
              <a
                href={page.caseStudy.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded-2xl no-underline"
                style={{ aspectRatio: "21/9", background: "#0A0C0F" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={page.caseStudy.img}
                  alt={page.caseStudy.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: "grayscale(0.3) contrast(1.08)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,12,15,0.92) 0%, rgba(10,12,15,0.2) 55%, transparent 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0" style={{ padding: "28px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                    {page.caseStudy.meta}
                  </span>
                  <h3 className="m-0 mt-1" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(20px,3vw,30px)", textTransform: "uppercase", color: "#fff" }}>
                    {page.caseStudy.name}
                  </h3>
                  <p className="m-0 mt-2" style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", maxWidth: "520px" }}>
                    {page.caseStudy.note}
                  </p>
                </div>
              </a>
            ) : (
              <div
                className="rounded-2xl"
                style={{ background: "#F7F8FA", border: "1px solid #DDE1E8", padding: "clamp(28px,4vw,44px)" }}
              >
                <p className="m-0" style={{ fontSize: "16px", lineHeight: "1.75", color: "#3A3F47", maxWidth: "640px" }}>
                  {renderWithLinks(page.proofNote)}
                </p>
              </div>
            )}
          </section>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <section className="max-w-[1180px] mx-auto" style={{ padding: "clamp(56px,7vw,100px) clamp(20px,5vw,64px) 0" }}>
            <div className="flex items-baseline justify-between border-b mb-8 pb-4" style={{ borderColor: "#DDE1E8" }}>
              <span className="flex items-center gap-[0.55em]" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
                <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: "#B5642E" }} />
                Questions
              </span>
            </div>
            <div className="flex flex-col" style={{ maxWidth: "760px" }}>
              {page.faqs.map((f, i) => (
                <div key={f.q} style={{ padding: "22px 0", borderBottom: i < page.faqs.length - 1 ? "1px solid #DDE1E8" : "none" }}>
                  <h3 className="m-0 mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "16px", color: "#15171A" }}>
                    {f.q}
                  </h3>
                  <p className="m-0" style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#5A6070" }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <section className="max-w-[1180px] mx-auto" style={{ padding: "clamp(64px,8vw,120px) clamp(20px,5vw,64px)" }}>
            <div
              className="rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={{ background: "#15171A", padding: "clamp(32px,5vw,52px)" }}
            >
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9AA0AD" }}>
                  Have something to build?
                </span>
                <h2 className="m-0 mt-2 font-black uppercase" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,4vw,38px)", color: "#fff", letterSpacing: "-0.02em" }}>
                  Let&apos;s talk about your site.
                </h2>
              </div>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full text-white no-underline font-semibold shrink-0 transition-opacity hover:opacity-80"
                style={{ background: "#B5642E", fontSize: "14px", padding: "16px 30px", fontFamily: "var(--font-display)" }}
              >
                Start a project <ArrowNE size={13} />
              </Link>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
