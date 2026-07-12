import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Static export -> plain HTML/CSS/JS. Hosts anywhere, readable with JS off.
  output: "export",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: { unoptimized: true },
  trailingSlash: true,
};

const withMDX = createMDX();

export default withMDX(nextConfig);
