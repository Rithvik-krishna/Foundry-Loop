import Link from "next/link";

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className={`brand-logo ${dark ? "brand-logo-dark" : ""}`} aria-label="Foundry & Loop home">
      <img
        className="brand-logo-image"
        src={dark ? "/logo-dark.png" : "/logo-light.png"}
        alt="Foundry & Loop"
        width={390}
        height={dark ? 112 : 100}
      />
    </Link>
  );
}
