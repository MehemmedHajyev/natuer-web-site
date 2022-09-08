const menuBars = document.querySelector(".menu_bars");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu_close")
const nav = document.querySelector(".nav");



menuBars.addEventListener("click", function() {
    menu.classList.add("show")
    menu.classList.remove("hide")
})
menuClose.addEventListener("click", function() {
    menu.classList.add("hide")
    menu.classList.remove("show")
})



window.addEventListener("scroll", function() {
    if (scrollY > 50) {
        nav.classList.add("shadow")
    } else {
        nav.classList.remove("shadow")
    }
})

let swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    }
});