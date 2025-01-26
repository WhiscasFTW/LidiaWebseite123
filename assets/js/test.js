// Script für Scroll-Effekt
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    document.body.classList.add('scrolled'); // Fügt die Klasse hinzu, wenn gescrollt wird
  } else {
    document.body.classList.remove('scrolled'); // Entfernt die Klasse, wenn nicht gescrollt wird
  }
});

