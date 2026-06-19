"use client";
import type { ReactNode } from "react";

export function Navbar({
  siteName,
  navItems,
  navPhone,
  langBtn,
  navCta,
  menuOpen,
  isRtl,
  onMenuToggle,
  onScrollTo,
  onLangToggle,
  renderLogo,
}: {
  siteName: string;
  navItems: { label: string; id: string }[];
  navPhone: string;
  langBtn: string;
  navCta: string;
  menuOpen: boolean;
  isRtl: boolean;
  onMenuToggle: () => void;
  onScrollTo: (id: string) => void;
  onLangToggle: () => void;
  renderLogo: () => ReactNode;
}) {
  return (
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
        <button
          onClick={() => onScrollTo("hero")}
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
          {renderLogo()}
        </button>

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
                onClick={() => onScrollTo(item.id)}
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
            {navPhone}
          </span>

          <button
            onClick={onLangToggle}
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
            {langBtn}
          </button>

          <button
            onClick={() => onScrollTo("contact")}
            className="nav-cta-btn"
            style={{
              background: "#3b6ef5",
              color: "#fff",
              padding: "7px 16px",
              borderRadius: 7,
              fontSize: 12.5,
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              transition: "background .2s, transform .15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "#2f5de0")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "#3b6ef5")
            }
          >
            {navCta}
          </button>

          <button
            className="hamburger-btn"
            onClick={onMenuToggle}
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
  );
}
