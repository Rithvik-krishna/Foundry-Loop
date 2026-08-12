import { faqItems, site } from "../constants/content";

export function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ display: "grid", gap: "24px", maxWidth: "800px", marginTop: "36px" }}>
        {faqItems.map((item, index) => (
          <div
            key={item.question}
            style={{
              border: "1px solid var(--line)",
              borderRadius: "16px",
              padding: "28px",
              background: "var(--surface)",
            }}
          >
            <h3 style={{ fontSize: "19px", fontWeight: 500, margin: "0 0 12px", color: "var(--ink)" }}>
              {item.question}
            </h3>
            <p style={{ fontSize: "15px", color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 }}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
