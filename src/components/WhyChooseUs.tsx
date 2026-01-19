"use client";

import { useEffect, useRef, useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { COLORS } from "@/lib/constants";

const reasons = [
  {
    icon: <RocketLaunchIcon style={{ fontSize: "1.5rem" }} />,
    title: "AI-First Approach",
    description: "We integrate AI into every solution, ensuring your business stays ahead of the curve. Our team leverages the latest in machine learning, natural language processing, and computer vision to create intelligent systems that learn and adapt.",
    highlights: ["Custom AI Models", "Predictive Analytics", "Process Automation"],
  },
  {
    icon: <GroupsIcon style={{ fontSize: "1.5rem" }} />,
    title: "Expert Team",
    description: "Our team consists of skilled developers, designers, and AI specialists with years of industry experience. We bring together diverse expertise to tackle complex challenges and deliver exceptional results.",
    highlights: ["Senior Engineers", "AI Specialists", "UX Designers"],
  },
  {
    icon: <SecurityIcon style={{ fontSize: "1.5rem" }} />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security is built into everything we create. With 99.9% uptime guarantee and comprehensive data protection measures, your business operations remain safe and uninterrupted.",
    highlights: ["Data Encryption", "99.9% Uptime", "Compliance Ready"],
  },
  {
    icon: <SupportAgentIcon style={{ fontSize: "1.5rem" }} />,
    title: "24/7 Support",
    description: "Round-the-clock support ensures your systems run smoothly at all times. Our dedicated support team is always ready to help, whether it's a quick question or an urgent issue that needs immediate attention.",
    highlights: ["Always Available", "Fast Response", "Dedicated Team"],
  },
  {
    icon: <TrendingUpIcon style={{ fontSize: "1.5rem" }} />,
    title: "Scalable Solutions",
    description: "Built to grow with your business, from startup to enterprise scale. Our architecture decisions are made with future growth in mind, ensuring your systems can handle increased demand without costly rebuilds.",
    highlights: ["Cloud Native", "Flexible Architecture", "Growth Ready"],
  },
  {
    icon: <IntegrationInstructionsIcon style={{ fontSize: "1.5rem" }} />,
    title: "Seamless Integration",
    description: "Our solutions integrate smoothly with your existing tools and workflows. We understand that businesses rely on various systems, and we ensure our solutions work harmoniously within your tech ecosystem.",
    highlights: ["API-First", "Third-Party Compatible", "Easy Migration"],
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: COLORS.background.dark }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
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
        </div>

        {/* Scroll-driven layout */}
        <div ref={containerRef} className="relative">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 min-h-[50vh] py-12"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Left: Sticky Title */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <div className="flex items-start gap-4">
                  {/* Vertical Line & Dot */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className="transition-all duration-300"
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: activeIndex === index ? COLORS.brand.primary : "rgba(255,255,255,0.2)",
                        boxShadow: activeIndex === index ? `0 0 20px ${COLORS.brand.primary}` : "none",
                      }}
                    />
                    {index < reasons.length - 1 && (
                      <div
                        style={{
                          width: "2px",
                          height: "calc(100% + 48px)",
                          background: `linear-gradient(180deg, ${activeIndex === index ? COLORS.brand.primary : "rgba(255,255,255,0.1)"} 0%, rgba(255,255,255,0.1) 100%)`,
                          position: "absolute",
                          top: "16px",
                        }}
                      />
                    )}
                  </div>

                  {/* Title Content */}
                  <div>
                    <div
                      className="flex items-center gap-3 mb-3 transition-all duration-300"
                      style={{
                        color: activeIndex === index ? COLORS.brand.primary : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {reason.icon}
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3
                      className="transition-all duration-300"
                      style={{
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        fontWeight: 700,
                        color: activeIndex === index ? "#fff" : "rgba(255,255,255,0.4)",
                        lineHeight: 1.2,
                      }}
                    >
                      {reason.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-8 lg:pl-8">
                <p
                  className="transition-all duration-300"
                  style={{
                    fontSize: "1.125rem",
                    color: activeIndex === index ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)",
                    lineHeight: 1.8,
                    marginBottom: "24px",
                  }}
                >
                  {reason.description}
                </p>

                {/* Highlights */}
                <div
                  className="flex flex-wrap gap-3 transition-all duration-300"
                  style={{
                    opacity: activeIndex === index ? 1 : 0.4,
                  }}
                >
                  {reason.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      style={{
                        backgroundColor: activeIndex === index ? "rgba(118,185,0,0.15)" : "rgba(255,255,255,0.05)",
                        color: activeIndex === index ? COLORS.brand.primary : "rgba(255,255,255,0.5)",
                        fontSize: "0.875rem",
                        padding: "8px 16px",
                        borderRadius: "100px",
                        border: `1px solid ${activeIndex === index ? "rgba(118,185,0,0.3)" : "transparent"}`,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
