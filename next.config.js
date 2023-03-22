
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['business-cambodia.com']
  },
  // async rewrite() {
  //   return [
  //     {
  //       source: 'api/:path*',
  //       destination: `${[process.env.NEXT_PUBLIC_API_URL]}/api/:path*`
  //     }
  //   ]
  // }
}

module.exports = nextConfig
