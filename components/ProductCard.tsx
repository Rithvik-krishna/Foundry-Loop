import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { chameleon } from "../constants/content";

export function ProductCard({ featured = false }: { featured?: boolean }) {
  return (
    <Link href={chameleon.action.href} className={`product-card ${featured ? "product-card-featured" : ""}`}>
      <div className="product-card-copy">
        <span className="product-kicker">
          <Sparkles size={14} /> {chameleon.eyebrow}
        </span>
        <h3>{chameleon.name}</h3>
        <p>{chameleon.description}</p>
        <span className="text-link">
          {chameleon.action.label} <ArrowUpRight size={16} />
        </span>
      </div>
      <div className="product-card-art" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#0b0f1c", borderRadius: "16px", padding: "40px" }}>
        <Image
          src="/images/chameleon-logo-transparent.png"
          alt="Chameleon Logo"
          width={220}
          height={220}
          style={{ objectFit: "contain", filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))" }}
          unoptimized
        />
      </div>
    </Link>
  );
}
