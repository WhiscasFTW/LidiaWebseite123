// Ladebildschirm: Warte, bis die Seite vollständig geladen ist
window.addEventListener('load', function () {
    // Verstecke den Ladebildschirm
    document.getElementById('loader').style.display = 'none';
    // Zeige den Hauptinhalt an
    document.getElementById('content').classList.remove('hidden');

    // Sidebar-Zustand überprüfen
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');
    var sidebarState = localStorage.getItem('sidebarState');

    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
        overlay.style.display = 'block';
    }

    // Button und Signatur sichtbar machen
    setTimeout(function() {
        document.querySelector('.intro-button').classList.add('visible');
        document.getElementById('signature').classList.add('visible'); // Signatur sichtbar machen
    }, 1000); // 1 Sekunde Verzögerung
});

// Sidebar-Funktionalität
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

// Karussell-Funktionalität
let currentIndex = 0;
const carouselInner = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');
const totalImages = images.length;

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 160; // 150px Bildbreite + 10px Abstand
    carouselInner.style.transform = `translateX(${offset}px)`;
}

// Vorhang-Effekt
document.getElementById('openCurtain').addEventListener('click', function() {
    // Vorhang öffnet sich
    document.getElementById('curtain').classList.add('open');

    // Die eigentliche Webseite nach dem Vorhang-Effekt laden
    setTimeout(function() {
        window.location.href = 'startseite.html'; // Zielseite (kann beliebig geändert werden)
    }, 1000); // Der Vorhang öffnet sich für 1 Sekunde
});
