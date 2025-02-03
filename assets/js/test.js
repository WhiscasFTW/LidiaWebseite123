// Optional: Animationen oder Interaktive Funktionen können hier hinzugefügt werden
document.addEventListener('DOMContentLoaded', function() {
  // Beispiel: Einfacher Fokus-Effekt für Eingabefelder
  const formFields = document.querySelectorAll('.contact-form input, .contact-form textarea');
  
  formFields.forEach(field => {
    field.addEventListener('focus', () => {
      field.style.borderColor = '#4e8c4a';
    });
    
    field.addEventListener('blur', () => {
      field.style.borderColor = '#ddd';
    });
  });
});
