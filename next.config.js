/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   eslint: {
      ignoreDuringBuilds: true,
   },
   i18n: {
      locales: ['es', 'en'],
      defaultLocale: 'en',
   },
}

module.exports = nextConfig
