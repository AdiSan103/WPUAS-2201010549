// API
let search = "tech";
var app = new Vue({
  el: "#app",
  data: {
    response: [],
    responseStartIndex3: [],
  },
  mounted() {
    AOS.init(); // Initialize AOS when the Vue component is mounted
    this.fetchData();
  },
  methods: {
    // to get data by axios
    fetchData() {
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${APIKey}`
        )
        .then((response) => {
          this.response = response.data.results;
          this.responseStartIndex3 = response.data.results.slice(3);
          // console.log(this.response[0].tags[0].title);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
