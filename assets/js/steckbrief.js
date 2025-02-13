function toggleText(boxNumber) {
    const text = document.querySelectorAll('.hidden-text')[boxNumber - 1];
    if (text.style.maxHeight === "0px" || text.style.maxHeight === "") {
        text.style.opacity = 1;
        text.style.maxHeight = text.scrollHeight + "px";
    } else {
        text.style.opacity = 0;
        text.style.maxHeight = "0";
    }

};
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});

// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var toggleButton = document.getElementById('toggleButton');
  var overlay = document.getElementById('overlay');

  // Sidebar und Button umschalten
  sidebar.classList.toggle('open');
  toggleButton.classList.toggle('open');

  // Overlay für den abgedunkelten Hintergrund ein- oder ausblenden
  overlay.classList.toggle('active');

  // Animationen stoppen, nachdem der Button das erste Mal gedrückt wurde
  toggleButton.style.animation = 'none'; // Animationen entfernen
}

// Beim Laden der Seite das Overlay ausblenden und entfernen
window.onload = function () {
  var overlay = document.getElementById('page-transition-overlay');
  
  // Überprüfen, ob das Overlay vorhanden ist, und es korrekt entfernen
  if (overlay) {
    overlay.style.opacity = '0';

    // Overlay nach 0 Sekunden vollständig entfernen
    setTimeout(function () {
      overlay.remove();
    }, 0);
  }
};

// Funktion für den Seitenwechsel ohne Übergangseffekt
function navigateToPage(url) {
  window.location.href = url;
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
