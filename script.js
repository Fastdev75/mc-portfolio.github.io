// script.js

let currentPage = 0;
const sections = document.querySelectorAll("section");

function scrollToPage(pageNumber) {
    const yOffset = window.innerHeight * pageNumber;
    document.body.style.transform = `translateY(-${yOffset}px)`;
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown" && currentPage < sections.length - 1) {
        currentPage++;
        scrollToPage(currentPage);
    }
});
