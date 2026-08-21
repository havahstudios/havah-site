import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowNE } from "@/components/ArrowIcon";
import { industryPages, getIndustryPage, type CaseStudy, type Photo } from "@/lib/industries";

function isLive(p: { publishDate: Date }) {
  return p.publishDate <= new Date();
}

export function generateStaticParams() {
  return industryPages.filter(isLive).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page || !isLive(page)) return {};
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

function CaseStudyCard({ c, aspect }: { c: CaseStudy; aspect: string }) {
  return (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden rounded-2xl no-underline group"
      style={{ aspectRatio: aspect, background: "#0A0C0F" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={c.img}
        alt={c.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        style={{ filter: "grayscale(0.3) contrast(1.08)" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,12,15,0.92) 0%, rgba(10,12,15,0.2) 55%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0" style={{ padding: "28px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
          {c.meta}
        </span>
        <h3 className="m-0 mt-1" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(18px,2.4vw,26px)", textTransform: "uppercase", color: "#fff" }}>
          {c.name}
        </h3>
        <p className="m-0 mt-2" style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.75)", maxWidth: "480px" }}>
          {c.note}
        </p>
      </div>
    </a>
  );
}

function GalleryCard({ c }: { c: CaseStudy }) {
  return (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden rounded-xl no-underline group"
      style={{ aspectRatio: "4/3", background: "#0A0C0F" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={c.img}
        alt={c.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        style={{ filter: "grayscale(0.3) contrast(1.08)" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,12,15,0.88) 0%, rgba(10,12,15,0.1) 60%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0" style={{ padding: "16px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "9.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
          {c.meta}
        </span>
        <h3 className="m-0 mt-0.5" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "15px", textTransform: "uppercase", color: "#fff" }}>
          {c.name}
        </h3>
      </div>
    </a>
  );
}

function PhotoBand({ img, line }: { img: Photo; line: string }) {
  return (
    <section className="relative overflow-hidden" style={{ padding: "clamp(72px,10vw,140px) clamp(20px,5vw,64px)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "grayscale(0.55) contrast(1.05)" }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(10,12,15,0.68)" }} />
      <p
        className="relative m-0 mx-auto text-center font-black uppercase"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px,5vw,60px)",
          lineHeight: "1.05",
          letterSpacing: "-0.02em",
          color: "#fff",
          maxWidth: "900px",
        }}
      >
        {line}
      </p>
      {img.credit && (
        <span
          className="absolute"
          style={{ bottom: "10px", right: "16px", fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.45)" }}
        >
          {img.credit}
        </span>
      )}
    </section>
  );
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page || !isLive(page)) notFound();

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "62px" }}>
        {/* Hero */}
        <section className="relative bg-white overflow-hidden">
          <div
            aria-hidden
            className="absolute pointer-events-none select-none"
            style={{
              top: "-8%",
              right: "clamp(-60px,-2vw,20px)",
              width: "clamp(220px,26vw,420px)",
              height: "clamp(220px,26vw,420px)",
              background: "#B5642E",
              opacity: 0.08,
              borderRadius: "18%",
              transform: "rotate(45deg)",
            }}
          />
          <div
            className="max-w-[1180px] mx-auto relative"
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

        {/* Intro — real photo + short note */}
        <Reveal>
          <section className="max-w-[1180px] mx-auto" style={{ padding: "clamp(40px,5vw,64px) clamp(20px,5vw,64px) 0" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative overflow-hidden rounded-2xl order-2 lg:order-1" style={{ aspectRatio: "5/4" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={page.introImg.src}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: "grayscale(0.15) contrast(1.05)" }}
                />
                {page.introImg.credit && (
                  <span
                    className="absolute"
                    style={{ bottom: "8px", right: "12px", fontFamily: "var(--font-mono)", fontSize: "9.5px", color: "rgba(255,255,255,0.7)", textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
                  >
                    {page.introImg.credit}
                  </span>
                )}
              </div>
              <p
                className="m-0 order-1 lg:order-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,2.6vw,32px)", lineHeight: "1.3", letterSpacing: "-0.01em", color: "#15171A" }}
              >
                {page.introNote}
              </p>
            </div>
          </section>
        </Reveal>

        {/* Billboard statement */}
        <Reveal>
          {page.billboardImg ? (
            <PhotoBand img={page.billboardImg} line={page.billboardLine} />
          ) : (
            <section style={{ padding: "clamp(72px,10vw,140px) clamp(20px,5vw,64px)", background: "#15171A" }}>
              <p
                className="m-0 mx-auto text-center font-black uppercase"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,5vw,60px)", lineHeight: "1.05", letterSpacing: "-0.02em", color: "#fff", maxWidth: "900px" }}
              >
                {page.billboardLine}
              </p>
            </section>
          )}
        </Reveal>

        {/* Pain points */}
        <Reveal>
          <section className="max-w-[1180px] mx-auto" style={{ padding: "clamp(48px,6vw,88px) clamp(20px,5vw,64px) 0" }}>
            <div className="flex items-baseline justify-between border-b mb-8 pb-4" style={{ borderColor: "#DDE1E8" }}>
              <span className="flex items-center gap-[0.55em]" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
                <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: "#B5642E" }} />
                Why {page.industrySingular.toLowerCase()} sites underperform
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {page.painPoints.map((p) => (
                <div key={p.title}>
                  <span
                    className="block mb-3"
                    style={{ width: "9px", height: "9px", background: "#B5642E", borderRadius: "2px", transform: "rotate(45deg)" }}
                  />
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

        {/* Second photo band — visual break between the two text grids */}
        {page.midImg && page.midLine && (
          <Reveal>
            <PhotoBand img={page.midImg} line={page.midLine} />
          </Reveal>
        )}

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
                  <span
                    className="block mb-3"
                    style={{ width: "9px", height: "9px", background: "#B5642E", borderRadius: "2px", transform: "rotate(45deg)" }}
                  />
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

        {/* FAQ */}
        <Reveal>
          <section className="max-w-[1180px] mx-auto" style={{ padding: "clamp(56px,7vw,100px) clamp(20px,5vw,64px) 0" }}>
            <div className="flex items-baseline justify-between border-b mb-8 pb-4" style={{ borderColor: "#DDE1E8" }}>
              <span className="flex items-center gap-[0.55em]" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
                <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: "#B5642E" }} />
                Questions
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              {page.faqs.map((f) => (
                <div key={f.q} style={{ padding: "20px 0", borderBottom: "1px solid #DDE1E8" }}>
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

        {/* Our work */}
        <Reveal>
          <section className="max-w-[1180px] mx-auto" style={{ padding: "clamp(56px,7vw,100px) clamp(20px,5vw,64px) 0" }}>
            <div className="flex items-baseline justify-between border-b mb-8 pb-4" style={{ borderColor: "#DDE1E8" }}>
              <span className="flex items-center gap-[0.55em]" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
                <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: "#B5642E" }} />
                {page.caseStudies.length > 0 ? "Our work" : "Recent work"}
              </span>
            </div>
            {page.caseStudies.length > 0 ? (
              page.caseStudies.length === 1 ? (
                <CaseStudyCard c={page.caseStudies[0]} aspect="21/9" />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {page.caseStudies.map((c) => (
                    <CaseStudyCard key={c.name} c={c} aspect="4/3" />
                  ))}
                </div>
              )
            ) : (
              <>
                <div
                  className="rounded-2xl"
                  style={{ background: "#F7F8FA", border: "1px solid #DDE1E8", padding: "clamp(28px,4vw,44px)" }}
                >
                  <p className="m-0" style={{ fontSize: "16px", lineHeight: "1.75", color: "#3A3F47", maxWidth: "640px" }}>
                    {renderWithLinks(page.proofNote)}
                  </p>
                </div>
                {page.proofGallery && page.proofGallery.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                    {page.proofGallery.map((c) => (
                      <GalleryCard key={c.name} c={c} />
                    ))}
                  </div>
                )}
              </>
            )}
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
