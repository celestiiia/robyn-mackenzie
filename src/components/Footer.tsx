/**
 * Footer — matches Framer Footer component (VY9qRujfw)
 *
 * Features:
 * - Full-viewport-height black section
 * - Social links top-right (LinkedIn, Instagram) — /Button Small style
 * - CTA text: "Interested in turning good ideas into great experiences?
 *   Get in touch." — /Heading 4 (Inter 500, 48px, -0.05em)
 * - "Contact Me" pill button (white bg, black text)
 * - "Available For Work" with pulsing white dot
 * - Bottom row: email + "RM ©2026"
 */

interface FooterProps {
  email?: string;
  year?: number;
}

export function Footer({ email = "mail@robynmackenzie.com", year = 2026 }: FooterProps) {
  return (
    <footer
      style={{
        backgroundColor: "rgb(0, 0, 0)",
        color: "rgb(255, 255, 255)",
        minHeight: "100vh",
        padding: "60px clamp(1.25rem, 6.67vw, 5rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1600px",
          marginInline: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "calc(100vh - 120px)",
          gap: "40px",
        }}
      >
        {/* Social links — top right */}
        <div style={{ display: "flex", gap: "26px", justifyContent: "flex-end" }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/robynjmackenzie/" },
            { label: "Instagram", href: "https://www.instagram.com/sleepyrobyn/" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, Arial, sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                color: "rgb(255, 255, 255)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* CTA block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <p
            style={{
              fontFamily: "Inter, Arial, sans-serif",
              fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
              fontWeight: 500,
              lineHeight: "1.2em",
              letterSpacing: "-0.05em",
              color: "rgb(255, 255, 255)",
              maxWidth: "700px",
              margin: 0,
            }}
          >
            Interested in turning good ideas into great experiences? Get in touch.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "40px", flexWrap: "wrap" }}>
            {/* Available For Work indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ position: "relative", width: "10px", height: "10px", flexShrink: 0 }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "-4px",
                    borderRadius: "50%",
                    border: "1px solid rgb(255, 255, 255)",
                    animation: "pulse-ring 2s ease-in-out infinite",
                  }}
                />
              </div>
              <span style={{ fontFamily: "Inter, Arial, sans-serif", fontSize: "1rem", lineHeight: "1.6em", color: "rgb(255,255,255)" }}>
                Available For Work
              </span>
            </div>

            {/* Contact button */}
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "Inter, Arial, sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "rgb(0, 0, 0)",
                backgroundColor: "rgb(255, 255, 255)",
                padding: "14px 28px",
                borderRadius: "100px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span style={{ fontFamily: "Inter, Arial, sans-serif", fontSize: "1rem", lineHeight: "1.6em", color: "rgb(255,255,255)" }}>
            email: {email}
          </span>
          <span style={{ fontFamily: "Inter, Arial, sans-serif", fontSize: "1rem", lineHeight: "1.6em", color: "rgb(255,255,255)" }}>
            RM ©{year}
          </span>
        </div>
      </div>

      {/* Pulse ring keyframes — injected inline for portability */}
      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </footer>
  );
}
