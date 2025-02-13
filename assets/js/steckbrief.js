function toggleText(boxNumber) {
    const text = document.querySelectorAll('.hidden-text')[boxNumber - 1];
    if (text.style.maxHeight === "0px" || text.style.maxHeight === "") {
        text.style.opacity = 1;
        text.style.maxHeight = text.scrollHeight + "px";
    } else {
        text.style.opacity = 0;
        text.style.maxHeight = "0";
    }

};
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});
