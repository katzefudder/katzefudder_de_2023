<template>
    <div id="portfolio" class="container">
        <div class="row">
            <div class="col-lg-12">
                <FlickrGallery title="Portfolio" user-id="60401789%40N06" api-key="50b2c88d16b7d6765f8c2f9b9bce844f" method="flickr.photos.search" tags="website" :useNavigation=true></FlickrGallery>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Portfolio",
  components: {
  },
  props: {},
  data: () => ({

  }),
  mounted() {
    
  },
}
</script>