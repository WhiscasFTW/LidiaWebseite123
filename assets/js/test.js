window.addEventListener('load', () => {
    // Alle Boxen und das Zitat selektieren
    const contentBlocks = document.querySelectorAll('.content-block');
    const moreText = document.querySelector('.more-text');

    // Füge der ersten Box und dem Zitat die Klasse 'visible' hinzu
    contentBlocks.forEach(block => block.classList.add('visible'));
    moreText.classList.add('visible');
});
