document.getElementById('openCurtain').addEventListener('click', function () {
  const transition = document.getElementById('pageTransition'); // Übergangselement holen

  // Animation starten
  transition.classList.add('active'); // Übergang aktivieren

  // Weiterleitung zur gewünschten Seite nach der Animation
  setTimeout(function () {
    window.location.href = 'deine-zielseite.html'; // Zielseite
  }, 800); // Zeitdauer entsprechend der CSS-Transition
});
