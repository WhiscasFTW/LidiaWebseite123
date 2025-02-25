

// Slider-Code
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;

// Event next click
next.onclick = function() {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

// Event prev click
prev.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

// Auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000);

function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}

function setPositionThumbnail() {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// Click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

// Sidebar-Code
// Funktion zum Öffnen/Schließen der Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    var overlay = document.getElementById('overlay');

    // Sidebar und Button umschalten
    sidebar.classList.toggle('open');
    toggleButton.classList.toggle('open');

    // Overlay für den abgedunkelten Hintergrund ein- oder ausblenden
    overlay.classList.toggle('active');

    // Animationen stoppen, nachdem der Button das erste Mal gedrückt wurde
    toggleButton.style.animation = 'none'; // Animationen entfernen
}

// Beim Laden der Seite das Overlay ausblenden und entfernen
window.onload = function() {
    var overlay = document.getElementById('page-transition-overlay');
    
    // Überprüfen, ob das Overlay vorhanden ist, und es korrekt entfernen
    if (overlay) {
        overlay.style.opacity = '0';

        // Overlay nach 0 Sekunden vollständig entfernen
        setTimeout(function() {
            overlay.remove();
        }, 0);
    }
};

// Funktion für den Seitenwechsel ohne Übergangseffekt
function navigateToPage(url) {
    window.location.href = url;
}

// Event-Listener für alle Links, die zu einer neuen Seite führen
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        if (link.href && !link.href.includes('javascript:')) {
            event.preventDefault();
            navigateToPage(link.href);
        }
    });
});

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
