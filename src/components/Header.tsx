"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { COLORS, BORDER_RADIUS } from "@/lib/constants";
import { services, products } from "@/lib/navigation";
import AnimatedLogo from "./AnimatedLogo";

const containerStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  border: `1px solid ${COLORS.border.light}`,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
};

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header
        className="hidden lg:block fixed z-50 transition-all duration-300"
        style={{ top: 16, left: 16, right: 16 }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", maxWidth: "1400px", margin: "0 auto" }}>
          {/* Left - Logo */}
          <LogoSection />

          {/* Center - Navigation */}
          <NavSection activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

          {/* Right - Actions */}
          <ActionsSection />
        </div>

        {/* Mega Menus */}
        {activeMenu === "services" && (
          <MegaMenuWrapper onMouseEnter={() => setActiveMenu("services")} onMouseLeave={() => setActiveMenu(null)}>
            <ServicesMegaMenu />
          </MegaMenuWrapper>
        )}
        {activeMenu === "products" && (
          <MegaMenuWrapper onMouseEnter={() => setActiveMenu("products")} onMouseLeave={() => setActiveMenu(null)}>
            <ProductsMegaMenu />
          </MegaMenuWrapper>
        )}
      </header>

      {/* Mobile Header */}
      <MobileHeader isOpen={mobileMenuOpen} toggle={() => setMobileMenuOpen(!mobileMenuOpen)} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

function LogoSection() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
      <AnimatedLogo size="md" />
    </Link>
  );
}

interface NavSectionProps {
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
}

function NavSection({ activeMenu, setActiveMenu }: NavSectionProps) {
  return (
    <nav style={{ ...containerStyle, borderRadius: BORDER_RADIUS.xl, padding: "8px 8px", display: "flex", alignItems: "center", gap: "4px" }}>
      <NavButton
        label="Services"
        isActive={activeMenu === "services"}
        onMouseEnter={() => setActiveMenu("services")}
        onMouseLeave={() => setActiveMenu(null)}
      />
      <NavButton
        label="Products"
        isActive={activeMenu === "products"}
        onMouseEnter={() => setActiveMenu("products")}
        onMouseLeave={() => setActiveMenu(null)}
      />
      <NavLink href="/about">About</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/careers">Careers</NavLink>
    </nav>
  );
}

function ActionsSection() {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div style={{ ...containerStyle, borderRadius: BORDER_RADIUS.xl, padding: "8px 8px", display: "flex", alignItems: "center", gap: "8px" }}>
      {/* Language Selector */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setLangOpen(!langOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "8px 12px",
            borderRadius: BORDER_RADIUS.md,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: COLORS.text.secondary,
            fontSize: "0.9rem",
          }}
        >
          <LanguageIcon style={{ width: "20px", height: "20px" }} />
          EN
          <KeyboardArrowDownIcon style={{ width: "18px", height: "18px", transform: langOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
        </button>

        {langOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              marginTop: "8px",
              backgroundColor: COLORS.background.light,
              borderRadius: BORDER_RADIUS.md,
              border: `1px solid ${COLORS.border.light}`,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              padding: "8px 0",
              minWidth: "120px",
            }}
          >
            {["English", "French", "Spanish", "German"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLangOpen(false)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "8px 16px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  color: COLORS.text.primary,
                  fontSize: "0.9rem",
                }}
                className="hover:bg-gray-100"
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Contact Us Button */}
      <Link
        href="/contact"
        className="group"
        style={{
          backgroundColor: COLORS.brand.primary,
          color: COLORS.background.dark,
          fontWeight: 600,
          padding: "10px 20px",
          borderRadius: "9999px",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.9rem",
        }}
      >
        Contact Us
        <ArrowOutwardIcon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" style={{ width: "16px", height: "16px" }} />
      </Link>
    </div>
  );
}

interface NavButtonProps {
  label: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function NavButton({ label, isActive, onMouseEnter, onMouseLeave }: NavButtonProps) {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        padding: "10px 16px",
        borderRadius: BORDER_RADIUS.md,
        border: "none",
        cursor: "pointer",
        fontSize: "0.9rem",
        fontWeight: 500,
        backgroundColor: isActive ? COLORS.brand.primary : "transparent",
        color: isActive ? COLORS.background.dark : COLORS.text.primary,
        transition: "all 0.2s",
      }}
      className={!isActive ? "hover:bg-[#76b900] hover:text-black" : ""}
    >
      {label}
      <KeyboardArrowDownIcon
        style={{
          width: "18px",
          height: "18px",
          transition: "transform 0.2s",
          transform: isActive ? "rotate(180deg)" : "rotate(0)",
        }}
      />
    </button>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        padding: "10px 16px",
        borderRadius: BORDER_RADIUS.md,
        textDecoration: "none",
        color: COLORS.text.primary,
        fontSize: "0.9rem",
        fontWeight: 500,
      }}
      className="hover:bg-[#76b900] hover:text-black"
    >
      {children}
    </Link>
  );
}

function MegaMenuWrapper({ children, onMouseEnter, onMouseLeave }: { children: React.ReactNode; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ position: "absolute", top: "100%", left: 0, right: 0, display: "flex", justifyContent: "center", paddingTop: "8px" }}
    >
      <div
        style={{
          ...containerStyle,
          borderRadius: BORDER_RADIUS.lg,
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ServicesMegaMenu() {
  const categories = Object.entries(services);

  return (
    <div style={{ padding: "32px 48px", display: "flex" }}>
      {categories.map(([category, items], index) => (
        <div key={category} style={{ flex: 1, display: "flex" }}>
          <div style={{ flex: 1, paddingRight: "32px" }}>
            <h3 style={{ color: COLORS.brand.primary, fontWeight: 600, marginBottom: "20px", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {category}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {items.map((item) => (
                <li key={item.name} style={{ marginBottom: "16px" }}>
                  <Link href={item.href} style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }} className="group">
                    <div>
                      <span className="group-hover:text-[#76b900] transition-colors" style={{ color: COLORS.text.primary, fontWeight: 500, display: "block", fontSize: "0.95rem" }}>
                        {item.name}
                      </span>
                      <p style={{ color: COLORS.text.muted, fontSize: "0.8rem", marginTop: "4px" }}>{item.description}</p>
                    </div>
                    <ArrowForwardIcon className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ width: "18px", height: "18px", color: COLORS.brand.primary, flexShrink: 0, marginLeft: "12px" }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {index < categories.length - 1 && <div style={{ width: "1px", backgroundColor: COLORS.border.light, marginRight: "32px" }} />}
        </div>
      ))}
    </div>
  );
}

function ProductsMegaMenu() {
  return (
    <div style={{ padding: "32px 48px", display: "flex", gap: "48px" }}>
      <div style={{ flex: 2 }}>
        <h3 style={{ color: COLORS.brand.primary, fontWeight: 600, marginBottom: "20px", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Our Products
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              target={product.href.startsWith("http") ? "_blank" : undefined}
              style={{ textDecoration: "none", display: "flex", alignItems: "flex-start", gap: "12px", padding: "16px", borderRadius: BORDER_RADIUS.md, border: `1px solid ${COLORS.border.light}`, transition: "all 0.2s" }}
              className="group hover:border-[#76b900] hover:shadow-md"
            >
              <div style={{ width: "48px", height: "48px", borderRadius: BORDER_RADIUS.sm, backgroundColor: COLORS.brand.light, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: COLORS.brand.primary, fontWeight: 700, fontSize: "1.25rem" }}>{product.name.charAt(0)}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span className="group-hover:text-[#76b900] transition-colors" style={{ color: COLORS.text.primary, fontWeight: 600 }}>{product.name}</span>
                  {product.featured && <span style={{ padding: "2px 8px", fontSize: "0.7rem", backgroundColor: COLORS.brand.light, color: COLORS.brand.primary, borderRadius: "9999px" }}>Featured</span>}
                </div>
                <p style={{ color: COLORS.text.muted, fontSize: "0.8rem" }}>{product.description}</p>
              </div>
              <ArrowOutwardIcon className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" style={{ width: "18px", height: "18px", color: COLORS.brand.primary, flexShrink: 0 }} />
            </Link>
          ))}
        </div>
      </div>
      <div style={{ width: "1px", backgroundColor: COLORS.border.light }} />
      <div style={{ flex: 1 }}>
        <h3 style={{ color: COLORS.brand.primary, fontWeight: 600, marginBottom: "20px", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Resources</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {[{ name: "Documentation", href: "/docs" }, { name: "API Reference", href: "/api" }, { name: "Support Center", href: "/support" }].map((item) => (
            <li key={item.name} style={{ marginBottom: "12px" }}>
              <Link href={item.href} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }} className="group">
                <span className="group-hover:text-[#76b900] transition-colors" style={{ color: COLORS.text.primary, fontWeight: 500 }}>{item.name}</span>
                <ArrowForwardIcon className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ width: "16px", height: "16px", color: COLORS.brand.primary }} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Mobile Header
function MobileHeader({ isOpen, toggle, onClose }: { isOpen: boolean; toggle: () => void; onClose: () => void }) {
  return (
    <header className="lg:hidden fixed z-50" style={{ top: 16, left: 16, right: 16 }}>
      <div style={{ ...containerStyle, borderRadius: BORDER_RADIUS.xl, padding: "12px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <AnimatedLogo size="md" />
          </Link>
          <button onClick={toggle} style={{ color: COLORS.text.primary, padding: "8px", background: "none", border: "none", cursor: "pointer" }}>
            {isOpen ? <CloseIcon style={{ width: "24px", height: "24px" }} /> : <MenuIcon style={{ width: "24px", height: "24px" }} />}
          </button>
        </div>

        {isOpen && (
          <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: `1px solid ${COLORS.border.light}` }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <MobileSection title="Services">
                {Object.entries(services).map(([category, items]) => (
                  <div key={category} style={{ marginBottom: "12px" }}>
                    <p style={{ color: COLORS.text.muted, fontSize: "0.875rem", marginBottom: "4px" }}>{category}</p>
                    <div style={{ paddingLeft: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
                      {items.map((item) => (
                        <Link key={item.name} href={item.href} style={{ color: COLORS.text.primary, textDecoration: "none", padding: "4px 0" }} onClick={onClose}>{item.name}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </MobileSection>

              <MobileSection title="Products">
                <div style={{ paddingLeft: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  {products.map((product) => (
                    <Link key={product.name} href={product.href} target={product.href.startsWith("http") ? "_blank" : undefined} style={{ color: COLORS.text.primary, textDecoration: "none", padding: "4px 0" }} onClick={onClose}>{product.name}</Link>
                  ))}
                </div>
              </MobileSection>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Link href="/about" style={{ color: COLORS.text.primary, textDecoration: "none", padding: "4px 0" }} onClick={onClose}>About</Link>
                <Link href="/blog" style={{ color: COLORS.text.primary, textDecoration: "none", padding: "4px 0" }} onClick={onClose}>Blog</Link>
                <Link href="/careers" style={{ color: COLORS.text.primary, textDecoration: "none", padding: "4px 0" }} onClick={onClose}>Careers</Link>
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <Link href="/contact" style={{ flex: 1, padding: "12px", borderRadius: BORDER_RADIUS.md, backgroundColor: COLORS.brand.primary, textDecoration: "none", color: COLORS.background.dark, textAlign: "center", fontWeight: 600 }} onClick={onClose}>Contact Us</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p style={{ color: COLORS.brand.primary, fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>{title}</p>
      {children}
    </div>
  );
}
