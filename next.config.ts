import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  // ավելի safe տարբերակ
  reactCompiler: false,
};

export default nextConfig;