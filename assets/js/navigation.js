// Menü öffnen und schließen
function toggleMenu() {
    const menu = document.getElementById('menu-0');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Ändern des Button-Textes beim Scrollen
const imageContainers = document.querySelectorAll('.image-container');
const button = document.getElementById('imageButton');

const topics = ["Steckbrief", "Meine Werke", "Dienstleistungen", "Impressum", "Kontakt"];

window.addEventListener('scroll', () => {
    imageContainers.forEach((container, index) => {
        const rect = container.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // Button-Text ändern, wenn das Bild sichtbar ist
            button.textContent = topics[index];
        }
    });
});
