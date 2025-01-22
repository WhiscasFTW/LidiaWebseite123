document.getElementById('openCurtain').addEventListener('click', function() {
    // Vorhang öffnet sich
    document.getElementById('curtain').classList.add('open');
    
    // Verzögerung vor dem Einblenden des Inhalts
    setTimeout(function() {
        document.getElementById('newContent').classList.add('visible'); // Dynamischer Inhalt wird sichtbar
        document.getElementById('curtain').classList.remove('open'); // Vorhang wird entfernt
    }, 1000); // 1 Sekunde Verzögerung
});
