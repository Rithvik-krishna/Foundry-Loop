export function StatsCard({ value, label, detail }: { value: string; label: string; detail?: string }) {
  return <div className="stats-card"><strong>{value}</strong><span>{label}</span>{detail && <small>{detail}</small>}</div>;
}
