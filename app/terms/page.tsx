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
          title="Terms of Service"
          description="Please read these terms carefully before engaging with our website or services."
        />
        <Section className="legal-section">
          <Container>
            <div className="legal-copy">
              <p style={{ marginBottom: "32px", fontSize: "15px", color: "var(--ink-faint)" }}>
                Last Updated: August 16, 2026
              </p>

              <h2>1. Introduction</h2>
              <p>
                Welcome to Foundry & Loop (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website (https://foundrynloop.in/), and any services, software, tools, and digital solutions provided by us, including but not limited to website development, search engine optimization (SEO) / Google visibility solutions, and lead-generation systems (collectively, the &quot;Services&quot;).
              </p>
              <p>
                By accessing our website or engaging us for any Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you must immediately discontinue your use of our website and Services.
              </p>

              <h2>2. Definitions</h2>
              <p>
                To provide clarity, the following terms shall have the meanings set forth below:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li><strong>&quot;Client&quot;, &quot;You&quot;, or &quot;Your&quot;</strong>: Any business entity, company, or individual that accesses our website, uses our services, or enters into a service engagement with Foundry & Loop.</li>
                <li><strong>&quot;Deliverables&quot;</strong>: The specific website designs, development code, lead systems, SEO optimization structures, software products, or reports produced by us for the Client as part of a Service Engagement.</li>
                <li><strong>&quot;Service Engagement&quot;</strong>: Any agreement, statement of work, custom proposal, invoice, or project order under which we agree to perform Services for you.</li>
              </ul>

              <h2>3. Services</h2>
              <p>
                Foundry & Loop is an independent technology company that designs, develops, and builds software systems, custom websites, Google visibility/SEO solutions, and custom lead-generation frameworks. The precise scope, requirements, and deliverables of any Services will be defined on an individual basis in a separate project agreement, written proposal, statement of work (SOW), or invoice shared with the Client.
              </p>

              <h2>4. Eligibility</h2>
              <p>
                To use our website or engage our Services, you must be at least 18 years of age and possess the legal authority to enter into a binding agreement. If you are accepting these Terms on behalf of a company, partnership, or other business entity, you represent and warrant that you have the authority to bind such entity to these Terms.
              </p>

              <h2>5. Service Engagements</h2>
              <p>
                A formal Service Engagement is established when you accept a project proposal in writing, sign a Statement of Work, or make an initial payment (advance or deposit) against an invoice issued by Foundry & Loop. Each Service Engagement shall incorporate these Terms of Service by reference unless explicitly agreed otherwise in writing.
              </p>

              <h2>6. Project Scope and Deliverables</h2>
              <p>
                The exact scope, specifications, design requirements, and delivery items will be detailed in the applicable project agreement or statement of work. Any requests for additional modifications, features, pages, or campaigns that fall outside the initially agreed-upon scope will be treated as a project change and may result in supplementary charges.
              </p>

              <h2>7. Pricing and Payments</h2>
              <p>
                All pricing is project-specific and will be detailed in the project proposal, agreement, or invoice. Depending on the nature of the Services, billing may be structured as flat project-based fees, phased milestone payments, or recurring subscription fees. Unless otherwise agreed in writing, taxes and applicable third-party hosting, domain, software license, or subscription fees are not included in our primary service fees and remain the Client&apos;s responsibility.
              </p>

              <h2>8. Invoices and Payment Processing</h2>
              <p>
                Foundry & Loop issues invoices electronically. Payment terms (e.g., net-15, payment upon milestone completion, or immediate advance) will be clearly indicated on each invoice. Online payments may be processed through secure, third-party payment gateways such as Stripe. 
              </p>
              <p>
                Foundry & Loop does not store, collect, or retain your full credit/debit card numbers, CVVs, or other sensitive payment credentials on our own servers. All payment card details and transaction information are processed directly by our third-party payment processor in accordance with their respective security standards, privacy policies, and terms.
              </p>

              <h2>9. Customer Responsibilities</h2>
              <p>
                The successful execution of website development, SEO campaigns, or lead system implementation depends heavily on active client cooperation. You agree to:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li>Provide accurate, complete, and timely business details, design inputs, images, brand assets, and written copy.</li>
                <li>Deliver timely feedback and approvals during key project milestones.</li>
                <li>Designate a primary contact person authorized to make final design and technical decisions on behalf of your business.</li>
              </ul>
              <p>
                We are not responsible for any delays, cost overruns, or failure of performance resulting from your failure to provide necessary assets or approvals.
              </p>

              <h2>10. Project Changes and Additional Work</h2>
              <p>
                We understand that requirements can evolve. Any change in project scope, major layout re-designs, or functional additions after a milestone is approved will be evaluated and charged at our standard hourly rates or as a separate flat-rate change order. We will always obtain your written approval before commencing any out-of-scope work.
              </p>

              <h2>11. Delivery Timelines</h2>
              <p>
                We make commercially reasonable efforts to meet project timelines outlined in our SOWs or proposals. However, all timelines are target estimates and do not represent strict legal guarantees. Timelines may be extended due to delayed client inputs, revisions, third-party software updates, or other factors outside of our reasonable control.
              </p>

              <h2>12. Intellectual Property</h2>
              <p>
                Our IP structure is designed to be fair, standard, and protective of both parties:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li><strong>Customer Materials</strong>: Any logos, text, graphics, images, or trademarks you provide to us for inclusion in your website or deliverables remain your sole property. You warrant that you own or have obtained all necessary licenses to use these materials.</li>
                <li><strong>Custom Deliverables</strong>: Upon completion of the project and receipt of full payment of all outstanding invoices, ownership and intellectual property rights of the specific custom code, web design layout, or deliverables created exclusively for you will be transferred or licensed to you as specified in our project agreement.</li>
                <li><strong>Pre-existing Materials & Reusable Components</strong>: Foundry & Loop retains all right, title, and interest in and to our pre-existing tools, software components, frameworks, baseline code libraries, reusable design components, methodologies, know-how, and proprietary technology. You are granted a non-exclusive, non-transferable, perpetual license to use these embedded components solely within the final delivered website or product.</li>
              </ul>

              <h2>13. Website Content and Customer Materials</h2>
              <p>
                We reserve the right to reject or refuse to work with any client materials or content that we deem to be illegal, defamatory, obscene, misleading, or in violation of any third-party intellectual property or privacy rights.
              </p>

              <h2>14. Third-Party Services</h2>
              <p>
                We may integrate third-party services, APIs, hosting providers, plugins, or software platforms (such as Google Analytics, Stripe, AWS, or domain registrars) into your website or systems. These third-party services are governed by their own terms and conditions. Foundry & Loop makes no warranties and accepts no responsibility or liability for the uptime, security, performance, or modifications of these third-party platforms.
              </p>

              <h2>15. Confidentiality</h2>
              <p>
                During our engagement, both parties may share proprietary or confidential business information. We agree to hold all such information in strict confidence and to not disclose it to any third party without your prior written consent, except to our authorized employees, subcontractors, or advisors who need to know the information to execute the Services.
              </p>

              <h2>16. Warranties and Disclaimers</h2>
              <p>
                Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. Foundry & Loop makes no express or implied warranties of any kind regarding our Services, custom websites, or lead systems. To the maximum extent permitted by applicable Indian law, we disclaim all warranties, including but not limited to:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li>That the services will be completely error-free or uninterrupted.</li>
                <li>That the website will rank at a specific position on search engines (SEO results depend heavily on search engine algorithms and external market competition).</li>
                <li>That lead-generation systems will generate a guaranteed number of leads or sales conversions.</li>
              </ul>

              <h2>17. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable Indian law, in no event shall Foundry & Loop, its founders, directors, employees, or contractors be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, goodwill, or business interruption, arising out of or in connection with our website, Services, or deliverables.
              </p>
              <p>
                Our total cumulative liability to you for any claim arising out of these Terms or any Service Engagement shall be strictly limited to the actual amount paid by you to Foundry & Loop under the specific project agreement or Statement of Work that gave rise to the liability.
              </p>

              <h2>18. Suspension and Termination</h2>
              <p>
                We reserve the right to suspend or terminate our performance of Services or restrict your access to our systems in the event of:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "16px 0", display: "grid", gap: "10px", color: "var(--ink-soft)" }}>
                <li>Non-payment or significantly delayed payment of undisputed invoices.</li>
                <li>A material breach of these Terms of Service or project agreement that is not cured within ten (10) business days of written notice.</li>
                <li>Failure to cooperate or provide necessary assets for a period exceeding thirty (30) calendar days.</li>
              </ul>

              <h2>19. Cancellation and Refunds</h2>
              <p>
                Project cancellation, milestone termination, and refund eligibility are subject to the detailed terms set forth in our dedicated <a href="/refund-policy" style={{ color: "var(--blue)", textDecoration: "underline" }}>Cancellation & Refund Policy</a>, which is incorporated into these Terms by reference.
              </p>

              <h2>20. Dispute Resolution</h2>
              <p>
                In the event of any misunderstanding, disagreement, or dispute arising out of these Terms or our Services, both parties agree to first make a good-faith effort to resolve the matter amicably through direct, informal discussions.
              </p>

              <h2>21. Governing Law</h2>
              <p>
                These Terms of Service and any separate agreements for Services shall be governed by, interpreted, and construed in accordance with the laws of India. Any legal action, suit, or proceeding arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts of law in India.
              </p>

              <h2>22. Changes to These Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. When we make updates, we will revise the &quot;Last Updated&quot; date at the top of this page. Your continued use of our website or Services after any changes are published constitutes your acceptance of the updated Terms.
              </p>

              <h2>23. Contact Information</h2>
              <p>
                If you have any questions, clarifications, or concerns regarding these Terms of Service, please contact us:
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
