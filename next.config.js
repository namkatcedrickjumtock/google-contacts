/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['e7.pngegg.com','pngset.com','links.papareact.com']
  }
}

module.exports = nextConfig
