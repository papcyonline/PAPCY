"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { COLORS } from "@/lib/constants";

const products = [
  {
    id: "pharmapos",
    name: "PharmaPOS",
    tagline: "Complete Pharmacy Management System",
    description: "All-in-one pharmacy management and point-of-sale system with inventory tracking, prescription management, drug interaction checker, and mobile money integration.",
    icon: <LocalPharmacyIcon style={{ fontSize: "2rem" }} />,
    image: "/images/products/pharmapos.png",
    features: [
      "Point of Sale with barcode scanning",
      "Inventory & expiry tracking",
      "NHIS/Insurance claims processing",
      "Mobile money payments",
      "Multi-branch support",
      "Offline capability",
    ],
    stats: { users: "25+", label: "Pharmacies" },
    pricing: "From $299",
    href: "https://medsoftwares.com/pharmapos",
    color: "#4CAF50",
  },
  {
    id: "hospitalos",
    name: "HospitalOS",
    tagline: "Comprehensive Hospital Management",
    description: "End-to-end hospital management system with 25+ integrated modules including patient records, OPD/IPD, billing, laboratory, radiology, pharmacy, and emergency care.",
    icon: <LocalHospitalIcon style={{ fontSize: "2rem" }} />,
    image: "/images/products/hospitalos.png",
    features: [
      "Electronic Health Records (EHR)",
      "OPD & IPD management",
      "Laboratory & radiology modules",
      "Billing & insurance integration",
      "HR, payroll & procurement",
      "25+ integrated modules",
    ],
    stats: { users: "50+", label: "Hospitals" },
    pricing: "From $799",
    href: "https://medsoftwares.com/hospitalos",
    color: "#2196F3",
  },
  {
    id: "passist",
    name: "PAssist AI",
    tagline: "Your Voice-Activated Assistant",
    description: "AI-powered personal assistant that converts voice commands into actions. Manage reminders, finances, tasks, events, and documents by simply speaking.",
    icon: <RecordVoiceOverIcon style={{ fontSize: "2rem" }} />,
    image: "/images/products/passist.png",
    features: [
      "Voice-first interface",
      "Smart reminders & tasks",
      "Expense tracking & budgeting",
      "Wellness check-ins",
      "AI document generation",
      "Cross-platform sync",
    ],
    stats: { users: "50K+", label: "Active Users" },
    pricing: "Free - $24.99/mo",
    href: "https://yomeet.app",
    color: "#9C27B0",
  },
];

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: COLORS.background.dark }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            style={{
              color: COLORS.brand.primary,
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Our Products
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginTop: "12px",
              letterSpacing: "-0.02em",
              background: "linear-gradient(180deg, #ffffff 0%, #888888 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Software Solutions We Offer
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.6)",
              marginTop: "16px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Ready-to-deploy software products built to solve real business challenges
          </p>
        </div>

        {/* Product Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className="flex items-center gap-3 px-6 py-3 rounded-full transition-all"
              style={{
                backgroundColor: activeProduct === index ? COLORS.brand.primary : "rgba(255,255,255,0.05)",
                color: activeProduct === index ? "#000" : "rgba(255,255,255,0.7)",
                border: activeProduct === index ? "none" : "1px solid rgba(255,255,255,0.1)",
                fontWeight: 600,
              }}
            >
              {product.icon}
              <span>{product.name}</span>
            </button>
          ))}
        </div>

        {/* Active Product Display */}
        {products.map((product, index) => (
          <div
            key={product.id}
            className="transition-all duration-500"
            style={{
              display: activeProduct === index ? "block" : "none",
            }}
          >
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-12 rounded-3xl"
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid #2a2a2a",
              }}
            >
              {/* Left: Product Info */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{
                    backgroundColor: `${product.color}20`,
                    color: product.color,
                  }}
                >
                  {product.icon}
                  <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>{product.tagline}</span>
                </div>

                <h3
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: "16px",
                    lineHeight: 1.2,
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    fontSize: "1.0625rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                  }}
                >
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircleIcon style={{ color: COLORS.brand.primary, fontSize: "1.25rem" }} />
                      <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9375rem" }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats & Pricing */}
                <div className="flex flex-wrap items-center gap-8 mb-8">
                  <div>
                    <p style={{ fontSize: "2rem", fontWeight: 800, color: product.color }}>
                      {product.stats.users}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                      {product.stats.label}
                    </p>
                  </div>
                  <div
                    style={{
                      width: "1px",
                      height: "40px",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  />
                  <div>
                    <p style={{ fontSize: "2rem", fontWeight: 800, color: "#fff" }}>
                      {product.pricing}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                      Starting price
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-all hover:gap-3"
                  style={{
                    backgroundColor: product.color,
                    color: "#fff",
                    padding: "14px 28px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  Learn More
                  <ArrowOutwardIcon style={{ fontSize: "1.25rem" }} />
                </Link>
              </div>

              {/* Right: Product Image */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: "#0d0d0d",
                  aspectRatio: "4/3",
                }}
              >
                {/* Placeholder for product image */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}10 0%, transparent 50%)`,
                  }}
                >
                  <div className="text-center">
                    <div
                      className="mx-auto mb-4"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "20px",
                        backgroundColor: `${product.color}20`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: product.color,
                      }}
                    >
                      {product.icon}
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.875rem" }}>
                      Product screenshot
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Product indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className="transition-all"
              style={{
                width: activeProduct === index ? "32px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: activeProduct === index ? products[index].color : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
