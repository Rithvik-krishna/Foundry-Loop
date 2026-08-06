import { Container } from "./Container";
import { Section } from "./Section";

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <Section className="page-header">
      <Container>
        <div className="page-header-grid">
          <p className="eyebrow">{eyebrow}</p>
          <div>
            <h1>{title}</h1>
            <p className="page-header-description">{description}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
