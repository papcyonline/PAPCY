"use client";

import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { COLORS } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: COLORS.background.dark }}>
      <div className="max-w-5xl mx-auto">
        {/* CTA Card */}
        <div
          className="relative overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, rgba(118,185,0,0.15) 0%, rgba(118,185,0,0.05) 100%)",
            border: `1px solid rgba(118,185,0,0.3)`,
            borderRadius: "24px",
            padding: "clamp(48px, 10vw, 80px) clamp(24px, 6vw, 64px)",
          }}
        >
          {/* Background decoration */}
          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, ${COLORS.brand.primary} 0%, transparent 70%)`,
            }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, ${COLORS.brand.primary} 0%, transparent 70%)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <span
              style={{
                color: COLORS.brand.primary,
                fontSize: "0.875rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Get Started Today
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                marginTop: "16px",
                marginBottom: "20px",
                letterSpacing: "-0.02em",
                background: "linear-gradient(180deg, #ffffff 0%, #888888 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.2,
              }}
            >
              Ready to Transform
              <br />
              Your Business?
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "40px",
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.7,
              }}
            >
              Let&apos;s discuss how our AI-powered solutions can help you achieve your goals.
              Schedule a free consultation with our experts.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 transition-all"
                style={{
                  backgroundColor: COLORS.brand.primary,
                  color: "#000",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                Start a Project
                <ArrowForwardIcon
                  className="transition-transform group-hover:translate-x-1"
                  style={{ fontSize: "1.25rem" }}
                />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 transition-all hover:text-white"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Explore Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill={COLORS.brand.primary}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                  Free Consultation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill={COLORS.brand.primary}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                  No Commitment
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill={COLORS.brand.primary}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                  Response in 24hrs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
