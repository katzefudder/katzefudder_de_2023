<script setup>
import { filename } from 'pathe/utils'
import {useTagBucketStore} from "@/stores/tagbucket.store";

const glob = import.meta.glob('@/assets/logos/*.png', { eager: true })
const logos = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
</script>

<template>
  <div class="row">
    <div class="job-items isotope">
      <div class="col-md-12 job-item">
        <p>{{ date }}</p>
        <h3><a :href="link" target="_blank">{{ title }}</a></h3>
        <a :href="link" target="_blank">
          <img v-if="logo" :src="logos[logo]" :alt="title">
        </a>
        <p>
          <b>{{ position }}</b><br />
          {{ description }}
          <i v-if=addDescription>
            <br />{{  addDescription }}
          </i>
        </p>
        <div v-if="jobTags" class="row">
          <div class="col-md-12 tag-cloud">
            <ul>
              <li v-for="(tag) in jobTags"><a href="javascript:void(0);"><span></span>{{tag}}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobItem",
  props: {
    logo: String,
    position: String,
    title: String,
    link: String,
    description: String,
    addDescription: String,
    date: String,
    jobTags: Array,
  },
  data: () => ({

  }),
  mounted() {
    this.jobTags.forEach(function(tag, index) {
      const tagBucket = useTagBucketStore()
      tagBucket.add(tag)
    })
  },
}
</script>