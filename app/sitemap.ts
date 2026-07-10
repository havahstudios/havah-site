import { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { locationPages } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://havahstudios.live";

  const core = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${base}/work`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/studio`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/journal`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 },
  ];

  const journal = posts.map((p) => ({
    url: `${base}/journal/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const locations = locationPages.map((p) => ({
    url: `${base}/locations/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...core, ...journal, ...locations];
}
