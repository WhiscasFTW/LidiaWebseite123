// Liste aller Seiten, die geladen werden sollen
const pagesToLoad = [
    'home.html',         // Startseite
    'startseite.html',   // Beispielseite 1
    'steckbrief.html',   // Beispielseite 2
    'meinewerke.html',   // Beispielseite 3
    'dienstleistungen.html', // Beispielseite 4
    'kontakt.html'       // Beispielseite 5
];

// Funktion zum Laden aller Seiten
function loadAllPages() {
    const promises = pagesToLoad.map(page => {
        return fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Fehler beim Laden von ${page}`);
                }
                return response.text();
            });
    });

    return Promise.all(promises);
}

// Warte, bis alle Seiten geladen sind
loadAllPages()
    .then(() => {
        // Alle Seiten sind geladen, verstecke den Ladebildschirm
        document.getElementById('loader').style.display = 'none';
        // Weiterleitung zur home.html
        window.location.href = 'home.html';
    })
    .catch(error => {
        console.error('Fehler beim Laden der Seiten:', error);
        // Zeige eine Fehlermeldung an
        document.getElementById('loader').innerHTML = '<p>Fehler beim Laden der Seite. Bitte versuche es später erneut.</p>';
    });

// Optional: Timeout-Fallback, falls das Laden zu lange dauert
setTimeout(function () {
    document.getElementById('loader').style.display = 'none';
    window.location.href = 'home.html';
}, 10000); // Fallback nach 10 Sekunden
