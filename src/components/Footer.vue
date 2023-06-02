<template>
  <div id="footer">
    <div class="container">
      <p>Made in Hessen =^.^= {{ new Date().getFullYear() }}, Florian Dehn, Feldbornstrasse 2, 35510 Butzbach</p>
      <p>No Cookies, no server-side processing, or analyzed nor stored logs - just a plain VueJS App powered by AWS S3 and CloudFront</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
  },
  data: () => ({

  }),
  mounted() {

  },
  unmounted() {

  },
  methods: {

  }
}
</script>