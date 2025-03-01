document.addEventListener('DOMContentLoaded', () => {
    const curtainButton = document.getElementById('openCurtain');

    if (curtainButton) {
        curtainButton.addEventListener('click', function () {
            window.location.href = 'startseite.html'; // Direkt zur Startseite weiterleiten
        });
    }
});
