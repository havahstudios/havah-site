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
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: [string, string, string];
  subtext: string;
  painPoints: { title: string; body: string }[];
  deliverables: { title: string; body: string }[];
  caseStudy: CaseStudy | null;
  proofNote: string;
  faqs: { q: string; a: string }[];
}

export const industryPages: IndustryPage[] = [
  {
    slug: "law-firm-web-design",
    industry: "Law Firms",
    metaTitle: "Law Firm Web Design | HAVAH Studios",
    metaDescription:
      "Websites for law firms built around intake conversion, practice-area SEO, and bar advertising compliance. Not a template with your name swapped in.",
    eyebrow: "Web Design — Law Firms",
    headline: ["WEBSITES", "LAWYERS", "GET HIRED FROM"],
    subtext:
      "Most law firm websites are a digital business card. Ours are built to turn someone's worst day into your next client, with the compliance and intake mechanics most web designers miss.",
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
    caseStudy: null,
    proofNote:
      "Judge us on the work. [Kosher Hibachi LA](/work) and [Benny's Grill](/work) are two Los Angeles businesses where the website had to turn a scroll into a phone call, fast. That's the same job we'd be doing for your firm: get someone to stop scrolling and call.",
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
];

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return industryPages.find((p) => p.slug === slug);
}
