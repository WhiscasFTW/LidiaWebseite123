document.addEventListener('DOMContentLoaded', function () {
    const curtain = document.querySelector('.curtain');
    const button = document.querySelector('.intro-button');
    const mainContent = document.querySelector('.main-content');

    // Button sichtbar machen nach einer kurzen Verzögerung
    setTimeout(function () {
        button.classList.add('visible');
    }, 4000); // Button erscheint nach 4 Sekunden

    // Klick auf den Button
    button.addEventListener('click', function () {
        // Vorhang öffnet sich
        curtain.classList.add('open');
        
        // Warte, bis der Vorhang vollständig geöffnet ist
        setTimeout(function () {
            // Hauptinhalt sichtbar machen
            mainContent.classList.add('visible');
        }, 1000); // Warte 1 Sekunde nach dem Öffnen des Vorhangs, um sicherzustellen, dass der Inhalt angezeigt wird

        // Button ausblenden
        button.classList.remove('visible');
    });
});
