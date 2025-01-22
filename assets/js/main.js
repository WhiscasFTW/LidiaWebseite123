function openWebsite() {
    // Entferne den Vorhang, um die echte Website zu zeigen
    const curtain = document.querySelector('.curtain');
    curtain.style.height = '0';  // Vorhang öffnet sich (Höhe auf 0 setzen)
    
    // Nach einer Verzögerung (damit der Vorhang gut aussieht), die Website anzeigen
    setTimeout(() => {
        window.location.href = 'https://github.com/WhiscasFTW/LidiaWebseite123/';  // Ersetze mit der tatsächlichen URL
    }, 1000);  // Warten Sie 1 Sekunde, bevor die Seite wechselt
}
