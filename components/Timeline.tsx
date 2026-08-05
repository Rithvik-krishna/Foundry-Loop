export function Timeline({ items }: { items: Array<{ step: string; title: string; text: string }> }) {
  return <div className="timeline">{items.map((item, index) => <div className="timeline-item" key={item.step}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-copy"><span className="eyebrow">{item.step}</span><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div>;
}
