<template>
  <div id="footer">
    <div class="container">
      <p>VueJS App powered by AWS S3 and CloudFront</p>
      <p>I use my homegrown <a href="https://vuejs.org" target="_blank">VueJS</a> <a href="https://github.com/katzefudder/FlickrGallery" target="_blank">Gallery</a> to display some of my photos on <a href="https://www.flickr.com/photos/katzenfutter/" target="_blank">Flickr</a> </p>
      <h6>Made in Hessen =^.^= {{ new Date().getFullYear() }}, Florian Dehn, Feldbornstrasse 2, 35510 Butzbach</h6>
      <p>All trademarks, logos and brand names are the property of their respective owners.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
}
</script>