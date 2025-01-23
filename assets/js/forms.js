// Funktion zum Öffnen/Schließen der Sidebar
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

    // Karussell-Funktionalität initialisieren
    initCarousel();
};

// Karussell-Funktionalität
function initCarousel() {
    let currentIndex = 0;
    const carouselInner = document.querySelector('.carousel-inner');
    const images = document.querySelectorAll('.carousel-inner img');
    const totalImages = images.length;
    const imageWidth = images[0].clientWidth + 10; // Breite eines Bildes + Abstand
    const carouselWidth = document.querySelector('.sidebar-carousel').clientWidth;

    // Funktion zum Aktualisieren des Karussells
    function updateCarousel() {
        const offset = -currentIndex * imageWidth + (carouselWidth / 2 - imageWidth / 2);
        carouselInner.style.transform = `translateX(${offset}px)`;
    }

    // Event-Listener für die Buttons
    document.querySelector('.carousel-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    document.querySelector('.carousel-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    // Initiale Position setzen
    updateCarousel();
}
