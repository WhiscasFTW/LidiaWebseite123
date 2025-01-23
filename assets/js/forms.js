function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');
    var sound = new Audio('assets/sounds/click.mp3'); /* Soundeffekt */

    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');

    if (sidebar.classList.contains('open')) {
        overlay.style.display = 'block';
        localStorage.setItem('sidebarState', 'open');
    } else {
        overlay.style.display = 'none';
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
        overlay.style.display = 'block';
    }
};
