<script>
import TagCloud from "@/components/TagCloud.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue";
import Portfolio from "@/components/Portfolio.vue";
import Gallery from "@/components/Gallery.vue";
import {useTagBucketStore} from "@/stores/tagbucket.store";

import {computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
import {useSeoMeta} from "@unhead/vue";

import headerImage from "./assets/header_image.jpg";
import Education from "@/components/Education.vue";

export default {
  name: 'katzefudder.de',
  components: {
    Education,
    Portfolio,
    SiteHeader,
    Contact,
    Gallery,
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

<template>
  <SiteHeader></SiteHeader>

  <Portfolio></Portfolio>

  <Education></Education>

  <TagCloud></TagCloud>

  <Contact></Contact>

  <Gallery></Gallery>

  <Footer></Footer>
</template>