import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { posts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Journal — HAVAH Studios",
  description:
    "Web design, SEO, and branding insights for small business owners. Written by the team at HAVAH Studios in Los Angeles.",
};

export default function JournalPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "62px" }}>
        <section
          style={{
            padding: "clamp(56px,8vw,96px) clamp(20px,5vw,64px) clamp(32px,4vw,48px)",
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B5642E", marginBottom: "16px" }}>
            Journal
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.03em", lineHeight: 1.05, color: "#15171A", maxWidth: "640px" }}>
            Insights for ambitious small businesses
          </h1>
          <p style={{ marginTop: "20px", fontSize: "17px", lineHeight: 1.65, color: "#6B7280", maxWidth: "520px" }}>
            Web design, SEO, and brand strategy — written for business owners who want to grow online.
          </p>
        </section>

        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
          <div style={{ height: "1px", background: "#DDE1E8" }} />
        </div>

        <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(40px,5vw,64px) clamp(20px,5vw,64px) clamp(64px,8vw,120px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "32px" }}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/journal/${post.slug}`} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }} className="group">
                <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden", background: "#F2F3F5", marginBottom: "20px" }}>
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    className="group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "10px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#B5642E", background: "rgba(181,100,46,0.08)", padding: "3px 8px", borderRadius: "4px" }}>
                    {post.category}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", color: "#9AA0AD" }}>
                    {post.readTime} min read
                  </span>
                </div>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "20px", letterSpacing: "-0.02em", lineHeight: 1.25, color: "#15171A", marginBottom: "10px", transition: "color 0.2s" }} className="group-hover:text-[#B5642E]">
                  {post.title}
                </h2>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#6B7280", marginBottom: "16px" }}>
                  {post.excerpt}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9AA0AD", marginTop: "auto" }}>
                  {formatDate(post.date)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
