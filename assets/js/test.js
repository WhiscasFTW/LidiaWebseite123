document.getElementById('openCurtain').addEventListener('click', function () {
  const transition = document.getElementById('pageTransition'); // Übergangselement holen

  // Animation starten
  setTimeout(() => {
    transition.classList.add('active'); // Übergang aktivieren
  }, 50); // Kleine Verzögerung, um die Animation sichtbar zu machen

  // Weiterleitung zur gewünschten Seite nach der Animation
  setTimeout(function () {
    window.location.href = 'deine-zielseite.html'; // Zielseite
  }, 850); // Zeitdauer entsprechend der CSS-Transition
});
