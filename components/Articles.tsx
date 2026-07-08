const articles = [
  {
    cat: "Process",
    title: "Design in the browser",
    excerpt: "Why we skip the mockup phase and test ideas where they actually live.",
    img: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=700&q=70",
  },
  {
    cat: "SEO",
    title: "Why most SEO fails",
    excerpt: "The three mistakes that kill organic rankings before they have a chance to compound.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=70",
  },
];

export default function Articles() {
  return (
    <section
      className="max-w-[1180px] mx-auto"
      style={{ padding: "0 clamp(20px,5vw,64px) clamp(64px,9vw,120px)" }}
    >
      <div className="flex items-baseline justify-between border-b mb-8 pb-4" style={{ borderColor: "#DDE1E8" }}>
        <span
          className="flex items-center gap-[0.55em]"
          style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}
        >
          <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: "#B5642E" }} />
          From the journal
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
        {articles.map((a) => (
          <a
            key={a.title}
            href="#"
            className="flex flex-col sm:flex-row items-stretch no-underline rounded-xl overflow-hidden border transition-shadow hover:shadow-md"
            style={{ background: "#FFFFFF", borderColor: "#DDE1E8" }}
          >
            <div className="w-full sm:w-[38%] h-[180px] sm:h-auto shrink-0 overflow-hidden bg-[#DDE1E8]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.img}
                alt={a.title}
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(0.3)" }}
              />
            </div>
            <div className="flex flex-col gap-2 p-5">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280" }}>
                {a.cat}
              </span>
              <h3
                className="m-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", lineHeight: "1.1", letterSpacing: "-0.01em", textTransform: "uppercase", color: "#15171A" }}
              >
                {a.title}
              </h3>
              <p className="m-0" style={{ fontSize: "14px", lineHeight: "1.55", color: "#6B7280" }}>
                {a.excerpt}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
