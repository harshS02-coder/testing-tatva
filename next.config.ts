import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProduction && repo ? `/${repo}` : "",
  assetPrefix: isProduction && repo ? `/${repo}/` : undefined,
};

export default nextConfig;
