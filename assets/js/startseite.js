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

// Beim Laden der Seite das Overlay ausblenden und entfernen
window.onload = function () {
    document.body.classList.add('loaded'); // Die "loaded"-Klasse nach dem Laden hinzufügen

    var overlay = document.getElementById('page-transition-overlay');

    // Overlay langsam ausblenden
    overlay.style.opacity = '0';

    // Overlay nach 1,4 Sekunden vollständig entfernen
    setTimeout(function () {
        overlay.remove(); // Overlay aus dem DOM entfernen
    }, 1400); // 1,4 Sekunden
};

// Funktion zum Einblenden des Overlays (als Promise)
function fadeOutOverlay() {
    return new Promise((resolve) => {
        var overlay = document.createElement('div'); // Neues Overlay erstellen
        overlay.id = 'page-transition-overlay';
        overlay.className = 'page-transition-overlay';
        document.body.appendChild(overlay); // Overlay hinzufügen

        // Overlay einblenden
        setTimeout(function () {
            overlay.style.opacity = '1';
        }, 10); // Kurze Verzögerung, um das Einblenden zu starten

        // Warte, bis die Fade-Out-Animation abgeschlossen ist
        overlay.addEventListener('transitionend', function () {
            resolve(); // Promise auflösen, wenn die Animation abgeschlossen ist
        }, { once: true }); // Event-Listener nur einmal ausführen
    });
}

// Funktion für den Seitenwechsel mit 1,4 Sekunden Fade-Out
async function navigateToPage(url) {
    await fadeOutOverlay(); // Warte, bis das Overlay vollständig eingeblendet ist
    window.location.href = url; // Weiterleitung zur neuen Seite
}

// Event-Listener für alle Links, die zu einer neuen Seite führen
document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Nur Links behandeln, die zu einer anderen Seite führen
        if (link.href && !link.href.includes('javascript:')) {
            event.preventDefault(); // Standardverhalten verhindern
            navigateToPage(link.href); // Seitenwechsel mit Fade-Out
        }
    });
});
