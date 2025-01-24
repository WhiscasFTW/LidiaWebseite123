// Beim Laden der Seite den Zustand überprüfen
window.onload = function () {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');
    var sidebarState = localStorage.getItem('sidebarState');

    if (sidebarState === 'open') {
        sidebar.classList.add('open');
        toggleButton.classList.add('open');
        overlay.classList.add('active');
    }

    // Footer und Leuchtstreifen einblenden beim Scrollen
    window.addEventListener('scroll', function () {
        const footer = document.querySelector('footer');
        const secondHeaderBox = document.querySelector('.second-header-box-container');
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (isAtBottom) {
            footer.classList.add('visible');
            secondHeaderBox.style.bottom = '51px'; // Leuchtstreifen über dem Footer
        } else {
            footer.classList.remove('visible');
            secondHeaderBox.style.bottom = '-3px'; // Leuchtstreifen versteckt
        }
    });
};
