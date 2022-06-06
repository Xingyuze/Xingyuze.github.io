window.addEventListener("scroll", function() {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});