import Image from "next/image";

type MediaImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function MediaImage({ src, alt, sizes, priority = false, className = "cover-image" }: MediaImageProps) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} unoptimized className={className} />;
}
