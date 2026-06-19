import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { HomePage } from "@/features/home";
import type { Locale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

const meta: Record<Locale, Metadata> = {
  en: {
    title: "Qabnix | Professional Web Development Agency",
    description:
      "Qabnix is a professional web development agency helping businesses thrive in the digital world.",
    alternates: {
      canonical: `${SITE.domain}/en`,
      languages: {
        ar: `${SITE.domain}/ar`,
        en: `${SITE.domain}/en`,
      },
    },
    openGraph: {
      title: "Qabnix | Professional Web Development Agency",
      description:
        "We build professional websites that help your business grow in the digital world.",
      url: `${SITE.domain}/en`,
      siteName: "Qabnix",
      locale: "en_US",
      type: "website",
      images: [{ url: `${SITE.domain}/logo.webp`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Qabnix | Professional Web Development Agency",
      description:
        "We build professional websites that help your business grow in the digital world.",
      images: [`${SITE.domain}/logo.webp`],
    },
  },
  ar: {
    title: "قابنيكس | تطوير مواقع احترافية",
    description:
      "قابنيكس وكالة تطوير مواقع ويب احترافية — تصميم متجاوب، تجارة إلكترونية، WordPress، واستضافة سريعة وآمنة.",
    alternates: {
      canonical: `${SITE.domain}/ar`,
      languages: {
        ar: `${SITE.domain}/ar`,
        en: `${SITE.domain}/en`,
      },
    },
    openGraph: {
      title: "قابنيكس | تطوير مواقع احترافية",
      description:
        "نبني مواقع ويب احترافية تساعد عملك على النمو في العالم الرقمي.",
      url: `${SITE.domain}/ar`,
      siteName: "قابنيكس",
      locale: "ar_EG",
      type: "website",
      images: [{ url: `${SITE.domain}/logo.webp`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "قابنيكس | تطوير مواقع احترافية",
      description:
        "نبني مواقع ويب احترافية تساعد عملك على النمو في العالم الرقمي.",
      images: [`${SITE.domain}/logo.webp`],
    },
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return meta[locale as Locale] ?? meta.en;
}

const jsonLd: Record<Locale, object> = {
  en: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Qabnix",
    url: SITE.domain,
    logo: `${SITE.domain}/logo.webp`,
    description:
      "Professional web development agency helping businesses thrive in the digital world.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2-01119819885",
      contactType: "customer service",
    },
    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.linkedin,
    ],
  },
  ar: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "قابنيكس",
    url: SITE.domain,
    logo: `${SITE.domain}/logo.webp`,
    description:
      "وكالة تطوير مواقع ويب احترافية — تصميم متجاوب، تجارة إلكترونية، WordPress، واستضافة سريعة وآمنة.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2-01119819885",
      contactType: "customer service",
    },
    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.linkedin,
    ],
  },
};

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "ar" ? "ar" : "en") as Locale;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd[lang]),
        }}
      />
      <HomePage locale={lang} />
    </main>
  );
}
