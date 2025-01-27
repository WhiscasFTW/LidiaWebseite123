document.addEventListener("DOMContentLoaded", function() {
  // Ladebildschirm
  setTimeout(function() {
    document.getElementById("loading-screen").style.display = "none";
  }, 2000); // Ladebildschirm für 2 Sekunden anzeigen

  // Sidebar öffnen und schließen
  let sidebar = document.getElementById("sidebar");
  let overlay = document.getElementById("overlay");
  
  // Sidebar umschalten
  window.toggleSidebar = function() {
    sidebar.classList.toggle("open");
    overlay.style.display = sidebar.classList.contains("open") ? "block" : "none";
  }

  // Schließen, wenn der Overlay geklickt wird
  overlay.addEventListener("click", function() {
    sidebar.classList.remove("open");
    overlay.style.display = "none";
  });

  // Transition Overlay
  let transitionOverlay = document.getElementById("page-transition-overlay");
  transitionOverlay.style.display = "none";
});
