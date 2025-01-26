// Automatische Transition beim Laden der Seite
window.addEventListener('load', function () {
  const transition = document.getElementById('pageTransition'); // Übergangselement holen

  // Übergang aktivieren, wenn die Seite vollständig geladen ist
  setTimeout(() => {
    transition.classList.add('active'); // Übergang aktivieren
  }, 100); // Kleine Verzögerung, um den Effekt sichtbar zu machen

  // Übergang nach einiger Zeit wieder deaktivieren
  setTimeout(() => {
    transition.style.opacity = '0'; // Übergang bleibt ausgeblendet
    transition.style.zIndex = '-1'; // Verhindert, dass es erneut erscheint
  }, 1000); // Übergangszeit (passend zur Dauer der CSS-Transition)
});
