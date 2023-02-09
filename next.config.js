/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com']
  },
  async rewrites () {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL || 'https://backend-dev.lcpcaracas.org'}/api/:path*`
      },
      {
        source: '/recursos',
        destination: '/recursos/espiritu'
      },
      {
        source: '/tienda',
        destination: '/'
      },
      {
        source: '/reservaciones',
        destination: '/'
      }
    ]
  }
}
