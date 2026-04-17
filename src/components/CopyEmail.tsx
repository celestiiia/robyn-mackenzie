/**
 * CopyEmail — matches Framer Copy email component (dUuo7K1ic)
 *
 * Features:
 * - Displays an email address
 * - "Copy" pill button that writes to clipboard
 * - Shows "Copied!" confirmation for 2s, then fades
 * - Works on HTTPS (navigator.clipboard) with execCommand fallback
 */

import { useState } from "react";

interface CopyEmailProps {
  email?: string;
}

export function CopyEmail({ email = "mail@robynmackenzie.com" }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for http / older browsers
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.cssText = "position:fixed;opacity:0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn("Copy failed", err);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
      <span
        style={{
          fontFamily: "Inter, Arial, sans-serif",
          fontSize: "clamp(0.9rem, 1.5vw, 1.25rem)",
          fontWeight: 500,
          letterSpacing: "-0.04em",
        }}
      >
        {email}
      </span>

      <button
        onClick={handleCopy}
        style={{
          fontFamily: "Inter, Arial, sans-serif",
          fontSize: "0.8rem",
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          background: copied ? "rgb(0,0,0)" : "transparent",
          color: copied ? "rgb(255,255,255)" : "rgb(0,0,0)",
          border: "1px solid rgb(0,0,0)",
          padding: "6px 18px",
          borderRadius: "100px",
          cursor: "pointer",
          transition: "background 300ms ease, color 300ms ease",
        }}
        aria-label="Copy email address to clipboard"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Accessible live region for screen readers */}
      <span aria-live="polite" style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}>
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </div>
  );
}
