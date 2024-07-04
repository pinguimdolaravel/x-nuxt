import type {Tweet} from '~/actions/tweet'

export const useTweetStore = defineStore('tweet', () => {
    const tweets = ref<Tweet[]>([])
    const addTweet = (tweet: Tweet) => tweets.value.unshift(tweet)
    const loadTweets = (ts: Tweet[]) => (tweets.value = ts)

    return {tweets, addTweet, loadTweets}
})
