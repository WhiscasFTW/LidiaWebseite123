// Button und Signatur nach Verzögerung sichtbar machen
window.onload = function () {
    setTimeout(function () {
        const button = document.querySelector('.intro-button');
        const signature = document.getElementById('signature');

        button.classList.add('visible');
        signature.classList.add('visible');
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
