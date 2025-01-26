// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');

    // Sidebar umschalten
    sidebar.classList.toggle('open');
    // Toggle Button umschalten
    toggleButton.classList.toggle('open');
    // Overlay ein- oder ausblenden
    overlay.classList.toggle('active');
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

// Funktion für den Seitenwechsel mit sanftem Übergang
function navigateToPage(url) {
    var overlay = document.createElement('div'); // Neues Overlay erstellen
    overlay.id = 'page-transition-overlay';
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay); // Overlay hinzufügen

    // Overlay einblenden
    setTimeout(function () {
        overlay.style.opacity = '1';
    }, 10); // Kurze Verzögerung, um das Einblenden zu starten

    // Sanften Fade-Out durchführen, bevor wir die Seite wechseln
    setTimeout(function () {
        overlay.style.opacity = '0'; // Overlay sanft ausblenden
    }, 10); // Sofort starten

    // Nach dem Fade-Out die Seite wechseln
    setTimeout(function () {
        window.location.href = url;
    }, 1400); // Zeit, bis die Seite wechselt
}

// Event-Listener für alle Links, die zu einer neuen Seite führen
document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Nur Links behandeln, die zu einer anderen Seite führen
        if (link.href && !link.href.includes('javascript:')) {
            event.preventDefault(); // Standardverhalten verhindern
            navigateToPage(link.href); // Seitenwechsel mit weichem Übergang
        }
    });
});

// Event-Listener für den Button zum Öffnen/Schließen der Sidebar
document.getElementById('toggleButton').addEventListener('click', toggleSidebar);
