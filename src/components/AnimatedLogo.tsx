"use client";

import { useEffect, useState } from "react";
import { COLORS } from "@/lib/constants";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function AnimatedLogo({ size = "md", className = "" }: AnimatedLogoProps) {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [letterProgress, setLetterProgress] = useState<number[]>([0, 0, 0, 0, 0]);
  const [phase, setPhase] = useState<"writing" | "underline" | "pause" | "fading">("writing");
  const [showCursor, setShowCursor] = useState(true);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const fullText = "Papcy";
  const pauseTime = 4000;

  const fontSize = {
    sm: "1.75rem",
    md: "2.25rem",
    lg: "3rem",
  }[size];

  // Fixed width to prevent layout shift
  const minWidth = {
    sm: "85px",
    md: "110px",
    lg: "140px",
  }[size];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let animationFrame: number;

    const animate = () => {
      if (phase === "writing") {
        // Animate each letter being "drawn"
        const newProgress = [...letterProgress];
        let allComplete = true;

        for (let i = 0; i <= visibleLetters && i < fullText.length; i++) {
          if (newProgress[i] < 100) {
            newProgress[i] = Math.min(newProgress[i] + 8, 100);
            allComplete = false;
          }
        }

        setLetterProgress(newProgress);

        // Move to next letter when current is partially done
        if (letterProgress[visibleLetters] > 50 && visibleLetters < fullText.length - 1) {
          setVisibleLetters(visibleLetters + 1);
        }

        if (allComplete && visibleLetters === fullText.length - 1) {
          setPhase("underline");
        }

        timeout = setTimeout(animate, 30);
      } else if (phase === "underline") {
        if (underlineWidth < 100) {
          setUnderlineWidth((prev) => Math.min(prev + 6, 100));
          timeout = setTimeout(animate, 15);
        } else {
          setPhase("pause");
          timeout = setTimeout(animate, pauseTime);
        }
      } else if (phase === "pause") {
        setPhase("fading");
        timeout = setTimeout(animate, 50);
      } else if (phase === "fading") {
        if (opacity > 0) {
          setOpacity((prev) => Math.max(prev - 0.05, 0));
          setUnderlineWidth((prev) => Math.max(prev - 5, 0));
          timeout = setTimeout(animate, 30);
        } else {
          // Reset everything
          setVisibleLetters(0);
          setLetterProgress([0, 0, 0, 0, 0]);
          setUnderlineWidth(0);
          setOpacity(1);
          setPhase("writing");
          timeout = setTimeout(animate, 500);
        }
      }
    };

    timeout = setTimeout(animate, 300);

    return () => {
      clearTimeout(timeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [phase, visibleLetters, letterProgress, underlineWidth, opacity]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-signature)",
        fontSize,
        fontWeight: 400,
        color: COLORS.background.light,
        letterSpacing: "0.01em",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",
        opacity,
        minWidth,
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", position: "relative" }}>
        {fullText.split("").map((char, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              position: "relative",
              clipPath: `inset(0 ${100 - letterProgress[index]}% 0 0)`,
              transition: "clip-path 0.03s linear",
              opacity: letterProgress[index] > 0 ? 1 : 0,
            }}
          >
            {char}
          </span>
        ))}
        {/* Cursor */}
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "0.7em",
            backgroundColor: COLORS.brand.primary,
            marginLeft: "3px",
            opacity: showCursor && phase !== "fading" ? 1 : 0,
            transition: "opacity 0.1s",
            borderRadius: "1px",
            boxShadow: showCursor ? `0 0 10px ${COLORS.brand.primary}` : "none",
            transform: "translateY(2px)",
          }}
        />
      </span>
      {/* Signature underline - swoosh style */}
      <svg
        style={{
          position: "absolute",
          bottom: "-2px",
          left: "0",
          width: "100%",
          height: "12px",
          overflow: "visible",
        }}
      >
        <path
          d={`M 0 6 Q ${underlineWidth * 0.5}% 0, ${underlineWidth}% 8`}
          fill="none"
          stroke={COLORS.brand.primary}
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            filter: `drop-shadow(0 0 3px ${COLORS.brand.primary})`,
          }}
        />
      </svg>
    </span>
  );
}
