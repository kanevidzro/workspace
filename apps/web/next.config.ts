import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	transpilePackages: ["@dwete/api", "@dwete/auth", "@dwete/db", "@dwete/ui"],
};

export default nextConfig;
