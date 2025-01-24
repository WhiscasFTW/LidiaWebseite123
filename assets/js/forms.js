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
    var content = document.querySelector('.content');

    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
        overlay.classList.add('active');
    }

    // Übergangs-Effekt für das Fade-In des Inhalts
    setTimeout(function () {
        content.classList.add('visible');  // Macht den Inhalt sichtbar
    }, 1000);  // 1 Sekunde nach dem Laden

    // Footer und Leuchtstreifen einblenden beim Scrollen
    window.addEventListener('scroll', function () {
        const footer = document.querySelector('footer');
        const secondHeaderBox = document.querySelector('.second-header-box-container');
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (isAtBottom) {
            footer.classList.add('visible');
            secondHeaderBox.style.bottom = '51px'; // Leuchtstreifen über dem Footer
        } else {
            footer.classList.remove('visible');
            secondHeaderBox.style.bottom = '-3px'; // Leuchtstreifen versteckt
        }
    });
};

// Funktion zum Wechseln der Seite mit Transition
function changePage(url) {
    var content = document.querySelector('.content');
    content.style.opacity = '0';  // Inhalt wird unsichtbar
    setTimeout(function () {
        window.location.href = url;  // Navigiert nach der Animation zur neuen Seite
    }, 1000);  // 1 Sekunde warten bis zur Navigation
}

// Beispiel: Verwendung beim Klick auf Links
document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        changePage(this.href);
    });
});
