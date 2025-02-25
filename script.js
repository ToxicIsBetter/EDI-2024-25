// Toggle navbar style on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile menu toggle functionality
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navUl.classList.toggle("active");
    });
}
