"use client";

export function ContactSection({
  contactLabel,
  contactTitle,
  contactDesc,
  contactName,
  contactLink,
  contactMsg,
  contactSend,
  contactOrEmail,
  contactEmailAddr,
  contactWhatsapp,
  isRtl,
  formState,
  loading,
  sent,
  onFormChange,
  onSubmit,
}: {
  contactLabel: string;
  contactTitle: string;
  contactDesc: string;
  contactName: string;
  contactLink: string;
  contactMsg: string;
  contactSend: string;
  contactOrEmail: string;
  contactEmailAddr: string;
  contactWhatsapp: string;
  isRtl: boolean;
  formState: { name: string; contact: string; msg: string };
  loading: boolean;
  sent: boolean;
  onFormChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const getButtonLabel = () => {
    if (sent) return isRtl ? "✓ تم الإرسال!" : "✓ Sent!";
    if (loading) return isRtl ? "جاري الإرسال..." : "Sending...";
    return contactSend;
  };

  const inputStyle = (extra?: React.CSSProperties): React.CSSProperties => ({
    padding: "12px 16px",
    borderRadius: 8,
    border: "1px solid #e8ecf0",
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    width: "100%",
    boxSizing: "border-box",
    textAlign: isRtl ? "right" : "left",
    transition: "border .2s",
    ...extra,
  });

  return (
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
            {contactLabel}
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
            {contactTitle}
          </h2>
          <p style={{ fontSize: ".9rem", color: "#64748b", maxWidth: 480, margin: "0 auto" }}>
            {contactDesc}
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
          <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <input
              type="text"
              required
              placeholder={contactName}
              value={formState.name}
              onChange={(e) => onFormChange("name", e.target.value)}
              style={inputStyle()}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #3b6ef5")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #e8ecf0")}
            />
            <input
              type="text"
              required
              placeholder={contactLink}
              value={formState.contact}
              onChange={(e) => onFormChange("contact", e.target.value)}
              style={inputStyle()}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #3b6ef5")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #e8ecf0")}
            />
            <textarea
              required
              placeholder={contactMsg}
              rows={5}
              value={formState.msg}
              onChange={(e) => onFormChange("msg", e.target.value)}
              style={inputStyle({ resize: "vertical" })}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #3b6ef5")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #e8ecf0")}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                background: "#3b6ef5",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: 7,
                fontSize: 14,
                fontWeight: 600,
                cursor: loading ? "not-allowed" : "pointer",
                border: "none",
                opacity: loading ? 0.7 : 1,
                transition: "background .2s, transform .15s",
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
              <a
                href="https://wa.me/+201110008687"
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
                {contactWhatsapp}
              </a>

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
                    {contactOrEmail}
                  </div>
                  <a href={`mailto:${contactEmailAddr}`} style={{ fontSize: 14, fontWeight: 700, color: "#3b6ef5" }}>
                    {contactEmailAddr}
                  </a>
                </div>
              </div>

              <div style={{ height: 1, background: "#e8ecf0" }} />

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
                  <a href="tel:+201110008687" style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>
                    ‎+20 1110008687
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
