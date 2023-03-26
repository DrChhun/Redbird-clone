
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['business-cambodia.com']
  },
  async rewrite() {
    return [
      {
        source: '/api/article',
        destination: `https://redbird-api.vercel.app`
      }
    ]
  }
}

module.exports = nextConfig
