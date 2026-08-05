import type { ReactNode } from "react";

export function SectionTitle({ eyebrow, children, description, align = "left" }: { eyebrow?: string; children: ReactNode; description?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={`section-title section-title-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{children}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
