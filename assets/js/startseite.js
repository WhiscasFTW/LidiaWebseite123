// Funktion zum Öffnen und Schließen der Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const toggleButton = document.getElementById('toggleButton');

    // Toggle Sidebar
    sidebar.classList.toggle('open');
    // Toggle Overlay
    overlay.classList.toggle('active');
    // Toggle Button-Position
    toggleButton.classList.toggle('open');
}
