"use client";

import { useState, useEffect } from "react";
import { COLORS } from "@/lib/constants";

export default function Hero() {
  const [animated, setAnimated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    const msgTimer = setTimeout(() => setShowMessage(true), 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(msgTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20"
        style={{ backgroundColor: COLORS.brand.primary }}
      />

      <div className="relative z-10 w-full pt-24">
        {/* Main headline */}
        <div className="text-center mb-8 px-6">
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              background: "linear-gradient(180deg, #ffffff 0%, #888888 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The world is moving to AI
          </h1>
        </div>

        {/* Giant Full-Width Chart */}
        <div className="relative mx-auto" style={{ height: "clamp(350px, 55vh, 550px)", width: "90%", maxWidth: "1600px" }}>
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-12 flex flex-col justify-between z-10">
            {["100%", "75%", "50%", "25%", "0%"].map((label) => (
              <span key={label} style={{ color: "rgba(255,255,255,0.3)", fontSize: "clamp(0.625rem, 1vw, 0.75rem)" }}>{label}</span>
            ))}
          </div>

          {/* Chart area */}
          <div className="absolute left-8 right-0 top-0 bottom-0">
            {/* Grid lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ bottom: "48px" }}>
              {[0, 25, 50, 75, 100].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={`${y}%`}
                  x2="100%"
                  y2={`${y}%`}
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />
              ))}
            </svg>

            {/* The Chart SVG */}
            <svg
              viewBox="0 0 1000 400"
              className="w-full"
              style={{ height: "calc(100% - 48px)" }}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="greenLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor={COLORS.brand.primary} />
                </linearGradient>
                <linearGradient id="redLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fca5a5" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
                <linearGradient id="greenFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.brand.primary} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={COLORS.brand.primary} stopOpacity="0" />
                </linearGradient>
                <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="60%" stopColor="white" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="redGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Green area fill */}
              <path
                d="M 0 300 C 80 295 160 280 250 200 S 400 100 500 60 S 700 20 1000 10 L 1000 400 L 0 400 Z"
                fill="url(#greenFill)"
                style={{
                  opacity: animated ? 1 : 0,
                  transition: "opacity 1s ease-out 1s",
                }}
              />

              {/* Red line - Without AI (50 → 5, going down) */}
              <path
                d="M 0 200 C 80 210 160 200 250 200 S 400 280 500 320 S 700 360 1000 380"
                fill="none"
                stroke="url(#redLine)"
                strokeWidth="4"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 1500,
                  strokeDashoffset: animated ? 0 : 1500,
                  transition: "stroke-dashoffset 2s ease-out",
                }}
              />

              {/* Green line - With AI (25 → 97, going up) */}
              <path
                d="M 0 300 C 80 295 160 280 250 200 S 400 100 500 60 S 700 20 1000 10"
                fill="none"
                stroke="url(#greenLine)"
                strokeWidth="5"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 1500,
                  strokeDashoffset: animated ? 0 : 1500,
                  transition: "stroke-dashoffset 2s ease-out 0.3s",
                }}
              />

              {/* Crossing point at 2022 */}
              {animated && (
                <>
                  <circle cx="250" cy="200" r="25" fill="white" opacity="0.1" />
                  <circle cx="250" cy="200" r="12" fill="white" filter="url(#glow)" />
                </>
              )}

              {/* Current year indicator (2026) - at x=750 */}
              {animated && (
                <>
                  <line
                    x1="750"
                    y1="0"
                    x2="750"
                    y2="400"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                    strokeDasharray="8,8"
                  />

                  {/* Current position dot on GREEN line at 2026 (~78%) */}
                  <circle cx="750" cy="45" r="25" fill="white" opacity="0.1" />
                  <circle cx="750" cy="45" r="12" fill="white" filter="url(#glow)" />

                  {/* Current position dot on RED line at 2026 (~15%) */}
                  <circle cx="750" cy="345" r="25" fill="#ef4444" opacity="0.2" />
                  <circle cx="750" cy="345" r="12" fill="#ef4444" filter="url(#glow)" />
                </>
              )}

              {/* End points */}
              {animated && (
                <>
                  <circle cx="1000" cy="10" r="20" fill={COLORS.brand.primary} opacity="0.2" />
                  <circle cx="1000" cy="10" r="10" fill={COLORS.brand.primary} filter="url(#glow)" />
                  <circle cx="1000" cy="380" r="18" fill="#ef4444" opacity="0.2" />
                  <circle cx="1000" cy="380" r="9" fill="#ef4444" filter="url(#glow)" />
                </>
              )}
            </svg>

            {/* Labels on chart */}
            {animated && (
              <>
                {/* With AI label */}
                <div
                  className="absolute flex items-center gap-2"
                  style={{
                    right: "2%",
                    top: "0%",
                    animation: "fadeIn 0.5s ease-out 2s both",
                  }}
                >
                  <span style={{
                    color: COLORS.brand.primary,
                    fontSize: "clamp(1.25rem, 3vw, 2rem)",
                    fontWeight: 800
                  }}>
                    97%
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.75rem, 1.5vw, 1rem)" }}>
                    With AI
                  </span>
                </div>

                {/* Without AI label */}
                <div
                  className="absolute flex items-center gap-2"
                  style={{
                    right: "2%",
                    bottom: "18%",
                    animation: "fadeIn 0.5s ease-out 2s both",
                  }}
                >
                  <span style={{
                    color: "#ef4444",
                    fontSize: "clamp(1.25rem, 3vw, 2rem)",
                    fontWeight: 800
                  }}>
                    5%
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.75rem, 1.5vw, 1rem)" }}>
                    Without AI
                  </span>
                </div>
              </>
            )}

            {/* The Shift callout */}
            {showMessage && (
              <div
                className="absolute"
                style={{
                  left: "25%",
                  top: "35%",
                  transform: "translateX(-50%)",
                  animation: "fadeIn 0.5s ease-out",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.9)",
                    border: `2px solid ${COLORS.brand.primary}`,
                    borderRadius: "12px",
                    padding: "12px 24px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: COLORS.brand.primary, fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 700 }}>
                    The Shift
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)" }}>
                    AI adoption overtakes traditional
                  </div>
                </div>
              </div>
            )}

            {/* 2026 current state labels */}
            {animated && (
              <>
                {/* "Today" badge */}
                <div
                  className="absolute"
                  style={{
                    left: "75%",
                    top: "0%",
                    transform: "translateX(-50%)",
                    animation: "fadeIn 0.5s ease-out 1.5s both",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      borderRadius: "8px",
                      padding: "4px 12px",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ color: "white", fontSize: "clamp(0.625rem, 1.2vw, 0.875rem)", fontWeight: 600 }}>
                      Today
                    </span>
                  </div>
                </div>

                {/* Green line percentage at 2026 */}
                <div
                  className="absolute"
                  style={{
                    left: "78%",
                    top: "8%",
                    animation: "fadeIn 0.5s ease-out 1.8s both",
                  }}
                >
                  <span style={{
                    color: COLORS.brand.primary,
                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                    fontWeight: 700
                  }}>
                    78%
                  </span>
                </div>

                {/* Red line percentage at 2026 */}
                <div
                  className="absolute"
                  style={{
                    left: "78%",
                    bottom: "22%",
                    animation: "fadeIn 0.5s ease-out 1.8s both",
                  }}
                >
                  <span style={{
                    color: "#ef4444",
                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                    fontWeight: 700
                  }}>
                    15%
                  </span>
                </div>
              </>
            )}

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-4">
              {["2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028"].map((year, i) => (
                <span
                  key={year}
                  style={{
                    color: i === 6 ? "white" : i === 2 ? COLORS.brand.primary : "rgba(255,255,255,0.3)",
                    fontSize: "clamp(0.625rem, 1.2vw, 0.875rem)",
                    fontWeight: i === 6 || i === 2 ? 700 : 400,
                  }}
                >
                  {year}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-12 px-6">
          <p
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Where will <span style={{ color: COLORS.brand.primary, fontWeight: 600 }}>your business</span> be?
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
