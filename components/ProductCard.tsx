import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { chameleon } from "../constants/content";
import { MediaImage } from "./MediaImage";

export function ProductCard({ featured = false }: { featured?: boolean }) {
  return <Link href={chameleon.action.href} className={`product-card ${featured ? "product-card-featured" : ""}`}>
    <div className="product-card-copy"><span className="product-kicker"><Sparkles size={14} /> {chameleon.eyebrow}</span><h3>{chameleon.name}</h3><p>{chameleon.description}</p><span className="text-link">{chameleon.action.label} <ArrowUpRight size={16} /></span></div>
    <div className="product-card-art"><MediaImage {...chameleon.image} sizes="(max-width: 800px) 100vw, 50vw" /></div>
  </Link>;
}
