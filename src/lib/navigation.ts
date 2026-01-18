// Navigation data - Separated from UI components (Single Responsibility)

export interface NavItem {
  name: string;
  description: string;
  href: string;
}

export interface Product extends NavItem {
  featured?: boolean;
}

export const services: Record<string, NavItem[]> = {
  "AI Solutions": [
    { name: "AI Products", description: "Custom AI-powered applications", href: "/services/ai-products" },
    { name: "AI Consulting", description: "Strategic AI implementation guidance", href: "/services/ai-consulting" },
    { name: "Machine Learning", description: "ML models and data solutions", href: "/services/machine-learning" },
    { name: "Automation", description: "Process automation with AI", href: "/services/automation" },
  ],
  "Development": [
    { name: "Web Development", description: "Modern, scalable web applications", href: "/services/web-development" },
    { name: "Mobile Apps", description: "iOS and Android applications", href: "/services/mobile-apps" },
    { name: "Desktop Software", description: "Cross-platform desktop solutions", href: "/services/desktop-software" },
    { name: "Custom Solutions", description: "Tailored software for your needs", href: "/services/custom-solutions" },
  ],
  "Support": [
    { name: "IT Consulting", description: "Expert technology guidance", href: "/services/it-consulting" },
    { name: "Maintenance", description: "Ongoing support and updates", href: "/services/maintenance" },
    { name: "Training", description: "Team upskilling and workshops", href: "/services/training" },
  ],
};

export const products: Product[] = [
  { name: "MedSoftwares", description: "Healthcare management solutions", href: "https://medsoftwares.com", featured: true },
  { name: "PharmaPOS", description: "Pharmacy management system", href: "https://medsoftwares.com/pharmapos" },
  { name: "HospitalOS", description: "Hospital management platform", href: "https://medsoftwares.com/hospitalos" },
];
