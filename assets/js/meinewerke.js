// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');

    // Sidebar und Button umschalten
    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');

    // Overlay für den abgedunkelten Hintergrund ein- oder ausblenden
    overlay.classList.toggle('active');
}

// Funktion zum Öffnen der Lightbox mit Bild und Beschreibung
function openLightbox(imageSrc, text) {
    document.getElementById('lightbox-img').src = imageSrc;
    document.getElementById('lightbox-text').innerText = text;
    document.getElementById('lightbox').style.display = "flex";
}

// Funktion zum Schließen der Lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}
