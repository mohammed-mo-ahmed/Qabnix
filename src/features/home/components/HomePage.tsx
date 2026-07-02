"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { useTranslation } from "@/i18n/useTranslation";
import { trackEvent } from "@/lib/metaPixel";
import type { Locale } from "@/i18n/config";
import { useInfiniteTicker } from "@/features/projects/hooks/useInfiniteTicker";
import { Navbar } from "@/features/layout/components/Navbar";
import { HamburgerMenu } from "@/features/layout/components/HamburgerMenu";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ServicesSection } from "./ServicesSection";
import { TechLogos } from "@/features/projects/components/TechLogos";
import { ProjectRibbon } from "@/features/projects/components/ProjectRibbon";
import { FaqSection } from "./FaqSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "@/features/layout/components/Footer";

function SocialIcons({ locale }: { locale: string }) {
  const items = [
    {
      href: "https://www.instagram.com/qabnix",
      contentName: "instagram",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      href: "https://www.facebook.com/Qabnix",
      contentName: "facebook",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/company/qabnix",
      contentName: "linkedin",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M6.94 6.5A1.94 1.94 0 1 1 7 2.62a1.94 1.94 0 0 1-.06 3.88zM4 8.5h4v13H4v-13zM10 8.5h3.8v1.8h.06c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.64 4.74 6.08v7.18h-4v-6.37c0-1.52-.03-3.47-2.12-3.47s-2.45 1.65-2.45 3.36v6.48h-4v-13z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return items.map((item) => (
    <a
      key={item.href}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("Contact", { content_name: item.contentName, language: locale })}
      style={{
        width: 30,
        height: 30,
        borderRadius: 6,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255,255,255,0.55)",
        transition: "all .2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)";
        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
      }}
    >
      {item.icon}
    </a>
  ));
}

export function HomePage({ locale }: { locale: Locale }) {
  const c = useTranslation(locale);
  const isRtl = locale === "ar";
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({ name: "", contact: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null, null]);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const aboutH2Ref = useRef<HTMLHeadingElement | null>(null);

  const { trackRef, handlers: tickerHandlers } = useInfiniteTicker();

  const handleLangToggle = useCallback(() => {
    const next = locale === "ar" ? "en" : "ar";
    router.push(`/${next}`);
  }, [locale, router]);

  const scrollTo = useCallback((id: string) => {
    if (id === "services") {
      const el = document.getElementById("services");
      if (el) {
        const navHeight = 56;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.documentElement.dir = c.dir;
    document.documentElement.lang = locale;
  }, [locale, c.dir]);

  useEffect(() => {
    const els = [
      ...serviceRefs.current.filter(Boolean),
      aboutRef.current,
      aboutH2Ref.current,
    ] as HTMLElement[];

    els.forEach((el) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity .55s ease, transform .55s ease";
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => {
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [locale]);

  const handleFormChange = useCallback((field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_qz9ovrx",
        "template_oyt7beg",
        {
          name: formState.name,
          contact: formState.contact,
          message: formState.msg,
        },
        "CLsz4OoKU_l6JmNKX"
      );

      setSent(true);
      setFormState({ name: "", contact: "", msg: "" });
      trackEvent("Lead", { content_name: "contact_form", language: locale });
      setTimeout(() => setSent(false), 4000);
    } catch {
      alert(isRtl ? "حدث خطأ أثناء الإرسال" : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [formState, isRtl]);

  const navItems = [
    { label: c.navHome, id: "hero" },
    { label: c.learnMore, id: "about" },
    { label: c.navServices, id: "services" },
    { label: c.navWork, id: "portfolio" },
    { label: c.navFaq, id: "faq" },
    { label: c.navContact, id: "contact" },
  ];

  const footerNavItems = [
    { label: c.footerHome, id: "hero" },
    { label: c.footerAbout, id: "about" },
    { label: c.footerServices, id: "services" },
    { label: c.footerPortfolio, id: "portfolio" },
    { label: c.footerFaq, id: "faq" },
  ];

  const renderLogo = () => (
    <img
      src="/logo.webp"
      alt="Qabnix Logo"
      style={{ width: 28, height: 28, objectFit: "contain" }}
    />
  );

  return (
    <div dir={c.dir}>
      {menuOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 299 }}
          onClick={() => setMenuOpen(false)}
        />
      )}
      {menuOpen && (
        <HamburgerMenu
          items={navItems}
          isRtl={isRtl}
          onClose={(id) => {
            setMenuOpen(false);
            if (id) setTimeout(() => scrollTo(id), 50);
          }}
        />
      )}

      <Navbar
        siteName={c.siteName}
        navItems={navItems}
        navPhone={c.navPhone}
        langBtn={c.langBtn}
        navCta={c.navCta}
        menuOpen={menuOpen}
        isRtl={isRtl}
        onMenuToggle={() => setMenuOpen((v) => !v)}
        onScrollTo={scrollTo}
        onLangToggle={handleLangToggle}
        renderLogo={() => (
          <>
            {renderLogo()}
            {c.siteName}
          </>
        )}
      />

      <HeroSection
        heroTitle={c.heroTitle}
        heroDesc={c.heroDesc}
        heroCta={c.heroCta}
        onScrollTo={scrollTo}
      />

      <div
        style={{
          background: "#fff",
          borderRadius: "28px 28px 0 0",
          marginTop: -28,
          position: "relative",
          zIndex: 10,
        }}
      >
        <AboutSection
          learnMore={c.learnMore}
          aboutTitle={c.aboutTitle}
          aboutP1={c.aboutP1}
          aboutP2={c.aboutP2}
          aboutCta={c.aboutCta}
          aboutRef={aboutRef}
          aboutH2Ref={aboutH2Ref}
          onScrollTo={scrollTo}
        />

        <ServicesSection
          whatWeDo={c.whatWeDo}
          servicesTitle={c.servicesTitle}
          labels={[c.s1, c.s2, c.s3, c.s4, c.s5, c.s6]}
          serviceRefs={serviceRefs}
        />

        <section id="portfolio" style={{ padding: "80px 0", background: "#f8fafc" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "#3b6ef5",
                  marginBottom: ".75rem",
                }}
              >
                {c.portfolioLabel}
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)",
                  fontWeight: 700,
                  letterSpacing: "-.02em",
                  lineHeight: 1.3,
                  color: "#0f172a",
                  margin: 0,
                }}
              >
                {c.portfolioTitle[0]}<br />{c.portfolioTitle[1]}<br />{c.portfolioTitle[2]}
              </h2>
            </div>

            <TechLogos />

            <ProjectRibbon
              projects={c.projects}
              title={isRtl ? "مشاريعنا" : "Our Projects"}
              trackRef={trackRef}
              onPointerDown={tickerHandlers.onPointerDown}
              onPointerMove={tickerHandlers.onPointerMove}
              onPointerUp={tickerHandlers.onPointerUp}
              onPointerCancel={tickerHandlers.onPointerCancel}
            />
          </div>
        </section>

        <FaqSection
          faqLabel={c.faqLabel}
          faqTitle={c.faqTitle}
          faq={c.faq}
          openFaq={openFaq}
          isRtl={isRtl}
          onToggle={(i) => setOpenFaq(openFaq === i ? null : i)}
        />

        <ContactSection
          contactLabel={c.contactLabel}
          contactTitle={c.contactTitle}
          contactDesc={c.contactDesc}
          contactName={c.contactName}
          contactLink={c.contactLink}
          contactMsg={c.contactMsg}
          contactSend={c.contactSend}
          contactOrEmail={c.contactOrEmail}
          contactEmailAddr={c.contactEmailAddr}
          contactWhatsapp={c.contactWhatsapp}
          isRtl={isRtl}
          locale={locale}
          formState={formState}
          loading={loading}
          sent={sent}
          onFormChange={handleFormChange}
          onSubmit={handleSubmit}
        />

        <Footer
          siteName={c.siteName}
          footerDesc={c.footerDesc}
          footerLinks={c.footerLinks}
          footerContact={c.footerContact}
          navItems={footerNavItems}
          contactEmailAddr={c.contactEmailAddr}
          footerCopy={c.footerCopy}
          isRtl={isRtl}
          onScrollTo={scrollTo}
          renderLogo={() => (
            <>
              {renderLogo()}
              {c.siteName}
            </>
          )}
          renderSocialIcons={() => <SocialIcons locale={locale} />}
        />
      </div>
    </div>
  );
}
