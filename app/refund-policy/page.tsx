import type { Metadata } from "next";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { pageMeta } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: pageMeta.refund.title,
  description: pageMeta.refund.description,
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Legal"
          title="Cancellation & Refund Policy"
          description="Understand our terms for project cancellations, milestone terminations, and refund eligibility."
        />
        <Section className="legal-section">
          <Container>
            <div className="legal-copy">
              <p style={{ marginBottom: "32px", fontSize: "15px", color: "var(--ink-faint)" }}>
                Last Updated: August 16, 2026
              </p>

              <h2>1. Overview</h2>
              <p>
                Foundry & Loop (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to delivering professional-grade custom website development, Google visibility/SEO solutions, and software systems. Since our services are custom-designed, technical, and require significant engineering resource allocation, we maintain a clear and commercially reasonable Cancellation & Refund Policy to govern our client engagements.
              </p>
              <p>
                By signing a Statement of Work (SOW), accepting a project proposal, or paying any project invoice, you acknowledge and agree to the terms outlined in this Cancellation & Refund Policy.
              </p>

              <h2>2. Project/Service Cancellation</h2>
              <p>
                Clients may request the cancellation of custom development projects or recurring marketing services at any stage. To protect both parties, all cancellation requests must be submitted in writing via email to <a href="mailto:support@foundrynloop.in" style={{ color: "var(--blue)" }}>support@foundrynloop.in</a>. Oral cancellation requests or chat-based notifications will not be considered formal or binding.
              </p>

              <h2>3. Cancellation Before Work Begins</h2>
              <p>
                If a Client requests cancellation in writing before we have commenced any research, design, engineering, or development work, and before any physical project resources have been allocated, the Client is eligible for a full refund of any initial advance or deposit paid, minus a standard 5% administrative processing fee (to cover transaction costs and gateway charges).
              </p>

              <h2>4. Cancellation After Work Begins</h2>
              <p>
                Once project research, user flows, custom UI/UX design, or codebase construction has begun, our professional labor and resources have been committed. In the event of project cancellation after work has commenced, refund eligibility is structured as follows:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li><strong>Retained Progress Payments</strong>: Any fees paid for milestones that have already been signed off, approved, or completed are entirely non-refundable.</li>
                <li><strong>Active Milestone Calculations</strong>: For milestones currently in progress, we will evaluate the percentage of work completed up to the date of formal cancellation. The Client will be billed proportionally for the work completed, and any remaining balance of the active milestone deposit will be refunded.</li>
                <li><strong>Forfeiture of Initial Deposit</strong>: If the project is cancelled during the initial setup/design phase after significant work has been done, the initial setup deposit or advance payment may be retained to cover design hours and technical specifications.</li>
              </ul>

              <h2>5. Refund Eligibility</h2>
              <p>
                To maintain commercial fairness, refund eligibility relies on objective criteria. Refunds are generally only considered if:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li>We fail to deliver project milestones according to the technical requirements and timelines specified in the SOW, subject to reasonable extensions due to client delays.</li>
                <li>The Client cancels the project in writing in accordance with the cancellation timelines set forth in Section 3 and Section 4.</li>
                <li>A separate written agreement explicitly grants refund rights under specific conditions.</li>
              </ul>

              <h2>6. Non-Refundable Amounts</h2>
              <p>
                Certain costs are completely non-refundable once committed. These include:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li>Fees paid for search engine optimization (SEO) / Google visibility services that have already been executed for a specific month (as these depend on ongoing monthly labor and indexation efforts).</li>
                <li>Initial setups, domain purchases, or hosting server allocations made specifically on behalf of the Client.</li>
                <li>Amounts paid for custom software systems or modules that have already been integrated and delivered to the Client&apos;s environment.</li>
              </ul>

              <h2>7. Partial Refunds</h2>
              <p>
                If a project consists of multiple phases or milestones (e.g., Phase 1: UX Design, Phase 2: Frontend Development, Phase 3: CMS & Database Integration), and a cancellation occurs during Phase 2, the Client is entitled to receive all completed assets from Phase 1. The fees paid for Phase 1 are non-refundable, and a partial refund may be issued only for the uncommenced frontend development portion of Phase 2, subject to assessment of hours logged.
              </p>

              <h2>8. Digital Services</h2>
              <p>
                Our services constitute customized digital deliverables. Unlike physical goods, digital assets, code, databases, and structural designs cannot be physically &quot;returned.&quot; Once custom-developed code, web pages, or lead-generation systems are transferred, deployed, or published to a Client&apos;s live domain, server, or GitHub repository, the transaction is considered final, and the associated fees are entirely non-refundable.
              </p>

              <h2>9. Third-Party Costs</h2>
              <p>
                In constructing client solutions, we may recommend or purchase third-party products on your behalf (such as custom premium fonts, premium software plugins, database licenses, custom hosting nodes, or stock media). Any such third-party purchases, subscriptions, or licensing fees incurred on behalf of the Client are governed by those respective platforms&apos; refund policies and are non-refundable by Foundry & Loop.
              </p>

              <h2>10. Refund Processing</h2>
              <p>
                Once a refund request is reviewed and formally approved by our management team, the refund will be processed promptly:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li><strong>Method</strong>: Approved refunds will be returned through the original payment method (e.g., credit card, debit card, or direct bank transfer) where technically and legally possible.</li>
                <li><strong>Timeline</strong>: The refund transfer is initiated on our end within five (5) to seven (7) business days from the date of approval. Please note that depending on your bank, credit card issuer, or payment processor (such as Stripe), it may take an additional five (5) to ten (10) business days for the funds to reflect in your account statement.</li>
              </ul>

              <h2>11. How to Request a Cancellation or Refund</h2>
              <p>
                To file an official request for project cancellation or refund review, please follow these steps:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li>Send an email to <a href="mailto:support@foundrynloop.in" style={{ color: "var(--blue)" }}>support@foundrynloop.in</a> with the subject line &quot;Cancellation & Refund Request - [Your Business Name]&quot;.</li>
                <li>In the email, please state your invoice number, the date of purchase, the active SOW title, and a detailed description of the reason for cancellation or refund.</li>
                <li>Our operations team will review your request, cross-reference logged engineering hours and completed deliverables, and respond with an official status update within three (3) business days.</li>
              </ul>

              <h2>12. Exceptions</h2>
              <p>
                We strive to treat every business client with maximum flexibility and understanding. In exceptional circumstances, such as severe business hardships or project halts due to force majeure events, Foundry & Loop management may, in its sole discretion, offer partial project credits or alternative settlement arrangements, even if not strictly required under this policy.
              </p>

              <h2>13. Contact Information</h2>
              <p>
                If you have any questions, clarifications, or concerns regarding our Cancellation & Refund Policy, please contact us:
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
