// navigation.js

// Funktion zum Aktualisieren des Button-Textes basierend auf dem sichtbaren Bild
function updateButtonText() {
    const sections = document.querySelectorAll('.image-container');
    const button = document.getElementById('imageButton');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            button.textContent = `Bild ${index + 1}`;
        }
    });
}

// Event Listener für das Scrollen
window.addEventListener('scroll', updateButtonText);

// Initialer Aufruf, um den Button-Text beim Laden der Seite zu setzen
updateButtonText();
