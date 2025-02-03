// Einfache Animation für das Absenden des Formulars
document.querySelector(".submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Verhindern, dass das Formular abgeschickt wird
    alert("Vielen Dank für deine Nachricht! Wir werden uns bald bei dir melden.");
});
