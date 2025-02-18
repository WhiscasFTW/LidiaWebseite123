document.addEventListener('DOMContentLoaded', function () {
    const slideshows = document.querySelectorAll('.slideshow');
    const collageButton = document.getElementById('collage-button');
    const collageModal = document.getElementById('collage-modal');
    const closeModal = document.getElementById('close-modal');

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

        updateButtons();
    });

    collageButton.addEventListener('click', () => {
        collageModal.classList
