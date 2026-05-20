// ── Theme management ─────────────────────────────────────────────────────
// Included in every page. Applies the saved theme immediately (before paint)
// so there is no flash of the wrong theme on load.
(function () {
  var THEME_KEY = 'workspace-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  // Apply immediately (before DOMContentLoaded) to avoid flicker.
  var saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Wire toggle button once the DOM is ready.
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('themeToggleBtn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });
})();
