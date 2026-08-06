import type { ReactNode } from "react";

export function ValueCard({ number, title, children, accent }: { number: string; title: string; children: ReactNode; accent: string }) {
  return <article className="value-card"><span className={`value-accent ${accent}`} /><span className="value-number">{number}</span><h3>{title}</h3><p>{children}</p></article>;
}
