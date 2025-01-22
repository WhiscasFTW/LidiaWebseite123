// Vorhang-Effekt: Nach Klick auf den Button wird der Vorhang geöffnet
document.getElementById('openCurtain').addEventListener('click', function() {
    // Vorhang öffnet sich
    document.getElementById('curtain').classList.add('open');

    // Die eigentliche Webseite nach dem Vorhang-Effekt laden
    setTimeout(function() {
        // Die Hauptseite mit Navigation anzeigen
        window.location.href = 'startseite.html'; // Zielseite (Startseite)
    }, 1000); // Der Vorhang öffnet sich für 1 Sekunde
});

// Nach einer kurzen Verzögerung den Button sichtbar machen
window.onload = function() {
    setTimeout(function() {
        document.querySelector('.intro-button').classList.add('visible');
    }, 1000); // 1 Sekunde Verzögerung
};
