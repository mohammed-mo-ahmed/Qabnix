/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // هذا سيجعل الروابط تنتهي بـ / مما يسهل على فايربيز التعامل معها
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig