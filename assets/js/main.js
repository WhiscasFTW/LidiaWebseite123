// Nach einer kurzen Verzögerung den Button und die Signatur sichtbar machen
window.onload = function() {
    setTimeout(function() {
        document.querySelector('.intro-button').classList.add('visible');
        document.getElementById('signature').classList.add('visible'); // Signatur sichtbar machen
    }, 1000); // 1 Sekunde Verzögerung
};

// Vorhang-Effekt und Übergang zur nächsten Seite
document.getElementById('openCurtain').addEventListener('click', function() {
    const curtain = document.getElementById('curtain');
    
    // Vorhang-Effekt starten
    curtain.classList.add('open');

    // Verzögerung für den Seitenwechsel
    setTimeout(function() {
        window.location.href = 'startseite.html'; // Zielseite
    }, 1200); // 1,2 Sekunden, passend zur CSS-Transition
});
