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
            has: [
              {
                type: 'header',
                key: 'host',
                value: `(${allowedOrigins.split(',').join('|')})`,
              },
            ],
            value: '*',
          },
        ],
      },
    ]
  },
}

const allowedOrigins =
  'https://with-cors-2.vercel.app,https://with-cors-3.vercel.app'

module.exports = nextConfig
