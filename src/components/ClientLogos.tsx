"use client";

import { COLORS } from "@/lib/constants";

const clients = [
  { name: "MedSoftwares", initials: "MS" },
  { name: "TechVentures", initials: "TV" },
  { name: "HealthPlus", initials: "H+" },
  { name: "AfriBank", initials: "AB" },
  { name: "SmartLogistics", initials: "SL" },
  { name: "EduTech Africa", initials: "EA" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: COLORS.background.dark }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <p
          className="text-center mb-12"
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "1rem",
            fontWeight: 500,
          }}
        >
          Trusted by leading companies across Africa
        </p>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {/* Logo Placeholder */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS.background.light,
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  transition: "all 0.3s ease",
                }}
                className="group-hover:bg-[#76b900] group-hover:text-black"
              >
                {client.initials}
              </div>
              <span
                style={{
                  color: COLORS.background.light,
                  fontWeight: 600,
                  fontSize: "1.125rem",
                }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
