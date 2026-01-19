"use client";

import { COLORS } from "@/lib/constants";

const clients = [
  { name: "MedSoftwares" },
  { name: "TechVentures Africa" },
  { name: "HealthPlus Kenya" },
  { name: "AfriBank" },
  { name: "SmartLogistics" },
  { name: "EduTech Africa" },
  { name: "Savanna Telecom" },
  { name: "FinoBank" },
  { name: "GreenEnergy Co" },
  { name: "DataFlow Systems" },
];

export default function ClientLogos() {
  const doubledClients = [...clients, ...clients];

  return (
    <section
      className="py-16 overflow-hidden"
      style={{ backgroundColor: COLORS.background.dark }}
    >
      {/* Section Header */}
      <p
        className="text-center mb-10 px-6"
        style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: "0.875rem",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        Trusted by innovative companies worldwide
      </p>

      {/* Scrolling Logos */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, ${COLORS.background.dark} 0%, transparent 100%)`,
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(270deg, ${COLORS.background.dark} 0%, transparent 100%)`,
          }}
        />

        {/* Marquee */}
        <div
          className="flex items-center gap-16 hover:[animation-play-state:paused]"
          style={{
            animation: "scrollLogos 30s linear infinite",
          }}
        >
          {doubledClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="shrink-0 flex items-center gap-3 group cursor-pointer"
            >
              {/* Logo placeholder */}
              <div
                className="transition-all group-hover:bg-[#76b900] group-hover:text-black"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                }}
              >
                {client.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
              </div>
              <span
                className="transition-colors group-hover:text-white"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  whiteSpace: "nowrap",
                }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
