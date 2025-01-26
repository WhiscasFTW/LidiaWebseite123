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
    var overlay = document.getElementById('page-transition-overlay');

    // Overlay langsam ausblenden
    overlay.style.opacity = '0';

    // Overlay nach 1,4 Sekunden vollständig entfernen
    setTimeout(function () {
        overlay.remove(); // Overlay aus dem DOM entfernen
    }, 1400); // 1,4 Sekunden
};

// Funktion für den Seitenwechsel mit 1,4 Sekunden Fade-Out
function navigateToPage(url) {
    var overlay = document.createElement('div'); // Neues Overlay erstellen
    overlay.id = 'page-transition-overlay';
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay); // Overlay hinzufügen

    // Overlay einblenden
    setTimeout(function () {
        overlay.style.opacity = '1';
    }, 10); // Kurze Verzögerung, um das Einblenden zu starten

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
            navigateToPage(link.href); // Seitenwechsel mit Fade-Out
        }
    });
});
