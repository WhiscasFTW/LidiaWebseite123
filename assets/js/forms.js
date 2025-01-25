// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');

    // Sidebar und Button umschalten
    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
}

// Beim Laden der Seite das Overlay ausblenden
window.onload = function () {
    var overlay = document.getElementById('page-transition-overlay');
    overlay.style.opacity = '0'; // Overlay ausblenden

    // Sidebar-Zustand wiederherstellen (falls benötigt)
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var sidebarState = localStorage.getItem('sidebarState');

    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
    }
};

// Weiterleitungs-Button (z. B. für die Kontaktseite)
document.getElementById('redirect-button').addEventListener('click', function (event) {
    event.preventDefault(); // Standardverhalten verhindern
    var overlay = document.getElementById('page-transition-overlay');

    // Overlay einblenden
    overlay.style.opacity = '1';

    // Nach 1,3 Sekunden weiterleiten
    setTimeout(function () {
        window.location.href = 'kontakt.html';
    }, 1300); // 1,3 Sekunden
});
