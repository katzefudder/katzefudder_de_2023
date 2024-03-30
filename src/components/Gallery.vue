<template>
    <div id="gallery" class="container">
        <div class="row">
            <div class="col-lg-12">
                <FlickrGallery title="" user-id="60401789%40N06" api-key="50b2c88d16b7d6765f8c2f9b9bce844f" method="flickr.photos.search" tags="website" extras="url_m,url_l,owner_name" :useNavigation=true></FlickrGallery>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {},
  data: () => ({

  }),
  mounted() {
    
  },
}
</script>