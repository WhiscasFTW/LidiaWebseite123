document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.slideshow');

    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll('.slide');
        const prevButton = slideshow.querySelector('.prev');
        const nextButton = slideshow.querySelector('.next');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            updateButtons();
        }

        function updateButtons() {
            prevButton.style.display = currentSlide === 0 ? 'none' : 'block';
            nextButton.style.display = currentSlide === slides.length - 1 ? 'none' : 'block';
        }

        prevButton.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                showSlide(currentSlide);
            }
        });

        slides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                slide.classList.toggle('transparent');
                const info = slide.querySelector('.info');
                info.style.display = info.style.display === 'block' ? 'none' : 'block';
            });
        });

        showSlide(currentSlide);
    });
});
