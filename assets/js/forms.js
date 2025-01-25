// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    var toggleButton = document.getElementById('toggleButton');

    // Zustand der Sidebar und des Overlays umschalten
    var isOpen = sidebar.classList.toggle('open');
    overlay.classList.toggle('active', isOpen);
    toggleButton.classList.toggle('open', isOpen);

    // Sidebar-Zustand speichern
    localStorage.setItem('sidebarState', isOpen ? 'open' : 'closed');
}

// Zustand der Sidebar beim Laden wiederherstellen
window.onload = function () {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    var toggleButton = document.getElementById('toggleButton');
    var sidebarState = localStorage.getItem('sidebarState');

    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        toggleButton.classList.add('open');
    }
};
