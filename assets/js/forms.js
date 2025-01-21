// Einfache Formularvalidierung
const form = document.querySelector("form");
const nameInput = document.querySelector("input[name='name']");
const messageInput = document.querySelector("textarea[name='message']");

form.addEventListener("submit", function(event) {
    if (!nameInput.value || !messageInput.value) {
        event.preventDefault();
        alert("Bitte füllen Sie alle Felder aus.");
    }
});

