"use client";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import { COLORS, BORDER_RADIUS } from "@/lib/constants";

const testimonials = [
  {
    quote: "PAPCY transformed our hospital operations with their AI-powered management system. Patient wait times reduced by 40% in just 3 months.",
    name: "Dr. Sarah Kimani",
    title: "Medical Director",
    company: "Nairobi General Hospital",
    rating: 5,
  },
  {
    quote: "The team at PAPCY delivered our pharmacy system ahead of schedule. Their attention to detail and understanding of healthcare workflows is exceptional.",
    name: "James Okonkwo",
    title: "CEO",
    company: "MediPharm Solutions",
    rating: 5,
  },
  {
    quote: "Working with PAPCY was a game-changer for our business. Their AI consulting helped us identify automation opportunities we never knew existed.",
    name: "Amina Hassan",
    title: "Operations Manager",
    company: "TechVentures Africa",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: COLORS.background.dark }}
    >
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
            Testimonials
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
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: BORDER_RADIUS.lg,
                padding: "32px",
                position: "relative",
              }}
            >
              {/* Quote Icon */}
              <FormatQuoteIcon
                style={{
                  fontSize: "3rem",
                  color: COLORS.brand.primary,
                  opacity: 0.3,
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                }}
              />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    style={{
                      fontSize: "1.25rem",
                      color: COLORS.brand.primary,
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(118, 185, 0, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: COLORS.brand.primary,
                    fontWeight: 700,
                    fontSize: "1.125rem",
                  }}
                >
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      color: COLORS.background.light,
                      fontSize: "1rem",
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
