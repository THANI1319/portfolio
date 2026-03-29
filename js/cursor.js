/* ═══════════════════════════════════════════
   js/cursor.js — Custom Cursor & Trail
═══════════════════════════════════════════ */

(function () {
  const cursor = document.getElementById('cursor');
  const trail  = document.getElementById('cursor-trail');

  let mx = 0, my = 0;  // actual mouse position
  let tx = 0, ty = 0;  // trail position (lerped)

  // Move cursor dot instantly
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  // Animate trail with lerp
  function animateTrail() {
    tx += (mx - tx) * 0.12;
    ty += (my - ty) * 0.12;
    trail.style.left = tx + 'px';
    trail.style.top  = ty + 'px';
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // Grow cursor on interactive elements
  const interactiveSelectors = 'a, button, .flip-card, .skill-category, .cert-card, .contact-item, .stat-card, .timeline-card';

  document.querySelectorAll(interactiveSelectors).forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '20px';
      cursor.style.height = '20px';
      trail.style.width   = '56px';
      trail.style.height  = '56px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '12px';
      cursor.style.height = '12px';
      trail.style.width   = '36px';
      trail.style.height  = '36px';
    });
  });
})();
