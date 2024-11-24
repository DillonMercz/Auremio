/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Auremio',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
