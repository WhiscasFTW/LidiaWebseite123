// Ladeanimation ausblenden und Hauptinhalt einblenden
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const fullscreenContainer = document.querySelector('.fullscreen-container');

    // Ladeanimation ausblenden
    loader.classList.add('hidden');

    // Hauptinhalt einblenden
    setTimeout(() => {
        fullscreenContainer.classList.add('visible');
    }, 500); // Kurze Verzögerung für einen fließenden Übergang
});

// Button nach einer kurzen Verzögerung sichtbar machen
window.onload = function () {
    setTimeout(function () {
        const button = document.querySelector('.intro-button');
        button.classList.add('visible');
    }, 1000); // 1 Sekunde Verzögerung
};

// Übergangsanimation und Weiterleitung zur Startseite
document.getElementById('openCurtain').addEventListener('click', function () {
    const curtain = document.getElementById('curtain');
    const transition = document.createElement('div'); // Übergangselement

    // Übergangs-Element für die Animation erstellen
    transition.classList.add('page-transition');
    document.body.appendChild(transition);

    // Animation starten
    setTimeout(() => {
        transition.classList.add('active');
    }, 50); // Kleine Verzögerung, um die Animation sichtbar zu machen

    // Weiterleitung zur Startseite nach der Animation
    setTimeout(function () {
        window.location.href = 'startseite.html'; // Zielseite
    }, 850); // Zeitdauer entsprechend der CSS-Transition
});
