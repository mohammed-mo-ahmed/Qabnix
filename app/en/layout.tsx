export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="alternate" hrefLang="ar" href="https://qabnix.vercel.app/ar" />
        <link rel="alternate" hrefLang="en" href="https://qabnix.vercel.app/en" />
        <link rel="alternate" hrefLang="x-default" href="https://qabnix.vercel.app/ar" />
      </head>
      <body>{children}</body>
    </html>
  );
}