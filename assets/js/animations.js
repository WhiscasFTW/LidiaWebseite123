// Einfacher Fade-In Effekt beim Scrollen
const fadeInElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add("fade-in");
        }
    });
});

