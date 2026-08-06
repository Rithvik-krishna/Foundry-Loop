import Image from "next/image";

const hasImageBinding = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "true";

type MediaImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function MediaImage({ src, alt, sizes, priority = false, className = "cover-image" }: MediaImageProps) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={85} unoptimized={!hasImageBinding} className={className} style={{ objectFit: "contain", objectPosition: "center" }} />;
}
