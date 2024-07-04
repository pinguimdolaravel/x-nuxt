<script setup lang="ts">
defineProps({
    title: String,
    route: String,
    icon: String
})
</script>

<template>
    <div>
        <a
            :href="route"
            class="bg-transparent hover:bg-gray-200 hover:bg-opacity-10 rounded-full p-2 inline-block space-x-2"
        >
            <div class="flex items-center space-x-4">
                <div>
                    <Bookmarks />
                </div>

                <div class="font-bold text-lg pr-6 truncate" v-if="title">{{ title }}</div>
            </div>
        </a>
    </div>
</template>

<style scoped></style>
