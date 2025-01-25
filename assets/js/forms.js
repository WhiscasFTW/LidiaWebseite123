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
    // Sicherstellen, dass der Body beim ersten Laden dunkel bleibt
    if (!localStorage.getItem('firstLoadCompleted')) {
        // Beim ersten Laden die dunkle Seite anzeigen
        setTimeout(function () {
            document.body.classList.add('loaded');
        }, 100); // Verzögerung für sanften Übergang

        // Markieren, dass der erste Ladevorgang abgeschlossen ist
        localStorage.setItem('firstLoadCompleted', 'true');
    } else {
        // Wenn die Seite bereits geladen wurde, die Übergangsklasse sofort anwenden
        document.body.classList.add('loaded');
    }
};
