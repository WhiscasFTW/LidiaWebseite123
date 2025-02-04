
/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".box").forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.transform = "scale(1.05)";
            box.style.transition = "transform 0.3s ease";
        });
        box.addEventListener("mouseout", () => {
            box.style.transform = "scale(1)";
        });
    });
});
