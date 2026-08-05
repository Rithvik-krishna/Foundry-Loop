import type { ReactNode } from "react";

export function FeatureCard({ number, title, children, icon }: { number?: string; title: string; children: ReactNode; icon?: ReactNode }) {
  return <article className="feature-card">{icon ? <div className="feature-icon">{icon}</div> : number && <span className="feature-number">{number}</span>}<h3>{title}</h3><p>{children}</p></article>;
}
