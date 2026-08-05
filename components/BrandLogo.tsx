import Link from "next/link";
import Image from "next/image";
import { site } from "../constants/content";

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className={`brand-logo ${dark ? "brand-logo-dark" : ""}`} aria-label={`${site.name} home`}>
      <Image
        className="brand-logo-image"
        src={dark ? "/logo-dark.png" : "/logo-light.png"}
        alt={site.name}
        width={390}
        height={dark ? 112 : 100}
        unoptimized
      />
    </Link>
  );
}
