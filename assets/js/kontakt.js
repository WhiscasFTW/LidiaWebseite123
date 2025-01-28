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
  toggleButton.style.animation = 'none'; // Animationen entfernen
}

// Beim Laden der Seite das Overlay ausblenden und entfernen
window.onload = function () {
  var overlay = document.getElementById('page-transition-overlay');
  
  // Überprüfen, ob das Overlay vorhanden ist, und es korrekt entfernen
  if (overlay) {
    overlay.style.opacity = '0';

    // Overlay nach 1 Sekunde vollständig entfernen
    setTimeout(function () {
      overlay.remove();
    }, 1000);
  }
};

// Funktion für den Seitenwechsel mit Fade-Out-Effekt
function navigateToPage(url) {
  var overlay = document.getElementById('page-transition-overlay');
  if (overlay) {
    overlay.style.opacity = '1'; // Overlay einblenden
    setTimeout(function () {
      window.location.href = url; // Nach 1 Sekunde weiterleiten
    }, 1000);
  }
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
