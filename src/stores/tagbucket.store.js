import { defineStore } from "pinia";

export const useTagBucketStore = defineStore("tagbucket", {
    state: () => ({
        tags: JSON.parse(localStorage.getItem("TagBucket") || "[]"),
    }),
    actions: {
        add(tag) {
            if (this.tags.indexOf(tag) === -1) {
                this.tags.push(tag)
                localStorage.setItem('TagBucket', JSON.stringify(this.tags))
                return true
            } else {
                return false
            }
        },
        getAllTags() {
            return this.tags
        },
        takeTags(count) {
            const tags = [];
            for(let i = 0; i < count && i < this.tags.length; i++) {
                tags.push(this.tags[i]);
            }
            return tags;
        }
    },
});
