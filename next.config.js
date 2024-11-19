/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Keep this for static exports
  images: {
    unoptimized: true, // Disable image optimization
  },
};

module.exports = nextConfig;
