// Event-Listener für das Bild (Hover-Effekt)
const image = document.querySelector('.profile-img');
image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.1)';
});
image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
});
