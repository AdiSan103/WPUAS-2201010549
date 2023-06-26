// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
// Retrieve the value of the 'id' parameter
const id = urlParams.get("id");
// API
let search = "tech";
var app = new Vue({
  el: "#app",
  data: {
    isNavHidden: true,
    data: [],
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
      axios
        .get(`https://api.unsplash.com/photos/${id}?client_id=${APIKey}`)
        .then((response) => {
          this.data = response.data;
          // console.log(this.response[0].tags[0].title);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
