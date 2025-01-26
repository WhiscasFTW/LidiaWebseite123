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

// Sidebar umschalten
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  if (sidebar.style.left === '0px') {
    sidebar.style.left = '-250px'; // Sidebar nach links schieben, wenn sie offen ist
    overlay.style.display = 'none'; // Overlay ausblenden
  } else {
    sidebar.style.left = '0'; // Sidebar nach rechts schieben, wenn sie geschlossen ist
    overlay.style.display = 'block'; // Overlay einblenden
  }
}
