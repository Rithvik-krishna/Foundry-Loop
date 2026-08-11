import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "../../components/ContactForm";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { pageMeta, site } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Contact Foundry & Loop"
          description="Get in touch with Foundry & Loop about our products, partnerships, careers, business opportunities, or other inquiries."
        />
        <Section className="contact-section">
          <Container>
            <div className="contact-grid">
              <div className="contact-details">
                <h2>
                  Good things
                  <br />
                  <span>start with a note.</span>
                </h2>
                <div className="contact-item">
                  <Mail size={20} />
                  <div>
                    <span className="label">Email</span>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin size={20} />
                  <div>
                    <span className="label">Location</span>
                    <p>{site.location}</p>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
