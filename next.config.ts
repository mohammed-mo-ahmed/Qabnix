const nextConfig = {
  output: 'export', // هذا سيجعل المشروع يخرج ملفات ثابتة فقط
  images: {
    unoptimized: true, // ضروري لأن نظام الصور في Next يحتاج سيرفر
  },
}