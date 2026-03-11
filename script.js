/* ---------------------------------------
   DARK / LIGHT MODE
---------------------------------------- */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // Sauvegarde du thème
    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

// Charger le thème sauvegardé
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}


/* ---------------------------------------
   GSAP ANIMATIONS
---------------------------------------- */
gsap.from(".logo-container", {
    opacity: 0,
    y: -20,
    duration: 0.8
});

gsap.from("nav a", {
    opacity: 0,
    y: -10,
    duration: 0.6,
    stagger: 0.1
});

gsap.from(".hero-text", {
    opacity: 0,
    x: -40,
    duration: 1
});

gsap.from(".hero-img", {
    opacity: 0,
    x: 40,
    duration: 1.2
});


/* ---------------------------------------
   AOS INIT
---------------------------------------- */
AOS.init({
    duration: 800,
    once: true
});
