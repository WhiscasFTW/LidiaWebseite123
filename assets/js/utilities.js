// Beispiel für eine Hilfsfunktion
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString("de-DE", options);
}

