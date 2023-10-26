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

const withNextIntl = require("next-intl/plugin")(
  "./i18n.ts"
)

module.exports = withNextIntl(nextConfig);