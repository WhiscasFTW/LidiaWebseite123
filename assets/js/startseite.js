// Funktion zum Neuladen der Seite mit Übergang
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

    sidebar.classList.toggle('open');  // Sidebar öffnen/schließen
    overlay.classList.toggle('active');  // Overlay ein- und ausblenden
    toggleButton.classList.toggle('open');  // Button entsprechend anpassen
}

// Event-Listener für das Schließen der Sidebar, wenn auf das Overlay geklickt wird
document.getElementById('overlay').addEventListener('click', toggleSidebar);

// Event-Listener für den Button zum Öffnen und Schließen der Sidebar
document.getElementById('toggleButton').addEventListener('click', toggleSidebar);

// Funktion, um sicherzustellen, dass die Seite beim Laden korrekt angezeigt wird
window.addEventListener('load', function () {
    var overlay = document.getElementById('page-transition-overlay');
    overlay.style.opacity = '0';  // Beim Laden der Seite das Overlay unsichtbar machen
});
