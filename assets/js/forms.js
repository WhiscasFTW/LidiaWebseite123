// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.querySelector('.overlay');

    // Sidebar und Button umschalten
    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Beim Laden der Seite den Zustand überprüfen
window.onload = function () {
    var video = document.getElementById('video-background');
    video.oncanplaythrough = function() {
        document.body.classList.add('loaded'); // Den Übergang aktivieren, wenn das Video geladen ist
    };
};
