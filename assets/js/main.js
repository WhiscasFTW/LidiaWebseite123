document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.intro-button');
    const newPage = document.querySelector('.new-page');
    const closeButton = document.querySelector('.close-button');

    // Button sichtbar machen nach einer kurzen Verzögerung
    setTimeout(function () {
        button.classList.add('visible');
    }, 4000); // Button erscheint nach 4 Sekunden

    // Klick auf den Button
    button.addEventListener('click', function () {
        // Neue Seite sichtbar machen
        newPage.classList.add('visible');
    });

    // Klick auf den Schließen-Button der neuen Seite
    closeButton.addEventListener('click', function () {
        // Neue Seite ausblenden
        newPage.classList.remove('visible');
    });
});
