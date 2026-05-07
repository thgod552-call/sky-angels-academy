
(function () {
  const fab = document.getElementById('fab-main');
  const fabMenu = document.getElementById('fab-menu');

  if (!fab || !fabMenu) return;

  const fabButtons = fabMenu.querySelectorAll('.fab-social');
  let isOpen = false;

  // ── helpers ──────────────────────────────────────────────
  function showBtn(btn) {
    btn.style.opacity = '1';
    btn.style.transform = 'translateY(0) scale(1)';
    btn.style.pointerEvents = 'auto';
  }

  function hideBtn(btn) {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(16px) scale(0.75)';
    btn.style.pointerEvents = 'none';
  }

  // ── toggle ────────────────────────────────────────────────
  fab.addEventListener('click', () => {
    isOpen = !isOpen;

    // Rotate the main FAB icon
    const icon = fab.querySelector('i');
    if (icon) {
      icon.style.transform = isOpen ? 'rotate(45deg)' : 'rotate(0deg)';
      icon.style.transition = 'transform 0.3s ease';
    }

    if (isOpen) {
      fabMenu.style.pointerEvents = 'auto';
      fabButtons.forEach((btn, i) => {
        setTimeout(() => showBtn(btn), i * 65);
      });
    } else {
      fabMenu.style.pointerEvents = 'none';
      [...fabButtons].reverse().forEach((btn, i) => {
        setTimeout(() => hideBtn(btn), i * 65);
      });
    }
  });

  // ── close on outside click ────────────────────────────────
  document.addEventListener('click', (e) => {
    if (isOpen && !fab.contains(e.target) && !fabMenu.contains(e.target)) {
      fab.click();
    }
  });
})();
