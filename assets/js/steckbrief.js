// Funktion für den Übergang zwischen Seiten
function navigateToPage(url) {
  // Überprüfen, ob bereits ein Overlay existiert und entfernen, falls ja
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
    window.location.href = url;
  }, 1400); // Verzögerung für den Übergangseffekt
}

// Event-Listener für das Laden der Seite, um das Overlay zu initialisieren
window.addEventListener('load', function () {
  // Nur initialisieren, wenn noch kein Overlay existiert
  var existingOverlay = document.getElementById('page-transition-overlay');
  if (!existingOverlay) {
    var overlay = document.createElement('div');
    overlay.id = 'page-transition-overlay';
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);
  }
});

// Event-Listener für alle Links und Buttons zum Anwenden des Übergangseffekts
const links = document.querySelectorAll('a, .toggle-button');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Verhindert das sofortige Weiterleiten
    const href = this.getAttribute('href');
    navigateToPage(href); // Übergang zur Seite mit Animation
  });
});

// Funktion zum Öffnen der Sidebar (kann aufgerufen werden, wenn Sidebar geöffnet werden soll)
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');

  // Sidebar öffnen oder schließen
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
}

// Event-Listener für das Öffnen der Sidebar
const toggleButton = document.querySelector('.toggle-button');
if (toggleButton) {
  toggleButton.addEventListener('click', toggleSidebar);
}

// Überprüfung der Overlay-Logik für die Sidebar
const overlay = document.querySelector('.overlay');
if (overlay) {
  overlay.addEventListener('click', toggleSidebar); // Sidebar schließen, wenn Overlay geklickt wird
}
