"use client";

import { useState } from "react";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { COLORS } from "@/lib/constants";

// TikTok icon (not available in MUI)
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "AI Solutions", href: "/services/ai-solutions" },
      { name: "Web Development", href: "/services/development" },
      { name: "Mobile Apps", href: "/services/development" },
      { name: "IT Consulting", href: "/services/support" },
      { name: "24/7 Support", href: "/services/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Help Center", href: "/help" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
];

const socials = [
  { icon: <FacebookIcon style={{ fontSize: "1.25rem" }} />, href: "https://facebook.com/papcyonline", label: "Facebook" },
  { icon: <InstagramIcon style={{ fontSize: "1.25rem" }} />, href: "https://instagram.com/papcyonline", label: "Instagram" },
  { icon: <XIcon style={{ fontSize: "1.25rem" }} />, href: "https://x.com/papcyonline", label: "X (Twitter)" },
  { icon: <LinkedInIcon style={{ fontSize: "1.25rem" }} />, href: "https://linkedin.com/company/papcy", label: "LinkedIn" },
  { icon: <YouTubeIcon style={{ fontSize: "1.25rem" }} />, href: "https://youtube.com/@papcyonline", label: "YouTube" },
  { icon: <TikTokIcon />, href: "https://tiktok.com/@papcyonline", label: "TikTok" },
  { icon: <TelegramIcon style={{ fontSize: "1.25rem" }} />, href: "https://t.me/papcyonline", label: "Telegram" },
];

// Mobile Accordion Component
function FooterAccordion({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 md:border-none">
      {/* Mobile: Clickable header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 md:hidden"
      >
        <h4
          style={{
            color: "#fff",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          {title}
        </h4>
        <KeyboardArrowDownIcon
          style={{
            color: "rgba(255,255,255,0.5)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>

      {/* Desktop: Static header */}
      <h4
        className="hidden md:block"
        style={{
          color: "#fff",
          fontWeight: 600,
          fontSize: "1rem",
          marginBottom: "20px",
        }}
      >
        {title}
      </h4>

      {/* Links */}
      <ul
        className="overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 md:!pb-0"
        style={{
          maxHeight: isOpen ? "300px" : "0",
          opacity: isOpen ? 1 : 0,
          paddingBottom: isOpen ? "16px" : "0",
        }}
      >
        {links.map((link) => (
          <li key={link.name} className="mb-3">
            <Link
              href={link.href}
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.875rem",
              }}
              className="hover:text-[#76b900] transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a" }}>
      {/* Top Divider */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(118,185,0,0.5) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Brand Column */}
          <div className="lg:w-[320px] shrink-0">
            <Link href="/" className="inline-block mb-6">
              <span
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                PAPCY
              </span>
            </Link>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              Empowering businesses with AI-driven solutions. We build innovative software that transforms the way you work.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <LocationOnIcon style={{ color: COLORS.brand.primary, fontSize: "1.25rem", marginTop: "2px" }} />
                <div>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", display: "block" }}>
                    896-S State St, Unit #417
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                    Dover, Delaware 19901, USA
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon style={{ color: COLORS.brand.primary, fontSize: "1.25rem" }} />
                <a
                  href="mailto:hello@papcy.com"
                  style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}
                  className="hover:text-white transition-colors"
                >
                  hello@papcy.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon style={{ color: COLORS.brand.primary, fontSize: "1.25rem" }} />
                <a
                  href="tel:+13025551234"
                  style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}
                  className="hover:text-white transition-colors"
                >
                  +1 (302) 555-1234
                </a>
              </div>
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center gap-3 mt-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-[#76b900] transition-colors"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "8px",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Vertical Divider - Desktop Only */}
          <div
            className="hidden lg:block shrink-0"
            style={{
              width: "1px",
              background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent 100%)",
            }}
          />

          {/* Links Columns - Accordion on Mobile */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerLinks.map((section) => (
              <FooterAccordion key={section.title} title={section.title} links={section.links} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent 100%)",
          }}
        />

        {/* Social Links - Mobile */}
        <div className="flex md:hidden items-center justify-center gap-3 mb-8">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="hover:text-[#76b900] transition-colors"
              style={{
                color: "rgba(255,255,255,0.5)",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: "8px",
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent 100%)",
            marginBottom: "24px",
          }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8125rem", textAlign: "center" }}>
            © {new Date().getFullYear()} PAPCY. All rights reserved.
          </p>

          {/* Center Links */}
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}
              className="hover:text-white transition-colors"
            >
              Privacy
            </a>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <a
              href="/terms"
              style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}
              className="hover:text-white transition-colors"
            >
              Terms
            </a>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <a
              href="/cookies"
              style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}
              className="hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>

          {/* Location */}
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", textAlign: "center" }}>
            Delaware, USA 🇺🇸 • Africa 🌍
          </p>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div
        style={{
          height: "3px",
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.brand.primary} 50%, transparent 100%)`,
        }}
      />
    </footer>
  );
}
