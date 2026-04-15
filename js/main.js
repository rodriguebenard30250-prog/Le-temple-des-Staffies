// MENU MOBILE
const nav = document.querySelector("nav ul");
const burger = document.createElement("div");
burger.classList.add("burger");
burger.innerHTML = "☰";
document.querySelector("header").appendChild(burger);

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// SCROLL DOUX
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

// FADE-IN ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});