"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { COLORS } from "@/lib/constants";

const projects = [
  {
    title: "WeCare Property",
    category: "Real Estate",
    description: "Property management platform connecting landlords, tenants, and service providers across multiple locations.",
    image: "/images/projects/project-3.png",
    href: "#",
  },
  {
    title: "Currency Circle",
    category: "Fintech",
    description: "Digital currency exchange platform with real-time rates and secure transactions for African markets.",
    image: "/images/projects/project-4.png",
    href: "#",
  },
  {
    title: "Mautolink",
    category: "Automotive",
    description: "Automotive marketplace connecting buyers, sellers, and service centers across Africa.",
    image: "/images/projects/project-5.png",
    href: "https://mautolink.com",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: COLORS.background.dark }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span
            style={{
              color: COLORS.brand.primary,
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Case Studies
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
            Client Projects
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.6)",
              marginTop: "16px",
              maxWidth: "600px",
            }}
          >
            Custom solutions we&apos;ve built for businesses across various industries
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Project List */}
          <div className="space-y-0">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="border-t border-white/10 cursor-pointer transition-all"
                onMouseEnter={() => setActiveIndex(index)}
                style={{
                  backgroundColor: activeIndex === index ? "rgba(118,185,0,0.05)" : "transparent",
                }}
              >
                <div className="py-6 px-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <span
                        style={{
                          color: COLORS.brand.primary,
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          fontFamily: "monospace",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className="transition-colors"
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: activeIndex === index ? COLORS.brand.primary : "#fff",
                        }}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.5)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <p
                    className="ml-12 transition-all"
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.6,
                      maxHeight: activeIndex === index ? "100px" : "0",
                      opacity: activeIndex === index ? 1 : 0,
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>

          {/* Right: Image Preview */}
          <div className="relative sticky top-24">
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "16px",
                aspectRatio: "4/3",
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? "scale(1)" : "scale(1.05)",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}

              {/* Overlay with link */}
              <Link
                href={projects[activeIndex].href}
                target={projects[activeIndex].href !== "#" ? "_blank" : undefined}
                rel={projects[activeIndex].href !== "#" ? "noopener noreferrer" : undefined}
                className="absolute inset-0 flex items-end justify-between p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity"
              >
                <div>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: "1.25rem" }}>
                    {projects[activeIndex].title}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>
                    {projects[activeIndex].category}
                  </p>
                </div>
                {projects[activeIndex].href !== "#" && (
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: COLORS.brand.primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ArrowOutwardIcon style={{ color: "#000", fontSize: "1.5rem" }} />
                  </div>
                )}
              </Link>
            </div>

            {/* Project indicators */}
            <div className="flex gap-2 mt-4 justify-center">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="transition-all"
                  style={{
                    width: activeIndex === index ? "32px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    backgroundColor: activeIndex === index ? COLORS.brand.primary : "rgba(255,255,255,0.3)",
                    border: "none",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
