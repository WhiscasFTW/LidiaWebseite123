// Menü öffnen und schließen
function toggleMenu() {
    const menu = document.getElementById('menu-0');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Ändern des Buttons je nach Bild
const imageContainers = document.querySelectorAll('.image-container');
const buttons = document.querySelectorAll('.image-button');

window.addEventListener('scroll', () => {
    imageContainers.forEach((container, index) => {
        const rect = container.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // Aktuelles Bild erreichen
            buttons.forEach(button => button.style.display = "none");
            buttons[index].style.display = "block";
        }
    });
});
