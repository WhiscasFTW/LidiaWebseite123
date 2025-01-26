// Warten, bis das gesamte Dokument geladen ist
window.onload = function () {
    var overlay = document.getElementById('page-transition-overlay');
    
    // Warten, bis alle Bilder und das Video geladen sind
    var video = document.getElementById('video-background');
    var images = document.querySelectorAll('img');
    var totalResources = images.length + (video ? 1 : 0); // Anzahl der zu ladenden Ressourcen
    var loadedResources = 0;

    // Funktion zum Überprüfen, ob alle Ressourcen geladen sind
    function checkIfAllLoaded() {
        loadedResources++;
        if (loadedResources === totalResources) {
            // Alle Ressourcen sind geladen, Overlay entfernen und Fade-Out starten
            overlay.style.opacity = '0';
            setTimeout(function () {
                overlay.remove();
            }, 1400); // Nach 1,4 Sekunden Overlay entfernen
        }
    }

    // Überprüfen, ob das Video geladen wurde
    if (video) {
        video.onloadeddata = checkIfAllLoaded;
    }

    // Überprüfen, ob alle Bilder geladen wurden
    images.forEach(function (img) {
        img.onload = checkIfAllLoaded;
    });

    // Falls bereits alle Ressourcen beim Laden vorhanden sind
    if (loadedResources === totalResources) {
        checkIfAllLoaded();
    }
};

// Funktion zum Öffnen und Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    var toggleButton = document.getElementById('toggleButton');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    toggleButton.classList.toggle('open');
}
