import type { Metadata } from "next";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { pageMeta } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: pageMeta.privacy.title,
  description: pageMeta.privacy.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Legal"
          title="Privacy Policy"
          description="A short overview of how we handle information at Foundry & Loop."
        />
        <Section className="legal-section">
          <Container>
            <div className="legal-copy">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you choose to share directly with us, such as when you send an email or submit a contact inquiry regarding our software products or services.
              </p>
              <h2>2. How We Use Information</h2>
              <p>
                We use information strictly to respond to your inquiries, improve our software products, and communicate relevant updates about Foundry & Loop.
              </p>
              <h2>3. Data Protection</h2>
              <p>
                We employ industry-standard administrative, physical, and technical safeguards to preserve the integrity and security of your personal information.
              </p>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
