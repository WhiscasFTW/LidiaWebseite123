document.addEventListener('DOMContentLoaded', function () {
    const curtain = document.querySelector('.curtain');
    const button = document.querySelector('.intro-button');
    
    // Button wird nach einer kurzen Verzögerung sichtbar
    setTimeout(function () {
        button.classList.add('visible');
    }, 4000); // Button wird nach 4 Sekunden sichtbar

    // Klick-Ereignis für den Button
    button.addEventListener('click', function () {
        // Vorhang öffnet sich, wenn der Button geklickt wird
        curtain.classList.add('open');
        
        // Verstecke den Button nach dem Klick
        button.classList.remove('visible');
    });
});
