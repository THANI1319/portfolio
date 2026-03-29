/* ═══════════════════════════════════════════
   js/theme.js — Light / Dark Toggle
═══════════════════════════════════════════ */

(function () {
  const html  = document.documentElement;
  const btn   = document.getElementById('themeToggle');
  const icon  = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');

  /* Restore saved preference */
  const saved = localStorage.getItem('portfolio-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  updateUI(saved);

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    updateUI(next);
  });

  function updateUI(theme) {
    if (theme === 'dark') {
      icon.textContent  = '☀️';
      label.textContent = 'LIGHT';
    } else {
      icon.textContent  = '🌙';
      label.textContent = 'DARK';
    }
  }
})();
