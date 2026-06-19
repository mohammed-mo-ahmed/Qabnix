"use client";

export function HamburgerMenu({
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
