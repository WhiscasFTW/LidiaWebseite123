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

// Beim Laden der Seite den Zustand überprüfen
window.onload = function () {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');
    var sidebarState = localStorage.getItem('sidebarState');

    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
        overlay.classList.add('active');
    }

    // Footer einblenden, wenn das Ende der Seite erreicht wird
    window.addEventListener('scroll', function () {
        const footer = document.querySelector('footer');
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (isAtBottom) {
            footer.classList.add('visible');
            footer.classList.remove('hidden'); // Footer anzeigen, wenn unten
        } else {
            footer.classList.remove('visible');
            footer.classList.add('hidden'); // Footer verstecken, wenn nicht am Ende
        }
    });
};
