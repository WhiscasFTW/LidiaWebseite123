// Funktion für den Übergang zwischen Seiten
function navigateToPage(url) {
  // Überprüfen, ob bereits ein Overlay existiert, und entfernen, falls ja
  var existingOverlay = document.getElementById('page-transition-overlay');
  if (existingOverlay) {
    existingOverlay.remove();
  }

  // Erstellen des neuen Overlays
  var overlay = document.createElement('div');
  overlay.id = 'page-transition-overlay';
  overlay.className = 'page-transition-overlay';
  document.body.appendChild(overlay);

  // Übergang für das Overlay starten (für 1,4 Sekunden)
  setTimeout(function () {
    overlay.style.opacity = '1';
  }, 10);

  // Nach 1,4 Sekunden zur neuen Seite wechseln
  setTimeout(function () {
    console.log('Redirecting to: ' + url); // Debug-Ausgabe
    window.location.href = url;
  }, 1400);
}

// Event-Listener für das Laden der Seite, um das Overlay zu initialisieren
window.addEventListener('load', function () {
  var overlay = document.createElement('div');
  overlay.id = 'page-transition-overlay';
  overlay.className = 'page-transition-overlay';
  document.body.appendChild(overlay);
});

// Wenn du eine Animation bei Seitenwechsel und einem Hover-Effekt auf Links oder Buttons hast:
const links = document.querySelectorAll('a, .toggle-button');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Verhindert das sofortige Weiterleiten
    const href = this.getAttribute('href');
    navigateToPage(href); // Übergang zur Seite mit Animation
  });
});
