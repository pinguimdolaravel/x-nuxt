<script setup lang="ts">

import actions from "~/actions";
import Tweet from "~/components/Tweet.vue";

let perPage = ref(10)

let infinityScroll = () => {
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        console.log(item)
        //  @this.loadMore()
      }
    })
  }, {
    threshold: 0.5, // 0 ... 1
    rootMargin: '100px'
  })
  // observer.observe(
  //     // elemento
  // )
}

onMounted(async () => await actions.tweet.fetchTweets())
const store = useTweetStore()
const tweets = computed(() => store.tweets)
</script>

<template>

  <div class="text-white text-lg w-full">
    <div>{{ tweets.length }}</div>
    <template v-for="tweet in tweets">
      <Tweet :content="tweet.content" :createdBy="tweet.user.name"/>
    </template>

    <div class="bg-blue-400 h-10 w-10">

    </div>
  </div>


</template>

<style scoped></style>
