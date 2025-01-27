// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');

    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
    overlay.classList.toggle('active');
    toggleButton.style.animation = 'none'; // Animationen entfernen
}

// Funktion für den Seitenwechsel mit 1,4 Sekunden Fade-Out
function navigateToPage(url) {
    var overlay = document.createElement('div'); 
    overlay.id = 'page-transition-overlay';
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);

    setTimeout(function () {
        overlay.style.opacity = '1'; // Overlay langsam einblenden
    }, 10);

    // Nach 1,4 Sekunden weiterleiten
    setTimeout(function () {
        window.location.href = url;
    }, 1400);
}

// Event-Listener für alle Links, die zu einer neuen Seite führen
document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        if (link.href && !link.href.includes('javascript:')) {
            event.preventDefault();
            navigateToPage(link.href);
        }
    });
});

// Nach dem Laden der Seite sicherstellen, dass das Overlay entfernt wird
window.onload = function () {
    var overlay = document.getElementById('page-transition-overlay');

    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(function () {
            overlay.remove(); 
        }, 1400);
    }
};

// Bei einem Zurückwechseln zur Seite das Overlay und Transition korrekt zurücksetzen
window.addEventListener('pageshow', function () {
    var overlay = document.getElementById('page-transition-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(function () {
            overlay.remove();
        }, 1400); // Sicherstellen, dass das Overlay entfernt wird
    }
});
