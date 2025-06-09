<script>
import TagCloud from "@/components/TagCloud.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import Footer from "@/components/Footer.vue";
import About from "@/components/About.vue";
import CV from "@/components/CV.vue";
import Portfolio from "@/components/Portfolio.vue";
import {useTagBucketStore} from "@/stores/tagbucket.store";

import { onMounted, reactive, computed } from 'vue'
import { useHead } from '@vueuse/head'
import {useSeoMeta} from "@unhead/vue";

import headerImage from "./assets/header_image.jpg";
import Education from "@/components/Education.vue";

export default {
  name: 'Index',
  components: {
    Education,
    CV,
    SiteHeader,
    About,
    Portfolio,
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

  <CV></CV>

  <Education></Education>

  <TagCloud></TagCloud>

  <About></About>

  <Portfolio></Portfolio>

  <Footer></Footer>

</template>

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