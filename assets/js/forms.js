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
};

// Funktion für die horizontale Scroll-Galerie
function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery-container');
    const scrollAmount = 220; // 200px Bildbreite + 20px Abstand
    gallery.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Lightbox-Funktionen
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
