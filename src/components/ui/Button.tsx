"use client";

import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { COLORS, BORDER_RADIUS } from "@/lib/constants";
import { ReactNode, CSSProperties } from "react";

// Button variants - Open/Closed principle (open for extension via variants)
type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  arrow?: "outward" | "forward";
  external?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    backgroundColor: COLORS.brand.primary,
    color: COLORS.background.dark,
    border: "none",
  },
  secondary: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: COLORS.background.light,
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
};

const baseStyles: CSSProperties = {
  fontWeight: 600,
  padding: "16px 32px",
  borderRadius: BORDER_RADIUS.md,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  transition: "all 0.2s",
  cursor: "pointer",
};

const ArrowIcon = ({ type }: { type: "outward" | "forward" }) => {
  const iconStyle = { width: "20px", height: "20px" };
  const className = type === "outward"
    ? "transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
    : "transition-transform group-hover:translate-x-2";

  return type === "outward"
    ? <ArrowOutwardIcon className={className} style={iconStyle} />
    : <ArrowForwardIcon className={className} style={iconStyle} />;
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = "outward",
  external = false,
  onClick,
  style = {},
}: ButtonProps) {
  const combinedStyles = { ...baseStyles, ...variantStyles[variant], ...style };

  return (
    <Link
      href={href}
      className="group"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      style={combinedStyles}
    >
      {children}
      <ArrowIcon type={arrow} />
    </Link>
  );
}
