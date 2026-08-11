import type { Metadata } from "next";
import { BrainCircuit, Compass, Layers3, Sparkles } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { FeatureCard } from "../components/FeatureCard";
import { Footer } from "../components/Footer";
import { GradientBackground } from "../components/GradientBackground";
import { Hero } from "../components/Hero";
import { MediaImage } from "../components/MediaImage";
import { LogoStrip } from "../components/LogoStrip";
import { Navbar } from "../components/Navbar";
import { ProductCard } from "../components/ProductCard";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";
import { StatsCard } from "../components/StatsCard";
import { Timeline } from "../components/Timeline";
import { ValueCard } from "../components/ValueCard";
import { homeContent, pageMeta } from "../constants/content";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  path: "/",
});

const capabilityIcons = { brain: BrainCircuit, layers: Layers3, compass: Compass };

export default function Home() {
  const content = homeContent;
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Section className="intro-section">
          <Container>
            <div className="intro-grid">
              <AnimatedSection>
                <p className="eyebrow">{content.intro.eyebrow}</p>
              </AnimatedSection>
              <AnimatedSection className="intro-statement" delay={0.08}>
                <h2>
                  {content.intro.title} <span>{content.intro.emphasis}</span>
                </h2>
                <p>{content.intro.description}</p>
                <Button href={content.intro.cta.href} variant="ghost">
                  {content.intro.cta.label}
                </Button>
              </AnimatedSection>
            </div>
          </Container>
        </Section>
        <Section className="product-section">
          <Container>
            <div className="section-heading-row">
              <SectionTitle eyebrow={content.products.eyebrow}>
                {content.products.title}
                <br />
                <span>{content.products.emphasis}</span>
              </SectionTitle>
              <p className="heading-aside">{content.products.aside}</p>
            </div>
            <ProductCard featured />
          </Container>
        </Section>
        <Section className="values-section">
          <Container>
            <SectionTitle eyebrow="What guides us">
              The way we work <span>is the work.</span>
            </SectionTitle>
            <div className="values-grid">
              {content.values.map((value, index) => (
                <AnimatedSection key={value.number} delay={index * 0.06}>
                  <ValueCard {...value}>{value.text}</ValueCard>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </Section>
        <Section className="image-story">
          <Container>
            <div className="image-story-grid">
              <AnimatedSection className="story-image-large">
                <MediaImage {...content.story.image} sizes="(max-width: 900px) 100vw, 62vw" />
              </AnimatedSection>
              <AnimatedSection className="story-copy" delay={0.12}>
                <p className="eyebrow">{content.story.eyebrow}</p>
                <h2>
                  {content.story.title} <span>{content.story.emphasis}</span>
                </h2>
                <p>{content.story.description}</p>
                <Button href={content.story.cta.href} variant="secondary">
                  {content.story.cta.label}
                </Button>
              </AnimatedSection>
              <div className="story-label">
                {content.story.label}
                <br />
                <strong>02 / 03</strong>
              </div>
            </div>
          </Container>
        </Section>
        <Section className="capabilities-section">
          <Container>
            <div className="section-heading-row">
              <SectionTitle eyebrow="Areas of focus">
                Built for what’s <span>next.</span>
              </SectionTitle>
              <Button href="/about" variant="ghost">
                How we think
              </Button>
            </div>
            <div className="feature-grid">
              {content.capabilities.map((capability, index) => {
                const Icon = capabilityIcons[capability.icon];
                return (
                  <FeatureCard
                    key={capability.title}
                    number={`0${index + 1}`}
                    title={capability.title}
                    icon={<Icon size={22} />}
                  >
                    {capability.text}
                  </FeatureCard>
                );
              })}
            </div>
          </Container>
        </Section>
        <GradientBackground className="vision-band">
          <Container>
            <AnimatedSection>
              <div className="vision-grid">
                <div>
                  <p className="eyebrow">{content.vision.eyebrow}</p>
                  <h2>
                    {content.vision.title}
                    <br />
                    <span>{content.vision.emphasis}</span>
                  </h2>
                </div>
                <div>
                  <p>{content.vision.description}</p>
                  <Button href={content.vision.cta.href} variant="light">
                    {content.vision.cta.label}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </GradientBackground>
        <Section className="timeline-section">
          <Container>
            <div className="timeline-intro">
              <SectionTitle eyebrow="The path ahead">
                Built with purpose.
                <br />
                <span>Always evolving.</span>
              </SectionTitle>
              <p>We&apos;re early in the journey. The standard is not.</p>
            </div>
            <Timeline items={[...content.timeline]} />
          </Container>
        </Section>
        <Section className="stats-section">
          <Container>
            <div className="stats-wrap">
              {content.stats.map((stat) => (
                <StatsCard key={stat.label} {...stat} />
              ))}
            </div>
          </Container>
        </Section>
        <Section className="cta-section">
          <Container>
            <div className="cta-card">
              <div>
                <p className="eyebrow">{content.cta.eyebrow}</p>
                <h2>
                  {content.cta.title} <span>{content.cta.emphasis}</span>
                </h2>
              </div>
              <Button href={content.cta.action.href}>{content.cta.action.label}</Button>
              <Sparkles className="cta-spark" size={110} strokeWidth={0.8} />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
