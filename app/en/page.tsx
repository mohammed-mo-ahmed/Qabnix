import type { Metadata } from "next";
import Home from "@/components/Home";

const domain = "https://qabnix.web.app";

export const metadata: Metadata = {
  title: "Qabnix | Professional Web Development Agency",
  description: "Qabnix is a professional web development agency helping businesses thrive in the digital world.",
  alternates: {
    canonical: `${domain}/en`,
    languages: {
      "ar": `${domain}/ar`,
      "en": `${domain}/en`,
    },
  },
  openGraph: {
    title: "Qabnix | Professional Web Development Agency",
    description: "We build professional websites that help your business grow in the digital world.",
    url: `${domain}/en`,
    siteName: "Qabnix",
    locale: "en_US",
    type: "website",
    images: [{ url: `${domain}/logo.webp`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qabnix | Professional Web Development Agency",
    description: "We build professional websites that help your business grow in the digital world.",
    images: [`${domain}/logo.webp`],
  },
};

export default function EnPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Qabnix",
            url: domain,
            logo: `${domain}/logo.webp`,
            description: "Professional web development agency helping businesses thrive in the digital world.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+2-01119819885",
              contactType: "customer service",
            },
            sameAs: [
              "https://www.facebook.com/Qabnix",
              "https://www.instagram.com/qabnix",
              "https://www.linkedin.com/company/qabnix",
            ],
          }),
        }}
      />
      <Home defaultLang="en" />
    </main>
  );
}