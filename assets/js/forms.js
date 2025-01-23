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
    var sidebarState = localStorage.getItem('sidebarState');

    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
    }
};

// Sidebar mit Escape-Taste schließen
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        var sidebar = document.getElementById('sidebar');
        var toggleButton = document.getElementById('toggleButton');
        var overlay = document.getElementById('overlay');

        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            toggleButton.classList.remove('open');
            overlay.style.display = 'none';
        }
    }
});
