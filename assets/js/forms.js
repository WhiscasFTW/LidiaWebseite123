const galleryInner = document.querySelector('.gallery-3d-inner');

// Galerie mit Mausbewegung steuern
document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25; // Horizontaler Effekt
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25; // Vertikaler Effekt
    galleryInner.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Galerie stoppt, wenn die Maus über der Galerie ist
galleryInner.addEventListener('mouseenter', () => {
    galleryInner.style.animationPlayState = 'paused';
});

// Galerie startet wieder, wenn die Maus die Galerie verlässt
galleryInner.addEventListener('mouseleave', () => {
    galleryInner.style.animationPlayState = 'running';
});
