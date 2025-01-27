// loading-screen.js
window.onload = function() {
    // Nach dem Laden der Seite den Loading Screen entfernen
    var loadingScreen = document.getElementById('loading-screen');
    var mainContent = document.getElementById('main-content');

    // Nach 1,4 Sekunden das Loading Screen ausblenden und den Inhalt anzeigen
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 1400); // 1,4 Sekunden Verzögerung
};
