/**
 * WorkCard — matches Framer Work component (iP4LR9lMK)
 *
 * Features:
 * - Square aspect-ratio card (505×505px in Framer, 1:1 in CSS)
 * - Full-bleed background image with scale-on-hover
 * - Gradient overlay + Heading 4 title revealed on hover
 * - Links to project detail page
 *
 * Framer text style for title: /Heading 4
 *   Inter-Medium (500), 48px, lh 1.2em, ls -0.05em
 */

import { useState } from "react";

interface WorkCardProps {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
}

export function WorkCard({ title, href, imageSrc, imageAlt }: WorkCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "block",
        aspectRatio: "1",
        overflow: "hidden",
        backgroundColor: "rgb(245, 245, 245)",
        textDecoration: "none",
        color: "inherit",
      }}
      aria-label={`View ${title} project`}
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt={imageAlt ?? title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 300ms ease",
          transform: hovered ? "scale(1.03)" : "scale(1)",
        }}
      />

      {/* Hover overlay with gradient + title */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "clamp(24px, 4vw, 50px)",
          display: "flex",
          alignItems: "flex-end",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 300ms ease",
        }}
      >
        <h2
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
            fontWeight: 500,
            lineHeight: "1.2em",
            letterSpacing: "-0.05em",
            color: "rgb(255, 255, 255)",
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>
    </a>
  );
}
