// Funktion zum Preloading aller Ressourcen
function preloadResources() {
    const resources = [
        'assets/images/HeaderStart.png',
        'assets/images/Siganture.png',
        'assets/images/steckbrief.jpg',
        'assets/images/meinewerke.jpg',
        'assets/images/dienstleistungen.jpg',
        'assets/images/kontakt.jpg',
        'assets/images/fog.mp4',
        'assets/sounds/click.mp3'
    ];

    let loaded = 0;
    const total = resources.length;

    resources.forEach((resource) => {
        const img = new Image();
        img.src = resource;
        img.onload = () => {
            loaded++;
            if (loaded === total) {
                // Alles geladen, Loading Screen ausblenden
                document.getElementById('loading-screen').style.display = 'none';
            }
        };
        img.onerror = () => {
            console.error(`Fehler beim Laden von: ${resource}`);
            loaded++;
            if (loaded === total) {
                document.getElementById('loading-screen').style.display = 'none';
            }
        };
    });
}

// Beim Laden der Seite Preloading starten
window.onload = function () {
    preloadResources();

    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');
    var sidebarState = localStorage.getItem('sidebarState');

    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
        overlay.classList.add('active');
    }
};

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
