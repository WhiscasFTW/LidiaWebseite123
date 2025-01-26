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

// Beim Laden der Seite das Overlay einblenden und dann entfernen
window.onload = function () {
    var overlay = document.getElementById('page-transition-overlay');

    // Direkt beim Laden der Seite wird das Overlay eingeblendet
    setTimeout(function () {
        overlay.style.opacity = '1'; // Anfangszustand: Dunkel
    }, 10); // Verzögerung für weichen Start

    // Nach 1,4 Sekunden das Overlay ausblenden und entfernen
    setTimeout(function () {
        overlay.style.opacity = '0'; // Übergang: Dunkelheit verschwindet
    }, 10); // Sofortiges Starten des Übergangs

    // Nach 1,4 Sekunden das Overlay endgültig entfernen
    setTimeout(function () {
        overlay.remove(); // Overlay aus dem DOM entfernen
    }, 1400); // Dauer des Übergangs
};

// Funktion für den Seitenwechsel mit 1,4 Sekunden Fade-In und Fade-Out
function navigateToPage(url) {
    var overlay = document.createElement('div'); // Neues Overlay erstellen
    overlay.id = 'page-transition-overlay';
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay); // Overlay hinzufügen

    // Overlay einblenden
    setTimeout(function () {
        overlay.style.opacity = '1';
    }, 10); // Verzögerung, um das Einblenden zu starten

    // Nach 1,4 Sekunden weiterleiten
    setTimeout(function () {
        window.location.href = url;
    }, 1400); // 1,4 Sekunden
}

// Event-Listener für alle Links, die zu einer neuen Seite führen
document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Nur Links behandeln, die zu einer anderen Seite führen
        if (link.href && !link.href.includes('javascript:')) {
            event.preventDefault(); // Standardverhalten verhindern
            navigateToPage(link.href); // Seitenwechsel mit Fade-In
        }
    });
});
