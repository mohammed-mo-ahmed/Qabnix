"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Lang = "ar" | "en";


const t = {
  ar: {
    siteTitle: "قابنيكس | تطوير مواقع",
    dir: "rtl" as const,
    siteName: "قابنيكس",
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navWork: "أعمالنا",
    navContact: "اتصل بنا",
    navPhone: "📞 ‎+2 01119819885",
    navCta: "تواصل معنا",
    langBtn: "EN",
    heroTitle: (
      <>
       تطوير مواقع<br />ويب احترافية
      </>
    ),
    heroDesc:
      "تصميم المواقع جانب أساسي لبناء حضور رقمي فعّال لأي نشاط تجاري. الموقع المصمم جيداً هو بوابتك للنجاح.",
    heroCta: "استكشف مشاريعنا",
    whatWeDo: "ما نقدمه",
    servicesTitle: (
      <>
        مواقع متجاوبة لتجربة مستخدم سلسة
        <br />
        استضافة سريعة وآمنة
      </>
    ),
    s1: "سرعة تحميل فائقة",
    s2: "حلول التجارة الإلكترونية",
    s3: "تصميم وتطوير مخصص",
    s4: "تصميم متجاوب وسريع",
    s5: "صيانة ودعم فني",
    s6: "",
    learnMore: "تعرف علينا",
    aboutTitle:
      "نبني تجارب رقمية ترفع مستوى علامتك التجارية وتعزز حضورك الإلكتروني بحلول متطورة",
    aboutP1:
      "نتخصص في بناء مواقع ويب ديناميكية ومتجاوبة وسهلة الاستخدام، تبدو رائعة وتعمل بسلاسة على جميع الأجهزة.",
    aboutP2:
      "نجمع بين التفكير الإبداعي والتميز التقني لتقديم حلول رقمية تحدث فرقاً حقيقياً لعملك وعملائك.",
    aboutCta: "ابدأ معنا",
    portfolioLabel: "أعمالنا",
    portfolioTitle: (
      <>
       شركة ناشئة — نبني مشاريعنا الأولى بعناية
        <br />
        <br />
        استكشف أعمال فريقنا
      </>
    ),
    wpDesc:
      "تطوير WordPress مخصص بالكامل مع نظام إدارة محتوى قوي وتكاملات سلسة لجميع أحجام الأعمال.",
    contactLabel: "اتصل بنا",
    contactTitle: "تواصل معنا",
    contactDesc:
      "هل لديك مشروع في ذهنك؟ أرسل لنا رسالة وسيتواصل معك فريقنا في أقرب وقت.",
    contactName: "الاسم الكامل",
    contactLink: "البريد الإلكتروني او رقم الهاتف",
    contactMsg: "رسالتك",
    contactSend: "إرسال الرسالة",
    contactOrEmail: "أو تواصل عبر البريد الإلكتروني",
    contactEmailAddr: "qabnix@gmail.com",
    contactWhatsapp: "تواصل عبر واتساب",
    footerDesc:
      "وكالة تطوير مواقع احترافية تساعد الشركات على الازدهار في العالم الرقمي.",
    footerLinks: "روابط سريعة",
    footerContact: "تواصل معنا",
    footerHome: "الرئيسية",
    footerAbout: "تعرف علينا",
    footerServices: "خدماتنا",
    footerPortfolio: "أعمالنا",
    footerCopy: "© 2025 قابنيكس. جميع الحقوق محفوظة.",
  },
  en: {
    siteTitle: "Qabnix | Web Development Agency",
    dir: "ltr" as const,
    siteName: "Qabnix",
    navHome: "Home",
    navServices: "Services",
    navWork: "Work",
    navContact: "Contact",
    navPhone: "📞 +2 01119819885",
    navCta: "Contact Us",
    langBtn: "عربي",
    heroTitle: (
      <>
        Professional<br />Web Development
      </>
    ),
    heroDesc:
      "Web design is a critical aspect of creating an effective online presence for any business. A well-designed website is your gateway to success.",
    heroCta: "Explore Our Projects",
    whatWeDo: "What We Do",
    servicesTitle: (
      <>
        Responsive Websites for Seamless User Experience,
        <br />
        Fast and Secure Web Hosting
      </>
    ),
    s1: "Fast Loading Speeds",
    s2: "E-commerce Solutions",
    s3: "Custom Web Design & Development",
    s4: "Responsive & Fast Design",
    s5: "Maintenance & Support",
    s6: "",
    learnMore: "About Us",
    aboutTitle:
      "Building Digital Experiences That Elevate Your Brand — Empowering Your Online Presence with Cutting-Edge Solutions",
    aboutP1:
      "We specialize in creating dynamic, responsive, and user-friendly websites that not only look great but also perform seamlessly across all devices.",
    aboutP2:
      "Our comprehensive approach combines innovative design thinking with technical excellence to deliver digital solutions that truly make an impact.",
    aboutCta: "Get Started",
    portfolioLabel: "Our Portfolio",
    portfolioTitle: (
      <>
        Startup Company — We carefully build our first projects
        <br />
        <br />
        Explore Our Team's Work
      </>
    ),
    wpDesc:
      "Full custom WordPress development with powerful CMS, plugin development and seamless integrations for businesses of all sizes.",
    contactLabel: "Contact Us",
    contactTitle: "Get In Touch",
    contactDesc:
      "Have a project in mind? Send us a message and our team will get back to you shortly.",
    contactName: "Full Name",
    contactLink: "Email or Phone",
    contactMsg: "Your Message",
    contactSend: "Send Message",
    contactOrEmail: "Or reach us by email",
    contactEmailAddr: "qabnix@gmail.com",
    contactWhatsapp: "Chat on WhatsApp",
    footerDesc:
      "Professional web development agency helping businesses thrive in the digital world.",
    footerLinks: "Quick Links",
    footerContact: "Contact Us",
    footerHome: "Home",
    footerAbout: "About Us",
    footerServices: "Services",
    footerPortfolio: "Portfolio",
    footerCopy: "© 2025 Qabnix. All rights reserved.",
  },
};



function ServiceIcon({ id }: { id: number }) {
  if (id === 0)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l10 6v12l-10 6-10-6V10z" stroke="#3b6ef5" strokeWidth="1.8" fill="none" />
        <path d="M16 10l5 3v6l-5 3-5-3v-6z" fill="#dbeafe" />
        <path d="M8 14l8 5 8-5" stroke="#3b6ef5" strokeWidth="1.5" fill="none" />
        <line x1="16" y1="19" x2="16" y2="28" stroke="#3b6ef5" strokeWidth="1.5" />
      </svg>
    );
  if (id === 1)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="17" rx="2" stroke="#3b6ef5" strokeWidth="1.8" />
        <path d="M10 28h12M16 23v5" stroke="#3b6ef5" strokeWidth="1.8" />
        <path d="M12 14l2 2 4-4" stroke="#3b6ef5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  if (id === 2)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="5" width="22" height="22" rx="3" stroke="#3b6ef5" strokeWidth="1.8" />
        <path d="M5 11h22" stroke="#3b6ef5" strokeWidth="1.5" />
        <circle cx="9" cy="8" r="1.2" fill="#3b6ef5" />
        <circle cx="13" cy="8" r="1.2" fill="#3b6ef5" />
        <path d="M10 17h12M10 21h8" stroke="#3b6ef5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  if (id === 3)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="8" width="14" height="10" rx="2" stroke="#3b6ef5" strokeWidth="1.8" />
        <rect x="19" y="11" width="9" height="7" rx="1.5" stroke="#3b6ef5" strokeWidth="1.5" />
        <path d="M6 21v3M11 21v3M8 24h6" stroke="#3b6ef5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
    if (id === 4)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#3b6ef5" strokeWidth="1.8" />
        <path d="M12 16l3 3 6-6" stroke="#3b6ef5" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 6v3M16 23v3M6 16h3M23 16h3" stroke="#3b6ef5" strokeWidth="1.5" strokeLinecap="round" opacity=".4" />
      </svg>
    );
  return null;
}

/* ─── Hamburger Menu ─── */
function HamburgerMenu({
  items,
  onClose,
  isRtl,
}: {
  items: { label: string; id: string }[];
  onClose: (id?: string) => void;
  isRtl: boolean;
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: 56,
        [isRtl ? "left" : "right"]: 0,
        zIndex: 300,
        background: "rgba(5,10,30,0.97)",
        backdropFilter: "blur(12px)",
        width: "min(260px, 80vw)",
        borderRadius: isRtl ? "0 0 0 14px" : "0 0 14px 0",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        padding: "16px 0 20px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        border: "1px solid rgba(255,255,255,0.07)",
        borderTop: "none",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => onClose()}
        style={{
          alignSelf: isRtl ? "flex-start" : "flex-end",
          margin: "0 16px 8px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#fff",
          fontSize: 16,
          cursor: "pointer",
          lineHeight: 1,
          borderRadius: 6,
          width: 28,
          height: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ✕
      </button>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={(e) => {
            e.stopPropagation();
            onClose(item.id);
          }}
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.75)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px 20px",
            textAlign: isRtl ? "right" : "left",
            transition: "background .15s, color .15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(59,110,245,0.15)";
            (e.currentTarget as HTMLButtonElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "none";
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.75)";
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default function Home({ defaultLang = "ar" }: { defaultLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(defaultLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const c = t[lang];
  const router = useRouter();
  const isRtl = lang === "ar";


  const handleLangToggle = () => {
    const next = lang === "ar" ? "en" : "ar";
    router.push(`/${next}`);
    };

  useEffect(() => {
    document.title = c.siteName;
    document.documentElement.dir = c.dir;
    document.documentElement.lang = lang;
  }, [lang, c.siteName, c.dir]);

  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const aboutH2Ref = useRef<HTMLHeadingElement | null>(null);

  const scrollTo = (id: string) => {
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
  };

  // FIX: reset opacity/transform before re-observing on lang change
  useEffect(() => {
    const els = [
      ...serviceRefs.current.filter(Boolean),
      aboutRef.current,
      aboutH2Ref.current,
    ] as HTMLElement[];

    // Reset styles first so they animate in again on language switch
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
  }, [lang]);

  const [formState, setFormState] = useState({ name: "", contact: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // FIX: Correct button label logic — check sent before loading to avoid flicker
  const getButtonLabel = () => {
    if (sent) return isRtl ? "✓ تم الإرسال!" : "✓ Sent!";
    if (loading) return isRtl ? "جاري الإرسال..." : "Sending...";
    return c.contactSend;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        "https://ijcwpjcfmibcteqwsgbf.supabase.co/functions/v1/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqY3dwamNmbWliY3RlcXdzZ2JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4NjczNTcsImV4cCI6MjA5MTQ0MzM1N30.GcOz2ZFtwKw25D7v-U8Kpf66pMBHl7z4C-ejT2IUMjc`,
          },
          body: JSON.stringify({
            name: formState.name,
            contact: formState.contact,
            msg: formState.msg,
          }),
        }
      );
      if (!res.ok) throw new Error("Failed");
      setSent(true);
      setFormState({ name: "", contact: "", msg: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const navItems = [
    { label: c.navHome, id: "hero" },
    { label: c.learnMore, id: "about" },
    { label: c.navServices, id: "services" },
    { label: c.navWork, id: "portfolio" },
    { label: c.navContact, id: "contact" },
  ];

  const btnStyle = (base?: React.CSSProperties): React.CSSProperties => ({
    background: "#3b6ef5",
    color: "#fff",
    padding: "9px 20px",
    borderRadius: 7,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    transition: "background .2s, transform .15s",
    ...base,
  });

  const inputStyle = (extra?: React.CSSProperties): React.CSSProperties => ({
    padding: "12px 16px",
    borderRadius: 8,
    border: "1px solid #e8ecf0",
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    width: "100%",
    boxSizing: "border-box" as const,
    textAlign: isRtl ? "right" : "left",
    transition: "border .2s",
    ...extra,
  });

  return (
    <div dir={c.dir} style={{ fontFamily: "inherit" }}>
      {/* ── MOBILE MENU OVERLAY ── */}
      {menuOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 299 }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── MOBILE MENU ── */}
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

      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 56,
          display: "flex",
          alignItems: "center",
          background: "rgba(0,0,0,0.80)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1140,
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontSize: "1rem",
              fontWeight: 700,
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <img
              src="/logo.png"
              alt="Qabnix Logo"
              style={{ width: 28, height: 28, objectFit: "contain" }}
            />
            {c.siteName}
          </button>

          {/* Desktop Nav Links */}
          <ul
            className="nav-links-list"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
              flex: 1,
              justifyContent: "center",
            }}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 400,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "color .2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color =
                      "rgba(255,255,255,0.7)")
                  }
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
            }}
          >
            <span
              className="nav-phone"
              style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}
            >
              {c.navPhone}
            </span>

            <button
              onClick={handleLangToggle}
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                padding: "6px 11px",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.18)",
                transition: "background .2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.18)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.1)")
              }
            >
              {c.langBtn}
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="nav-cta-btn"
              style={btnStyle({ padding: "7px 16px", fontSize: 12.5 })}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#2f5de0")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#3b6ef5")
              }
            >
              {c.navCta}
            </button>

            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: 4,
                flexDirection: "column",
                gap: 5,
              }}
              aria-label="Open menu"
            >
              <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2 }} />
              <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2 }} />
              <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        id="hero"
        style={{
          minHeight: "65svh",
          background: "#000",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          paddingTop: 56,
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(900px, 110vw)",
            height: 400,
            background:
              "radial-gradient(ellipse at center bottom, #1a3aff 0%, #0d1fff 20%, transparent 70%)",
            opacity: 0.7,
            pointerEvents: "none",
            borderRadius: "50%",
          }}
        />

        {/* Hero grid */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            alignItems: "center",
            gap: 30,
            maxWidth: 1140,
            margin: "0 auto",
            padding: "60px 24px 80px",
            width: "100%",
            flex: 1,
          }}
        >
          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
                fontWeight: 900,
                lineHeight: 1.08,
                color: "#fff",
                margin: 0,
              }}
            >
              {c.heroTitle}
            </h1>
            <p
              style={{
                fontSize: "clamp(.8rem, 1.5vw, .9rem)",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.75,
                maxWidth: 440,
                margin: 0,
              }}
            >
              {c.heroDesc}
            </p>
            <button
              onClick={() => scrollTo("portfolio")}
              style={btnStyle({ padding: "12px 24px", fontSize: 14, alignSelf: "flex-start" })}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#2f5de0")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#3b6ef5")
              }
            >
              {c.heroCta}
            </button>
          </div>

          {/* RIGHT — image with float animation + tilt */}
          <div
            className="hero-img-wrap"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              perspective: 1000,
              height: 320,
            }}
            onMouseMove={(e) => {
              const el = e.currentTarget.querySelector("img") as HTMLImageElement;
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width;
              const y = (e.clientY - rect.top) / rect.height;
              el.style.animationPlayState = "paused";
              el.style.transform = `translate(${(x - 0.5) * 25}px, ${(y - 0.5) * 25}px) scale(1.05)`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget.querySelector("img") as HTMLImageElement;
              el.style.transform = "";
              el.style.animationPlayState = "running";
            }}
          >
            <img
              src="/iphon.png"
              alt="hero mockup"
              className="hero-float-img"
              style={{
                width: "90%",
                height: "auto",
                objectFit: "contain",
                willChange: "transform",
                pointerEvents: "none",
                maxHeight: 320,
              }}
            />
          </div>
        </div>
      </section>

      {/* ── WHITE WRAPPER ── */}
      <div
        style={{
          background: "#fff",
          borderRadius: "28px 28px 0 0",
          marginTop: -28,
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* ── ABOUT ── */}
        <section id="about" style={{ padding: "64px 0 48px" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
            <div ref={aboutRef}>
              <div
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "#3b6ef5",
                  marginBottom: "1.2rem",
                }}
              >
                {c.learnMore}
              </div>
              <h2
                ref={aboutH2Ref}
                style={{
                  fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)",
                  fontWeight: 800,
                  letterSpacing: "-.025em",
                  lineHeight: 1.25,
                  color: "#0f172a",
                  marginBottom: "1.2rem",
                  marginTop: 0,
                  maxWidth: 780,
                }}
              >
                {c.aboutTitle}
              </h2>
              <div className="about-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: "1.5rem" }}>
                <p style={{ fontSize: ".875rem", color: "#64748b", lineHeight: 1.8, margin: 0 }}>{c.aboutP1}</p>
                <p style={{ fontSize: ".875rem", color: "#64748b", lineHeight: 1.8, margin: 0 }}>{c.aboutP2}</p>
              </div>
              <button
                onClick={() => scrollTo("contact")}
                style={btnStyle({ padding: "11px 24px", fontSize: 13 })}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#2f5de0";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#3b6ef5";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                {c.aboutCta}
              </button>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" style={{ padding: "0 0 80px", scrollMarginTop: "56px" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
                {c.whatWeDo}
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
                {c.servicesTitle}
              </h2>
            </div>

            {/* ── Desktop: 3-col grid with center spanning 2 rows ── */}
            <div className="services-grid-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto auto", gap: 3, background: "#e8ecf0", border: "1px solid #e8ecf0", borderRadius: 14, overflow: "hidden" }}>
              {([0, 1, 3, 4] as const).map((id, i) => {
                const pos = [
                  { gridColumn: 1, gridRow: 1 },
                  { gridColumn: 3, gridRow: 1 },
                  { gridColumn: 1, gridRow: 2 },
                  { gridColumn: 3, gridRow: 2 },
                ][i];
                return (
                  <div key={id} ref={(el) => { serviceRefs.current[i] = el; }} style={{ ...pos, background: "#fff", padding: "32px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, transition: "background .2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#f8faff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#fff")}
                  >
                    <div style={{ width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center" }}><ServiceIcon id={id} /></div>
                    <h3 style={{ fontSize: ".88rem", fontWeight: 600, color: "#0f172a", lineHeight: 1.4, margin: 0 }}>{[c.s1, c.s2, c.s4, c.s5][i]}</h3>
                  </div>
                );
              })}
              <div ref={(el) => { serviceRefs.current[4] = el; }} style={{ gridColumn: 2, gridRow: "1 / 3", background: "#fff", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 14, transition: "background .2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#f8faff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#fff")}
              >
                <div style={{ width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center" }}><ServiceIcon id={2} /></div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.4, margin: 0 }}>{c.s3}</h3>
              </div>
            </div>

            {/* ── Mobile: simple 2-col grid, all 5 cards ── */}
            <div className="services-grid-mobile" style={{ display: "none", gridTemplateColumns: "1fr 1fr", gap: 3, background: "#e8ecf0", border: "1px solid #e8ecf0", borderRadius: 14, overflow: "hidden" }}>
              {([
                { id: 0, label: c.s1 },
                { id: 1, label: c.s2 },
                { id: 2, label: c.s3 },
                { id: 3, label: c.s4 },
                { id: 4, label: c.s5 },
                { id: 5, label: c.s6 },
              ] as { id: number; label: string }[]).map(({ id, label }) => (
                <div key={id} style={{ background: "#fff", padding: "28px 16px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12, transition: "background .2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#f8faff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#fff")}
                >
                  <div style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}><ServiceIcon id={id} /></div>
                  <h3 style={{ fontSize: ".82rem", fontWeight: 600, color: "#0f172a", lineHeight: 1.4, margin: 0 }}>{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO ── */}
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
                {c.portfolioTitle}
              </h2>
            </div>

            {/* Tech logos grid */}
            <div
              className="tech-logos-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 3,
                background: "#e8ecf0",
                border: "1px solid #e8ecf0",
                borderRadius: 14,
                overflow: "hidden",
              }}
            >
              {[
                {
                  name: "HTML5",
                  logo: (
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="#e34f26">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                    </svg>
                  ),
                },
                {
                  name: "React",
                  logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40" alt="React" />,
                },
                {
                  name: "Angular",
                  logo: (
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="#dd0031">
                      <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.247L23.32 3.982 11.999.001zm7.064 18.31h-2.717l-1.102-2.853H8.775l-1.102 2.853H4.957L12 2.267z" />
                    </svg>
                  ),
                },
                {
                  name: "Tailwind CSS",
                  logo: (
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="#06B6D4">
                      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                    </svg>
                  ),
                },
                {
                  name: "WordPress",
                  logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" width="40" height="40" alt="WordPress" />,
                },
                {
                  name: "Node.js",
                  logo: (
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="#339933">
                      <path d="M11.998.001c-.321 0-.643.082-.924.247L2.982 4.87C2.38 5.228 2 5.875 2 6.573v10.854c0 .698.38 1.345.982 1.703l2.081 1.2c1.008.498 1.37.498 1.838.498 1.506 0 2.368-.913 2.368-2.498V7.67c0-.133-.107-.24-.241-.24h-1.04c-.134 0-.241.107-.241.24v10.66c0 .706-.73 1.41-1.919.815L3.736 17.93a.258.258 0 0 1-.128-.22V6.573c0-.09.047-.174.128-.22L11.92 1.74c.079-.046.18-.046.258 0l8.184 4.613c.08.046.128.13.128.22v10.854c0 .09-.047.174-.128.22l-8.184 4.613c-.079.046-.18.046-.258 0l-2.098-1.217c-.063-.036-.141-.044-.211-.018-.592.234-1.17.33-1.72.1-.069-.028-.15.02-.15.098v.001c0 .05.029.097.074.12l2.58 1.498c.28.164.6.247.922.247.321 0 .643-.082.924-.247l8.092-4.621c.602-.358.982-1.005.982-1.703V6.573c0-.698-.38-1.345-.982-1.703L12.922.248A1.845 1.845 0 0 0 11.998.001zm.896 7.34c-2.392 0-3.804 1.01-3.804 2.692 0 1.826 1.414 2.328 3.697 2.553 2.731.264 2.94.66 2.94 1.188 0 .92-.737 1.307-2.467 1.307-2.179 0-2.656-.546-2.818-1.63a.238.238 0 0 0-.235-.201h-1.064a.241.241 0 0 0-.241.241c0 1.414.77 3.1 4.358 3.1 2.607 0 4.104-1.025 4.104-2.822 0-1.782-1.204-2.25-3.737-2.585-2.559-.338-2.9-.511-2.9-1.112 0-.499.222-1.162 2.167-1.162 1.735 0 2.375.374 2.638 1.544.046.21.237.36.449.36l1.07-.005a.24.24 0 0 0 .238-.246c-.156-1.867-1.4-2.922-3.395-2.922v.001z" />
                    </svg>
                  ),
                },
                {
                  name: "TypeScript",
                  logo: (
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="#3178C6">
                      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                    </svg>
                  ),
                },
                {
                  name: "Next.js",
                  logo: (
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="#000">
                      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.14-.054.499-.054z" />
                    </svg>
                  ),
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  style={{
                    background: "#fff",
                    padding: "32px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    transition: "background .2s, transform .2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "#f8faff";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "#fff";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  {tech.logo}
                  <span style={{ fontSize: ".82rem", fontWeight: 600, color: "#475569" }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: "80px 0", background: "#fff" }}>
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
                {c.contactLabel}
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)",
                  fontWeight: 700,
                  letterSpacing: "-.02em",
                  lineHeight: 1.3,
                  color: "#0f172a",
                  margin: "0 0 .75rem",
                }}
              >
                {c.contactTitle}
              </h2>
              <p style={{ fontSize: ".9rem", color: "#64748b", maxWidth: 480, margin: "0 auto" }}>
                {c.contactDesc}
              </p>
            </div>

            <div
              className="contact-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                alignItems: "start",
              }}
            >
              {/* Form */}
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <input
                  type="text"
                  required
                  placeholder={c.contactName}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  style={inputStyle()}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid #3b6ef5")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid #e8ecf0")}
                />
                <input
                  type="text"
                  required
                  placeholder={c.contactLink}
                  value={formState.contact}
                  onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                  style={inputStyle()}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid #3b6ef5")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid #e8ecf0")}
                />
                <textarea
                  required
                  placeholder={c.contactMsg}
                  rows={5}
                  value={formState.msg}
                  onChange={(e) => setFormState({ ...formState, msg: e.target.value })}
                  style={inputStyle({ resize: "vertical" })}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid #3b6ef5")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid #e8ecf0")}
                />
                {/* FIX: Use getButtonLabel() to correctly prioritize sent state over loading */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    ...btnStyle({ padding: "13px 28px", fontSize: 14 }),
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background = "#2f5de0")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background = "#3b6ef5")
                  }
                >
                  {getButtonLabel()}
                </button>
              </form>

              {/* Contact info */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div
                  style={{
                    background: "#f8fafc",
                    borderRadius: 14,
                    padding: "24px 20px",
                    border: "1px solid #e8ecf0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}
                >
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/+201119819885"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      background: "#25d366",
                      color: "#fff",
                      padding: "16px 20px",
                      borderRadius: 14,
                      fontSize: 14,
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "background .2s, transform .15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "#1ebe5d";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "#25d366";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {c.contactWhatsapp}
                  </a>

                  {/* Email */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "#eff4ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b6ef5" strokeWidth="2" strokeLinecap="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M2 7l10 7 10-7" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 11.5, color: "#94a3b8", marginBottom: 3, fontWeight: 500 }}>
                        {c.contactOrEmail}
                      </div>
                      <a href={`mailto:${c.contactEmailAddr}`} style={{ fontSize: 14, fontWeight: 700, color: "#3b6ef5" }}>
                        {c.contactEmailAddr}
                      </a>
                    </div>
                  </div>

                  <div style={{ height: 1, background: "#e8ecf0" }} />

                  {/* Phone */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "#eff4ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b6ef5" strokeWidth="2" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 11.5, color: "#94a3b8", marginBottom: 3, fontWeight: 500 }}>
                        {isRtl ? "اتصل بنا" : "Call Us"}
                      </div>
                      <a href="tel:+201119819885" style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>
                        ‎+2 01119819885
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          style={{
            background: "#050a1e",
            padding: "60px 0 28px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "min(800px, 110vw)",
              height: 400,
              background:
                "radial-gradient(ellipse at center, #1a3aff 0%, #0d1fff 15%, transparent 65%)",
              opacity: 0.1,
              pointerEvents: "none",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              maxWidth: 1140,
              margin: "0 auto",
              padding: "0 24px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              className="footer-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 40,
                paddingBottom: 40,
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Brand */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 14,
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="Qabnix Logo"
                    style={{ width: 28, height: 28, objectFit: "contain" }}
                  />
                  {c.siteName}
                </div>
                <p
                  style={{
                    fontSize: ".8rem",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.75,
                    maxWidth: 240,
                    margin: 0,
                  }}
                >
                  {c.footerDesc}
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4
                  style={{
                    fontSize: ".75rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: 14,
                    marginTop: 0,
                    textTransform: "uppercase",
                    letterSpacing: ".07em",
                  }}
                >
                  {c.footerLinks}
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                  }}
                >
                  {[
                    { label: c.footerHome, id: "hero" },
                    { label: c.footerAbout, id: "about" },
                    { label: c.footerServices, id: "services" },
                    { label: c.footerPortfolio, id: "portfolio" },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        style={{
                          fontSize: ".8rem",
                          color: "rgba(255,255,255,0.4)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          transition: "color .2s",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.8)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)")
                        }
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4
                  style={{
                    fontSize: ".75rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: 14,
                    marginTop: 0,
                    textTransform: "uppercase",
                    letterSpacing: ".07em",
                  }}
                >
                  <button
                    onClick={() => scrollTo("contact")}
                    style={{
                      background: "none",
                      border: "none",
                      color: "inherit",
                      font: "inherit",
                      cursor: "pointer",
                      padding: 0,
                      letterSpacing: "inherit",
                      textTransform: "inherit" as const,
                      transition: "color .2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color = "#3b6ef5")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)")
                    }
                  >
                    {c.footerContact}
                  </button>
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <li>
                    <a
                      href={`mailto:${c.contactEmailAddr}`}
                      style={{
                        fontSize: ".8rem",
                        color: "rgba(255,255,255,0.4)",
                        transition: "color .2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)")
                      }
                    >
                      {c.contactEmailAddr}
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+201119819885"
                      style={{
                        fontSize: ".8rem",
                        color: "rgba(255,255,255,0.4)",
                        transition: "color .2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)")
                      }
                    >
                      ‎+2 01119819885
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom row */}
            <div
              style={{
                paddingTop: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <span style={{ fontSize: ".75rem", color: "rgba(255,255,255,0.25)" }}>
                {c.footerCopy}
              </span>
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  {
                    href: "https://www.instagram.com/qabnix",
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
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.linkedin.com/company/qabnix",
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6.94 6.5A1.94 1.94 0 1 1 7 2.62a1.94 1.94 0 0 1-.06 3.88zM4 8.5h4v13H4v-13zM10 8.5h3.8v1.8h.06c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.64 4.74 6.08v7.18h-4v-6.37c0-1.52-.03-3.47-2.12-3.47s-2.45 1.65-2.45 3.36v6.48h-4v-13z"
                          fill="currentColor"
                        />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* ── Responsive Styles ── */}
      <style>{`
        *,*::before,*::after { box-sizing: border-box; }

        @keyframes heroFloat {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-30px); }
          100% { transform: translateY(0px); }
        }
        .hero-float-img {
          animation: heroFloat 3.6s ease-in-out infinite;
          transition: transform 0.15s ease;
        }

        #services {
          scroll-margin-top: 56px;
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
            padding-bottom: 40px !important;
            align-items: center !important;
          }
          .hero-img-wrap { height: 240px !important; }
          .hero-img-wrap img { width: 80% !important; max-height: 240px !important; }
          .about-cols { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .nav-links-list { display: none !important; }
          .nav-phone { display: none !important; }
          .nav-cta-btn { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .tech-logos-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }

        @media (max-width: 700px) {
          .services-grid-desktop { display: none !important; }
          .services-grid-mobile { display: grid !important; }
        }

        @media (max-width: 600px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
            padding: 30px 16px 50px !important;
          }
          .hero-img-wrap { height: 180px !important; }
          .hero-img-wrap img { width: 100% !important; max-height: 180px !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .tech-logos-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (max-width: 400px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .hero-grid > div:first-child { align-items: center !important; }
          .hero-img-wrap { height: 200px !important; margin-top: 8px; }
          .services-grid { grid-template-columns: 1fr !important; }
          .tech-logos-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}