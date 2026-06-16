import type { Metadata } from "next";
import Home from "@/components/Home";

const domain = "https://qabnix.web.app";

export const metadata: Metadata = {
  title: "قابنيكس | تطوير مواقع احترافية",
  description: "قابنيكس وكالة تطوير مواقع ويب احترافية — تصميم متجاوب، تجارة إلكترونية، WordPress، واستضافة سريعة وآمنة.",
  alternates: {
    canonical: `${domain}/ar`,
    languages: {
      "ar": `${domain}/ar`,
      "en": `${domain}/en`,
    },
  },
  openGraph: {
    title: "قابنيكس | تطوير مواقع احترافية",
    description: "نبني مواقع ويب احترافية تساعد عملك على النمو في العالم الرقمي.",
    url: `${domain}/ar`,
    siteName: "قابنيكس",
    locale: "ar_EG",
    type: "website",
    images: [{ url: `${domain}/logo.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "قابنيكس | تطوير مواقع احترافية",
    description: "نبني مواقع ويب احترافية تساعد عملك على النمو في العالم الرقمي.",
    images: [`${domain}/logo.png`],
  },
};

export default function ArPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "قابنيكس",
            url: domain,
            logo: `${domain}/logo.png`,
            description: "وكالة تطوير مواقع ويب احترافية — تصميم متجاوب، تجارة إلكترونية، WordPress، واستضافة سريعة وآمنة.",
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
      <Home defaultLang="ar" />
    </main>
  );
}