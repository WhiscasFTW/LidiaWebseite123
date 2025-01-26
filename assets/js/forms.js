function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const toggleButton = document.getElementById("toggleButton");

    sidebar.classList.toggle("open");
    overlay.classList.toggle("open");
    toggleButton.classList.toggle("open");

    // Entferne die Pulsierungsanimation nach dem ersten Klick
    if (toggleButton.classList.contains("attention")) {
        toggleButton.classList.remove("attention");
    }
}
