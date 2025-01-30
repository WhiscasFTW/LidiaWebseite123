// Funktion zum Öffnen des Modals
function openModal(imgElement) {
  var modal = document.getElementById('modal');
  var modalImage = document.getElementById('modalImage');
  modalImage.src = imgElement.src;
  modal.style.display = 'flex';
}

// Funktion zum Schließen des Modals
function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Funktion zum Öffnen und Schließen der Sidebar
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
  var toggleButton = document.getElementById('toggleButton');
  toggleButton.classList.toggle('open');
}

// Event-Listener für den Sidebar Button
document.getElementById('toggleButton').addEventListener('click', function() {
  toggleSidebar();
});

// Optional: Schließen der Sidebar, wenn das Overlay angeklickt wird
document.getElementById('overlay').addEventListener('click', function() {
  toggleSidebar();
});
