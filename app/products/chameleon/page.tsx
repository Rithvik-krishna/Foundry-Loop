import type { Metadata } from "next";
import { ArrowUpRight, Sparkles, Brain, Layers, ShieldCheck } from "lucide-react";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { PageHeader } from "../../../components/PageHeader";
import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle";
import { chameleon, pageMeta, site } from "../../../constants/content";
import { createMetadata } from "../../../lib/seo";
import { ProductJsonLd } from "../../../components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: pageMeta.chameleon.title,
  description: pageMeta.chameleon.description,
  path: "/products/chameleon",
});

export default function ChameleonPage() {
  return (
    <>
      <ProductJsonLd
        name={chameleon.name}
        description={chameleon.description}
        url={`${site.url}/products/chameleon`}
        category={chameleon.category}
      />
      <Navbar />
      <main>
        <PageHeader
          eyebrow={chameleon.eyebrow}
          title={chameleon.name}
          description={chameleon.lead}
        />

        <Section className="product-detail-section">
          <Container>
            <div className="product-detail-grid">
              <div>
                <p className="eyebrow">Product Overview</p>
                <h2>An AI Agent Platform built for execution.</h2>
                <p className="product-detail-lead">{chameleon.description}</p>
              </div>
              <div className="product-detail-copy">
                <p>
                  Chameleon is an AI-powered agent platform built by Foundry &amp; Loop to help users automate tasks, interact with intelligent agents, and get more done with AI.
                </p>
                <p>
                  Built with context preservation, adaptive reasoning, and strict security controls, Chameleon helps modern teams delegate repetitive operations to reliable software systems.
                </p>
                <div className="product-meta">
                  <span>
                    <strong>Category</strong> {chameleon.category}
                  </span>
                  <span>
                    <strong>Status</strong> {chameleon.status}
                  </span>
                  <span>
                    <strong>Publisher</strong> {site.name}
                  </span>
                </div>
                <Button href="/contact" variant="primary" arrow>
                  Request Early Access
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="product-principles">
          <Container>
            <SectionTitle eyebrow="Key Capabilities">
              Engineered for <span>autonomous workflows.</span>
            </SectionTitle>
            <div className="principles-grid">
              {chameleon.features.map((feature, idx) => (
                <div key={feature.title}>
                  <span>0{idx + 1}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="cta-section">
          <Container>
            <div className="cta-card">
              <div>
                <p className="eyebrow">Interested in Chameleon?</p>
                <h2>Start a conversation <span>with Foundry &amp; Loop.</span></h2>
              </div>
              <Button href="/contact">Get in touch</Button>
              <Sparkles className="cta-spark" size={110} strokeWidth={0.8} />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
