/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["picsum.photos"],
  },
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;
