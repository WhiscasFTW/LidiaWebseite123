document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.slideshow');
    const collageButton = document.querySelector('.collage-button');
    const collageContainer = document.querySelector('.collage-container');

    // Slide-Funktion
    slideshows.forEach(slideshow => {
        const slidesContainer = slideshow.querySelector('.slides');
        const slides = slideshow.querySelectorAll('.slide');
        const prevButton = slideshow.querySelector('.prev');
        const nextButton = slideshow.querySelector('.next');
        let currentIndex = 0;

        function updateButtons() {
            prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
            nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
        }

        function showSlide(index) {
            const offset = -index * 100;
            slidesContainer.style.transform = `translateX(${offset}%)`;
            currentIndex = index;
            updateButtons();
        }

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

        slides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                slide.classList.toggle('transparent');
                const info = slide.querySelector('.info');
                info.style.display = info.style.display === 'block' ? 'none' : 'block';
            });
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

    // Collage-Container schließen, wenn auf das Hintergrund geklickt wird
    collageContainer.addEventListener('click', () => {
        collageContainer.classList.remove('active');
    });
});
