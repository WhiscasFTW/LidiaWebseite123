// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var toggleButton = document.getElementById('toggleButton');
  var overlay = document.getElementById('overlay');

  // Sidebar und Button umschalten
  sidebar.classList.toggle('open');
  toggleButton.classList.toggle('open');

  // Overlay für den abgedunkelten Hintergrund ein- oder ausblenden
  overlay.classList.toggle('active');

  // Animationen stoppen, nachdem der Button das erste Mal gedrückt wurde
  toggleButton.style.animation = 'none';
}

// Funktion für den Seitenwechsel mit Vorhang-Effekt
function navigateToPage(url) {
  var overlay = document.createElement('div');
  overlay.id = 'page-transition-overlay';
  overlay.className = 'page-transition-overlay';
  document.body.appendChild(overlay);

  // Overlay einblenden
  setTimeout(function () {
    overlay.style.opacity = '1';
  }, 10);

  // Nach 1,4 Sekunden weiterleiten
  setTimeout(function () {
    window.location.href = url;
  }, 1400); // 1,4 Sekunden
}

// Event-Listener für alle Links, die zu einer neuen Seite führen
document.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    if (link.href && !link.href.includes('javascript:')) {
      event.preventDefault();
      navigateToPage(link.href);
    }
  });
});
