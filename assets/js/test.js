document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.slideshow');

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
            slidesContainer.style.transform = translateX(${offset}%);
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
});
