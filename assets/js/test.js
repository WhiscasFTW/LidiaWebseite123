document.addEventListener("DOMContentLoaded", function () {
  const artImages = document.querySelectorAll('.art-image');
  
  artImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
      image.style.opacity = '0.7';
    });
    
    image.addEventListener('mouseleave', () => {
      image.style.opacity = '1';
    });
  });
});

