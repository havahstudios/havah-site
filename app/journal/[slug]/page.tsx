import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getPost, posts, formatDate } from "@/lib/posts";
import { ArrowNE } from "@/components/ArrowIcon";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "62px" }}>
        {/* Hero image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "21/8",
            minHeight: "260px",
            background: "#15171A",
            overflow: "hidden",
          }}
        >
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            priority
            style={{ objectFit: "cover", opacity: 0.85 }}
            sizes="100vw"
          />
        </div>

        {/* Article */}
        <article
          style={{
            maxWidth: "740px",
            margin: "0 auto",
            padding: "clamp(40px,6vw,72px) clamp(20px,5vw,40px) clamp(64px,8vw,120px)",
          }}
        >
          {/* Back */}
          <Link
            href="/journal"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#9AA0AD",
              textDecoration: "none",
              marginBottom: "32px",
              transition: "color 0.2s",
            }}
            className="hover:text-[#15171A]"
          >
            ← Journal
          </Link>

          {/* Category + read time */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#B5642E",
                background: "rgba(181,100,46,0.08)",
                padding: "3px 8px",
                borderRadius: "4px",
              }}
            >
              {post.category}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: "#9AA0AD",
              }}
            >
              {post.readTime} min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(28px,4vw,48px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#15171A",
              marginBottom: "16px",
            }}
          >
            {post.title}
          </h1>

          {/* Date */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9AA0AD",
              marginBottom: "48px",
              paddingBottom: "32px",
              borderBottom: "1px solid #DDE1E8",
            }}
          >
            {formatDate(post.date)} · By HAVAH Studios
          </p>

          {/* Content */}
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Keyword cluster */}
          <div
            style={{
              marginTop: "56px",
              paddingTop: "32px",
              borderTop: "1px solid #DDE1E8",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#9AA0AD",
                marginBottom: "14px",
              }}
            >
              Related topics
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {post.keywordCluster.map((kw) => (
                <span
                  key={kw}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "#6B7280",
                    background: "#F7F8FA",
                    border: "1px solid #DDE1E8",
                    borderRadius: "6px",
                    padding: "5px 10px",
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* CTA */}
        <section
          style={{
            background: "#15171A",
            padding: "clamp(56px,7vw,88px) clamp(20px,5vw,64px)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#4A5059",
              marginBottom: "16px",
            }}
          >
            Ready to get started?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(28px,4vw,48px)",
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: "28px",
              lineHeight: 1.1,
            }}
          >
            Let&apos;s build your site.
          </h2>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#B5642E",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "100px",
              padding: "14px 28px",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "15px",
              transition: "opacity 0.2s",
            }}
            className="hover:opacity-90"
          >
            Start a project <ArrowNE size={13} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
