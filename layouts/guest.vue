<script setup lang="ts">

</script>

<template>
    <div>
        <ul class="bg-zinc-950 text-yellow-500 font-bold p-10 mb-4">
            <li>
                <NuxtLink href="/login">Login</NuxtLink>
            </li>
            <li>
                <NuxtLink href="/register">Register</NuxtLink>
            </li>
        </ul>

        Guest layout
        <slot />
    </div>
</template>

<style scoped></style>
