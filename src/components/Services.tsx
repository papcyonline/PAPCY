"use client";

import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CodeIcon from "@mui/icons-material/Code";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { COLORS, BORDER_RADIUS } from "@/lib/constants";
import { services } from "@/lib/navigation";

const categoryIcons: Record<string, React.ReactNode> = {
  "AI Solutions": <AutoAwesomeIcon style={{ fontSize: "2rem" }} />,
  "Development": <CodeIcon style={{ fontSize: "2rem" }} />,
  "Support": <SupportAgentIcon style={{ fontSize: "2rem" }} />,
};

export default function Services() {
  return (
    <section
      className="py-24 px-6 relative"
      style={{ backgroundColor: COLORS.brand.primary }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/services-bg.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "500px",
          opacity: 0.1,
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            style={{
              color: COLORS.background.dark,
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            What We Do
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginTop: "12px",
              letterSpacing: "-0.02em",
              background: "linear-gradient(180deg, #ffffff 0%, #888888 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Services We Offer
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "rgba(0,0,0,0.7)",
              marginTop: "16px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            From AI-powered solutions to custom software development, we help businesses thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(services).map(([category, items]) => (
            <div
              key={category}
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: BORDER_RADIUS.lg,
                padding: "32px",
                transition: "all 0.3s ease",
              }}
              className="hover:border-white/30 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  style={{
                    backgroundColor: "rgba(118, 185, 0, 0.15)",
                    borderRadius: BORDER_RADIUS.md,
                    padding: "12px",
                    color: COLORS.brand.primary,
                  }}
                >
                  {categoryIcons[category]}
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: COLORS.background.light,
                  }}
                >
                  {category}
                </h3>
              </div>

              {/* Service Items */}
              <div className="space-y-4">
                {items.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="group/item flex items-start gap-3 p-3 -mx-3 rounded-lg transition-all hover:bg-white/5"
                  >
                    <ArrowOutwardIcon
                      style={{
                        color: COLORS.brand.primary,
                        fontSize: "1.25rem",
                        marginTop: "2px",
                        opacity: 0.5,
                        transition: "all 0.2s ease",
                      }}
                      className="group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
                    />
                    <div>
                      <span
                        style={{
                          color: COLORS.background.light,
                          fontWeight: 600,
                          fontSize: "1rem",
                          display: "block",
                        }}
                      >
                        {service.name}
                      </span>
                      <span
                        style={{
                          color: "rgba(255,255,255,0.5)",
                          fontSize: "0.875rem",
                        }}
                      >
                        {service.description}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
