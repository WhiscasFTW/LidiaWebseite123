function toggleText(boxNumber) {
    const text = document.querySelectorAll('.hidden-text')[boxNumber - 1];
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
        text.style.opacity = 1;
        text.style.maxHeight = "100px"; // Adjust based on content size
    } else {
        text.style.opacity = 0;
        text.style.maxHeight = "0";
        setTimeout(() => {
            text.style.display = "none";
        }, 500);
    }
}
