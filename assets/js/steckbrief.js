// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var toggleButton = document.getElementById('toggleButton');
  var overlay = document.getElementById('overlay');

  // Sidebar umschalten
  sidebar.classList.toggle('open');
  
  // Button anpassen: Position bleibt immer 15px von der Sidebar entfernt
  if (sidebar.classList.contains('open')) {
    toggleButton.style.left = '250px';  // Button nach rechts verschieben
  } else {
    toggleButton.style.left = '15px';   // Button nach links verschieben
  }

  // Overlay für den abgedunkelten Hintergrund ein- oder ausblenden
  overlay.classList.toggle('active');
}
