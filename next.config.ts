import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local public assets are served directly. The Cloudflare image transformer
  // is not available in the local Vinext preview environment.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
