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
                //console.log("This item already exists")
                return false
            }
        },
        has(tag) {
            const isOnList = this.$state.tags.indexOf(tag)
            console.log("is on list? ", isOnList)
            if (isOnList === -1 ) return false
            return true
        },
        getCount() {
            return this.$state.tags.length
        },
        clearTagBucket() {
            this.$state.tags = []
            localStorage.setItem('TagBucket', [])
        },
        paginate(page_size, page_number) {
            return this.$state.tags.slice((page_number - 1) * page_size, page_number * page_size);
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
