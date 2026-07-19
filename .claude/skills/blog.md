# /blog — Auto-Generate a Blog Post

Generates a fully SEO-optimized blog post from `keywords.csv`, adds it to `lib/posts.ts`, marks the keyword as used, builds, and pushes to GitHub.

**Do not ask the user questions. Make every decision yourself and keep going.**

---

## Step 1: Read the style guides

Read both files now — before writing a single word of content:
- `references/voice.md`
- `references/humour.md`

Internalize the rules. Every sentence you write gets checked against them.

---

## Step 2: Read the post template

Read `lib/posts.ts` to understand the Post interface and see the existing post as a reference for tone, structure, length, and HTML format.

---

## Step 3: Pick a keyword

Read `keywords.csv`.

The CSV has three columns: `keyword`, `used`, `type`. Find the **first row** where column 2 (the middle column) is empty. That is your target keyword.

If the user passed an argument to `/blog` (e.g., `/blog "web design for bakeries"`), use that keyword instead — but still find it in the CSV so you know which row to mark as used.

If no unused keyword exists, stop and tell the user the list is exhausted.

Save the keyword string. You'll use it in every step that follows.

---

## Step 4: Plan the post

Based on the keyword, decide:

**Primary keyword:** the exact phrase from the CSV.

**Slug:** URL-safe version. Lowercase, hyphens, no special characters.
Example: `"web design for bakeries"` → `"web-design-for-bakeries"`

**SEO title:** Under 60 characters. Includes the primary keyword. Ends with "(2026 Guide)" if that fits.
Example: `"Web Design for Bakeries: What Actually Works (2026)"`

**Meta description:** Under 160 characters. Includes the keyword and a reason to click.
Example: `"Most bakery websites lose customers before they walk in the door. Here's what a well-designed bakery site does differently."`

**Keyword cluster:** 8–10 related queries a real person would search. Variations, questions, long-tail versions. No repeating the exact primary keyword — related phrases only.
Example for "web design for bakeries":
- `"bakery website design ideas"`
- `"how to design a website for a bakery"`
- `"what should a bakery website include"`
- `"bakery website cost"`
- `"best bakery website examples"`
- `"online ordering for bakeries"`
- `"bakery SEO tips"`
- `"how to get more customers for a bakery"`

**Category:** Pick one — `Strategy` | `Design` | `SEO` | `Business` | `Branding`

**Target audience:** One sentence. Who is this post for and what do they want?

**Read time:** Estimate based on ~200 words per minute. A 2,500-word post = ~13 min. A 2,000-word post = ~10 min.

---

## Step 5: Get images

### If PEXELS_API_KEY exists in `.env.local`:

Read `.env.local` to get the key.

Make three WebFetch calls to the Pexels API — one for each image:

```
URL: https://api.pexels.com/v1/search?query={SEARCH_TERM}&per_page=5&orientation=landscape
Header: Authorization: {PEXELS_API_KEY}
```

Use different, specific search terms for each call. Avoid generic terms like "business" or "website."

Pick one photo per call. Use the `photos[0].src.large2x` URL. Save the photo's `alt` field as a starting point for alt text (you'll customize it to include the keyword).

You need:
1. **Hero image** — wide, professional, shows the business context (e.g., "bakery interior" not "laptop")
2. **In-article image 1** — shows the business type or its customers
3. **In-article image 2** — analytics, performance, device, or conversion-related
4. **In-article image 3** — mobile or customer-focused

### If no PEXELS_API_KEY:

Use Unsplash URLs. Select relevant, high-quality Unsplash photo IDs from your knowledge of the platform. Format:

```
Hero:    https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=1400&q=80
Article: https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=1200&q=80
```

Choose photo IDs that actually exist on Unsplash and are relevant to the keyword topic. Don't invent IDs.

---

## Step 6: Write the blog post content

### Voice rules (from voice.md — apply every sentence):
- Contractions always: "it's," "you're," "don't," "won't"
- Second person: "you," "your site," "your customers"
- Lead each paragraph with the point — no warm-up sentences
- 3–4 sentences per paragraph max
- Mix sentence lengths: medium → long → short is the rhythm that works
- No passive voice
- No qualifiers: "very," "really," "quite," "a bit"
- No corporate filler: "leverage," "utilize," "seamless," "robust"
- No exclamation marks
- No em dashes (—) or hyphens used as dashes in prose. Use a period, comma, or colon instead. Restructure the sentence if needed.
- No transitions: "furthermore," "additionally," "in conclusion"

### Humor rules (from humour.md — one or two moments per post):
- Dry, self-aware, earned — not performed
- Parenthetical asides work well: `(No invoice. Just fewer customers.)`
- Best placed in the intro lead or the bottom line close
- If it feels forced while writing it, cut it

---

### Content structure — follow this exactly:

**Lead paragraph** (`<p class="lead">`)
- Primary keyword AND target audience (business type) within the first 100 words
- Open with what's at stake — a cost, a missed opportunity, a decision already being made
- 4–6 sentences

**Section 1: First impressions / why this matters** (`<h2>1. [Title]</h2>`)
- H2 title includes a keyword cluster variation
- 3 short paragraphs
- End with a statistic or concrete fact

**[Figure 1]** — After section 1
- Alt text MUST include the primary keyword
- Professional caption in sentence case

**Section 2: How design and SEO connect for this business type** (`<h2>2. [Title]</h2>`)
- H2 title includes a keyword cluster variation
- Explain the link between design quality and search ranking
- Mention page speed, mobile performance

**Section 3: Mobile — why it matters for this specific audience** (`<h2>3. [Title]</h2>`)
- H2 title includes "mobile" or "phone" as a keyword variant
- Mention Google's mobile-first indexing with this exact external link:
  `<a href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" target="_blank" rel="noopener noreferrer">Google Search Central</a>`
- Include the stat: 63% of web traffic comes from mobile

**[Figure 2]** — After section 3

**Sections 4–7** — Four more sections covering:
- Trust and credibility (visual trust signals)
- User experience and conversion
- Brand consistency
- Accessibility or competitive differentiation

**Section 8: Real example** (`<h2>8. [Title]</h2>`)
- Brief, believable real-world outcome
- "We've seen this play out directly: a [business type] with great reviews and fair prices was losing customers to a competitor whose site was faster, cleaner, and easier to use on a phone."
- End with an internal link to /work: `<a href="/work">see what that looks like in practice</a>`

**[Figure 3]** — After section 8

**Section 9: Everything multiplies** (`<h2>9. [Title]</h2>`)
- How a well-designed site amplifies every other marketing channel
- Social media, Google Ads, reviews — everything points back to the site

**Section 10: Bonus — AI search** (`<h2>Bonus: How AI Search Is Changing Things for [Business Type]</h2>`)
- 2–3 paragraphs on AEO (answer engine optimization)
- Include this external link to structured data docs:
  `<a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer">schema markup</a>`

**Comparison table** (`<h2>[Business Type] Website: Template Builder vs. Custom Design</h2>`)
- Intro paragraph
- Table with exactly 7 rows: upfront cost, mobile performance, SEO capability, unique to your brand, load speed, scales with your business, long-term ROI
- Closing paragraph with internal link to /services: `<a href="/services">our web design services</a>`

**Checklist** (`<h2>What Every [Business Type] Website Needs</h2>`)
- 8–9 bullet points specific to this business type
- One bullet must include this external link: `<a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a>`

**FAQ section** (`<h2>Frequently Asked Questions</h2>`)
- 7 questions as `<h3>` headings, each followed by a `<p>` answer
- Q1: Primary keyword phrased as a question (this is the featured snippet target)
- Q2: Does [service] affect SEO for [business type]?
- Q3: Can a bad website hurt [business type]?
- Q4: What makes a good [business type] website?
- Q5: Why is mobile design important for [business type]?
- Q6: Why is user experience important for [business type]?
- Q7: How much does [service] cost for [business type]? — Answer ends with: `<a href="/contact">reach out here</a>`

**Bottom line** (`<h2>The Bottom Line</h2>`)
- 3 paragraphs: infrastructure argument → what a great site does → the question isn't whether it matters, it's whether yours is doing it
- ONE humor moment allowed here (dry, parenthetical)
- End with: `<a href="/contact">let's find out</a>`

---

### HTML template — use this exact structure:

```html
<p class="lead">[LEAD — primary keyword in first 100 words]</p>

<h2>1. [H2 — keyword cluster variation]</h2>
<p>[paragraph]</p>
<p>[paragraph]</p>
<p>[paragraph]</p>

<figure>
  <img src="[HERO_SEARCH_TERM_IMAGE_URL]" alt="[alt text including primary keyword]" loading="lazy" />
  <figcaption>[Caption in sentence case]</figcaption>
</figure>

<h2>2. [H2 — keyword cluster variation]</h2>
<p>[paragraph]</p>
<p>[paragraph]</p>

<h2>3. Why Mobile Design Matters for [Business Type]</h2>
<p>[63% stat paragraph]</p>
<p>[Google Search Central link paragraph]</p>
<p>[template builders vs real mobile UX paragraph]</p>

<figure>
  <img src="[IMAGE_2_URL]" alt="[alt text]" loading="lazy" />
  <figcaption>[Caption]</figcaption>
</figure>

<h2>4. [H2]</h2>
<p>[paragraph]</p>
<p>[paragraph]</p>

<h2>5. [H2]</h2>
<p>[paragraph]</p>
<p>[paragraph]</p>

<h2>6. [H2]</h2>
<p>[paragraph]</p>
<p>[paragraph]</p>

<h2>7. [H2]</h2>
<p>[paragraph]</p>
<p>[paragraph]</p>

<h2>8. [H2 — real example]</h2>
<p>[real example paragraph]</p>
<p>[/work link paragraph]</p>

<figure>
  <img src="[IMAGE_3_URL]" alt="[alt text]" loading="lazy" />
  <figcaption>[Caption]</figcaption>
</figure>

<h2>9. [H2 — multiplier effect]</h2>
<p>[paragraph]</p>
<p>[paragraph]</p>

<h2>Bonus: How AI Search Is Changing Things for [Business Type]</h2>
<p>[paragraph]</p>
<p>[paragraph with schema markup link]</p>

<h2>[Business Type] Website: Template Builder vs. Custom Design</h2>
<p>[intro sentence]</p>
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Template Builder (Wix, Squarespace)</th>
      <th>Custom Design</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Upfront cost</td><td>Low ($20–$60/month)</td><td>Higher (one-time project fee)</td></tr>
    <tr><td>Mobile performance</td><td>Basic</td><td>Fully optimized</td></tr>
    <tr><td>SEO capability</td><td>Limited</td><td>Full control</td></tr>
    <tr><td>Unique to your brand</td><td>No</td><td>Yes</td></tr>
    <tr><td>Load speed</td><td>Average</td><td>Optimized</td></tr>
    <tr><td>Scales with your business</td><td>Limited</td><td>Yes</td></tr>
    <tr><td>Long-term ROI</td><td>Lower</td><td>Higher</td></tr>
  </tbody>
</table>
<p>[closing with /services link]</p>

<h2>What Every [Business Type] Website Needs</h2>
<p>[intro sentence]</p>
<ul>
  <li><strong>[ITEM]</strong> [explanation — specific to this business type]</li>
  <li><strong>[ITEM]</strong> [explanation]</li>
  <li><strong>[ITEM]</strong> [explanation]</li>
  <li><strong>[ITEM]</strong> [explanation]</li>
  <li><strong>Page speed under 2.5 seconds</strong> on mobile — check it free at <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a></li>
  <li><strong>[ITEM]</strong> [explanation]</li>
  <li><strong>[ITEM]</strong> [explanation]</li>
  <li><strong>[ITEM]</strong> [explanation]</li>
</ul>

<h2>Frequently Asked Questions</h2>

<h3>[Primary keyword phrased as a question]</h3>
<p>[Answer — lead with the main point. 3–4 sentences.]</p>

<h3>Does [service] affect SEO for [business type]?</h3>
<p>[Answer]</p>

<h3>Can a bad website hurt [business type]?</h3>
<p>[Answer]</p>

<h3>What makes a good [business type] website?</h3>
<p>[Answer]</p>

<h3>Why is mobile design important for [business type]?</h3>
<p>[Answer]</p>

<h3>Why is user experience important for [business type]?</h3>
<p>[Answer]</p>

<h3>How much does [service] cost for [business type]?</h3>
<p>[Answer ending with: <a href="/contact">reach out here</a>]</p>

<h2>The Bottom Line</h2>
<p>[Infrastructure argument]</p>
<p>[What a great site does — list the benefits]</p>
<p>[The question isn't whether it matters — it's whether yours is doing it. Optional humor in parentheses here. End with: <a href="/contact">let's find out</a>]</p>
```

---

## Step 7: Build the post object

Assemble the complete TypeScript object to add to `lib/posts.ts`:

```typescript
{
  slug: "SLUG",
  title: "HUMAN READABLE TITLE",
  seoTitle: "SEO TITLE UNDER 60 CHARS",
  description: "META DESCRIPTION UNDER 160 CHARS",
  date: "YYYY-MM-DD",  // today's date
  readTime: NUMBER,
  category: "Strategy" | "Design" | "SEO" | "Business" | "Branding",
  heroImage: "HERO_IMAGE_URL",
  heroAlt: "DESCRIPTIVE ALT TEXT INCLUDING PRIMARY KEYWORD",
  excerpt: "TWO SENTENCES FOR THE JOURNAL CARD. What the article covers and who it's for.",
  keywordCluster: [
    "keyword 1",
    "keyword 2",
    // 8–10 total
  ],
  faqs: [
    { q: "QUESTION 1", a: "PLAIN TEXT ANSWER — no HTML, no links, no markdown" },
    { q: "QUESTION 2", a: "PLAIN TEXT ANSWER" },
    { q: "QUESTION 3", a: "PLAIN TEXT ANSWER" },
    { q: "QUESTION 4", a: "PLAIN TEXT ANSWER" },
    { q: "QUESTION 5", a: "PLAIN TEXT ANSWER" },
    { q: "QUESTION 6", a: "PLAIN TEXT ANSWER" },
    { q: "QUESTION 7", a: "PLAIN TEXT ANSWER — no /contact link here, plain text only" },
  ],
  content: `[FULL HTML STRING — use template-literal backticks]`,
}
```

**Important:**
- The `faqs` array answers must be **plain text only** — no HTML, no anchor tags, no markdown. Google's structured data reads these directly.
- The FAQ questions in `faqs` must match the `<h3>` questions in the `content` exactly (same wording).
- Add this post to the **beginning** of the `posts` array (newest first).

---

## Step 8: Update lib/posts.ts

Edit `lib/posts.ts`.

Add the new post object at the **beginning** of the `posts` array, before the existing post. Do not change the interface or any other part of the file.

---

## Step 9: Mark the keyword as used

In `keywords.csv`, find the row for this keyword and change the middle column from empty to `yes`.

Before: `web design for bakeries,,`
After:  `web design for bakeries,yes,`

---

## Step 10: Build, commit, push

1. Run `npm run build`. Fix any TypeScript errors before continuing.

2. Stage and commit:
   ```
   git add lib/posts.ts keywords.csv
   git commit -m "Add blog post: [slug]"
   ```

3. Push: `git push`

4. Report back to the user:
   - The keyword published
   - The URL: `https://havahstudios.live/journal/[slug]`
   - The next unused keyword in the queue (so they know what's coming next)

---

## SEO Self-Check Before Publishing

Before running the build, verify all of these are true:

- [ ] Primary keyword appears within the first 100 words of the lead
- [ ] At least 3 H2s contain keyword cluster variations (not the exact primary keyword)
- [ ] At least one image alt text contains the primary keyword
- [ ] Internal links present: /work, /services, /contact (minimum 2× /contact)
- [ ] External links present: Google Search Central (mobile-first), Google structured data docs, PageSpeed Insights
- [ ] Comparison table has exactly 7 rows
- [ ] Checklist has 8–9 items
- [ ] FAQ section has exactly 7 questions
- [ ] `faqs` array has 7 entries with plain-text answers
- [ ] `faqs` question wording matches `<h3>` headings in content
- [ ] No exclamation marks in content
- [ ] No passive voice
- [ ] No "furthermore," "additionally," "in conclusion"
- [ ] 1–2 humor moments max (parenthetical, dry)
- [ ] readTime is realistic for content length
