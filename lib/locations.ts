export interface LocationPage {
  slug: string;
  keyword: string;
  service: string;
  modifier: string;
  modifierType: "location" | "industry";
  prePill: string;
  postPill: [string, string];
  subtext: string;
  metaTitle: string;
  metaDescription: string;
  publishDate: Date;
}

const SCHEDULE_START = new Date("2026-07-10");
const BATCH_SIZE = 5;
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

function toSlug(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function cap(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

interface Template {
  prePill: string;
  postPill: [string, string];
  subtext: (modifier: string, modifierType: "location" | "industry") => string;
  metaTitle: (keyword: string) => string;
  metaDescription: (modifier: string, modifierType: "location" | "industry") => string;
}

const templates: Record<string, Template> = {
  "web design": {
    prePill: "WE DESIGN",
    postPill: ["WEBSITES", "THAT CONVERT"],
    subtext: (m, t) =>
      t === "location"
        ? `Custom web design for ${m} businesses. Built to rank on Google, look great on every device, and turn visitors into customers.`
        : `Custom websites for ${m}. Built to build credibility, rank on Google, and convert the right clients.`,
    metaTitle: (kw) => `${cap(kw)} | HAVAH Studios`,
    metaDescription: (m, t) =>
      t === "location"
        ? `HAVAH Studios designs custom websites for businesses in ${m}. Fast, mobile-first, and built to rank.`
        : `HAVAH Studios builds websites for ${m}. Conversion-focused design that ranks on Google and wins new clients.`,
  },
  "web development": {
    prePill: "WE BUILD",
    postPill: ["WEB APPS", "THAT PERFORM"],
    subtext: (m, t) =>
      t === "location"
        ? `Custom web development for ${m} businesses. Clean code, fast load times, and built to scale.`
        : `Web development for ${m}. Performant, maintainable code built on modern technology.`,
    metaTitle: (kw) => `${cap(kw)} | HAVAH Studios`,
    metaDescription: (m, t) =>
      t === "location"
        ? `HAVAH Studios builds custom web applications for businesses in ${m}. Fast, scalable, and production-ready.`
        : `HAVAH Studios develops web applications for ${m}. Performance-first code that works at scale.`,
  },
  "UI UX design": {
    prePill: "DESIGN FOR",
    postPill: ["PRODUCTS", "THAT FEEL RIGHT"],
    subtext: (m, t) =>
      t === "location"
        ? `UI/UX design for ${m} products and platforms. Intuitive interfaces that users love and businesses grow from.`
        : `UI/UX design for ${m}. Clear user flows, tested interactions, and interfaces built around how your users think.`,
    metaTitle: (kw) => `${cap(kw)} | HAVAH Studios`,
    metaDescription: (m, t) =>
      t === "location"
        ? `HAVAH Studios designs user interfaces for ${m} products. Intuitive, research-backed UX that drives retention.`
        : `HAVAH Studios designs UI/UX for ${m}. User-tested interfaces that reduce friction and increase engagement.`,
  },
  "mobile app design": {
    prePill: "WE DESIGN",
    postPill: ["MOBILE APPS", "THAT WORK"],
    subtext: (m, t) =>
      t === "location"
        ? `Mobile app design for ${m} businesses. Native-quality experiences across iOS and Android.`
        : `Mobile app design for ${m}. Intuitive, fast, and built to work exactly the way your users expect.`,
    metaTitle: (kw) => `${cap(kw)} | HAVAH Studios`,
    metaDescription: (m, t) =>
      t === "location"
        ? `HAVAH Studios designs mobile apps for ${m} businesses. iOS and Android design that users actually enjoy.`
        : `HAVAH Studios designs mobile apps for ${m}. Purposeful, user-tested design across iOS and Android.`,
  },
  "branding and logo design": {
    prePill: "WE BUILD",
    postPill: ["BRANDS", "THAT LAST"],
    subtext: (m, t) =>
      t === "location"
        ? `Brand identity for ${m} businesses. Logo, color, type, and voice — built to be consistent and recognizable.`
        : `Brand identity for ${m}. Clear visual language that builds trust and makes the right impression.`,
    metaTitle: (kw) => `${cap(kw)} | HAVAH Studios`,
    metaDescription: (m, t) =>
      t === "location"
        ? `HAVAH Studios builds brand identities for ${m} businesses. Logo, color, and visual systems built to scale.`
        : `HAVAH Studios designs brand identities for ${m}. Visual systems that communicate clearly and build recognition.`,
  },
  "ecommerce web design": {
    prePill: "WE BUILD",
    postPill: ["STORES", "THAT SELL"],
    subtext: (m, t) =>
      t === "location"
        ? `Ecommerce design for ${m} businesses. Stores built to convert, fast to load, and easy to manage.`
        : `Ecommerce design for ${m}. Product pages, checkout flows, and storefronts built to drive revenue.`,
    metaTitle: (kw) => `${cap(kw)} | HAVAH Studios`,
    metaDescription: (m, t) =>
      t === "location"
        ? `HAVAH Studios builds ecommerce websites for ${m} businesses. Conversion-first design with fast load times.`
        : `HAVAH Studios builds ecommerce websites for ${m}. Stores designed to convert and easy to scale.`,
  },
  "website redesign": {
    prePill: "WE REDESIGN",
    postPill: ["WEBSITES", "THAT CONVERT"],
    subtext: (m, t) =>
      t === "location"
        ? `Website redesigns for ${m} businesses. We fix what's slow, outdated, or broken — and make it work properly.`
        : `Website redesigns for ${m}. We take what you have, identify what's costing you customers, and rebuild it.`,
    metaTitle: (kw) => `${cap(kw)} | HAVAH Studios`,
    metaDescription: (m, t) =>
      t === "location"
        ? `HAVAH Studios redesigns websites for ${m} businesses. Faster, cleaner, and built to rank on Google.`
        : `HAVAH Studios redesigns websites for ${m}. Modern, fast, and rebuilt to turn visitors into customers.`,
  },
};

interface Row {
  keyword: string;
  service: string;
  modifier: string;
  modifierType: "location" | "industry";
}

const rows: Row[] = [
  // web design — locations
  { keyword: "web design Santa Monica", service: "web design", modifier: "Santa Monica", modifierType: "location" },
  { keyword: "web design Venice", service: "web design", modifier: "Venice", modifierType: "location" },
  { keyword: "web design Culver City", service: "web design", modifier: "Culver City", modifierType: "location" },
  { keyword: "web design Beverly Hills", service: "web design", modifier: "Beverly Hills", modifierType: "location" },
  { keyword: "web design West LA", service: "web design", modifier: "West LA", modifierType: "location" },
  { keyword: "web design Downtown LA", service: "web design", modifier: "Downtown LA", modifierType: "location" },
  { keyword: "web design Marina del Rey", service: "web design", modifier: "Marina del Rey", modifierType: "location" },
  { keyword: "web design Manhattan Beach", service: "web design", modifier: "Manhattan Beach", modifierType: "location" },
  { keyword: "web design Playa Vista", service: "web design", modifier: "Playa Vista", modifierType: "location" },
  { keyword: "web design Brentwood", service: "web design", modifier: "Brentwood", modifierType: "location" },
  { keyword: "web design Pasadena", service: "web design", modifier: "Pasadena", modifierType: "location" },
  { keyword: "web design Long Beach", service: "web design", modifier: "Long Beach", modifierType: "location" },
  // web development — locations
  { keyword: "web development Santa Monica", service: "web development", modifier: "Santa Monica", modifierType: "location" },
  { keyword: "web development Venice", service: "web development", modifier: "Venice", modifierType: "location" },
  { keyword: "web development Culver City", service: "web development", modifier: "Culver City", modifierType: "location" },
  { keyword: "web development Beverly Hills", service: "web development", modifier: "Beverly Hills", modifierType: "location" },
  { keyword: "web development West LA", service: "web development", modifier: "West LA", modifierType: "location" },
  { keyword: "web development Downtown LA", service: "web development", modifier: "Downtown LA", modifierType: "location" },
  { keyword: "web development Marina del Rey", service: "web development", modifier: "Marina del Rey", modifierType: "location" },
  { keyword: "web development Manhattan Beach", service: "web development", modifier: "Manhattan Beach", modifierType: "location" },
  { keyword: "web development Playa Vista", service: "web development", modifier: "Playa Vista", modifierType: "location" },
  { keyword: "web development Brentwood", service: "web development", modifier: "Brentwood", modifierType: "location" },
  { keyword: "web development Pasadena", service: "web development", modifier: "Pasadena", modifierType: "location" },
  { keyword: "web development Long Beach", service: "web development", modifier: "Long Beach", modifierType: "location" },
  // UI UX design — locations
  { keyword: "UI UX design Santa Monica", service: "UI UX design", modifier: "Santa Monica", modifierType: "location" },
  { keyword: "UI UX design Venice", service: "UI UX design", modifier: "Venice", modifierType: "location" },
  { keyword: "UI UX design Culver City", service: "UI UX design", modifier: "Culver City", modifierType: "location" },
  { keyword: "UI UX design Beverly Hills", service: "UI UX design", modifier: "Beverly Hills", modifierType: "location" },
  { keyword: "UI UX design West LA", service: "UI UX design", modifier: "West LA", modifierType: "location" },
  { keyword: "UI UX design Downtown LA", service: "UI UX design", modifier: "Downtown LA", modifierType: "location" },
  { keyword: "UI UX design Marina del Rey", service: "UI UX design", modifier: "Marina del Rey", modifierType: "location" },
  { keyword: "UI UX design Manhattan Beach", service: "UI UX design", modifier: "Manhattan Beach", modifierType: "location" },
  { keyword: "UI UX design Playa Vista", service: "UI UX design", modifier: "Playa Vista", modifierType: "location" },
  { keyword: "UI UX design Brentwood", service: "UI UX design", modifier: "Brentwood", modifierType: "location" },
  { keyword: "UI UX design Pasadena", service: "UI UX design", modifier: "Pasadena", modifierType: "location" },
  { keyword: "UI UX design Long Beach", service: "UI UX design", modifier: "Long Beach", modifierType: "location" },
  // mobile app design — locations
  { keyword: "mobile app design Santa Monica", service: "mobile app design", modifier: "Santa Monica", modifierType: "location" },
  { keyword: "mobile app design Venice", service: "mobile app design", modifier: "Venice", modifierType: "location" },
  { keyword: "mobile app design Culver City", service: "mobile app design", modifier: "Culver City", modifierType: "location" },
  { keyword: "mobile app design Beverly Hills", service: "mobile app design", modifier: "Beverly Hills", modifierType: "location" },
  { keyword: "mobile app design West LA", service: "mobile app design", modifier: "West LA", modifierType: "location" },
  { keyword: "mobile app design Downtown LA", service: "mobile app design", modifier: "Downtown LA", modifierType: "location" },
  { keyword: "mobile app design Marina del Rey", service: "mobile app design", modifier: "Marina del Rey", modifierType: "location" },
  { keyword: "mobile app design Manhattan Beach", service: "mobile app design", modifier: "Manhattan Beach", modifierType: "location" },
  { keyword: "mobile app design Playa Vista", service: "mobile app design", modifier: "Playa Vista", modifierType: "location" },
  { keyword: "mobile app design Brentwood", service: "mobile app design", modifier: "Brentwood", modifierType: "location" },
  { keyword: "mobile app design Pasadena", service: "mobile app design", modifier: "Pasadena", modifierType: "location" },
  { keyword: "mobile app design Long Beach", service: "mobile app design", modifier: "Long Beach", modifierType: "location" },
  // branding and logo design — locations
  { keyword: "branding and logo design Santa Monica", service: "branding and logo design", modifier: "Santa Monica", modifierType: "location" },
  { keyword: "branding and logo design Venice", service: "branding and logo design", modifier: "Venice", modifierType: "location" },
  { keyword: "branding and logo design Culver City", service: "branding and logo design", modifier: "Culver City", modifierType: "location" },
  { keyword: "branding and logo design Beverly Hills", service: "branding and logo design", modifier: "Beverly Hills", modifierType: "location" },
  { keyword: "branding and logo design West LA", service: "branding and logo design", modifier: "West LA", modifierType: "location" },
  { keyword: "branding and logo design Downtown LA", service: "branding and logo design", modifier: "Downtown LA", modifierType: "location" },
  { keyword: "branding and logo design Marina del Rey", service: "branding and logo design", modifier: "Marina del Rey", modifierType: "location" },
  { keyword: "branding and logo design Manhattan Beach", service: "branding and logo design", modifier: "Manhattan Beach", modifierType: "location" },
  { keyword: "branding and logo design Playa Vista", service: "branding and logo design", modifier: "Playa Vista", modifierType: "location" },
  { keyword: "branding and logo design Brentwood", service: "branding and logo design", modifier: "Brentwood", modifierType: "location" },
  { keyword: "branding and logo design Pasadena", service: "branding and logo design", modifier: "Pasadena", modifierType: "location" },
  { keyword: "branding and logo design Long Beach", service: "branding and logo design", modifier: "Long Beach", modifierType: "location" },
  // ecommerce web design — locations
  { keyword: "ecommerce web design Santa Monica", service: "ecommerce web design", modifier: "Santa Monica", modifierType: "location" },
  { keyword: "ecommerce web design Venice", service: "ecommerce web design", modifier: "Venice", modifierType: "location" },
  { keyword: "ecommerce web design Culver City", service: "ecommerce web design", modifier: "Culver City", modifierType: "location" },
  { keyword: "ecommerce web design Beverly Hills", service: "ecommerce web design", modifier: "Beverly Hills", modifierType: "location" },
  { keyword: "ecommerce web design West LA", service: "ecommerce web design", modifier: "West LA", modifierType: "location" },
  { keyword: "ecommerce web design Downtown LA", service: "ecommerce web design", modifier: "Downtown LA", modifierType: "location" },
  { keyword: "ecommerce web design Marina del Rey", service: "ecommerce web design", modifier: "Marina del Rey", modifierType: "location" },
  { keyword: "ecommerce web design Manhattan Beach", service: "ecommerce web design", modifier: "Manhattan Beach", modifierType: "location" },
  { keyword: "ecommerce web design Playa Vista", service: "ecommerce web design", modifier: "Playa Vista", modifierType: "location" },
  { keyword: "ecommerce web design Brentwood", service: "ecommerce web design", modifier: "Brentwood", modifierType: "location" },
  { keyword: "ecommerce web design Pasadena", service: "ecommerce web design", modifier: "Pasadena", modifierType: "location" },
  { keyword: "ecommerce web design Long Beach", service: "ecommerce web design", modifier: "Long Beach", modifierType: "location" },
  // website redesign — locations
  { keyword: "website redesign Santa Monica", service: "website redesign", modifier: "Santa Monica", modifierType: "location" },
  { keyword: "website redesign Venice", service: "website redesign", modifier: "Venice", modifierType: "location" },
  { keyword: "website redesign Culver City", service: "website redesign", modifier: "Culver City", modifierType: "location" },
  { keyword: "website redesign Beverly Hills", service: "website redesign", modifier: "Beverly Hills", modifierType: "location" },
  { keyword: "website redesign West LA", service: "website redesign", modifier: "West LA", modifierType: "location" },
  { keyword: "website redesign Downtown LA", service: "website redesign", modifier: "Downtown LA", modifierType: "location" },
  { keyword: "website redesign Marina del Rey", service: "website redesign", modifier: "Marina del Rey", modifierType: "location" },
  { keyword: "website redesign Manhattan Beach", service: "website redesign", modifier: "Manhattan Beach", modifierType: "location" },
  { keyword: "website redesign Playa Vista", service: "website redesign", modifier: "Playa Vista", modifierType: "location" },
  { keyword: "website redesign Brentwood", service: "website redesign", modifier: "Brentwood", modifierType: "location" },
  { keyword: "website redesign Pasadena", service: "website redesign", modifier: "Pasadena", modifierType: "location" },
  { keyword: "website redesign Long Beach", service: "website redesign", modifier: "Long Beach", modifierType: "location" },
  // web design — industries
  { keyword: "web design for law firms", service: "web design", modifier: "law firms", modifierType: "industry" },
  { keyword: "web design for real estate agents", service: "web design", modifier: "real estate agents", modifierType: "industry" },
  { keyword: "web design for healthcare providers", service: "web design", modifier: "healthcare providers", modifierType: "industry" },
  { keyword: "web design for construction companies", service: "web design", modifier: "construction companies", modifierType: "industry" },
  { keyword: "web design for auto shops", service: "web design", modifier: "auto shops", modifierType: "industry" },
  { keyword: "web design for fitness studios", service: "web design", modifier: "fitness studios", modifierType: "industry" },
  { keyword: "web design for salons and spas", service: "web design", modifier: "salons and spas", modifierType: "industry" },
  { keyword: "web design for consultants", service: "web design", modifier: "consultants", modifierType: "industry" },
  { keyword: "web design for nonprofits", service: "web design", modifier: "nonprofits", modifierType: "industry" },
  { keyword: "web design for financial advisors", service: "web design", modifier: "financial advisors", modifierType: "industry" },
  { keyword: "web design for architects", service: "web design", modifier: "architects", modifierType: "industry" },
  { keyword: "web design for photographers", service: "web design", modifier: "photographers", modifierType: "industry" },
];

function generate(): LocationPage[] {
  return rows.map((row, i) => {
    const t = templates[row.service];
    const publishDate = new Date(
      SCHEDULE_START.getTime() + Math.floor(i / BATCH_SIZE) * WEEK_MS
    );
    return {
      slug: toSlug(row.keyword),
      keyword: row.keyword,
      service: row.service,
      modifier: row.modifier,
      modifierType: row.modifierType,
      prePill: t.prePill,
      postPill: t.postPill,
      subtext: t.subtext(row.modifier, row.modifierType),
      metaTitle: t.metaTitle(row.keyword),
      metaDescription: t.metaDescription(row.modifier, row.modifierType),
      publishDate,
    };
  });
}

export const locationPages: LocationPage[] = generate();

export function getLocationPage(slug: string): LocationPage | undefined {
  return locationPages.find((p) => p.slug === slug);
}
