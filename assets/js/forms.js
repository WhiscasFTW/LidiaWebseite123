// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay'); // Das Overlay für die Sidebar

    // Sidebar und Button umschalten
    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
    
    // Overlay anzeigen/verstecken
    if (sidebar.classList.contains('open')) {
        overlay.style.display = "block"; // Overlay anzeigen
    } else {
        overlay.style.display = "none"; // Overlay verstecken
    }
}

// Beim Laden der Seite den Zustand überprüfen
window.onload = function () {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');
    var sidebarState = localStorage.getItem('sidebarState');

    // Sidebar-Zustand wiederherstellen
    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
        overlay.style.display = "block"; // Overlay beim Öffnen der Sidebar anzeigen
    } else {
        overlay.style.display = "none"; // Overlay verstecken
    }
};
