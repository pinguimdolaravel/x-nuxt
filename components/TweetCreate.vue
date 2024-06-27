<script setup lang="ts">
import type { CreateForm } from '~/actions/tweet/create'
import actions from '~/actions'

const editing = ref<boolean>(false)

const form = ref<CreateForm>({
    content: ''
})

const handleTweet = async () => {
    await actions.tweet.create(form.value)
    form.value.content = ''
}
</script>

<template>
    <form @submit.prevent="handleTweet" id="tweetForm" class="px-3 w-full">
        <div class="flex align-top">
            <div>
                <img
                    alt="Pinguim Academy"
                    class="rounded-full"
                    src="https://pbs.twimg.com/profile_images/1441217650680500231/NtMy9zs5_normal.jpg"
                />
            </div>
            <div class="w-full">
                <label>
                    <textarea
                        v-model="form.content"
                        placeholder="What's happening?"
                        @keydown.shift.enter.prevent="handleTweet"
                        class="bg-transparent placeholder-gray-500 text-white font-medium text-xl w-full border-none resize-none focus:outline-none focus:ring-0 mt-1"
                        rows="2"
                        cols="50"
                        required
                    ></textarea>
                </label>

                <div class="flex justify-between" :class="{ 'border-t-[0.625px] border-lines pt-4': editing }">
                    <div class="flex items-center space-x-1"></div>
                    <Button small type="submit">Tweet</Button>
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped></style>
