"use client";

type FaqItem = { q: string; a: string };

export function FaqSection({
  faqLabel,
  faqTitle,
  faq,
  openFaq,
  isRtl,
  onToggle,
}: {
  faqLabel: string;
  faqTitle: string;
  faq: FaqItem[];
  openFaq: number | null;
  isRtl: boolean;
  onToggle: (i: number) => void;
}) {
  return (
    <section id="faq" style={{ padding: "80px 0", background: "#fff", scrollMarginTop: 56 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#3b6ef5", marginBottom: ".75rem" }}>
            {faqLabel}
          </div>
          <h2 style={{ fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)", fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.3, color: "#0f172a", margin: 0 }}>
            {faqTitle}
          </h2>
        </div>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 8 }}>
          {faq.map((item, i) => (
            <div key={i} style={{ border: "1px solid #e8ecf0", borderRadius: 14, overflow: "hidden" }}>
              <button
                onClick={() => onToggle(i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "18px 24px", background: openFaq === i ? "#f8faff" : "#fff", border: "none", cursor: "pointer", textAlign: isRtl ? "right" : "left", fontFamily: "inherit", transition: "background .2s" }}
                onMouseEnter={(e) => { if (openFaq !== i) (e.currentTarget as HTMLButtonElement).style.background = "#f8faff"; }}
                onMouseLeave={(e) => { if (openFaq !== i) (e.currentTarget as HTMLButtonElement).style.background = "#fff"; }}
              >
                <span style={{ fontSize: ".95rem", fontWeight: 600, color: "#0f172a", lineHeight: 1.4, flex: 1 }}>{item.q}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b6ef5" strokeWidth="2" strokeLinecap="round" style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", transition: "transform .25s", flexShrink: 0 }}>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div style={{ maxHeight: openFaq === i ? 300 : 0, overflow: "hidden", transition: "max-height .3s ease" }}>
                <div style={{ padding: "0 24px 18px", fontSize: ".88rem", color: "#64748b", lineHeight: 1.75 }}>{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
