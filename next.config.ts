import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ["http://192.168.56.1:3000"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
