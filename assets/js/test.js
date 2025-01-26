window.addEventListener('load', function () {
  const transition = document.getElementById('pageTransition'); // Übergangselement holen

  // Übergang aktivieren, wenn die Seite vollständig geladen ist
  setTimeout(() => {
    transition.classList.add('active'); // Übergang aktivieren
  }, 100); // Kleine Verzögerung, um den Effekt sichtbar zu machen

  // Übergang nach einiger Zeit wieder deaktivieren
  setTimeout(() => {
    transition.classList.remove('active'); // Übergang deaktivieren
  }, 1200); // Übergangszeit (passend zur Dauer der CSS-Transition)
});
