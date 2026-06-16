import { inter, cairo } from "@/lib/fonts";

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${cairo.variable}`}>
      <body>{children}</body>
    </html>
  );
}