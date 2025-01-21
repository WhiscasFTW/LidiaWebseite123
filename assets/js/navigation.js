// Array mit den IDs der Bilder und den zugehörigen Links
const images = [
    { id: 'image1', link: 'steckbrief.html', text: 'Steckbrief' },
    { id: 'image2', link: 'meine-werke.html', text: 'Meine Werke' },
    { id: 'image3', link: 'projekte.html', text: 'Projekte' },
    { id: 'image4', link: 'kontakt.html', text: 'Kontakt' },
    { id: 'image5', link: 'impressum.html', text: 'Impressum' }
];

const button = document.getElementById('imageButton');

function updateButton() {
    images.forEach((image, index) => {
        const element = document.getElementById(image.id);
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            button.textContent = image.text;
            button.href = image.link;
        }
    });
}

window.addEventListener('scroll', updateButton);
updateButton();
