import type { Metadata } from "next";
import localFont from "next/font/local";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const signature = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
});

const nacelle = localFont({
  src: [
    { path: "../../public/fonts/Nacelle-Thin.otf", weight: "100", style: "normal" },
    { path: "../../public/fonts/Nacelle-ThinItalic.otf", weight: "100", style: "italic" },
    { path: "../../public/fonts/Nacelle-UltraLight.otf", weight: "200", style: "normal" },
    { path: "../../public/fonts/Nacelle-UltraLightItalic.otf", weight: "200", style: "italic" },
    { path: "../../public/fonts/Nacelle-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Nacelle-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../../public/fonts/Nacelle-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Nacelle-Italic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/Nacelle-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Nacelle-SemiBoldItalic.otf", weight: "600", style: "italic" },
    { path: "../../public/fonts/Nacelle-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Nacelle-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../../public/fonts/Nacelle-Heavy.otf", weight: "800", style: "normal" },
    { path: "../../public/fonts/Nacelle-HeavyItalic.otf", weight: "800", style: "italic" },
    { path: "../../public/fonts/Nacelle-Black.otf", weight: "900", style: "normal" },
    { path: "../../public/fonts/Nacelle-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-nacelle",
});

export const metadata: Metadata = {
  title: "PAPCY - AI-Powered Software Solutions",
  description: "PAPCY is an AI-focused technology company specializing in AI products, consulting, web development, mobile apps, and desktop software.",
  keywords: ["AI", "software development", "consulting", "web development", "mobile apps", "desktop software"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nacelle.variable} ${signature.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
