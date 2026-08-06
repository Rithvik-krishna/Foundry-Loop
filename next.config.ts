import type { NextConfig } from "next";

const hasImageBinding = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "true";

const nextConfig: NextConfig = {
  // Enable Cloudflare transformations only when the production binding is
  // configured. Local previews and plain Node hosting serve public assets
  // directly instead of routing every image through an unavailable worker API.
  images: {
    unoptimized: !hasImageBinding,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
