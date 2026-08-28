import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/how-we-work", destination: "/how-it-works", permanent: true },
      { source: "/approach", destination: "/how-it-works", permanent: true },
      { source: "/patient-stories", destination: "/results", permanent: true },
      { source: "/start-here", destination: "/start", permanent: true },
      { source: "/home2", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
