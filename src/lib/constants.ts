// Brand colors - Single source of truth (DRY)
export const COLORS = {
  brand: {
    primary: "#76b900",
    light: "#f0fce0",
  },
  text: {
    primary: "#111827",
    secondary: "#4b5563",
    muted: "#6b7280",
    light: "#9ca3af",
  },
  background: {
    dark: "#000000",
    light: "#ffffff",
  },
  border: {
    light: "#e5e7eb",
  },
} as const;

// Shared style constants
export const BORDER_RADIUS = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "60px",
} as const;
