window.onload = () => {
  const video = document.getElementById('video-background');
  const loadingScreen = document.getElementById('loading-screen');

  // Sicherstellen, dass das Video vollständig geladen ist
  video.oncanplaythrough = () => {
    loadingScreen.style.display = 'none'; // Ladebildschirm ausblenden
  };
};

// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleButton = document.getElementById('toggleButton');
  const overlay = document.getElementById('overlay');

  // Sidebar und Button umschalten
  sidebar.classList.toggle('open');
  toggleButton.classList.toggle('open');

  // Overlay für den abgedunkelten Hintergrund ein- oder ausblenden
  overlay.classList.toggle('active');
}

// Beim Laden der Seite das Overlay ausblenden und entfernen
window.onload = function () {
  const overlay = document.getElementById('page-transition-overlay');

  if (overlay) {
    overlay.style.opacity = '0';
    setTimeout(function () {
      overlay.remove();
    }, 500);
  }
};

// Funktion für den Seitenwechsel mit 1,4 Sekunden Fade-Out
function navigateToPage(url) {
  const overlay = document.createElement('div');
  overlay.id = 'page-transition-overlay';
  overlay.className = 'page-transition-overlay';
  document.body.appendChild(overlay);

  setTimeout(function () {
    overlay.style.opacity = '1';
  }, 1);

  setTimeout(function () {
    window.location.href = url;
  }, 500);
}

// Event-Listener für alle Links, die zu einer neuen Seite führen
document.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    if (link.href && !link.href.includes('javascript:')) {
      event.preventDefault();
      navigateToPage(link.href);
    }
  });
});
