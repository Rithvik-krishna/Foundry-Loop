import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { articles, pageMeta, pagesContent } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: pageMeta.news.title,
  description: pageMeta.news.description,
  path: "/news",
});

export default function NewsPage() {
  const content = pagesContent.news;
  return (
    <>
      <Navbar />
      <main>
        <PageHeader {...content.header} />
        <Section className="legal-section">
          <Container>
            <div style={{ display: "grid", gap: "32px", maxWidth: "800px" }}>
              {articles.map((article) => (
                <article
                  key={article.slug}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "16px",
                    padding: "32px",
                    background: "var(--surface)",
                    transition: "border-color 0.2s ease, transform 0.2s ease",
                  }}
                >
                  <p className="eyebrow" style={{ color: "var(--blue)", marginBottom: "8px" }}>
                    {article.category} • {article.readTime}
                  </p>
                  <h2 style={{ fontSize: "24px", fontWeight: 450, letterSpacing: "-0.04em", margin: "8px 0 12px" }}>
                    <Link href={`/news/${article.slug}`} style={{ textDecoration: "none", color: "var(--ink)" }}>
                      {article.title}
                    </Link>
                  </h2>
                  <p style={{ color: "var(--ink-soft)", fontSize: "15px", lineHeight: 1.5, margin: "0 0 20px" }}>
                    {article.description}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "var(--ink-faint)" }}>
                    <span>{article.date}</span>
                    <Link
                      href={`/news/${article.slug}`}
                      style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--blue)", textDecoration: "none", fontWeight: 500 }}
                    >
                      Read article <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
