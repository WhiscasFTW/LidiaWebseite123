
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
