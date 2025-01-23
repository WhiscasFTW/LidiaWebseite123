function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var sound = new Audio('assets/sounds/click.mp3'); /* Soundeffekt */

    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');

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
    var sidebarState = localStorage.getItem('sidebarState');

    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
    }
};

// 3D-Galerie Interaktivität
const galleryInner = document.querySelector('.gallery-3d-inner');

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    galleryInner.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

galleryInner.addEventListener('mouseenter', () => {
    galleryInner.style.animationPlayState = 'paused';
});

galleryInner.addEventListener('mouseleave', () => {
    galleryInner.style.animationPlayState = 'running';
});
