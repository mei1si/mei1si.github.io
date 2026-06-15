(function() {
  const KEY = 'hermes-blog-dark';
  const html = document.documentElement;

  function apply(mode) {
    const btn = document.getElementById('dark-toggle');
    if (mode === 'dark') {
      html.classList.add('dark');
      if (btn) btn.textContent = 'Light';
    } else {
      html.classList.remove('dark');
      if (btn) btn.textContent = 'Dark';
    }
  }

  // 从 localStorage 恢复
  const saved = localStorage.getItem(KEY);
  if (saved) {
    apply(saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    apply('dark');
  }

  document.addEventListener('DOMContentLoaded', function() {
    // 确保按钮文字正确
    apply(html.classList.contains('dark') ? 'dark' : 'light');
  });

  window.toggleDarkMode = function() {
    const next = html.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    apply(next);
  };
})();
