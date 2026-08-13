import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/how-we-work", destination: "/approach", permanent: true },
      { source: "/patient-stories", destination: "/results", permanent: true },
      { source: "/start-here", destination: "/start", permanent: true },
    ];
  },
};

export default nextConfig;
