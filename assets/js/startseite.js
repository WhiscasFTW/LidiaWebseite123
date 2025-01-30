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

// Slider-Funktionalität
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// Konfiguration
let countItem = items.length;
let itemActive = 0;

// Event-Handler für Weiter-Button
next.onclick = function() {
  itemActive = (itemActive + 1) % countItem;
  showSlider();
};

// Event-Handler für Zurück-Button
prev.onclick = function() {
  itemActive = (itemActive - 1 + countItem) % countItem;
  showSlider();
};

// Automatische Rotation des Sliders
let refreshInterval = setInterval(() => {
  next.click();
}, 5000);

function showSlider() {
  // Entferne alte aktive Elemente
  document.querySelector('.slider .list .item.active')?.classList.remove('active');
  document.querySelector('.thumbnail .item.active')?.classList.remove('active');

  // Setze neue aktive Elemente
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');
  setPositionThumbnail();

  // Reset des Auto-Slides
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}

function setPositionThumbnail() {
  let thumbnailActive = document.querySelector('.thumbnail .item.active');
  if (thumbnailActive) {
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
      thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
  }
}

// Klick-Event für Thumbnails
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    itemActive = index;
    showSlider();
  });
});
