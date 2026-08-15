"use client";

import * as React from "react";
import { ArrowDown } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { AnimatedSection } from "./AnimatedSection";
import { MediaImage } from "./MediaImage";
import { HeroScene } from "./hero/HeroScene";
import { homeContent, site } from "../constants/content";

function Hero3DVisual() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <MediaImage
        {...homeContent.hero.image}
        sizes="(max-width: 900px) 100vw, 52vw"
        priority
      />
    );
  }

  return <HeroScene />;
}

export function Hero() {
  const { hero } = homeContent;
  return (
    <section className="hero">
      <Container>
        <div className="hero-grid">
          <AnimatedSection className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span /> {hero.eyebrow}
            </p>
            <h1>
              {hero.title} <em>{hero.emphasis}</em>
            </h1>
            <p className="hero-description">{hero.description}</p>
            <div className="hero-actions">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection className="hero-visual" delay={0.12}>
            <div className="hero-image">
              <Hero3DVisual />
            </div>
            <div className="hero-floating-card">
              <span className="status-dot" /> {hero.card} <strong>01</strong>
            </div>
            <div className="hero-caption">
              <span>01 — 03</span>
              <span>{hero.caption}</span>
            </div>
          </AnimatedSection>
        </div>
        <div className="hero-footer">
          <span>{site.name} / 2026</span>
          <span className="scroll-cue">
            Scroll to explore <ArrowDown size={15} />
          </span>
          <span>AI · SaaS · Systems</span>
        </div>
      </Container>
    </section>
  );
}
