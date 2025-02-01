document.addEventListener("DOMContentLoaded", function () {
    let fadeElements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        fadeElements.forEach(element => {
            let elementPosition = element.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});
