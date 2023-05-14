<template>
  <div id="tagcloud">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2>Tag Cloud</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 tag-cloud">
          <ul>
            <li v-for="(tag) in tags"><a href="javascript:void(0);"><span></span>{{tag}}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useTagBucketStore} from "@/stores/tagbucket.store";

export default {
  name: "TagCloud",
  data: () => ({
    tags: Array
  }),
  mounted() {
    this.tags = useTagBucketStore().getAllTags().sort(() => Math.random() - 0.5);
  }
}
</script>