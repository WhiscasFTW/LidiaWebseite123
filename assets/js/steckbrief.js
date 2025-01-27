// Funktion zum Öffnen und Schließen der Sidebar
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('overlay');
  
  if (sidebar.style.left === '-250px') {
    sidebar.style.left = '0';
    overlay.style.display = 'block';
  } else {
    sidebar.style.left = '-250px';
    overlay.style.display = 'none';
  }
}
