(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  if (stored === 'light' || stored === 'dark') root.setAttribute('data-theme', stored);

  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var effectiveCurrent = current || (prefersDark ? 'dark' : 'light');
    var next = effectiveCurrent === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var tabs = document.querySelectorAll('.tab');
  var panels = document.querySelectorAll('.project[data-tab]');
  if (tabs.length && panels.length) {
    var show = function (name) {
      var known = Array.prototype.some.call(panels, function (p) { return p.getAttribute('data-tab') === name; });
      if (!known) name = panels[0].getAttribute('data-tab');
      panels.forEach(function (p) { p.hidden = p.getAttribute('data-tab') !== name; });
      tabs.forEach(function (t) {
        t.setAttribute('aria-selected', t.getAttribute('href') === '#' + name ? 'true' : 'false');
      });
    };
    tabs.forEach(function (t) {
      t.addEventListener('click', function (e) {
        e.preventDefault();
        var name = t.getAttribute('href').slice(1);
        history.pushState(null, '', '#' + name);
        show(name);
      });
    });
    window.addEventListener('hashchange', function () { show(location.hash.slice(1)); });
    show(location.hash.slice(1));
  }
})();
