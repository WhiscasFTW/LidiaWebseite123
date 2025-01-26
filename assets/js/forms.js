function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleButton');
    const overlay = document.getElementById('overlay');

    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
    overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
}
