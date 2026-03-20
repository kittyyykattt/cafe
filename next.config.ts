import type { NextConfig } from "next";

/**
 * GitHub Pages project site: https://USER.github.io/REPO/
 * Set NEXT_BASE_PATH=/REPO in CI (see .github/workflows/deploy-github-pages.yml).
 * Omit locally so `next dev` and `next build` use site root unless you export the var.
 */
const basePath =
  process.env.NEXT_BASE_PATH?.replace(/\/$/, "") || undefined;

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
