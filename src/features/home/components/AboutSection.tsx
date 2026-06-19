"use client";

export function AboutSection({
  learnMore,
  aboutTitle,
  aboutP1,
  aboutP2,
  aboutCta,
  aboutRef,
  aboutH2Ref,
  onScrollTo,
}: {
  learnMore: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutCta: string;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  aboutH2Ref: React.RefObject<HTMLHeadingElement | null>;
  onScrollTo: (id: string) => void;
}) {
  return (
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
            {learnMore}
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
            {aboutTitle}
          </h2>
          <div className="about-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: "1.5rem" }}>
            <p style={{ fontSize: ".875rem", color: "#64748b", lineHeight: 1.8, margin: 0 }}>{aboutP1}</p>
            <p style={{ fontSize: ".875rem", color: "#64748b", lineHeight: 1.8, margin: 0 }}>{aboutP2}</p>
          </div>
          <button
            onClick={() => onScrollTo("contact")}
            style={{
              background: "#3b6ef5",
              color: "#fff",
              padding: "11px 24px",
              borderRadius: 7,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              transition: "background .2s, transform .15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#2f5de0";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#3b6ef5";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            {aboutCta}
          </button>
        </div>
      </div>
    </section>
  );
}
