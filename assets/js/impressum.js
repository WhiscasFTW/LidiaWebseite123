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

// Funktion für die Navigation mit sanftem Übergang
function navigateToPage(url) {
  // Übergangseffekt starten
  document.body.style.opacity = '0'; // Ausblenden der Seite
  setTimeout(function() {
    // Nach dem Ausblenden zur neuen Seite navigieren
    window.location.href = url;
  }, 500); // 500ms warten, um den Übergang abzuschließen
}

// Event-Listener für alle Links, die zu einer neuen Seite führen
document.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    if (link.href && !link.href.includes('javascript:')) {
      event.preventDefault(); // Verhindern des Standardverhaltens
      navigateToPage(link.href); // Seitenwechsel mit Übergang
    }
  });
});
