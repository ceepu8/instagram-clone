/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lodash', 'lucide-react'],
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'],
  },
  i18n,
}

module.exports = nextConfig
