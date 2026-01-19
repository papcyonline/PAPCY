"use client";

import { useEffect, useState } from "react";
import { COLORS } from "@/lib/constants";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px]"
      style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
    >
      <div
        className="h-full transition-all duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${COLORS.brand.primary} 0%, #9be82e 100%)`,
          boxShadow: `0 0 10px ${COLORS.brand.primary}, 0 0 5px ${COLORS.brand.primary}`,
        }}
      />
    </div>
  );
}
