// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');
    var content = document.querySelector('.content');
    var sound = new Audio('assets/sounds/click.mp3');

    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
    overlay.classList.toggle('active');

    // Anpassung des Inhalts, um Verschiebungen zu vermeiden
    if (sidebar.classList.contains('open')) {
        content.style.marginLeft = '250px';
        localStorage.setItem('sidebarState', 'open');
    } else {
        content.style.marginLeft = '0';
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
    var content = document.querySelector('.content');
    var sidebarState = localStorage.getItem('sidebarState');

    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
        overlay.classList.add('active');
        content.style.marginLeft = '250px';
    }

    // Footer und Leuchtstreifen einblenden beim Scrollen
    window.addEventListener('scroll', function () {
        const footer = document.querySelector('footer');
        const secondHeaderBox = document.querySelector('.second-header-box-container');
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (isAtBottom) {
            footer.classList.add('visible');
            secondHeaderBox.style.bottom = '51px';
        } else {
            footer.classList.remove('visible');
            secondHeaderBox.style.bottom = '-3px';
        }
    });
};
