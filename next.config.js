/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["picsum.photos"],
  },
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
