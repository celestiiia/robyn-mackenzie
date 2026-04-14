// =====================================================================
// Hamburger Nav Toggle
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.burger-button'),
    0
  );

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('opened');
        $target.classList.toggle('is-active');

        el.ariaExpanded = el.ariaExpanded !== 'true';
        $target.ariaExpanded = $target.ariaExpanded !== 'true';
      });
    });
  }
});

// =====================================================================
// Copy-to-Clipboard for Email
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
  const copyBtns = document.querySelectorAll('.copy-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = btn.dataset.email;
      const confirm = btn.nextElementSibling;

      const showConfirm = () => {
        if (confirm && confirm.classList.contains('copy-confirm')) {
          confirm.classList.add('visible');
          setTimeout(() => {
            confirm.classList.remove('visible');
          }, 2000);
        }
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(showConfirm).catch(() => {
          fallbackCopy(email, showConfirm);
        });
      } else {
        fallbackCopy(email, showConfirm);
      }
    });
  });

  function fallbackCopy(text, callback) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      callback();
    } catch (e) {
      console.warn('Copy failed:', e);
    }
    document.body.removeChild(textarea);
  }
});

// =====================================================================
// FAQ Accordion
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const panel = trigger.nextElementSibling;

      // Close all items
      triggers.forEach(t => {
        t.setAttribute('aria-expanded', 'false');
        const p = t.nextElementSibling;
        if (p) p.hidden = true;
      });

      // Open clicked item if it was closed
      if (!isExpanded) {
        trigger.setAttribute('aria-expanded', 'true');
        if (panel) panel.hidden = false;
      }
    });
  });
});
