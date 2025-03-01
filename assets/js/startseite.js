document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const fullscreenContainer = document.querySelector('.fullscreen-container');
    const button = document.querySelector('.intro-button');
    const curtainButton = document.getElementById('openCurtain');

    if (loader) loader.classList.add('hidden'); // Ladeanimation ausblenden

    setTimeout(() => {
        if (fullscreenContainer) fullscreenContainer.classList.add('visible');
    }, 500); // Fließender Übergang

    setTimeout(() => {
        if (button) button.classList.add('visible');
    }, 1000); // Button verzögert anzeigen

    if (curtainButton) {
        curtainButton.addEventListener('click', function () {
            const transition = document.createElement('div'); // Übergangselement
            transition.classList.add('page-transition');
            document.body.appendChild(transition);

            setTimeout(() => transition.classList.add('active'), 50); // Animation starten
            setTimeout(() => window.location.href = 'startseite.html', 850); // Weiterleitung
        });
    }
});
