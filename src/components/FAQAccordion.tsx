/**
 * FAQAccordion — matches Framer FAQ + FAQ Accordion components
 * (SKxaVD4px / VQTLOg4nE)
 *
 * Features:
 * - Single-open accordion (opening one closes others)
 * - "+" icon rotates 45° to "×" when open
 * - Accessible: aria-expanded, hidden panel, keyboard support
 * - Matches Framer /Body Medium text style for questions
 * - Border-top separator rows with bottom border on the list
 * - max-width: 800px (70% of 1200px container, matching Framer)
 */

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "Are you available for freelance work?",
    answer:
      "Yes — I take on content design, UX research, and service design projects. Get in touch via the contact page.",
  },
  {
    question: "What tools do you use?",
    answer:
      "Figma for design and prototyping, Miro for workshops and mapping, and occasionally code (HTML/CSS) for front-end experimentation.",
  },
  {
    question: "What kind of projects do you work on?",
    answer:
      "I'm most interested in work at the intersection of design and service delivery — particularly in public and third-sector contexts. That said, I'm always open to a good brief.",
  },
  {
    question: "Where are you based?",
    answer:
      "Dorset, UK. I work remotely and am happy to travel for the right project.",
  },
];

export function FAQAccordion({ items = DEFAULT_FAQS }: Partial<FAQAccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div
      style={{
        borderBottom: "1px solid rgb(245, 245, 245)",
        width: "100%",
        maxWidth: "800px",
      }}
      role="list"
    >
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{ borderTop: "1px solid rgb(245, 245, 245)" }}
            role="listitem"
          >
            <button
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "transparent",
                border: "none",
                padding: "24px 0",
                fontFamily: "Inter, Arial, sans-serif",
                fontSize: "clamp(0.9rem, 1.5vw, 1.25rem)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                color: "rgb(0, 0, 0)",
                cursor: "pointer",
                textAlign: "left",
                gap: "16px",
                opacity: isOpen ? 1 : 0.9,
              }}
            >
              {item.question}
              <span
                aria-hidden="true"
                style={{
                  fontSize: "1.25rem",
                  lineHeight: 1,
                  flexShrink: 0,
                  display: "inline-block",
                  transition: "transform 300ms ease",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>

            {isOpen && (
              <div style={{ paddingBottom: "24px" }}>
                <p
                  style={{
                    fontFamily: "Inter, Arial, sans-serif",
                    fontSize: "clamp(0.9rem, 1.5vw, 1.25rem)",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: "rgb(51, 51, 51)",
                    margin: 0,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
