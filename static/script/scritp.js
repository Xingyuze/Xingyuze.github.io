window.addEventListener("scroll", function() {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky-top", window.scrollY > 0);
});