// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var menuText = document.getElementById("menuText");
    var closeBtn = document.getElementById("closeBtn");

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        sidebar.classList.add("closed");
        menuText.textContent = "Menü";  // Text zurücksetzen
        closeBtn.style.display = "none";  // Close-Button ausblenden, wenn geschlossen
    } else {
        sidebar.classList.remove("closed");
        sidebar.classList.add("open");
        menuText.textContent = "Schließen";  // Text ändern zu "Schließen"
        closeBtn.style.display = "block";  // Close-Button anzeigen
    }
}
