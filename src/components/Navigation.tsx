/**
 * Navigation — matches Framer Navigation component (x8X7x6HpE)
 *
 * Features:
 * - "RM" text logo (Inter Bold) linking to /
 * - Desktop: inline links (Work, About, Contact, LinkedIn ↗, Instagram ↗)
 * - Mobile: full-screen overlay menu with large links
 * - Sticky positioning, white bg, 1px border-bottom in rgb(245,245,245)
 * - Padding: 30px 36px (desktop), 20px (mobile) — matches Framer nav padding
 */

import { useState, useEffect } from "react";

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/robynjmackenzie/", external: true },
  { label: "Instagram", href: "https://www.instagram.com/sleepyrobyn/", external: true },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Desktop / Tablet nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "rgb(255, 255, 255)",
          borderBottom: "1px solid rgb(245, 245, 245)",
          padding: "30px 36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            fontSize: "1.125rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "rgb(0,0,0)",
            textDecoration: "none",
            lineHeight: 1,
          }}
        >
          RM
        </a>

        {/* Desktop links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "30px" }}
          role="list"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "Inter, Arial, sans-serif",
                fontSize: "1.125rem",
                fontWeight: 500,
                letterSpacing: "-0.06em",
                color: "rgb(0,0,0)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {link.label}
              {link.external && (
                <span style={{ fontSize: "0.8em", opacity: 0.5 }}> ↗</span>
              )}
            </a>
          ))}
        </div>

        {/* Burger — mobile only */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          style={{
            display: "none", // shown via CSS media query in a real app
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            color: "rgb(0,0,0)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgb(255, 255, 255)",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "40px",
          }}
        >
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <a href="/" style={{ fontWeight: 700, fontSize: "1.125rem", color: "rgb(0,0,0)", textDecoration: "none" }}>
              RM
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: "1.5rem", color: "rgb(0,0,0)" }}
            >
              ✕
            </button>
          </div>

          {/* Large mobile links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "Inter, Arial, sans-serif",
                  fontSize: "clamp(2rem, 8vw, 4rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: "rgb(0,0,0)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
