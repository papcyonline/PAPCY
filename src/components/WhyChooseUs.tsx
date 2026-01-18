"use client";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { COLORS, BORDER_RADIUS } from "@/lib/constants";

const reasons = [
  {
    icon: <RocketLaunchIcon style={{ fontSize: "2rem" }} />,
    title: "AI-First Approach",
    description: "We integrate AI into every solution, ensuring your business stays ahead of the curve.",
  },
  {
    icon: <GroupsIcon style={{ fontSize: "2rem" }} />,
    title: "Expert Team",
    description: "Skilled developers, designers, and AI specialists with years of industry experience.",
  },
  {
    icon: <SecurityIcon style={{ fontSize: "2rem" }} />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee for all our solutions.",
  },
  {
    icon: <SupportAgentIcon style={{ fontSize: "2rem" }} />,
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your systems run smoothly at all times.",
  },
  {
    icon: <TrendingUpIcon style={{ fontSize: "2rem" }} />,
    title: "Scalable Solutions",
    description: "Built to grow with your business, from startup to enterprise scale.",
  },
  {
    icon: <IntegrationInstructionsIcon style={{ fontSize: "2rem" }} />,
    title: "Seamless Integration",
    description: "Our solutions integrate smoothly with your existing tools and workflows.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: COLORS.background.dark }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            style={{
              color: COLORS.brand.primary,
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Why PAPCY
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
            Why Choose Us
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "rgba(255,255,255,0.6)",
              marginTop: "16px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group"
              style={{
                padding: "32px",
                backgroundColor: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: BORDER_RADIUS.lg,
                transition: "all 0.3s ease",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(118, 185, 0, 0.1)",
                  borderRadius: BORDER_RADIUS.md,
                  color: COLORS.brand.primary,
                  marginBottom: "20px",
                  transition: "all 0.3s ease",
                }}
                className="group-hover:bg-[#76b900] group-hover:text-black"
              >
                {reason.icon}
              </div>

              {/* Content */}
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: COLORS.background.light,
                  marginBottom: "12px",
                }}
              >
                {reason.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
