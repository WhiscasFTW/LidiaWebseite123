// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');
    var sound = new Audio('assets/sounds/click.mp3');

    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
    overlay.classList.toggle('active');

    if (sidebar.classList.contains('open')) {
        localStorage.setItem('sidebarState', 'open');
    } else {
        localStorage.setItem('sidebarState', 'closed');
    }

    sound.play().catch(error => {
        console.error("Sound konnte nicht abgespielt werden:", error);
    });
}

// Beim Laden der Seite den Zustand überprüfen und alle Elemente einblenden
window.onload = function () {
    // Alle Elemente einblenden
    setTimeout(function () {
        document.body.classList.add('loaded');
    }, 100); // Diese Verzögerung sorgt für einen weichen Übergang

    // Optional: Verzögerung für den vollständigen Lade-Effekt
    setTimeout(function () {
        document.body.classList.add('fade-in-complete');
    }, 1400); // Warten bis die komplette Animation abgeschlossen ist
};
