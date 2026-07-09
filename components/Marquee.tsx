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
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
              <circle cx="4" cy="4" r="4" fill="#B5642E" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
