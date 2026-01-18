"use client";

import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { COLORS, BORDER_RADIUS } from "@/lib/constants";

const projects = [
  {
    title: "MedSoftwares",
    description: "Complete healthcare management ecosystem with patient records, appointments, and billing systems.",
    category: "Healthcare",
    tags: ["AI", "Web App", "Mobile"],
    image: "/images/projects/medsoftwares.png",
    href: "https://medsoftwares.com",
  },
  {
    title: "PharmaPOS",
    description: "Intelligent pharmacy point-of-sale system with inventory management and prescription tracking.",
    category: "Healthcare",
    tags: ["POS", "Inventory", "AI"],
    image: "/images/projects/pharmapos.png",
    href: "https://medsoftwares.com/pharmapos",
  },
  {
    title: "HospitalOS",
    description: "Full-scale hospital management platform handling operations, staff, and patient care workflows.",
    category: "Healthcare",
    tags: ["Enterprise", "Web App", "Integration"],
    image: "/images/projects/hospitalos.png",
    href: "https://medsoftwares.com/hospitalos",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: COLORS.background.dark }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span
              style={{
                color: COLORS.brand.primary,
                fontSize: "0.875rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Our Work
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
              Featured Projects
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "rgba(255,255,255,0.6)",
                marginTop: "12px",
                maxWidth: "500px",
              }}
            >
              Real solutions delivering real results for businesses across industries.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2"
            style={{
              color: COLORS.brand.primary,
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            View All Projects
            <ArrowOutwardIcon
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ fontSize: "1.25rem" }}
            />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: BORDER_RADIUS.lg,
                overflow: "hidden",
                border: "1px solid #2a2a2a",
              }}
              className="group hover:border-[#76b900]/40 transition-all"
            >
              {/* Image */}
              <div
                style={{
                  height: "220px",
                  backgroundColor: "rgba(118,185,0,0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    style={{
                      fontSize: "4rem",
                      fontWeight: 900,
                      color: COLORS.brand.primary,
                      opacity: 0.2,
                    }}
                  >
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <span
                  style={{
                    color: COLORS.brand.primary,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {project.category}
                </span>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: COLORS.background.light,
                    marginTop: "8px",
                    marginBottom: "12px",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        padding: "4px 10px",
                        borderRadius: BORDER_RADIUS.sm,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group/link"
                  style={{
                    color: COLORS.brand.primary,
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                  }}
                >
                  Visit Website
                  <OpenInNewIcon
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    style={{ fontSize: "1.125rem" }}
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
