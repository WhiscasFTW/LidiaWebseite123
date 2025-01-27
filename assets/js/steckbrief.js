window.onload = () => {
  const loadingScreen = document.getElementById('loading-screen');
  const video = document.getElementById('video-background');

  // Überprüfen, ob das Video geladen ist
  video.onloadeddata = () => {
    // Ladebildschirm nach Video-Load ausblenden
    loadingScreen.style.display = 'none';
  };

  // Sicherstellen, dass der Ladebildschirm nach 10 Sekunden verschwindet (Fallback)
  setTimeout(() => {
    if (loadingScreen.style.display !== 'none') {
      loadingScreen.style.display = 'none'; // Ladebildschirm nach 10 Sekunden ausblenden
    }
  }, 10000); // 10 Sekunden Wartezeit, bevor der Ladebildschirm entfernt wird
};

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
  const toggleButton = document.querySelector('.toggle-button');
  toggleButton.classList.toggle('open');
}
