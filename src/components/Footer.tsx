"use client";

import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import { COLORS } from "@/lib/constants";
import { services } from "@/lib/navigation";

const footerLinks = {
  Services: Object.values(services).flat().slice(0, 5).map(s => ({ name: s.name, href: s.href })),
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socials = [
  { icon: <LinkedInIcon />, href: "https://linkedin.com/company/papcy", label: "LinkedIn" },
  { icon: <XIcon />, href: "https://x.com/papcy", label: "X (Twitter)" },
  { icon: <GitHubIcon />, href: "https://github.com/papcy", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: COLORS.background.light,
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
                maxWidth: "300px",
              }}
            >
              Empowering businesses with AI-driven solutions. We build software that transforms the way you work.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <LocationOnIcon style={{ color: COLORS.brand.primary, fontSize: "1.25rem" }} />
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                  Nairobi, Kenya
                </span>
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
                  href="tel:+254700000000"
                  style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}
                  className="hover:text-white transition-colors"
                >
                  +254 700 000 000
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  color: COLORS.background.light,
                  fontWeight: 600,
                  fontSize: "1rem",
                  marginBottom: "20px",
                }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
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
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>
              © {new Date().getFullYear()} PAPCY. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    transition: "color 0.2s ease",
                  }}
                  className="hover:text-[#76b900]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
