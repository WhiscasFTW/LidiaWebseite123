document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.slideshow');
    const collageButton = document.createElement('button');
    collageButton.textContent = "Alle Bilder anzeigen";
    collageButton.style.position = 'fixed';
    collageButton.style.bottom = '20px';
    collageButton.style.left = '20px';
    collageButton.style.padding = '10px 20px';
    collageButton.style.backgroundColor = '#444';
    collageButton.style.color = '#fff';
    collageButton.style.border = 'none';
    collageButton.style.fontSize = '18px';
    collageButton.style.cursor = 'pointer';
    document.body.appendChild(collageButton);

    collageButton.addEventListener('click', () => {
        const collageContainer = document.createElement('div');
        collageContainer.style.position = 'fixed';
        collageContainer.style.top = '0';
        collageContainer.style.left = '0';
        collageContainer.style.width = '100%';
        collageContainer.style.height = '100%';
        collageContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        collageContainer.style.display = 'flex';
        collageContainer.style.flexWrap = 'wrap';
        collageContainer.style.justifyContent = 'center';
        collageContainer.style.alignItems = 'center';
        collageContainer.style.padding = '20px';
        collageContainer.style.zIndex = '1000';

        slideshows.forEach(slideshow => {
            const slides = slideshow.querySelectorAll('.slide');
            slides.forEach(slide => {
                const imgClone = slide.querySelector('img').cloneNode();
                imgClone.style.width = '200px';
                imgClone.style.margin = '10px';
                collageContainer.appendChild(imgClone);
            });
        });

        const closeButton = document.createElement('button');
        closeButton.textContent = "Schließen";
        closeButton.style.position = 'absolute';
        closeButton.style.top = '20px';
        closeButton.style.right = '20px';
        closeButton.style.padding = '10px 20px';
        closeButton.style.backgroundColor = '#444';
        closeButton.style.color = '#fff';
        closeButton.style.border = 'none';
        closeButton.style.fontSize = '18px';
        closeButton.style.cursor = 'pointer';
        collageContainer.appendChild(closeButton);

        closeButton.addEventListener('click', () => {
            collageContainer.remove();
        });

        document.body.appendChild(collageContainer);
    });
});
