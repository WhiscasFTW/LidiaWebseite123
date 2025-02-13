function toggleText(boxNumber) {
    const text = document.querySelectorAll('.hidden-text')[boxNumber - 1];
    if (text.style.maxHeight === "0px" || text.style.maxHeight === "") {
        text.style.opacity = 1;
        text.style.maxHeight = text.scrollHeight + "px";
    } else {
        text.style.opacity = 0;
        text.style.maxHeight = "0";
    }
}

// Open the first box on page load
window.onload = function() {
    const firstBoxText = document.querySelector('.hidden-text');
    firstBoxText.style.opacity = 1;
    firstBoxText.style.maxHeight = firstBoxText.scrollHeight + "px";
};
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});
