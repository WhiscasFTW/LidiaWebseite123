function toggleText(boxNumber) {
    const text = document.querySelectorAll('.hidden-text')[boxNumber - 1];
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
