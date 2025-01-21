// Array mit den IDs der Bilder
const images = ['image1', 'image2', 'image3', 'image4', 'image5'];

// Funktion zum Überprüfen der Sichtbarkeit der Bilder
function checkImageVisibility() {
    const button = document.querySelector('.image-button');
    images.forEach((imageId, index) => {
        const image = document.getElementById(imageId);
        const rect = image.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // Bild ist sichtbar
            button.textContent = `Bild ${index + 1}`;
        }
    });
}

// Event Listener für das Scrollen
window.addEventListener('scroll', checkImageVisibility);

// Initialer Aufruf
checkImageVisibility();
