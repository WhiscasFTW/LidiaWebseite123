function toggleText(boxNumber) {
    const text = document.querySelectorAll('.hidden-text')[boxNumber - 1];
    const button = document.querySelectorAll('.toggle-button')[boxNumber - 1];
    const videoSection = document.querySelector('.video-section');

    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
        text.style.opacity = 1;
        text.style.maxHeight = "100px"; // Adjust based on content size
        button.textContent = "▲";
        videoSection.style.opacity = 0;
        setTimeout(() => {
            videoSection.style.display = "none";
        }, 500);
    } else {
        text.style.opacity = 0;
        text.style.maxHeight = "0";
        button.textContent = "▼";
        setTimeout(() => {
            text.style.display = "none";
            videoSection.style.display = "block";
            setTimeout(() => {
                videoSection.style.opacity = 1;
            }, 10);
        }, 500);
    }
}
