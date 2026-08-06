import Link from "next/link";
import Image from "next/image";
import { site } from "../constants/content";

const hasImageBinding = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "true";

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className={`brand-logo ${dark ? "brand-logo-dark" : ""}`} aria-label={`${site.name} home`}>
      <Image
        className="brand-logo-image brand-logo-image-light"
        src="/logo-light.png"
        alt=""
        aria-hidden="true"
        width={390}
        height={100}
        sizes="165px"
        unoptimized={!hasImageBinding}
      />
      <Image
        className="brand-logo-image brand-logo-image-dark"
        src="/logo-dark.png"
        alt=""
        aria-hidden="true"
        width={390}
        height={112}
        sizes="165px"
        unoptimized={!hasImageBinding}
      />
    </Link>
  );
}
