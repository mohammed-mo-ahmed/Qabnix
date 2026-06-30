"use client";
import type { ReactNode } from "react";

export function Footer({
  siteName,
  footerDesc,
  footerLinks,
  footerContact,
  navItems,
  contactEmailAddr,
  footerCopy,
  isRtl,
  onScrollTo,
  renderLogo,
  renderSocialIcons,
}: {
  siteName: string;
  footerDesc: string;
  footerLinks: string;
  footerContact: string;
  navItems: { label: string; id: string }[];
  contactEmailAddr: string;
  footerCopy: string;
  isRtl: boolean;
  onScrollTo: (id: string) => void;
  renderLogo: () => ReactNode;
  renderSocialIcons: () => ReactNode;
}) {
  return (
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
              {renderLogo()}
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
              {footerDesc}
            </p>
          </div>

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
              {footerLinks}
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
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onScrollTo(item.id)}
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
                onClick={() => onScrollTo("contact")}
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
                {footerContact}
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
                  href={`mailto:${contactEmailAddr}`}
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
                  {contactEmailAddr}
                </a>
              </li>
              <li>
                <a
                  href="tel:+201110008687"
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
                  ‎+20 1110008687
                </a>
              </li>
            </ul>
          </div>
        </div>

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
            {footerCopy}
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            {renderSocialIcons()}
          </div>
        </div>
      </div>
    </footer>
  );
}
