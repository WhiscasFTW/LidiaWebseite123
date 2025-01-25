// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');

    // Sidebar und Button umschalten
    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');

    // Speichern des Sidebar-Zustands im LocalStorage
    if (sidebar.classList.contains('open')) {
        localStorage.setItem('sidebarState', 'open');
    } else {
        localStorage.setItem('sidebarState', 'closed');
    }

    // Deaktivierung der Wackel-Animation nach dem ersten Öffnen
    if (toggleButton.classList.contains('shake')) {
        toggleButton.classList.remove('shake');
    }
}

// Beim Laden der Seite den Zustand überprüfen und Animation beim ersten Laden
window.onload = function () {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var sidebarState = localStorage.getItem('sidebarState');
    var isFirstLoad = localStorage.getItem('firstLoad');

    // Sidebar-Zustand wiederherstellen
    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
    }

    // Animation des Buttons aktivieren beim ersten Laden
    if (!isFirstLoad) {
        toggleButton.classList.add('shake'); // Animation aktivieren
        localStorage.setItem('firstLoad', 'true');
    }
};
