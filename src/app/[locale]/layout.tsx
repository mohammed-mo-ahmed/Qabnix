import { inter, cairo } from "@/lib/fonts";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "ar" ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";
  const isAr = lang === "ar";

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${inter.variable}${isAr ? ` ${cairo.variable}` : ""}`}
    >
      <body>{children}</body>
    </html>
  );
}
