/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["picsum.photos"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
