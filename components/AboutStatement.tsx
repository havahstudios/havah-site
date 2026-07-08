export default function AboutStatement() {
  return (
    <section
      className="text-center"
      style={{ padding: "clamp(64px,9vw,120px) clamp(20px,5vw,64px) 0" }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#6B7280",
        }}
      >
        About — HAVAH
      </span>

      <h2
        className="mx-auto mt-6 mb-0"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(44px,7.5vw,96px)",
          lineHeight: "0.95",
          letterSpacing: "-0.03em",
          textTransform: "uppercase",
          color: "#15171A",
        }}
      >
        We design{" "}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "#B5642E",
            color: "#FFFFFF",
            borderRadius: "999px",
            fontSize: "0.72em",
            padding: "0.2em 0.5em",
            verticalAlign: "middle",
            transform: "rotate(-2deg)",
          }}
        >
          websites
        </span>{" "}
        &amp; brands that help ambitious teams{" "}
        <span style={{ color: "transparent", WebkitTextStroke: "2px #15171A" }}>
          grow
        </span>
        .
      </h2>

      <p
        className="mx-auto mt-8 mb-0"
        style={{
          fontSize: "clamp(15px,1.3vw,18px)",
          lineHeight: "1.6",
          color: "#6B7280",
          maxWidth: "520px",
        }}
      >
        A small team for big moves. We pair sharp strategy with real craft, then
        ship — fast, honest, and built to last.
      </p>
    </section>
  );
}
