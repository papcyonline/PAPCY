"use client";

import Image from "next/image";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import { COLORS } from "@/lib/constants";

const testimonials = [
  {
    quote: "PAPCY transformed our hospital operations with their AI-powered management system. Patient wait times reduced by 40% in just 3 months.",
    name: "Dr. Sarah Kimani",
    title: "Medical Director",
    company: "Nairobi General Hospital",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "The team at PAPCY delivered our pharmacy system ahead of schedule. Their attention to detail and understanding of healthcare workflows is exceptional.",
    name: "James Okonkwo",
    title: "CEO",
    company: "MediPharm Solutions",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Working with PAPCY was a game-changer for our business. Their AI consulting helped us identify automation opportunities we never knew existed.",
    name: "Amina Hassan",
    title: "Operations Manager",
    company: "TechVentures Africa",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote: "The AI solutions provided by PAPCY have revolutionized how we handle customer service. Response times are down 60% and satisfaction is at an all-time high.",
    name: "David Mwangi",
    title: "CTO",
    company: "Savanna Telecom",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    quote: "From concept to deployment, PAPCY exceeded our expectations. Their mobile app development team is world-class and truly understands user experience.",
    name: "Grace Achieng",
    title: "Product Manager",
    company: "FinoBank",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote: "PAPCY's support team is incredible. They're always available and go above and beyond to ensure our systems run smoothly around the clock.",
    name: "Michael Otieno",
    title: "IT Director",
    company: "EastAfrica Logistics",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <article
    className="shrink-0"
    style={{
      width: "400px",
      backgroundColor: "#1a1a1a",
      border: "1px solid #2a2a2a",
      borderRadius: "16px",
      padding: "32px",
      position: "relative",
    }}
  >
    {/* Quote Icon */}
    <FormatQuoteIcon
      style={{
        fontSize: "3rem",
        color: COLORS.brand.primary,
        opacity: 0.2,
        position: "absolute",
        top: "20px",
        right: "20px",
      }}
    />

    {/* Rating */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <StarIcon
          key={i}
          style={{
            fontSize: "1rem",
            color: COLORS.brand.primary,
          }}
        />
      ))}
    </div>

    {/* Quote */}
    <p
      style={{
        fontSize: "0.9375rem",
        color: "rgba(255,255,255,0.8)",
        lineHeight: 1.8,
        marginBottom: "24px",
        minHeight: "100px",
      }}
    >
      &ldquo;{testimonial.quote}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-center gap-4">
      {/* Avatar */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid rgba(118, 185, 0, 0.3)",
          flexShrink: 0,
        }}
      >
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="object-cover"
        />
      </div>
      <div>
        <p
          style={{
            fontWeight: 600,
            color: "#fff",
            fontSize: "0.9375rem",
          }}
        >
          {testimonial.name}
        </p>
        <p
          style={{
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          {testimonial.title}, {testimonial.company}
        </p>
      </div>
    </div>
  </article>
);

export default function Testimonials() {
  // Double the testimonials for seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      className="py-24 overflow-hidden"
      style={{ backgroundColor: COLORS.background.dark }}
    >
      {/* Section Header */}
      <div className="text-center mb-16 px-6">
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

      {/* Scrolling Testimonials - Row 1 (Right to Left) */}
      <div className="relative mb-6">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, ${COLORS.background.dark} 0%, transparent 100%)`,
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(270deg, ${COLORS.background.dark} 0%, transparent 100%)`,
          }}
        />

        {/* Marquee */}
        <div
          className="flex gap-6 hover:[animation-play-state:paused]"
          style={{
            animation: "scrollLeft 40s linear infinite",
          }}
        >
          {doubledTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Scrolling Testimonials - Row 2 (Left to Right) */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, ${COLORS.background.dark} 0%, transparent 100%)`,
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(270deg, ${COLORS.background.dark} 0%, transparent 100%)`,
          }}
        />

        {/* Marquee - Reverse direction */}
        <div
          className="flex gap-6 hover:[animation-play-state:paused]"
          style={{
            animation: "scrollRight 40s linear infinite",
          }}
        >
          {doubledTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
