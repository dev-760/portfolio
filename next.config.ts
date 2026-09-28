import type { NextConfig } from "next";

import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["192.168.1.26", "127.0.0.1"],
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  // Remove unused CSS
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
