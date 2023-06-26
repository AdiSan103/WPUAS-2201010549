// API
var app = new Vue({
  el: "#app",
  data: {
    searchQuery: "tech",
    dataProject: [],
    isNavHidden: true,
    isLoading: false,
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
      this.isLoading = true; // Display loading state
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&query=${this.searchQuery}&client_id=${APIKey}`
        )
        .then((response) => {
          this.dataProject = response.data.results;
          // console.log(this.response[0].tags[0].title);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false; // Hide loading state
        });
    },
  },
});
