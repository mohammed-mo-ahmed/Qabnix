import { inter } from "@/lib/fonts";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}