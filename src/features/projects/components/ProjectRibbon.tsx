"use client";
import type { ReactNode, PointerEvent } from "react";

type Project = {
  name: string;
  desc: string;
  image?: string;
  gradient: string;
};

export function ProjectRibbon({
  projects,
  title,
  trackRef,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
}: {
  projects: Project[];
  title: string;
  trackRef: React.RefObject<HTMLDivElement | null>;
  onPointerDown: (e: PointerEvent<HTMLDivElement>) => void;
  onPointerMove: (e: PointerEvent<HTMLDivElement>) => void;
  onPointerUp: () => void;
  onPointerCancel: () => void;
}) {
  return (
    <div style={{ marginTop: 48 }}>
      <h3 style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 700, color: "#0f172a", textAlign: "center", marginBottom: 32 }}>
        {title}
      </h3>
      <div
        className="projects-ribbon"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div ref={trackRef} className="projects-track" style={{ transform: "translateX(0)" }}>
          {[...projects, ...projects].map((project, i) => (
            <div key={i} className="project-card">
              <div
                className="project-card-img"
                style={{
                  background: project.gradient,
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      inset: 0,
                      userSelect: "none",
                    }}
                  />
                )}
              </div>
              <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <h4 style={{ fontSize: ".95rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>{project.name}</h4>
                <p style={{ fontSize: ".8rem", color: "#64748b", lineHeight: 1.7, margin: 0 }}>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
