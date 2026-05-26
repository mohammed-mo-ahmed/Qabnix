/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // هذا سيجعل Next.js ينتج مجلد 'out'
  images: {
    unoptimized: true, // مهم جداً عند استخدام 'export' لتجنب مشاكل الصور
  },
};

module.exports = nextConfig;