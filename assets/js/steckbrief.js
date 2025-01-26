// Sidebar toggle function
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const toggleButton = document.getElementById('toggleButton');

  // Check if sidebar is already open
  if (sidebar.style.left === '0px') {
    // Close sidebar
    sidebar.style.left = '-250px';
    overlay.classList.remove('show');
  } else {
    // Open sidebar
    sidebar.style.left = '0';
    overlay.classList.add('show');
  }
}

// Automatische Transition beim Laden der Seite
window.addEventListener('load', function () {
  const transition = document.getElementById('pageTransition'); // Übergangselement holen

  // Übergang aktivieren, wenn die Seite vollständig geladen ist
  setTimeout(() => {
    transition.classList.add('active'); // Übergang aktivieren
  }, 100); // Kleine Verzögerung, um den Effekt sichtbar zu machen

  // Übergang nach einiger Zeit wieder deaktivieren
  setTimeout(() => {
    transition.style.opacity = '0'; // Übergang bleibt ausgeblendet
    transition.style.zIndex = '-1'; // Verhindert, dass es erneut erscheint
  }, 1000); // Übergangszeit (passend zur Dauer der CSS-Transition)
});
