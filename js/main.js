// aos initialisation
AOS.init({
    offset: 100,
    delay: 100,
    duration: 700,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})

// theme button
const themeToggler = document.querySelector(".theme-toggler")
const body = document.querySelector("body")
const navLinks = document.querySelectorAll("nav .nav-list a")

themeToggler.addEventListener("click", toggleTheme)
navLinks.forEach(link => {
    link.addEventListener("click", toggleNav)
})

function toggleTheme() {
    body.classList.toggle("active")
}
// mobile menu
const menuButton = document.querySelector(".hammenu-btn")
const nav = document.querySelector("nav")

menuButton.addEventListener("click", toggleNav)

function toggleNav() {
    nav.classList.toggle("active")
}
