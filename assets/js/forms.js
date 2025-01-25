// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');

    // Sidebar und Button umschalten
    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');

    // Animationen stoppen, nachdem der Button das erste Mal gedrückt wurde
    toggleButton.style.animation = 'none'; // Animationen entfernen
}

// Beim Laden der Seite das Overlay ausblenden und entfernen
window.onload = function () {
    var overlay = document.getElementById('page-transition-overlay');

    // Overlay langsam ausblenden
    overlay.style.opacity = '0';

    // Overlay nach 1,3 Sekunden vollständig entfernen
    setTimeout(function () {
        overlay.remove(); // Overlay aus dem DOM entfernen
    }, 1300); // 1,3 Sekunden

    // Sidebar-Zustand wiederherstellen (falls benötigt)
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var sidebarState = localStorage.getItem('sidebarState');

    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
    }
};

// Weiterleitungs-Button (z. B. für die Kontaktseite)
document.getElementById('redirect-button').addEventListener('click', function (event) {
    event.preventDefault(); // Standardverhalten verhindern
    var overlay = document.createElement('div'); // Neues Overlay erstellen
    overlay.id = 'page-transition-overlay';
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay); // Overlay hinzufügen

    // Overlay einblenden
    setTimeout(function () {
        overlay.style.opacity = '1';
    }, 10); // Kurze Verzögerung, um das Einblenden zu starten

    // Nach 1,3 Sekunden weiterleiten
    setTimeout(function () {
        window.location.href = 'kontakt.html';
    }, 1300); // 1,3 Sekunden
});
