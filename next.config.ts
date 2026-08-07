import type { NextConfig } from "next";

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isUserPage = Boolean(owner && repository && repository.toLowerCase() === `${owner.toLowerCase()}.github.io`);
const isProjectPage = Boolean(process.env.GITHUB_ACTIONS && repository && !isUserPage);
const basePath = isProjectPage ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
