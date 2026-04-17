// =====================================================================
// Mobile Navigation Toggle
// =====================================================================
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".nav-burger");
  const closeBtn = document.querySelector(".nav-mobile-close");
  const mobileMenu = document.querySelector(".nav-mobile-menu");

  function openMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
  }
  function closeMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  }

  if (burger) burger.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  // Close on link click
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  // Keyboard: Escape closes menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});

// =====================================================================
// Copy-to-Clipboard (email)
// =====================================================================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const email = btn.dataset.email;
      const confirm = btn.nextElementSibling;

      const show = () => {
        if (confirm?.classList.contains("copy-confirm")) {
          confirm.classList.add("visible");
          setTimeout(() => confirm.classList.remove("visible"), 2000);
        }
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(show).catch(() => fallback(email, show));
      } else {
        fallback(email, show);
      }
    });
  });

  function fallback(text, cb) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); cb(); } catch (e) { console.warn(e); }
    document.body.removeChild(ta);
  }
});

// =====================================================================
// FAQ Accordion
// =====================================================================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      const panel = trigger.nextElementSibling;

      // Close all
      document.querySelectorAll(".faq-trigger").forEach((t) => {
        t.setAttribute("aria-expanded", "false");
        const p = t.nextElementSibling;
        if (p) p.hidden = true;
      });

      // Open clicked
      if (!expanded) {
        trigger.setAttribute("aria-expanded", "true");
        if (panel) panel.hidden = false;
      }
    });
  });
});
