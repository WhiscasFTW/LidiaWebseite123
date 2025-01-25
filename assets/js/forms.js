// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');

    // Sidebar und Button umschalten
    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
}

// Beim Laden der Seite den Zustand überprüfen
window.onload = function () {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var sidebarState = localStorage.getItem('sidebarState');

    // Sidebar-Zustand wiederherstellen
    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
    }
};
