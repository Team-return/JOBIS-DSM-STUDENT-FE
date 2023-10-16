/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["picsum.photos"],
  },
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    appDir: true,
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
