import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const values = [
  { n: "01", t: "Senior people, every time", d: "You talk to the people doing the work. No account managers, no one in between." },
  { n: "02", t: "Design in the browser", d: "We test ideas where they actually live. Faster feedback, fewer surprises at launch." },
  { n: "03", t: "Ship, then improve", d: "We launch when it is ready, not when it is perfect. Then we keep going." },
];

const mono = { fontFamily: "var(--font-mono)" } as React.CSSProperties;
const display = { fontFamily: "var(--font-display)" } as React.CSSProperties;

export default function StudioPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "62px" }}>

        {/* Header */}
        <section className="max-w-[1180px] mx-auto" style={{ padding: "clamp(40px,6vw,88px) clamp(20px,5vw,64px) 0" }}>
          <span className="flex items-center gap-[0.55em]" style={{ ...mono, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
            <span className="w-[6px] h-[6px] rounded-full" style={{ background: "#B5642E" }} />
            The Studio
          </span>
          <h1 className="m-0 mt-[22px]" style={{ ...display, fontWeight: 800, fontSize: "clamp(40px,6.5vw,88px)", lineHeight: "0.96", letterSpacing: "-0.03em", textTransform: "uppercase", color: "#15171A", maxWidth: "14ch" }}>
            A studio that{" "}
            <span style={{ color: "transparent", WebkitTextStroke: "2px #15171A" }}>plays</span>
            {" "}to win.
          </h1>
          <p className="mt-7 mb-0" style={{ fontSize: "clamp(16px,1.4vw,19px)", lineHeight: "1.6", maxWidth: "560px", color: "#5A6070" }}>
            Web design and SEO out of Los Angeles. One focused team. We work with businesses that take their market seriously.
          </p>
        </section>

        {/* How we work */}
        <section className="max-w-[1180px] mx-auto" style={{ padding: "clamp(56px,8vw,100px) clamp(20px,5vw,64px) 0" }}>
          <div className="border-b pb-4 mb-8" style={{ borderColor: "#DDE1E8" }}>
            <span className="flex items-center gap-[0.55em]" style={{ ...mono, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
              <span className="w-[6px] h-[6px] rounded-full" style={{ background: "#B5642E" }} />
              How we work
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            {values.map((v) => (
              <div key={v.n} className="pt-[18px]" style={{ borderTop: "2px solid #15171A" }}>
                <span style={{ ...mono, fontSize: "13px", color: "#98A0AD" }}>{v.n}</span>
                <h3 className="mt-[10px] mb-2 m-0" style={{ ...display, fontWeight: 700, fontSize: "22px", textTransform: "uppercase", letterSpacing: "-0.01em", color: "#15171A" }}>{v.t}</h3>
                <p className="m-0" style={{ fontSize: "15px", lineHeight: "1.55", color: "#6B7280" }}>{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="max-w-[1180px] mx-auto text-center flex flex-col items-center gap-[22px]"
          style={{ padding: "clamp(72px,10vw,140px) clamp(20px,5vw,64px)" }}
        >
          <span className="flex items-center gap-[0.55em]" style={{ ...mono, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
            <span className="w-[6px] h-[6px] rounded-full" style={{ background: "#B5642E" }} />
            Work with us
          </span>
          <h2 className="m-0" style={{ ...display, fontWeight: 800, fontSize: "clamp(34px,5.5vw,72px)", lineHeight: "0.98", letterSpacing: "-0.03em", textTransform: "uppercase", color: "#15171A" }}>
            If our approach resonates,<br />let&apos;s build something.
          </h2>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full text-white no-underline font-semibold transition-opacity hover:opacity-90"
            style={{ background: "#B5642E", fontSize: "13px", padding: "14px 28px", ...display }}
          >
            Start a project <span>↗</span>
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
