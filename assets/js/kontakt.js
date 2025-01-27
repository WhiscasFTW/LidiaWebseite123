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

// Event-Listener für alle Links und Buttons
const links = document.querySelectorAll('a, .toggle-button');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Verhindert das sofortige Weiterleiten
    const href = this.getAttribute('href');
    window.location.href = href; // Direkter Seitenwechsel ohne Übergangseffekt
  });
});
