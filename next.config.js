/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lodash', 'lucide-react'],
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
