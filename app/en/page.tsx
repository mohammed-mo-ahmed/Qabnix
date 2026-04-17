import type { Metadata } from "next";
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: "Qabnix | Professional Web Development Agency",
  description: "Qabnix is a professional web development agency helping businesses thrive in the digital world.",
  alternates: {
    canonical: "https://qabnix.vercel.app/en",
    languages: {
      "ar": "https://qabnix.vercel.app/ar",
      "en": "https://qabnix.vercel.app/en",
    },
  },
  openGraph: {
    title: "Qabnix | Professional Web Development Agency",
    description: "We build professional websites that help your business grow in the digital world.",
    url: "https://qabnix.vercel.app/en",
    siteName: "Qabnix",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
  },
};

export default function EnPage() {
  return <main><Home defaultLang="en" /></main>;
}