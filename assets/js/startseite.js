// Funktion zum Laden der nächsten Seite mit Übergang
function loadPageWithTransition() {
    var overlay = document.getElementById('page-transition-overlay');
    
    // Dunkles Overlay aktivieren
    overlay.style.opacity = '1'; // Übergang zur dunklen Farbe
    setTimeout(function () {
        location.reload(); // Seite neu laden
    }, 1400); // Wartezeit für die Transition (1,4 Sekunden)
}

// Event-Listener für den Klick auf die Signatur
document.querySelector('.artist-signature').addEventListener('click', loadPageWithTransition);

// Funktion zum Öffnen und Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    var toggleButton = document.getElementById('toggleButton');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    toggleButton.classList.toggle('open');
}
