// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');
    var sound = new Audio('assets/sounds/click.mp3');

    // Sidebar und Button umschalten
    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
    overlay.classList.toggle('active');

    // Zustand der Sidebar im localStorage speichern
    if (sidebar.classList.contains('open')) {
        localStorage.setItem('sidebarState', 'open');
    } else {
        localStorage.setItem('sidebarState', 'closed');
    }

    // Sound abspielen (falls vorhanden)
    sound.play().catch(error => {
        console.error("Sound konnte nicht abgespielt werden:", error);
    });
}

// Beim Laden der Seite den Zustand überprüfen und alle Elemente einblenden
window.onload = function () {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');
    var sidebarState = localStorage.getItem('sidebarState');

    // Sidebar-Zustand wiederherstellen
    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
        overlay.classList.add('active');
    }

    // Alle Elemente einblenden
    setTimeout(function () {
        document.body.classList.add('loaded');
    }, 100); // Kurze Verzögerung, um den Effekt sichtbar zu machen

    // Überprüfen, ob das Video geladen wird
    var video = document.getElementById('video-background');
    var imageBackground = document.getElementById('image-background');

    // Wenn das Video nicht geladen wird, zeige das Bild an
    video.addEventListener('error', function () {
        video.style.display = 'none'; // Video ausblenden
        imageBackground.style.display = 'block'; // Bild anzeigen
    });
};
