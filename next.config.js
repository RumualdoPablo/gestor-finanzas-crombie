/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  //Quitar lo de ignoreBuild
  experimental: {
    typedRoutes: true,
    serverComponentsExternalPackages: ['@tremor/react'],
  },
};

module.exports = nextConfig;