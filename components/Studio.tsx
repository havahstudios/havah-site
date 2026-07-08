const stats = [
  { value: "LA", label: "Based in" },
  { value: "60+", label: "Projects" },
  { value: "3", label: "Countries" },
  { value: "100%", label: "In-house" },
];

export default function Studio() {
  return (
    <section id="studio" className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C24A1F] block mb-12">
          04 — The Studio
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: headline */}
          <div>
            <h2
              className="font-black uppercase leading-none tracking-tight text-[#111111]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Small Studio.
              <br />
              <span className="text-[#C24A1F]">Big</span> Moves.
            </h2>
          </div>

          {/* Right: copy + stats */}
          <div className="flex flex-col gap-10">
            <div className="space-y-5 text-base leading-relaxed text-[#555555]">
              <p>
                HAVAH was built on one belief: the best digital
                work comes from studios small enough to care and skilled enough
                to deliver. We don&apos;t hand your project off to a junior after
                the pitch — you work with the people who designed it,
                start to finish.
              </p>
              <p>
                We partner with founders, growth-stage brands, and ambitious
                teams who are done with average. If you want a site that looks
                like everyone else&apos;s, we&apos;re not the right fit. If you want
                one that actually works — let&apos;s talk.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 pt-6 border-t border-[#111111]/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-black text-[#111111] leading-none"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#999] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process strip */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Discovery", body: "We start by understanding your business, your users, and your competition — deeply." },
            { step: "02", title: "Design", body: "We design in close collaboration with you. No black boxes, no surprise reveals." },
            { step: "03", title: "Deliver", body: "Every project ships with a live site, handoff files, and a walkthrough — ready to grow." },
          ].map((item) => (
            <div key={item.step} className="bg-[#F5F3EF] rounded-2xl p-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C24A1F] block mb-4">
                {item.step}
              </span>
              <h3 className="font-black uppercase text-[#111111] text-2xl tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#555555]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
