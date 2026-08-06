import type { Metadata } from "next";
import { AnimatedSection } from "../../components/AnimatedSection";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle";
import { Timeline } from "../../components/Timeline";
import { ValueCard } from "../../components/ValueCard";
import { pageMeta, pagesContent } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata(pageMeta.howWeBuild.title, pageMeta.howWeBuild.description);

export default function HowWeBuildPage() {
  const content = pagesContent.howWeBuild;

  return (
    <>
      <Navbar />
      <main>
        <PageHeader {...content.header} />
        <Section className="how-we-build-intro">
          <Container>
            <div className="mission-grid">
              <SectionTitle eyebrow={content.introduction.eyebrow}>{content.introduction.title}<br /><span>{content.introduction.emphasis}</span></SectionTitle>
              <p className="how-we-build-lead">{content.introduction.description}</p>
            </div>
          </Container>
        </Section>
        <Section className="how-we-build-principles">
          <Container>
            <SectionTitle eyebrow={content.principlesHeader.eyebrow}>{content.principlesHeader.title}<br /><span>{content.principlesHeader.emphasis}</span></SectionTitle>
            <div className="values-grid how-we-build-principles-grid">
              {content.principles.map((principle, index) => (
                <AnimatedSection key={principle.number} delay={index * 0.06}>
                  <ValueCard {...principle}>{principle.text}</ValueCard>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </Section>
        <Section className="how-we-build-process">
          <Container>
            <div className="timeline-intro">
              <SectionTitle eyebrow={content.operatingModel.eyebrow}>{content.operatingModel.title}<br /><span>{content.operatingModel.emphasis}</span></SectionTitle>
              <p>{content.operatingModel.description}</p>
            </div>
            <Timeline items={[...content.operatingModel.items]} />
          </Container>
        </Section>
        <Section className="how-we-build-note-section">
          <Container>
            <div className="how-we-build-note">
              <div>
                <p className="eyebrow">{content.note.eyebrow}</p>
                <h2>{content.note.title}</h2>
              </div>
              <div>
                <p>{content.note.description}</p>
                <Button href={content.note.cta.href} variant="secondary">{content.note.cta.label}</Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
