// Funktion zum Öffnen und Schließen der Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const toggleButton = document.getElementById("toggleButton");

    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
    toggleButton.classList.toggle("open");

    // Wenn die Sidebar geöffnet wird, entferne die "attention"-Animation vom Button
    if (sidebar.classList.contains("open")) {
        toggleButton.classList.remove("attention");
    }
}
