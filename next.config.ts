
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Այս տողը թույլ է տալիս ստեղծել ստատիկ HTML/CSS
  images: {
    unoptimized: true, // Կարևոր է, քանի որ GitHub-ը չունի Next-ի նկարների օպտիմիզացման սերվերը
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
