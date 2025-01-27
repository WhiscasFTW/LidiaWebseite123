// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');

    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Funktion für den Seitenwechsel mit Übergang
function navigateToPage(url) {
    var overlay = document.createElement('div');
    overlay.id = 'page-transition-overlay';
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);

    // Übergangseffekt (Overlay wird eingeblendet)
    setTimeout(function () {
        overlay.style.opacity = '1'; // Overlay einblenden
    }, 10);

    // Nach 1,4 Sekunden Seite wechseln
    setTimeout(function () {
        window.location.href = url; // URL laden
    }, 1400);
}

// Event-Listener für alle Links
document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        if (link.href && !link.href.includes('javascript:')) {
            event.preventDefault();
            navigateToPage(link.href);
        }
    });
});

// Nach dem Laden der Seite Overlay zurücksetzen
window.onload = function () {
    var overlay = document.getElementById('page-transition-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(function () {
            overlay.remove(); 
        }, 1400);
    }
};

// Sicherstellen, dass Overlay bei "pageshow" zurückgesetzt wird
window.addEventListener('pageshow', function () {
    var overlay = document.getElementById('page-transition-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(function () {
            overlay.remove();
        }, 1400); 
    }
});
