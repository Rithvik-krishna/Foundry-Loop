import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { AnimatedSection } from "../../components/AnimatedSection";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle";
import { chameleon, pageMeta, pagesContent } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: pageMeta.products.title,
  description: pageMeta.products.description,
  path: "/products",
});

export default function ProductsPage() {
  const content = pagesContent.products;
  return (
    <>
      <Navbar />
      <main>
        <PageHeader {...content.header} />
        <Section className="product-detail-section">
          <Container>
            <AnimatedSection>
              <div
                className="product-detail-visual"
                style={{
                  background: "#0b0f1c",
                  borderRadius: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "60px 20px",
                  minHeight: "360px",
                  position: "relative",
                  border: "1px solid var(--line)",
                }}
              >
                <Image
                  src="/images/chameleon-logo-transparent.png"
                  alt="Chameleon Official Logo"
                  width={260}
                  height={260}
                  priority
                  unoptimized
                  style={{
                    objectFit: "contain",
                    filter: "drop-shadow(0 0 35px rgba(34, 197, 94, 0.35))",
                  }}
                />
                <div className="product-detail-stamp">
                  <Sparkles size={18} />
                  <span>{chameleon.eyebrow}</span>
                </div>
              </div>
            </AnimatedSection>
            <div className="product-detail-grid">
              <div>
                <p className="eyebrow">Current product</p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <Image
                    src="/images/chameleon-logo-transparent.png"
                    alt="Chameleon Logo Icon"
                    width={48}
                    height={48}
                    style={{ objectFit: "contain" }}
                    unoptimized
                  />
                  <h2 style={{ margin: 0, fontSize: "clamp(36px, 5vw, 54px)" }}>
                    <Link href="/products/chameleon" style={{ textDecoration: "none", color: "var(--ink)" }}>
                      {chameleon.name}
                    </Link>
                  </h2>
                </div>
                <p className="product-detail-lead">{chameleon.description}</p>
              </div>
              <div className="product-detail-copy">
                <p>
                  Chameleon is a secure, low-latency remote access platform that lets you connect to and control your computer from virtually anywhere. Built around encrypted peer-to-peer WebRTC connectivity and QR-based pairing, Chameleon removes the complexity of traditional remote desktop tools.
                </p>
                <div className="product-meta">
                  <span>
                    <strong>Category</strong> {chameleon.category}
                  </span>
                  <span>
                    <strong>Status</strong> {chameleon.status}
                  </span>
                </div>
                <Button href="/products/chameleon" variant="primary" arrow>
                  Explore Chameleon
                </Button>
              </div>
            </div>
          </Container>
        </Section>
        <Section className="coming-section">
          <Container>
            <div className="coming-grid">
              <SectionTitle eyebrow={content.coming.eyebrow}>
                {content.coming.title}
                <br />
                <span>{content.coming.emphasis}</span>
              </SectionTitle>
              <div>
                <p>{content.coming.description}</p>
                <a className="text-link" href="mailto:contact@foundrynloop.in">
                  Talk to us about the future <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </Container>
        </Section>
        <Section className="product-principles">
          <Container>
            <SectionTitle eyebrow="What we look for">
              A product worth building
              <br />
              <span>earns its place.</span>
            </SectionTitle>
            <div className="principles-grid">
              {content.principles.map((principle) => (
                <div key={principle.number}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
