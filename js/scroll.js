/* ═══════════════════════════════════════════
   js/scroll.js — Scroll Progress, Reveal, Navbar
═══════════════════════════════════════════ */

(function () {

  /* ─── Scroll Progress Bar ─── */
  const progressBar = document.getElementById('scroll-progress');

  function updateProgress() {
    const scrolled = window.scrollY;
    const total    = document.body.scrollHeight - window.innerHeight;
    const pct      = total > 0 ? (scrolled / total) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  /* ─── Navbar hide on scroll down ─── */
  const nav = document.getElementById('navbar');
  let lastScrollY = 0;

  function handleNavbar() {
    const y = window.scrollY;
    if (y > lastScrollY && y > 100) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastScrollY = y;
  }

  window.addEventListener('scroll', () => {
    updateProgress();
    handleNavbar();
  });

  /* ─── Reveal on Scroll (IntersectionObserver) ─── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger each card in the same batch
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
  });

})();
