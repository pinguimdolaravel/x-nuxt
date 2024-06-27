<script setup lang="ts">
defineProps({
    small: { type: Boolean, default: false }
})
</script>

<template>
    <button
        class="bg-twitter rounded-full font-extrabold"
        :class="{
            'px-4 py-3 text-xl w-4/6': !small,
            'py-1 px-4 w-fit text-lg': small
        }"
    >
        <slot />
    </button>
</template>
