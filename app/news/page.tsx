import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "../../components/AnimatedSection";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { MediaImage } from "../../components/MediaImage";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle";
import { pageMeta, pagesContent, site } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata(pageMeta.news.title, pageMeta.news.description);

export default function NewsPage() {
  const content = pagesContent.news;

  return (
    <>
      <Navbar />
      <main>
        <PageHeader {...content.header} />
        <Section className="journal-feature-section">
          <Container>
            <AnimatedSection>
              <article className="journal-feature">
                <div className="journal-feature-image">
                  <MediaImage {...content.featured.image} sizes="(max-width: 900px) 100vw, 55vw" priority />
                </div>
                <div className="journal-feature-copy">
                  <p className="eyebrow">{content.featured.eyebrow}</p>
                  <p className="journal-date">{content.featured.date}</p>
                  <h2>{content.featured.title}</h2>
                  <p>{content.featured.description}</p>
                </div>
              </article>
            </AnimatedSection>
          </Container>
        </Section>
        <Section className="journal-list-section">
          <Container>
            <SectionTitle eyebrow={content.listHeader.eyebrow}>{content.listHeader.title}<br /><span>{content.listHeader.emphasis}</span></SectionTitle>
            <div className="journal-grid">
              {content.articles.map((article, index) => (
                <AnimatedSection key={article.title} delay={index * 0.07}>
                  <article className="journal-card">
                    <div className="journal-card-meta"><span>{article.category}</span><span>{article.date}</span></div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </Section>
        <Section className="journal-archive-section">
          <Container>
            <div className="journal-archive">
              <div>
                <p className="eyebrow">{content.archive.eyebrow}</p>
                <h2>{content.archive.title}</h2>
              </div>
              <div>
                <p>{content.archive.description}</p>
                <a className="text-link" href={site.social.linkedin} target="_blank" rel="noreferrer">
                  {content.archive.cta} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
