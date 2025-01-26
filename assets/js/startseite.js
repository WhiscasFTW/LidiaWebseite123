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

    // Animationen stoppen, nachdem der Button das erste Mal gedrückt wurde
    toggleButton.style.animation = 'none'; // Animationen entfernen
}

// Funktion für den sanften Übergang zur nächsten Seite
function pageTransition() {
    const overlay = document.getElementById('page-transition-overlay');
    overlay.style.opacity = '1'; // Das Overlay sichtbar machen

    // Nach der Übergangszeit (1.4s) die Seite wechseln
    setTimeout(function () {
        window.location.href = 'startseite.html'; // Beispiel für eine Weiterleitung
    }, 1400); // Zeit, bis die Seite geladen wird
}

// Funktion, um das Overlay zu entfernen und den Übergang zu stoppen
window.onload = function () {
    const overlay = document.getElementById('page-transition-overlay');
    overlay.style.transition = 'opacity 1.4s ease'; // Sanfter Übergang
    overlay.style.opacity = '0'; // Overlay ausblenden

    // Overlay nach 1,4 Sekunden entfernen
    setTimeout(function () {
        overlay.style.display = 'none';
    }, 1400);
};
