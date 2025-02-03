// Optionale Lazy-Loading-Funktionalität für eingebettete Inhalte (z.B. Google Map und YouTube)
document.addEventListener('DOMContentLoaded', function() {
  const youtubeIframe = document.querySelector('.youtube-container iframe');
  const googleMapIframe = document.querySelector('.google-map iframe');

  // Lazy Load Video und Google Map bei Sichtbarkeit im Viewport
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src; // Setze die Datenquelle der eingebetteten Inhalte
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoad, options);

  observer.observe(youtubeIframe);
  observer.observe(googleMapIframe);
});
