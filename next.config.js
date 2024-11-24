/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  output: 'export',
  basePath: '/Auremio',
  assetPrefix: '/Auremio/',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
