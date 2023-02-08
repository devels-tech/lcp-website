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
        destination: 'https://to-change/api/:path*'
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
