// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  typescript: {
    // Dangerously allow production builds even if there are TS errors
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
