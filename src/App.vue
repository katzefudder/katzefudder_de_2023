<template>
  <SiteHeader></SiteHeader>

  <Portfolio></Portfolio>

  <TagCloud></TagCloud>

  <Contact></Contact>

  <FlickrGallery title="Selected Photos" user-id="60401789%40N06" api-key="50b2c88d16b7d6765f8c2f9b9bce844f" method="flickr.photos.search" tags="website" extras="url_m,url_l,owner_name" :useNavigation=false></FlickrGallery>

  <Footer></Footer>
</template>


<script>
import TagCloud from "@/components/TagCloud.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue";
import Portfolio from "@/components/Portfolio.vue";
import {useTagBucketStore} from "@/stores/tagbucket.store";

import {computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
import {useSeoMeta} from "@unhead/vue";

import headerImage from "./assets/sunset.jpg";

export default {
  name: 'katzefudder.de',
  components: {
    Portfolio,
    SiteHeader,
    Contact,
    Footer,
    TagCloud,
  },
  setup() {
    const siteData = reactive({
      title: 'Florian Dehn - Software Engineer & Photographer',
      description: 'Software Engineer and Photographer from Butzbach, Germany - Software Engineer & Fotograf aus Butzbach',
      keywords: useTagBucketStore().takeTags(16).toString()
    })
    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
        {
          name: `keywords`,
          content: computed(() => siteData.keywords)
        },
      ],

    })
    useSeoMeta({
      charset: 'utf-8',
      ogTitle: siteData.title,
      description: siteData.description,
      ogImage: "https://www.katzefudder.de" + headerImage,
      ogLocale: 'en',
      ogLocaleAlternate: ['de'],
    })
  }
};
</script>