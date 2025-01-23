function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var sound = new Audio('assets/sounds/click.mp3'); /* Soundeffekt */

    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');
    sound.play(); /* Sound abspielen */
}
