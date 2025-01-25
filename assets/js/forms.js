// Beim Laden der Seite die "loaded"-Klasse hinzufügen
window.onload = function () {
    document.body.classList.add('loaded');
};

// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.querySelector('.overlay'); // Overlay für die Sidebar

    // Sidebar und Button umschalten
    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
    overlay.classList.toggle('active'); // Overlay bei Sidebar öffnen/ schließen aktivieren

    // Sidebar-Zustand speichern
    var sidebarState = sidebar.classList.contains('open') ? 'open' : 'closed';
    localStorage.setItem('sidebarState', sidebarState);
}

// Beim Laden der Seite den Zustand überprüfen
window.onload = function () {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.querySelector('.overlay'); // Overlay für die Sidebar
    var sidebarState = localStorage.getItem('sidebarState');

    // Sidebar-Zustand wiederherstellen
    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
        overlay.classList.add('active'); // Overlay bei geöffnetem Zustand aktivieren
    }
};
