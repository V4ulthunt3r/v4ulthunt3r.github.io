/* Dark-mode toggle. The initial class is set inline in <head> so the page never
   flashes the wrong theme; this only handles the manual switch afterwards. */
(function () {
  var btn = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-icon');
  if (!btn || !icon) return;

  function sync() {
    var dark = document.documentElement.classList.contains('dark');
    icon.setAttribute('href', dark ? '#i-sun' : '#i-moon');
  }

  sync();
  btn.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
    sync();
  });
})();
