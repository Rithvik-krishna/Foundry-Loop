import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function ProductCard({ featured = false }: { featured?: boolean }) {
  return <Link href="/products" className={`product-card ${featured ? "product-card-featured" : ""}`}>
    <div className="product-card-copy"><span className="product-kicker"><Sparkles size={14} /> Product / 01</span><h3>Chameleon</h3><p>AI-powered conversational experiences for modern businesses.</p><span className="text-link">Explore Chameleon <ArrowUpRight size={16} /></span></div>
    <div className="product-card-art"><img className="cover-image" src="/images/technology.jpg" alt="Close-up of a circuit board representing Chameleon's intelligence" /></div>
  </Link>;
}
