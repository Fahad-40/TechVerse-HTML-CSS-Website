let backToTop = document.querySelector(".backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        // Scroll 200px se zyada hai to 'show' class lagao
        backToTop.classList.add("show");
    } else {
        // Scroll 200px se kam hai to 'show' class hatao
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    // Click hone par smooth scroll top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});