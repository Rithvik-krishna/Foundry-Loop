import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Building2, Globe, ExternalLink, Shield, Cpu, Layers } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle";
import { FaqSection } from "../../components/FaqSection";
import { chameleon, pageMeta, pagesContent, site } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: pageMeta.company.title,
  description: pageMeta.company.description,
  path: "/company",
});

export default function CompanyPage() {
  const content = pagesContent.company;

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Foundry & Loop"
          title="Foundry & Loop | Company"
          description={content.overview}
        />

        {/* Company Overview & Focus */}
        <Section className="intro-section" style={{ borderTop: "1px solid var(--line)" }}>
          <Container>
            <div style={{ maxWidth: "820px" }}>
              <p className="eyebrow" style={{ color: "var(--blue)", marginBottom: "12px" }}>Overview</p>
              <h2 style={{ fontSize: "clamp(30px, 4.5vw, 48px)", fontWeight: 450, letterSpacing: "-0.05em", lineHeight: 1.1, marginBottom: "24px" }}>
                Independent software <span>crafted with purpose.</span>
              </h2>
              <p style={{ fontSize: "18px", color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: "20px" }}>
                Foundry &amp; Loop is an independent technology company building software and SaaS products designed to solve real-world problems.
              </p>
              <p style={{ fontSize: "17px", color: "var(--ink-soft)", lineHeight: 1.6 }}>
                {content.buildText}
              </p>
            </div>
          </Container>
        </Section>

        {/* Our Products: Chameleon */}
        <Section style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <Container>
            <SectionTitle eyebrow="Our Products">
              Products developed and operated <span>by Foundry &amp; Loop.</span>
            </SectionTitle>

            <div style={{ border: "1px solid var(--line)", borderRadius: "20px", padding: "36px", background: "var(--background)", marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <Image
                    src="/images/chameleon-logo-transparent.png"
                    alt="Chameleon Logo"
                    width={42}
                    height={48}
                    style={{ objectFit: "contain" }}
                    unoptimized
                  />
                  <h3 style={{ fontSize: "28px", margin: 0 }}>Chameleon</h3>
                </div>
                <p style={{ fontSize: "16px", color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: "20px" }}>
                  {content.chameleonText}
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <a
                    href={chameleon.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ textDecoration: "none" }}
                  >
                    Visit Chameleon Website <ExternalLink size={15} />
                  </a>
                  <Link href="/products/chameleon" className="btn btn-secondary" style={{ textDecoration: "none" }}>
                    Learn More
                  </Link>
                </div>
              </div>

              <div style={{ padding: "28px", background: "var(--surface)", borderRadius: "16px", border: "1px solid var(--line)" }}>
                <span className="eyebrow" style={{ color: "var(--blue)" }}>Entity Relationship</span>
                <p style={{ fontSize: "15px", fontWeight: 500, margin: "12px 0 8px" }}>
                  Chameleon is a product developed and operated by Foundry &amp; Loop.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "14px", color: "var(--ink-soft)", display: "grid", gap: "8px" }}>
                  <li>• Official Product: Chameleon</li>
                  <li>• Category: Secure Remote Access &amp; Remote Desktop</li>
                  <li>• Domain: <a href={chameleon.externalUrl} target="_blank" rel="noreferrer" style={{ color: "var(--blue)" }}>www.chameleon-agent.online</a></li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Company Facts Section */}
        <Section>
          <Container>
            <SectionTitle eyebrow="Factual Summary">
              Company <span>facts.</span>
            </SectionTitle>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginTop: "36px" }}>
              <div style={{ border: "1px solid var(--line)", padding: "24px", borderRadius: "14px", background: "var(--surface)" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--ink-faint)", textTransform: "uppercase" }}>Company Name</span>
                <p style={{ fontSize: "18px", fontWeight: 500, margin: "8px 0 0", color: "var(--ink)" }}>{site.name}</p>
              </div>
              <div style={{ border: "1px solid var(--line)", padding: "24px", borderRadius: "14px", background: "var(--surface)" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--ink-faint)", textTransform: "uppercase" }}>Entity Type</span>
                <p style={{ fontSize: "18px", fontWeight: 500, margin: "8px 0 0", color: "var(--ink)" }}>Independent Technology Company</p>
              </div>
              <div style={{ border: "1px solid var(--line)", padding: "24px", borderRadius: "14px", background: "var(--surface)" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--ink-faint)", textTransform: "uppercase" }}>Focus</span>
                <p style={{ fontSize: "18px", fontWeight: 500, margin: "8px 0 0", color: "var(--ink)" }}>Software and SaaS products</p>
              </div>
              <div style={{ border: "1px solid var(--line)", padding: "24px", borderRadius: "14px", background: "var(--surface)" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--ink-faint)", textTransform: "uppercase" }}>Official Website</span>
                <p style={{ fontSize: "18px", fontWeight: 500, margin: "8px 0 0" }}>
                  <a href={`${site.url}/`} style={{ color: "var(--blue)" }}>{site.url}/</a>
                </p>
              </div>
              <div style={{ border: "1px solid var(--line)", padding: "24px", borderRadius: "14px", background: "var(--surface)" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--ink-faint)", textTransform: "uppercase" }}>Official Product</span>
                <p style={{ fontSize: "18px", fontWeight: 500, margin: "8px 0 0", color: "var(--ink)" }}>Chameleon</p>
              </div>
              <div style={{ border: "1px solid var(--line)", padding: "24px", borderRadius: "14px", background: "var(--surface)" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--ink-faint)", textTransform: "uppercase" }}>Chameleon Website</span>
                <p style={{ fontSize: "18px", fontWeight: 500, margin: "8px 0 0" }}>
                  <a href={chameleon.externalUrl} target="_blank" rel="noreferrer" style={{ color: "var(--blue)" }}>chameleon-agent.online</a>
                </p>
              </div>
              <div style={{ border: "1px solid var(--line)", padding: "24px", borderRadius: "14px", background: "var(--surface)" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--ink-faint)", textTransform: "uppercase" }}>Tagline</span>
                <p style={{ fontSize: "18px", fontWeight: 500, margin: "8px 0 0", color: "var(--ink)" }}>{site.tagline}</p>
              </div>
              <div style={{ border: "1px solid var(--line)", padding: "24px", borderRadius: "14px", background: "var(--surface)" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--ink-faint)", textTransform: "uppercase" }}>Official Profiles</span>
                <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                  <a href={site.socials.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--blue)", fontSize: "14px" }}>LinkedIn ↗</a>
                  <a href={site.socials.github} target="_blank" rel="noreferrer" style={{ color: "var(--blue)", fontSize: "14px" }}>GitHub ↗</a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section style={{ background: "var(--surface)", borderTop: "1px solid var(--line)" }}>
          <Container>
            <SectionTitle eyebrow="Frequently Asked Questions">
              Company &amp; product <span>clarity.</span>
            </SectionTitle>
            <FaqSection />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
