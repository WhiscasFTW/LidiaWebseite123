window.addEventListener('load', () => {
    const contentBlocks = document.querySelectorAll('.content-block');
    const moreText = document.querySelector('.more-text');

    // Füge der ersten Box und dem Zitat die Klasse 'visible' hinzu
    contentBlocks.forEach((block, index) => {
        setTimeout(() => {
            block.classList.add('visible');
        }, index * 200);  // Verzögerung für jede Box
    });

    moreText.classList.add('visible');
});
