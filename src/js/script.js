// aos js
AOS.init();

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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// button to up
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollButton").style.display = "block";
  } else {
    document.getElementById("scrollButton").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
}
