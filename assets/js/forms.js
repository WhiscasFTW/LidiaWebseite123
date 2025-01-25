document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        toggleButton.classList.toggle('open');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        toggleButton.classList.remove('open');
    });
});
