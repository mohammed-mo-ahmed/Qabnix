"use client";

export function HeroSection({
  heroTitle,
  heroDesc,
  heroCta,
  onScrollTo,
}: {
  heroTitle: string[];
  heroDesc: string;
  heroCta: string;
  onScrollTo: (id: string) => void;
}) {
  return (
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
            {heroTitle[0]}<br />{heroTitle[1]}
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
            {heroDesc}
          </p>
          <button
            onClick={() => onScrollTo("portfolio")}
            style={{
              background: "#3b6ef5",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: 7,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              transition: "background .2s, transform .15s",
              alignSelf: "flex-start",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "#2f5de0")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "#3b6ef5")
            }
          >
            {heroCta}
          </button>
        </div>

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
            src="/iphon.webp"
            alt="Qabnix responsive web design showcase on iPhone mockup"
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
  );
}
