export default function Quote() {
  return (
    <section
      className="bg-[#15171A]"
      style={{ marginTop: "clamp(64px,9vw,128px)", padding: "clamp(72px,11vw,150px) clamp(20px,5vw,64px)" }}
    >
      <h2
        className="m-0 mx-auto"
        style={{
          maxWidth: "1000px",
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(26px,4.2vw,54px)",
          lineHeight: "1.18",
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          textWrap: "balance",
        } as React.CSSProperties}
      >
        Design without SEO is{" "}
        <span style={{ color: "#B5642E" }}>invisible</span>
        . SEO without design is ignored. We do both.
      </h2>
    </section>
  );
}
