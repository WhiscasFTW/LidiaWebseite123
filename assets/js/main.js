// Nach einer kurzen Verzögerung den Button, die Signatur und die Animation sichtbar machen
window.onload = function () {
    setTimeout(function () {
        document.querySelector('.intro-button').classList.add('visible'); // Button sichtbar machen
        document.querySelector('.signature').classList.add('visible'); // Signatur sichtbar machen
        document.querySelector('.fullscreen-container').classList.add('start'); // Abdunkelungs- und Unschärfeeffekt starten
    }, 1000); // 1 Sekunde Verzögerung
};

// Vorhang-Effekt
document.getElementById('openCurtain').addEventListener('click', function () {
    // Vorhang öffnet sich
    document.getElementById('curtain').classList.add('open');

    // Die eigentliche Webseite nach dem Vorhang-Effekt laden
    setTimeout(function () {
        window.location.href = 'startseite.html'; // Zielseite (kann beliebig geändert werden)
    }, 1000); // Der Vorhang öffnet sich für 1 Sekunde
});
