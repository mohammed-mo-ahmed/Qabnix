"use client";
import { ServiceIcon } from "@/features/icons";

export function ServicesSection({
  whatWeDo,
  servicesTitle,
  labels,
  serviceRefs,
}: {
  whatWeDo: string;
  servicesTitle: string[];
  labels: string[];
  serviceRefs: React.RefObject<(HTMLDivElement | null)[]>;
}) {
  const pushRef = (i: number) => (el: HTMLDivElement | null) => {
    const arr = serviceRefs.current;
    if (arr) arr[i] = el;
  };

  return (
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
            {whatWeDo}
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
            {servicesTitle[0]}<br />{servicesTitle[1]}
          </h2>
        </div>

        <div className="services-grid-desktop"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto auto", gap: 3, background: "#e8ecf0", border: "1px solid #e8ecf0", borderRadius: 14, overflow: "hidden" }}>
          {([0, 1, 3, 4] as const).map((id, i) => {
            const pos = [
              { gridColumn: 1, gridRow: 1 },
              { gridColumn: 3, gridRow: 1 },
              { gridColumn: 1, gridRow: 2 },
              { gridColumn: 3, gridRow: 2 },
            ][i];
            return (
              <div key={id} ref={pushRef(i)}
                style={{ ...pos, background: "#fff", padding: "32px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, transition: "background .2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#f8faff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#fff")}
              >
                <ServiceIcon id={id} />
                <h3 style={{ fontSize: ".88rem", fontWeight: 600, color: "#0f172a", lineHeight: 1.4, margin: 0 }}>{[labels[0], labels[1], labels[3], labels[4]][i]}</h3>
              </div>
            );
          })}
          <div ref={pushRef(4)}
            style={{ gridColumn: 2, gridRow: "1 / 3", background: "#fff", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 14, transition: "background .2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#f8faff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#fff")}
          >
            <ServiceIcon id={2} />
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.4, margin: 0 }}>{labels[2]}</h3>
          </div>
        </div>

        <div className="services-grid-mobile"
          style={{ display: "none", gridTemplateColumns: "1fr 1fr", gap: 3, background: "#e8ecf0", border: "1px solid #e8ecf0", borderRadius: 14, overflow: "hidden" }}>
          {([
            { id: 0, label: labels[0] },
            { id: 1, label: labels[1] },
            { id: 2, label: labels[2] },
            { id: 3, label: labels[3] },
            { id: 4, label: labels[4] },
            { id: 5, label: labels[5] },
          ] as { id: number; label: string }[]).map(({ id, label }) => (
            <div key={id}
              style={{ background: "#fff", padding: "28px 16px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12, transition: "background .2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#f8faff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#fff")}
            >
              <ServiceIcon id={id} />
              <h3 style={{ fontSize: ".82rem", fontWeight: 600, color: "#0f172a", lineHeight: 1.4, margin: 0 }}>{label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
