
document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.slideshow');
    const collageButton = document.querySelector('.collage-button');
    const collageContainer = document.querySelector('.collage-container');

    slideshows.forEach(slideshow => {
        const slidesContainer = slideshow.querySelector('.slides');
        const slides = slideshow.querySelectorAll('.slide');
        const prevButton = slideshow.querySelector('.prev');
        const nextButton = slideshow.querySelector('.next');
        let currentIndex = 0;

        // Funktion zum Ausblenden der Infobox
        function hideInfoBoxes() {
            slides.forEach(slide => {
                const info = slide.querySelector('.info');
                if (info) {
                    info.style.opacity = '0'; // Infobox ausblenden
                }
            });
        }

        // Funktion zum Aktualisieren der Navigation-Buttons
        function updateButtons() {
            prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
            nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
        }

        // Funktion zum Anzeigen eines bestimmten Slides
        function showSlide(index) {
            hideInfoBoxes(); // Infoboxen ausblenden, bevor der Slide gewechselt wird
            const offset = -index * 100;
            slidesContainer.style.transform = `translateX(${offset}%)`;
            currentIndex = index;
            updateButtons();
        }

        // Event-Listener für die Navigation-Buttons
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                showSlide(currentIndex - 1);
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) {
                showSlide(currentIndex + 1);
            }
        });

        // Hover-Effekt für die Infobox
        slides.forEach((slide, index) => {
            const info = slide.querySelector('.info');
            if (info) {
                slide.addEventListener('mouseenter', () => {
                    info.style.opacity = '1'; // Infobox einblenden
                });

                slide.addEventListener('mouseleave', () => {
                    info.style.opacity = '0'; // Infobox ausblenden
                });
            }
        });

        // Swipe für mobile Geräte
        let touchStartX = 0;
        let touchEndX = 0;

        slidesContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        slidesContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX > touchEndX) {
                if (currentIndex < slides.length - 1) {
                    showSlide(currentIndex + 1);
                }
            } else if (touchStartX < touchEndX) {
                if (currentIndex > 0) {
                    showSlide(currentIndex - 1);
                }
            }
        });

        updateButtons();
    });

    // Collage-Button-Funktion
    collageButton.addEventListener('click', function() {
        collageContainer.classList.toggle('active');
        const images = document.querySelectorAll('.slideshow img');
        collageContainer.innerHTML = ''; // Reset Collage Container
        images.forEach(img => {
            const clone = img.cloneNode();
            collageContainer.appendChild(clone);
        });
    });

    // Collage-Container schließen
    collageContainer.addEventListener('click', () => {
        collageContainer.classList.remove('active');
    });
});
