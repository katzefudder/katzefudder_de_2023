<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/privacy-policy">Privacy Policy</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>