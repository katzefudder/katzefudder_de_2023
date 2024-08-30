import { defineStore } from "pinia";

export const useTagBucketStore = defineStore("tagbucket", {
    state: () => ({
        tags: JSON.parse(localStorage.getItem("TagBucket") || "[]"),
    }),
    actions: {
        add(tag) {
            if (this.$state.tags.indexOf(tag) === -1) {
                this.$state.tags.push(tag)
                localStorage.setItem('TagBucket', JSON.stringify(this.$state.tags))
                return true
            } else {
                return false
            }
        },
        getAllTags() {
            return this.$state.tags
        },
        takeTags(count) {
            const tags = [];
            for(let i=0;i<count; i++) {
                tags.push(this.$state.tags[i])
            }
            return tags;
        }
    },
});
