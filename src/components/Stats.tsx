"use client";

import { useEffect, useRef, useState } from "react";
import { COLORS } from "@/lib/constants";

const stats = [
  { value: 200, suffix: "+", label: "Happy Clients", description: "Businesses transformed" },
  { value: 50, suffix: "+", label: "AI Projects", description: "Deployed successfully" },
  { value: 8, suffix: "+", label: "Years Experience", description: "In the industry" },
  { value: 99.9, suffix: "%", label: "Uptime", description: "Service reliability" },
];

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current * 10) / 10);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, inView]);

  const formatValue = (val: number) => {
    if (Number.isInteger(value)) {
      return Math.floor(val);
    }
    return val.toFixed(1);
  };

  return (
    <span>
      {formatValue(displayValue)}{suffix}
    </span>
  );
}

export default function Stats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6"
      style={{ backgroundColor: COLORS.background.dark }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Divider top */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(118,185,0,0.3) 50%, transparent 100%)",
            marginBottom: "48px",
          }}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${index * 0.1}s`,
              }}
            >
              <p
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  fontWeight: 800,
                  color: COLORS.brand.primary,
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider bottom */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(118,185,0,0.3) 50%, transparent 100%)",
            marginTop: "48px",
          }}
        />
      </div>
    </section>
  );
}
