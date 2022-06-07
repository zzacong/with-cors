/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: allowedOrigins,
          },
        ],
      },
    ]
  },
}

const allowedOrigins =
  'https://with-cors-2.vercel.app;https://with-cors-3.vercel.app'

module.exports = nextConfig
