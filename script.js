(function() {
  const header = document.querySelector('.site-header');
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('navLinks');

  // Mobile nav toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu on link click
    navLinks.addEventListener('click', (e) => {
      if (e.target.matches('a')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll-spy via IntersectionObserver
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach(a => {
      const isActive = a.getAttribute('href') === `#${id}`;
      if (a.classList.contains('nav-contact-btn')) {
        // For contact button, add active styling
        if (isActive) {
          a.style.background = 'var(--brand-dark)';
        } else {
          a.style.background = 'var(--brand)';
        }
      } else {
        a.classList.toggle('active', isActive);
      }
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });

  sections.forEach(section => observer.observe(section));

  // Update copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();


