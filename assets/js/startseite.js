// Funktion für den Übergangseffekt
function pageTransition() {
    const overlay = document.querySelector('.page-transition-overlay');
    overlay.style.opacity = '1';

    setTimeout(() => {
        overlay.style.opacity = '0';
    }, 1400); // Überblendung nach 1,4 Sekunden
}

// Funktion zum Öffnen und Schließen der Sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const button = document.querySelector('.toggle-button');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    button.classList.toggle('open');
}

// Funktion für das Overlay (dunkles Hintergrund)
function closeOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('active');
}

// Event-Listener für die Sidebar und den Button
document.querySelector('.toggle-button').addEventListener('click', toggleSidebar);
document.querySelector('.overlay').addEventListener('click', closeOverlay);

// Automatische Übergangsstart beim Laden der Seite
window.addEventListener('load', () => {
    pageTransition(); // Startet den Übergangseffekt, wenn die Seite geladen wird
});

// Verhindert das versehentliche Laden des Hintergrundvideos nach einem Fehler
window.addEventListener('error', () => {
    const video = document.querySelector('#video-background');
    video.style.display = 'none'; // Versteckt das Video, wenn ein Fehler auftritt
});

// Funktion für den Video-Hintergrund
function setBackgroundVideo() {
    const video = document.querySelector('#video-background');

    // Setzt den Video-Hintergrund
    video.src = 'your-video-file.mp4'; // Setze den Pfad zu deinem Video hier ein

    // Überprüft, ob das Video geladen werden konnte
    video.onerror = () => {
        video.style.display = 'none'; // Versteckt das Video bei einem Fehler
    };
}

// Ruft die Funktion auf, um den Video-Hintergrund zu setzen
setBackgroundVideo();

// Optionale Funktion für einen sanften Scroll-Effekt
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Ruft die Funktion für den sanften Scroll-Effekt auf
smoothScroll();
