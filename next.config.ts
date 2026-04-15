import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This creates the "out" folder for a simple portfolio
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
