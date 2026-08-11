import Link from "next/link";
import Image from "next/image";
import { site } from "../constants/content";

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className={`brand-logo ${dark ? "brand-logo-dark" : ""}`} aria-label={`${site.name} home`}>
      <Image
        className="brand-logo-image brand-logo-image-light"
        src="/logo-light.svg"
        alt={site.name}
        width={205}
        height={45}
        priority
      />
      <Image
        className="brand-logo-image brand-logo-image-dark"
        src="/logo-dark.svg"
        alt={site.name}
        width={205}
        height={45}
        priority
      />
    </Link>
  );
}
