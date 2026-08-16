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
          description="Your privacy is important to us. Learn how we collect, use, and protect your information."
        />
        <Section className="legal-section">
          <Container>
            <div className="legal-copy">
              <p style={{ marginBottom: "32px", fontSize: "15px", color: "var(--ink-faint)" }}>
                Last Updated: August 16, 2026
              </p>

              <h2>1. Introduction</h2>
              <p>
                Foundry & Loop (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy of our website visitors, customers, and partners. This Privacy Policy outlines our practices regarding the collection, use, sharing, storage, and protection of your personal information when you visit our website (https://foundrynloop.in/) or engage us for our services, including website development, Google visibility/SEO solutions, and lead-generation systems (the &quot;Services&quot;).
              </p>
              <p>
                By accessing our website or utilizing our Services, you consent to the information practices described in this policy. If you do not agree with any terms of this Privacy Policy, please discontinue your use of our website and Services immediately.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We may collect several types of information from and about users of our website and Services, depending on how you interact with us. This includes personal information by which you may be personally identified, as well as general, non-identifying technical data.
              </p>

              <h2>3. Information You Provide</h2>
              <p>
                You may choose to share personal information directly with us when you fill out contact forms on our website, send us emails, request custom project quotes, subscribe to our newsletter, or engage in a business relationship with us. This information may include:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li><strong>Contact Details</strong>: Name, professional email address, telephone/mobile number, and mailing address.</li>
                <li><strong>Business Information</strong>: Company/organization name, job title, industry, website URL, and business requirements.</li>
                <li><strong>Project Assets & Scope Details</strong>: Communication content submitted through contact forms, emails, project briefs, and design requirements.</li>
                <li><strong>Billing Details</strong>: Billing address, organization tax identification details (such as GSTIN in India), and business representative names.</li>
              </ul>

              <h2>4. Automatically Collected Information</h2>
              <p>
                Like most modern websites, we automatically collect certain technical information when you navigate through and interact with our website. This automatically collected data helps us analyze website traffic and improve usability, and may include:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li><strong>Device Information</strong>: IP address, operating system, browser type, browser version, and device hardware type.</li>
                <li><strong>Usage Details</strong>: Pages visited, date and time of access, time spent on specific pages, clickstream data, referring website addresses, and internal navigation paths.</li>
              </ul>

              <h2>5. Cookies and Similar Technologies</h2>
              <p>
                We and our service providers may use cookies, web beacons, and similar tracking technologies to store your preferences, analyze website trends, and enhance your browsing experience. Cookies are small data files stored on your device. You can configure your browser settings to refuse some or all cookies, or to alert you when cookies are being sent. However, please note that disabling certain cookies may limit your ability to use some features of our website.
              </p>

              <h2>6. How We Use Information</h2>
              <p>
                We use the information we collect for professional business purposes, including:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li><strong>Providing and Managing Services</strong>: To develop custom websites, execute search engine optimization campaigns, configure and monitor lead-generation systems, and deliver client reporting.</li>
                <li><strong>Customer Support & Relations</strong>: To respond to your questions, process project inquiries, provide quotes, send product updates, and manage ongoing project communication.</li>
                <li><strong>Billing & Payment Processing</strong>: To issue invoices, verify client identities, process project milestone payments, and track outstanding balances.</li>
                <li><strong>Website Performance Optimization</strong>: To conduct website analytics, diagnose server performance, prevent security incidents, and optimize site accessibility.</li>
                <li><strong>Legal & Fraud Prevention</strong>: To detect and prevent unauthorized activities, protect our intellectual property, enforce our Terms of Service, and comply with legal or regulatory obligations.</li>
              </ul>

              <h2>7. How We Share Information</h2>
              <p>
                Foundry & Loop respects your privacy and does not sell, rent, or lease your personal information to third parties. We may disclose personal information strictly to trusted business partners, service providers, or regulatory authorities for specific operational or legal purposes.
              </p>

              <h2>8. Payment Information</h2>
              <p>
                When you pay for our website development, SEO services, or lead systems through online payment links on our site, your transaction is processed securely. Foundry & Loop does not store, process, or transmit full payment card numbers, CVVs, or other sensitive payment credentials on our own infrastructure.
              </p>

              <h2>9. Payment Processor / Stripe</h2>
              <p>
                We use trusted third-party payment processors, such as Stripe, to securely process online credit card, debit card, and bank transfer payments on our behalf. All payment information is collected and processed directly by our payment gateway providers under their own respective privacy policies and terms of service. These processors maintain high standards of encryption and industry-standard security (including PCI-DSS compliance) to safeguard your financial details.
              </p>

              <h2>10. Service Providers</h2>
              <p>
                We may share your information with trusted third-party vendor platforms that perform technical operations on our behalf. These service providers are contractually obligated to use your information only as necessary to provide these services to us, and include:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li>Web hosting and infrastructure providers (such as Cloudflare or AWS).</li>
                <li>Email service providers and customer communication platforms.</li>
                <li>Project management, documentation, and reporting tools.</li>
              </ul>

              <h2>11. Analytics and Website Technologies</h2>
              <p>
                We utilize web analytics tools (such as Google Analytics or Microsoft Clarity) to track and analyze website usage patterns. These platforms collect anonymous usage data to generate reports on website visitors, device statistics, and page performance. This helps us optimize user interface flows and improve our digital offerings.
              </p>

              <h2>12. Data Retention</h2>
              <p>
                We retain your personal information only for as long as is necessary to fulfill the purposes for which it was collected, including:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li>Maintaining ongoing project communication and active Client accounts.</li>
                <li>Complying with mandatory accounting, reporting, tax, and legal obligations in India.</li>
                <li>Resolving disputes and enforcing our corporate agreements.</li>
              </ul>
              <p>
                When personal data is no longer required, we securely delete or anonymize it in accordance with industry best practices.
              </p>

              <h2>13. Data Security</h2>
              <p>
                We employ reasonable administrative, technical, and organizational security measures (including SSL/TLS data encryption in transit, server access firewalls, and restricted employee access protocols) to safeguard your personal information against unauthorized access, loss, misuse, or alteration.
              </p>
              <p>
                However, please be aware that no method of transmission over the internet or system of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal details, we cannot guarantee absolute data security.
              </p>

              <h2>14. International Data Transfers</h2>
              <p>
                Because our infrastructure relies on cloud servers and service providers that may operate globally, your information may be transferred to and stored on computers located outside of your state or country. By using our website or Services, you consent to the transfer of your information to systems located outside your jurisdiction, where data protection standards may differ.
              </p>

              <h2>15. Your Rights</h2>
              <p>
                Under applicable Indian laws and regulations (including the Information Technology Act and rules thereunder), you have certain rights regarding your personal data. These include:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li><strong>Access and Correction</strong>: The right to review, update, or correct any incomplete or inaccurate personal data we hold about you.</li>
                <li><strong>Consent Withdrawal</strong>: The right to withdraw your consent to our processing of your personal information at any time, subject to legal or contractual restrictions and reasonable notice.</li>
                <li><strong>Erasure</strong>: The right to request that we delete your personal information from our active records, provided it is no longer required for active contract execution, tax reporting, or regulatory compliance.</li>
              </ul>
              <p>
                To exercise any of these rights, please submit a written request to us using the contact information below. We will verify your identity before processing any data access or modification requests.
              </p>

              <h2>16. Children&apos;s Privacy</h2>
              <p>
                Our website and Services are intended strictly for adult business professionals and are not designed or marketed for children under the age of 18. We do not knowingly collect personal information from individuals under 18 years of age. If we discover that a child has provided us with personal information, we will immediately take steps to purge that data from our systems.
              </p>

              <h2>17. Third-Party Links</h2>
              <p>
                Our website may contain links to external web resources, blogs, social networks, or service partner platforms. This Privacy Policy applies solely to information collected by Foundry & Loop. We are not responsible for the privacy practices, content, or security of any third-party websites, and we encourage you to read their respective privacy statements before sharing personal information.
              </p>

              <h2>18. Changes to This Privacy Policy</h2>
              <p>
                We reserve the right to revise or update this Privacy Policy periodically to reflect changes in our Services, operational processes, or regulatory requirements. When we update this policy, we will revise the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this Privacy Policy regularly to stay informed about how we safeguard your information.
              </p>

              <h2>19. Contact Us</h2>
              <p>
                If you have any questions, clarifications, feedback, or complaints regarding this Privacy Policy or our information practices, please reach out to us at:
              </p>
              <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "14px", padding: "24px", marginTop: "18px", display: "grid", gap: "12px", fontSize: "15px" }}>
                <div>
                  <strong style={{ color: "var(--ink)" }}>Email:</strong>{" "}
                  <a href="mailto:support@foundrynloop.in" style={{ color: "var(--blue)" }}>support@foundrynloop.in</a>
                </div>
                <div>
                  <strong style={{ color: "var(--ink)" }}>Registered Office:</strong>{" "}
                  <span style={{ color: "var(--ink-soft)" }}>Bangalore, Karnataka, India</span>
                </div>
              </div>

              <div style={{ marginTop: "64px", borderTop: "1px dashed var(--line)", paddingTop: "20px" }}>
                <p style={{ fontSize: "12px", color: "var(--ink-faint)", fontStyle: "italic", margin: 0, lineHeight: 1.5 }}>
                  These policies are provided for general business use and should be reviewed and finalized based on the company&apos;s legal structure, services, contracts, and applicable laws.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
