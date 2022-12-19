/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  async redirects() {
    return [
      {
        destination: "/Thanks",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
