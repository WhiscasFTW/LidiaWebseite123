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

// Entfernte Funktion für den Seitenübergang
// Funktion für den Übergang zwischen Seiten (entfernt)
function navigateToPage(url) {
  // Da der Übergang entfernt wurde, erfolgt der Wechsel direkt ohne Animation
  console.log('Redirecting to: ' + url); // Debug-Ausgabe
  window.location.href = url;
}

// Event-Listener für alle Links und Buttons
const links = document.querySelectorAll('a, .toggle-button');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Verhindert das sofortige Weiterleiten
    const href = this.getAttribute('href');
    window.location.href = href; // Direkt zur Seite wechseln ohne Übergang
  });
});
