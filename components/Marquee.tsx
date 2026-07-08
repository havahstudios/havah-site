const ITEMS = ["Web Design", "SEO", "Rankings", "Conversion", "Performance", "Organic Traffic"];

// 4 full repetitions so the track is always wider than any viewport.
// translateX(-50%) scrolls exactly 2 repetitions, creating a seamless loop.
const ALL = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div
      className="overflow-hidden bg-[#15171A]"
      style={{ borderTop: "1px solid #15171A", borderBottom: "1px solid #15171A" }}
    >
      <div className="marquee-track">
        {ALL.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center shrink-0"
            style={{ padding: "16px 0" }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "30px",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
                padding: "0 22px",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <span style={{ color: "#B5642E", fontSize: "18px", lineHeight: 1, flexShrink: 0 }}>
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
