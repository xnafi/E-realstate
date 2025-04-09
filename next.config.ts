import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.postimg.cc", "swiperjs.com"], 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
