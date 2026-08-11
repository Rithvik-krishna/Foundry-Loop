import type { Metadata } from "next";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { pageMeta } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: pageMeta.terms.title,
  description: pageMeta.terms.description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Legal"
          title="Terms of Use"
          description="The rules for spending time with Foundry & Loop online."
        />
        <Section className="legal-section">
          <Container>
            <div className="legal-copy">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website or products provided by Foundry & Loop, you agree to be bound by these Terms of Use and all applicable laws and regulations.
              </p>
              <h2>2. Intellectual Property</h2>
              <p>
                All content, product names, logos, software designs, and trademarks displayed on this site are the property of Foundry & Loop.
              </p>
              <h2>3. Disclaimer</h2>
              <p>
                The software and information on this website are provided &quot;as is&quot; without warranties of any kind, express or implied.
              </p>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
