import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Section } from "../../../components/Section";
import { articles, site } from "../../../constants/content";
import { createMetadata } from "../../../lib/seo";
import { ArticleJsonLd } from "../../../components/JsonLd";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  if (!article) return {};

  return createMetadata({
    title: `${article.title} | Insights | ${site.name}`,
    description: article.description,
    path: `/news/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const articleUrl = `${site.url}/news/${article.slug}`;

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.description}
        url={articleUrl}
        datePublished={article.date}
        author={article.author}
      />
      <Navbar />
      <main>
        <Section className="legal-section">
          <Container>
            <div style={{ marginBottom: "32px" }}>
              <Link href="/news" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-soft)" }}>
                <ArrowLeft size={16} /> Back to News &amp; Insights
              </Link>
            </div>
            <article className="legal-copy">
              <p className="eyebrow" style={{ color: "var(--blue)", marginBottom: "12px" }}>
                {article.category} • {article.readTime}
              </p>
              <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 450, letterSpacing: "-0.06em", lineHeight: 1.05, margin: "0 0 24px" }}>
                {article.title}
              </h1>
              <p className="lead" style={{ fontSize: "20px", color: "var(--ink-soft)", lineHeight: 1.5, marginBottom: "40px" }}>
                {article.description}
              </p>
              <div style={{ display: "flex", gap: "24px", fontSize: "13px", color: "var(--ink-faint)", borderBottom: "1px solid var(--line)", paddingBottom: "20px", marginBottom: "40px" }}>
                <span>Published on {article.date}</span>
                <span>By {article.author}</span>
              </div>
              {article.content.map((paragraph, i) => (
                <p key={i} style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--ink)", marginBottom: "24px" }}>
                  {paragraph}
                </p>
              ))}
              <div style={{ marginTop: "60px", paddingTop: "30px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h3 style={{ fontSize: "18px", margin: "0 0 8px" }}>Explore products from Foundry &amp; Loop</h3>
                  <p style={{ fontSize: "14px", color: "var(--ink-soft)", margin: 0 }}>Discover software and AI tools engineered for modern businesses.</p>
                </div>
                <Button href="/products">View products</Button>
              </div>
            </article>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
