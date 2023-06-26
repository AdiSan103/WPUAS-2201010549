// beranda-swiper-testimoni
new Swiper(".beranda-mySwiper-testimoni", {
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
new Swiper(".beranda-mySwiper-news", {
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

// API
var app = new Vue({
  el: "#app",
  data: {
    dataProject: [],
    dataProjectStartIndex3: [],
    dataInspiration1: [],
    dataInspiration2: [],
    dataNews: [],
    isNavHidden: true,
  },
  mounted() {
    AOS.init(); // Initialize AOS when the Vue component is mounted
    this.fetchData();
  },
  methods: {
    // toggle nav
    toggleNav() {
      this.isNavHidden = !this.isNavHidden;
    },
    // to get data by axios
    fetchData() {
      // for dataProject
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&query=tech&client_id=${APIKey}`
        )
        .then((response) => {
          this.dataProject = response.data.results;
          this.dataProjectStartIndex3 = response.data.results.slice(3);
          this.dataInspiration1 = response.data.results.slice(4);
          // console.log(this.response[0].tags[0].title);
        })
        .catch((error) => {
          console.log(error);
        });

      // data news
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&query=laptop&client_id=${APIKey}`
        )
        .then((response) => {
          this.dataNews = response.data.results;
          this.dataInspiration2 = response.data.results.slice(4);
          // console.log(this.response[0].tags[0].title);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
