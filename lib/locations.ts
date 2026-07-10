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
}

function toSlug(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

type Template = {
  label: string;
  prePill: string;
  postPill: [string, string];
  subtext: (mod: string, type: "location" | "industry") => string;
  metaDesc: (mod: string, type: "location" | "industry") => string;
};

const templates: Record<string, Template> = {
  "web design": {
    label: "Web Design",
    prePill: "Web Design",
    postPill: ["That Gets", "Found And Sells."],
    subtext: (m, t) =>
      t === "location"
        ? `We build websites for ${m} businesses that rank on Google and convert the people who find them. One team, no hand-offs.`
        : `We build websites for ${m} that rank on Google and convert the clients who find them. One team, no hand-offs.`,
    metaDesc: (m, t) =>
      t === "location"
        ? `HAVAH is a web design studio serving ${m}. We build fast, modern websites that rank on Google and turn visitors into customers.`
        : `HAVAH builds websites for ${m}. Fast, modern, and built to rank — so the right clients find you first.`,
  },
  "web development": {
    label: "Web Development",
    prePill: "Web Development",
    postPill: ["Built to Perform", "And Scale."],
    subtext: (m) =>
      `Custom web development for ${m} businesses. Fast, modern, and built to grow with you.`,
    metaDesc: (m) =>
      `HAVAH offers web development in ${m}. Custom-built websites that load fast, rank well, and scale with your business.`,
  },
  "UI UX design": {
    label: "UI/UX Design",
    prePill: "UI/UX Design",
    postPill: ["That Engages", "And Converts."],
    subtext: (m) =>
      `UI/UX design for ${m} businesses. Interfaces your users actually enjoy — built around how people make decisions.`,
    metaDesc: (m) =>
      `HAVAH offers UI/UX design in ${m}. Clean, intuitive interfaces designed to reduce friction and increase conversions.`,
  },
  "mobile app design": {
    label: "Mobile App Design",
    prePill: "Mobile App",
    postPill: ["Design That", "Keeps Users."],
    subtext: (m) =>
      `Mobile app design for ${m} businesses. Intuitive, polished, and built to keep users coming back.`,
    metaDesc: (m) =>
      `HAVAH offers mobile app design in ${m}. Polished interfaces built to engage users and keep them coming back.`,
  },
  "branding and logo design": {
    label: "Branding & Logo Design",
    prePill: "Branding & Logo",
    postPill: ["That Stands Out", "And Lasts."],
    subtext: (m) =>
      `Brand identity and logo design for ${m} businesses. A brand that makes the right impression — every time.`,
    metaDesc: (m) =>
      `HAVAH offers branding and logo design in ${m}. Distinctive brand identities built to position you as the obvious choice.`,
  },
  "ecommerce web design": {
    label: "Ecommerce Web Design",
    prePill: "Ecommerce Design",
    postPill: ["That Converts", "On Autopilot."],
    subtext: (m) =>
      `Ecommerce web design for ${m} businesses. Online stores built to sell — fast, polished, and always open.`,
    metaDesc: (m) =>
      `HAVAH builds ecommerce websites in ${m}. Fast, conversion-focused online stores that look premium and drive sales.`,
  },
  "website redesign": {
    label: "Website Redesign",
    prePill: "Website Redesign",
    postPill: ["Built to Rank", "And Convert."],
    subtext: (m) =>
      `Website redesigns for ${m} businesses. We take what you have, identify what's not working, and rebuild it right.`,
    metaDesc: (m) =>
      `HAVAH offers website redesign in ${m}. We rebuild outdated sites into fast, modern, conversion-optimized experiences.`,
  },
};

const locationModifiers = [
  "Santa Monica",
  "Venice",
  "Culver City",
  "Beverly Hills",
  "West LA",
  "Downtown LA",
  "Marina del Rey",
  "Manhattan Beach",
  "Playa Vista",
  "Brentwood",
  "Pasadena",
  "Long Beach",
];

const industryModifiers = [
  "law firms",
  "real estate agents",
  "healthcare providers",
  "construction companies",
  "auto shops",
  "fitness studios",
  "salons and spas",
  "consultants",
  "nonprofits",
  "financial advisors",
  "architects",
  "photographers",
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function generate(): LocationPage[] {
  const pages: LocationPage[] = [];

  for (const [serviceKey, tmpl] of Object.entries(templates)) {
    for (const mod of locationModifiers) {
      const keyword = `${serviceKey} ${mod}`;
      pages.push({
        slug: toSlug(keyword),
        keyword,
        service: serviceKey,
        modifier: mod,
        modifierType: "location",
        prePill: tmpl.prePill,
        postPill: tmpl.postPill,
        subtext: tmpl.subtext(mod, "location"),
        metaTitle: `${tmpl.label} ${mod} | HAVAH Studios`,
        metaDescription: tmpl.metaDesc(mod, "location"),
      });
    }

    if (serviceKey === "web design") {
      for (const mod of industryModifiers) {
        const keyword = `web design for ${mod}`;
        pages.push({
          slug: toSlug(keyword),
          keyword,
          service: serviceKey,
          modifier: mod,
          modifierType: "industry",
          prePill: "Web Design",
          postPill: ["That Ranks", "And Wins."],
          subtext: `We build websites for ${mod} that rank on Google and convert the clients who find them. One team, no hand-offs.`,
          metaTitle: `Web Design for ${capitalize(mod)} | HAVAH Studios`,
          metaDescription: `HAVAH builds websites for ${mod}. Fast, modern, and built to rank — so the right clients find you first.`,
        });
      }
    }
  }

  return pages;
}

export const locationPages = generate();

export function getLocationPage(slug: string): LocationPage | undefined {
  return locationPages.find((p) => p.slug === slug);
}
