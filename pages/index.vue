<script setup lang="ts">
import actions from '~/actions'
import type { CreateForm } from '~/actions/tweet/create'

definePageMeta({ middleware: ['auth'] })

onMounted(async () => await actions.tweet.fetchTweets())

const logout = async () => {
    await actions.auth.logout()
    navigateTo('/login')
}

const store = useTweetStore()
const tweets = computed(() => store.tweets)
</script>

<template>
    <div>
        <TweetCreate />

        <ul>
            <li class="font-bold text-gray-500">Tweets</li>
            <li v-for="tweet in tweets" :key="tweet.id">
                {{ tweet.content }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
