const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Logo systems, visual language, typography, colour, and guidelines that make your brand instantly recognisable — and impossible to copy.",
  },
  {
    number: "02",
    title: "Web Design",
    description:
      "High-performance marketing sites, landing pages, and web apps. Designed with precision and built to convert.",
  },
  {
    number: "03",
    title: "Digital Strategy",
    description:
      "We define what to build, who it's for, and why it works — before we touch a single pixel or line of code.",
  },
  {
    number: "04",
    title: "SEO & Growth",
    description:
      "Technical SEO, content structure, and site architecture that compound over time and bring the right people to your door.",
  },
  {
    number: "05",
    title: "Product Design",
    description:
      "End-to-end UX and UI for SaaS products, apps, and digital platforms — from wireframes to handoff-ready components.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-8 md:px-16 lg:px-24 py-24 md:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C24A1F] block mb-3">
              03 — What We Do
            </span>
            <h2
              className="font-black uppercase leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Our Services
            </h2>
          </div>
        </div>

        {/* Services list */}
        <div className="divide-y divide-white/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 cursor-default hover:bg-white/[0.03] transition-colors -mx-4 px-4 rounded-xl"
            >
              {/* Number */}
              <span className="text-xs font-semibold tracking-widest text-white/30 shrink-0 w-8">
                {service.number}
              </span>

              {/* Title */}
              <h3
                className="font-black uppercase leading-none tracking-tight text-white group-hover:text-[#C24A1F] transition-colors shrink-0"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/50 md:ml-auto md:max-w-sm">
                {service.description}
              </p>

              {/* Arrow */}
              <span className="hidden md:block text-white/20 group-hover:text-[#C24A1F] group-hover:translate-x-1 transition-all duration-200 text-lg shrink-0">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
