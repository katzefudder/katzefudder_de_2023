<template>
  <SiteHeader></SiteHeader>

  <Portfolio></Portfolio>

  <TagCloud></TagCloud>

  <Contact></Contact>

  <SimpleGallery :useNavigation=false></SimpleGallery>

  <Footer></Footer>
</template>


<script>
import SimpleGallery from '@/components/Gallery.vue';
import TagCloud from "@/components/TagCloud.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue";
import Portfolio from "@/components/Portfolio.vue";

import {computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default {
  name: 'katzefudder.de',
  components: {
    Portfolio,
    SiteHeader,
    Contact,
    Footer,
    TagCloud,
    SimpleGallery,
  },
  setup() {
    const siteData = reactive({
      title: 'Florian Dehn - Software Engineer & Photographer',
      description: 'Software Engineer and Photographer from Butzbach, Germany - Software Engineer & Fotograf aus Butzbach'
    })
    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],

    })
  }
};
</script>