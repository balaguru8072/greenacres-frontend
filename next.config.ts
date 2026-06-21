import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash ku
      },
      {
        protocol: "https", 
        hostname: "moccasin-snail-113788.hostingersite.com", // ✅ Un backend ku
      },
    ],
  },
};

export default nextConfig;