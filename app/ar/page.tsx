import type { Metadata } from "next";
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: "قابنيكس | تطوير مواقع احترافية",
  description: "قابنيكس وكالة تطوير مواقع ويب احترافية — تصميم متجاوب، تجارة إلكترونية، WordPress، واستضافة سريعة وآمنة.",
  alternates: {
    canonical: "https://qabnix.vercel.app/ar",
    languages: {
      "ar": "https://qabnix.vercel.app/ar",
      "en": "https://qabnix.vercel.app/en",
    },
  },
  openGraph: {
    title: "قابنيكس | تطوير مواقع احترافية",
    description: "نبني مواقع ويب احترافية تساعد عملك على النمو في العالم الرقمي.",
    url: "https://qabnix.vercel.app/ar",
    siteName: "قابنيكس",
    locale: "ar_EG",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
  },
};

export default function ArPage() {
  return <main><Home defaultLang="ar" /></main>;
}