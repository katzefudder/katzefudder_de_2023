<template>
  <div class="row">
    <div class="job-items isotope">
      <div class="col-md-12 job-item">
        <p>{{ date }}</p>
        <h3><a :href="link" target="_blank">{{ title }}</a></h3>
        <b>{{ position }}</b>
        <p>
          {{ description }}
        </p>
        <div class="row">
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
import {useTagBucketStore} from "@/stores/tagbucket.store";

export default {
  name: "JobItem",
  props: {
    position: String,
    title: String,
    link: String,
    description: String,
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
  unmounted() {

  },
  methods: {

  }
}
</script>