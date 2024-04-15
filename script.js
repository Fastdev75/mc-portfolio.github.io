// script.js

document.addEventListener("DOMContentLoaded", function() {
    let currentPage = 0;
    const sections = document.querySelectorAll("section");

    function scrollToPage(pageNumber) {
        sections[currentPage].classList.remove("active");
        sections[pageNumber].classList.add("active");

        setTimeout(() => {
            sections[currentPage].classList.remove("next");
        }, 500);

        currentPage = pageNumber;
    }

    function handleScroll(event) {
        if (event.deltaY > 0 && currentPage < sections.length - 1) {
            sections[currentPage].classList.add("next");
            scrollToPage(currentPage + 1);
        }
    }

    window.addEventListener("wheel", handleScroll);

    // Modification des liens de la section documentation pour ouvrir dans un nouvel onglet
    const documentationLinks = document.querySelectorAll("#Documentation a");
    documentationLinks.forEach(link => {
        link.setAttribute("target", "_blank");
        link.removeAttribute("download");
    });
});
