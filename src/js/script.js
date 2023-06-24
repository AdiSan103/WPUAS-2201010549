// navbar
let hamburgerMenu = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
hamburgerMenu.addEventListener("click", () => {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
});

// beranda-swiper-testimoni
var swiper = new Swiper(".beranda-mySwiper-testimoni", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".beranda-swiper-pagination-testimoni",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// beranda-swiper-news
var swiper = new Swiper(".beranda-mySwiper-news", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
