"use client";

import { useState } from "react";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { COLORS } from "@/lib/constants";

const services = [
  {
    number: "01",
    title: "AI Solutions",
    description: "Custom AI-powered applications, machine learning models, and intelligent automation to transform your business operations.",
    items: ["AI Products", "AI Consulting", "Machine Learning", "Automation"],
    href: "/services/ai-solutions",
  },
  {
    number: "02",
    title: "Development",
    description: "Modern, scalable web and mobile applications built with cutting-edge technologies for optimal performance.",
    items: ["Web Development", "Mobile Apps", "Desktop Software", "Custom Solutions"],
    href: "/services/development",
  },
  {
    number: "03",
    title: "Support",
    description: "Expert guidance and ongoing support to ensure your systems run smoothly and your team stays productive.",
    items: ["IT Consulting", "Maintenance", "Training", "24/7 Support"],
    href: "/services/support",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block border-t border-white/10 py-10 transition-all"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: hoveredIndex === index ? "rgba(118,185,0,0.05)" : "transparent",
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                {/* Number */}
                <span
                  style={{
                    color: COLORS.brand.primary,
                    fontSize: "1rem",
                    fontWeight: 600,
                    fontFamily: "monospace",
                    minWidth: "40px",
                  }}
                >
                  {service.number}
                </span>

                {/* Title */}
                <h3
                  className="transition-all"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                    fontWeight: 700,
                    color: hoveredIndex === index ? COLORS.brand.primary : "#fff",
                    minWidth: "280px",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="flex-1 transition-all"
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.6,
                    opacity: hoveredIndex === index ? 1 : 0.7,
                  }}
                >
                  {service.description}
                </p>

                {/* Arrow */}
                <div
                  className="transition-all"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0.3,
                    transform: hoveredIndex === index ? "translateX(8px)" : "translateX(0)",
                  }}
                >
                  <ArrowForwardIcon
                    style={{
                      color: COLORS.brand.primary,
                      fontSize: "2rem",
                    }}
                  />
                </div>
              </div>

              {/* Service Items - shows on hover */}
              <div
                className="flex flex-wrap gap-3 mt-6 ml-0 lg:ml-[52px] transition-all overflow-hidden"
                style={{
                  maxHeight: hoveredIndex === index ? "100px" : "0",
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
              >
                {service.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "0.8125rem",
                      padding: "8px 16px",
                      borderRadius: "100px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
