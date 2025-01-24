// Button nach einer Verzögerung sichtbar machen
window.onload = function () {
    setTimeout(function () {
        const button = document.querySelector('.intro-button');
        button.classList.add('visible'); // Button sichtbar machen
    }, 1000); // 1 Sekunde Verzögerung
};

// Vorhang öffnen und zur Startseite weiterleiten
document.getElementById('openCurtain').addEventListener('click', function () {
    const curtain = document.getElementById('curtain');

    // Vorhang-Animation starten
    curtain.classList.add('open');

    // Nach der Animation zur Startseite weiterleiten
    setTimeout(function () {
        window.location.href = 'startseite.html'; // Zielseite
    }, 1000); // Die Zeit entspricht der CSS-Transition
});
