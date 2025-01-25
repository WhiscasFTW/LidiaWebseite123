// Überprüfen, ob das Video geladen wird
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('video-background');
    var imageBackground = document.getElementById('image-background');

    // Wenn das Video nicht geladen wird, zeige das Bild an
    video.addEventListener('error', function () {
        video.style.display = 'none'; // Video ausblenden
        imageBackground.style.display = 'block'; // Bild anzeigen
    });
});
