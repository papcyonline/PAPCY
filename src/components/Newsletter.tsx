"use client";

import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { COLORS, BORDER_RADIUS } from "@/lib/constants";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <section className="py-24 px-6" style={{ backgroundColor: COLORS.background.dark }}>
      <div
        className="max-w-4xl mx-auto text-center"
        style={{
          backgroundColor: "rgba(118, 185, 0, 0.1)",
          border: `1px solid ${COLORS.brand.primary}`,
          borderRadius: BORDER_RADIUS.xl,
          padding: "clamp(32px, 8vw, 64px)",
        }}
      >
        {/* Header */}
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            marginBottom: "12px",
            letterSpacing: "-0.02em",
            background: "linear-gradient(180deg, #ffffff 0%, #888888 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Stay Updated
        </h2>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "32px",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Subscribe to our newsletter for the latest AI insights, product updates, and industry news.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{
              flex: 1,
              padding: "16px 20px",
              borderRadius: BORDER_RADIUS.md,
              border: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "rgba(255,255,255,0.05)",
              color: COLORS.background.light,
              fontSize: "1rem",
              outline: "none",
            }}
            className="focus:border-[#76b900] transition-colors"
          />
          <button
            type="submit"
            className="group flex items-center justify-center gap-2"
            style={{
              padding: "16px 32px",
              borderRadius: BORDER_RADIUS.md,
              backgroundColor: COLORS.brand.primary,
              color: COLORS.background.dark,
              fontWeight: 700,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Subscribe
            <SendIcon
              style={{ fontSize: "1.25rem" }}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </form>

        {/* Privacy Note */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.4)",
            marginTop: "16px",
          }}
        >
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
