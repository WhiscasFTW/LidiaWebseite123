// Einfache Navigation mit Highlight-Effekt beim Scrollen
const links = document.querySelectorAll(".navigation a");

window.addEventListener("scroll", () => {
    let current = "";
    links.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section.offsetTop <= window.scrollY + 60 && section.offsetTop + section.offsetHeight > window.scrollY) {
            current = link.hash;
        }
    });
    links.forEach(link => {
        link.classList.remove("active");
        if (link.hash === current) {
            link.classList.add("active");
        }
    });
});

