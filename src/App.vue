<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/privacy-policy">Privacy Policy</router-link>
    </nav>
    <router-view></router-view>
    <div ref="scrollTopButton" class="scrollToTop invisible">
      <div class="text-gray-400 hover:text-blue-400 transition">
        <button role="button" aria-label="scroll to top of the page" @click="scrollToTop">
          ^ Scroll to top
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
export default {
  name: 'App',
  data: () => ({
    scrollTopButton: ref(null)
  }),
  mounted() {
    this.scrollTopButton = this.$refs.scrollTopButton
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.scrollTopButton.classList.remove("invisible");
      } else {
        this.scrollTopButton.classList.add("invisible");
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  }
}
</script>

<style>
nav {
  padding: 15px;
  background-color: #f8f8f8;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

.scrollToTop {
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}

.invisible {
  display: none;
}

#myBtn:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}
</style>