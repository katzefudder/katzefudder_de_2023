<template>
  <div class="container">
    <div class="col-md-12">
      <h3>Selected Photos</h3>
      <div :id="galleryID">
        <a
            v-for="(image, key) in photos"
            :key="key"
            :href="image.largeURL"
            :data-pswp-width="image.width"
            :data-pswp-height="image.height"
            target="_blank"
            rel="noreferrer"
        >
          <img class="zoom" :src="image.thumbnailURL" alt="" />
        </a>
      </div>
    </div>
  </div>
  <div class="row" v-if="useNavigation">
    <div class="col-lg-12">
      <button
          class="px-4 py-2 text-white bg-red-600 focus:outline-none"
          @click="previousPage"
          @keyup.right="previousPage"
      >
        Previous Page
      </button>
      <button
          class="px-4 py-2 text-white bg-red-600 focus:outline-none"
          @click="nextPage"
          @keyup.right="nextPage"
      >
        Next Page
      </button>
    </div>
  </div>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import axios from "axios";

export default {
  name: 'SimpleGallery',
  props:{
    useNavigation: Boolean
  },
  data: () => ({
    galleryID: "flickr",
    flickr: {
      apiKey: "50b2c88d16b7d6765f8c2f9b9bce844f",
      userId: "60401789%40N06",
      endpoint: "https://www.flickr.com/services/rest/",
      method: "flickr.photos.search",
      page: 1,
      perPage: 18,
      totalPictures: 0,
      totalPages: 0,
      flickrGallery: [],
      loading: false,
    },
    photos: [],
  }),
  mounted() {
    this.photos = this.showFlickrGallery()
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#' + this.galleryID,
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {
    async showFlickrGallery(page) {
      const url = this.flickr.endpoint + "?method=" + this.flickr.method + "&api_key=" + this.flickr.apiKey + "&tags=website&user_id=" + this.flickr.userId + "&format=json&page=" + this.flickr.page + "&per_page=" + this.flickr.perPage + "&extras=url_m,url_l,owner_name&nojsoncallback=1"
      const data = {};
      await axios.get(url, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(({data}) => {
        this.flickrGallery = data.photos
        this.totalPictures = this.flickrGallery.total
        this.totalPages = this.flickrGallery.pages
        let photos = []
        data.photos.photo.forEach(function (current, index) {
          photos[index] = {
            "largeURL": current.url_l,
            "thumbnailURL": current.url_m,
            "title": current.title,
            //"alt": current.title,
            "width": current.width_l,
            "height": current.height_l
          }
        })
        this.photos = photos
      });
    },
    nextPage() {
      if (this.flickr.page < this.totalPages) {
        this.flickr.page++
        this.showFlickrGallery()
      }
    },
    previousPage() {
      if (this.flickr.page > 1) {
        this.flickr.page--
        this.showFlickrGallery()
      }
    },
  },
};
</script>
