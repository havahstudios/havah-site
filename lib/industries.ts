export interface CaseStudy {
  name: string;
  meta: string;
  href: string;
  img: string;
  note: string;
}

export interface IndustryPage {
  slug: string;
  industry: string;
  industrySingular: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: [string, string, string];
  subtext: string;
  // Page won't be built, linked, or listed until this date.
  publishDate: Date;
  // Short punchy line for the full-width statement band.
  billboardLine: string;
  painPoints: { title: string; body: string }[];
  deliverables: { title: string; body: string }[];
  // Real case studies in this exact industry. Rendered as full proof cards.
  caseStudies: CaseStudy[];
  // Shown only when caseStudies is empty.
  proofNote: string;
  // Real work from other industries, shown alongside proofNote so the page
  // still carries real photos even without a same-industry case study yet.
  proofGallery?: CaseStudy[];
  faqs: { q: string; a: string }[];
}

const kosherHibachi: CaseStudy = {
  name: "Kosher Hibachi LA",
  meta: "Restaurant — Los Angeles, CA",
  href: "https://kosherhibachila.com/",
  img: "/kosher-hibachi.jpg",
  note: "A hibachi spot with a narrow kosher audience and a wide radius to reach. The site had to load fast on a phone, surface the menu without hunting, and make the phone number impossible to miss.",
};

const bennysGrill: CaseStudy = {
  name: "Benny's Grill LA",
  meta: "Restaurant — Los Angeles, CA",
  href: "https://www.bennysgrilllosangeles.com/",
  img: "/bennys-grill.jpg",
  note: "A neighborhood grill that needed its menu, hours, and location to be the first thing anyone sees, not the third scroll.",
};

export const industryPages: IndustryPage[] = [
  {
    slug: "law-firm-web-design",
    industry: "Law Firms",
    industrySingular: "Law Firm",
    metaTitle: "Law Firm Web Design | HAVAH Studios",
    metaDescription:
      "Websites for law firms built around intake conversion, practice-area SEO, and bar advertising compliance. Not a template with your name swapped in.",
    eyebrow: "Web Design — Law Firms",
    headline: ["WEBSITES", "LAWYERS", "GET HIRED FROM"],
    subtext:
      "Most law firm websites are a digital business card. Ours are built to turn someone's worst day into your next client, with the compliance and intake mechanics most web designers miss.",
    publishDate: new Date("2026-08-20"),
    billboardLine: "Built to get the call.",
    painPoints: [
      {
        title: "Bar advertising rules aren't optional",
        body: "Most state bars restrict superlative claims like \"#1\" and \"best,\" regulate how you can frame case results, and require specific disclaimer language. A generic web designer builds first and finds out about your bar's ad rules when you flag it in revisions, if they catch it at all. We build the compliance in from the first draft.",
      },
      {
        title: "One generic services page can't rank for anything",
        body: "If personal injury, DUI defense, and family law all live on one services page, Google can't tell which practice area you actually want to rank for. So you rank thin for all of them. Each practice area needs its own page, built to answer what that specific client is searching at 11pm.",
      },
      {
        title: "Legal searches are urgent and mobile",
        body: "Someone searching for a lawyer is often doing it minutes after an arrest, an accident, or a paperwork deadline. If your number isn't tappable in one move on a phone screen, they've already called the firm listed above you.",
      },
      {
        title: "Trust has to be established before the call",
        body: "Hiring a lawyer is a high-stakes, one-time decision for most people. Bar admission, years practicing, results where your state allows you to state them, and a real photo of the actual attorney they'll talk to all do more to get the phone to ring than another stock photo of a gavel.",
      },
    ],
    deliverables: [
      { title: "A dedicated page per practice area", body: "Individually structured and optimized, not folded into one \"Services\" catch-all." },
      { title: "Consultation request above the fold", body: "One obvious next step: call, text, or book. Visible without scrolling, on every page." },
      { title: "Attorney bio pages built for trust", body: "Bar admission, education, and results within your state's advertising rules. A real photo, not a placeholder icon." },
      { title: "Compliant by default", body: "Disclaimer language and claim framing built to your state bar's advertising rules from the first draft, not caught in review." },
      { title: "LegalService schema markup", body: "Structured data so Google understands your practice areas, location, and attorneys. It changes how you show up in search and AI results." },
      { title: "Built to load fast on a phone", body: "Because the person searching is often standing in a parking lot, not at a desk." },
    ],
    caseStudies: [],
    proofNote:
      "Judge us on the work. [Kosher Hibachi LA](/work) and [Benny's Grill](/work) are two Los Angeles businesses where the website had to turn a scroll into a phone call, fast. That's the same job we'd be doing for your firm: get someone to stop scrolling and call.",
    proofGallery: [kosherHibachi, bennysGrill],
    faqs: [
      {
        q: "Do law firm websites need to follow specific advertising rules?",
        a: "Yes. Most state bar associations regulate attorney advertising, restricting superlative claims, controlling how case results can be presented, and requiring specific disclaimer language. We build your site around your state's rules from the start instead of retrofitting compliance after the fact.",
      },
      {
        q: "How much does a law firm website cost?",
        a: "A custom law firm website typically runs between $4,000 and $18,000, depending on how many practice areas you cover, whether you need attorney bio pages, and whether you want intake automation like consultation booking. Template builders cost less upfront but can't handle practice-area SEO or bar-compliant claim framing properly.",
      },
      {
        q: "Will you build a separate page for each practice area?",
        a: "Yes, for any practice area you want to actually rank for. One page trying to cover personal injury, family law, and criminal defense at once ranks for none of them well. Separate pages let each one target the specific way a client searches for that problem.",
      },
      {
        q: "Can you add consultation scheduling or intake forms?",
        a: "Yes. We can build a simple consultation request form, connect a scheduling tool, or set up click-to-call and click-to-text. Whatever gets someone from your website into a conversation with your firm fastest.",
      },
    ],
  },
  {
    slug: "restaurant-web-design",
    industry: "Restaurants",
    industrySingular: "Restaurant",
    metaTitle: "Restaurant Web Design | HAVAH Studios",
    metaDescription:
      "Websites for restaurants built around your menu, your hours, and getting found on \"restaurants near me\" searches. Fast on a phone, easy to update yourself.",
    eyebrow: "Web Design — Restaurants",
    headline: ["WEBSITES", "DINERS", "ORDER FROM"],
    subtext:
      "Most restaurant websites are a PDF menu bolted onto a template. Ours are built to get found on \"restaurants near me,\" load fast on a phone, and make ordering or booking a table the easiest thing someone does all day.",
    publishDate: new Date("2026-09-03"),
    billboardLine: "Built to fill the table.",
    painPoints: [
      {
        title: "Local search decides where people eat",
        body: "Most people don't type your restaurant's name. They type \"sushi near me\" or \"date night spot open now\" and pick from whatever Google shows first. If your Google Business Profile and site aren't built to win that search, you're invisible before someone even sees your menu.",
      },
      {
        title: "A slow menu loses the table before they order",
        body: "A PDF menu that takes ten seconds to load on a phone is ten seconds someone spends deciding between you and the restaurant next door. The menu needs to open fast, read easily on a small screen, and never make someone pinch and zoom.",
      },
      {
        title: "Hours and location have to be right everywhere",
        body: "Nothing kills a first visit faster than showing up to a locked door because Google said you were open. Your hours, address, and phone number need to match across your site, Google, and every directory you're listed on.",
      },
      {
        title: "Photos sell the food before anyone tastes it",
        body: "People decide where to eat with their eyes first. Blurry phone photos or generic stock food shots read as generic. Real photography of your actual dishes and space does more to fill a table than any line of copy.",
      },
    ],
    deliverables: [
      { title: "A fast, real menu", body: "No PDF download. A menu that opens instantly and reads clean on any phone." },
      { title: "Local SEO built in", body: "Restaurant schema markup and a site structured to win \"near me\" searches, not just your name." },
      { title: "One-tap ordering and reservations", body: "Connected to whatever ordering or reservation platform you already use, or set up from scratch." },
      { title: "Hours and location up front", body: "Visible without scrolling, synced with your Google listing, with a map baked in." },
      { title: "Real photography, not stock", body: "Your actual dishes and space, shot and placed to make someone hungry in the first three seconds." },
      { title: "Built for you to update", body: "Change hours, specials, or the menu yourself without calling a developer every time." },
    ],
    caseStudies: [kosherHibachi, bennysGrill],
    proofNote: "",
    faqs: [
      {
        q: "Do I need a website if I'm already on Yelp and Google?",
        a: "Yes. Yelp and Google show your listing next to every competitor's ad and reviews you don't control. Your own site is the one place that's entirely about you, and it's what your local SEO points back to for ranking in the first place.",
      },
      {
        q: "How much does a restaurant website cost?",
        a: "A custom restaurant website typically runs between $2,500 and $10,000, depending on whether you need online ordering integration, a full photo shoot, or multiple location pages. Template builders cost less upfront but usually can't handle local SEO or fast mobile menus well.",
      },
      {
        q: "Can you connect online ordering or reservation platforms?",
        a: "Yes. We can connect whatever ordering or reservation system you already use, or help you pick one if you don't have one yet.",
      },
      {
        q: "Will my menu be easy for me to update myself?",
        a: "Yes. You'll be able to update hours, specials, and menu items yourself without calling us every time a price changes.",
      },
    ],
  },
];

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return industryPages.find((p) => p.slug === slug);
}
