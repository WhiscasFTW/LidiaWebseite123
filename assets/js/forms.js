// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    var toggleButton = document.getElementById('toggleButton');

    // Sidebar und Button umschalten
    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Beim Laden der Seite den Zustand der Sidebar überprüfen
window.onload = function () {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var sidebarState = localStorage.getItem('sidebarState');
    var overlay = document.getElementById('overlay');

    // Sidebar-Zustand wiederherstellen, wenn gespeichert
    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
        overlay.classList.add('active');
    }
};

// Funktion, um den Sidebar-Zustand zu speichern
function saveSidebarState() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) {
        localStorage.setItem('sidebarState', 'open');
    } else {
        localStorage.setItem('sidebarState', 'closed');
    }
}

// Event-Listener hinzufügen, um den Sidebar-Zustand zu speichern
document.getElementById('toggleButton').addEventListener('click', function () {
    saveSidebarState();
});
