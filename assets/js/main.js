// Nach einer kurzen Verzögerung den Button sichtbar machen
window.onload = function() {
    setTimeout(function() {
        document.querySelector('.intro-button').classList.add('visible');
        document.querySelector('.image-container').classList.remove('hidden');
        document.querySelector('.button-container').classList.remove('hidden');
    }, 1000); // 1 Sekunde Verzögerung
};

// Vorhang-Effekt
document.getElementById('openCurtain').addEventListener('click', function() {
    // Vorhang öffnet sich
    document.getElementById('curtain').classList.add('open');

    // Die Webseite nach dem Vorhang-Effekt ändern
    setTimeout(function() {
        document.getElementById('newContent').classList.add('visible'); // Dynamischer Inhalt wird sichtbar
        document.getElementById('curtain').classList.remove('open'); // Vorhang entfernt
    }, 1000); // 1 Sekunde Verzögerung
});
