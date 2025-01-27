/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@repo/db'],
  experimental: {
    outputFileTracingIncludes: {
    '/api/users-test': ['./tmp/prisma-engines/**/*'],
  }}
};
