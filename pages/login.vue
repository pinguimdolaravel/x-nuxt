<script setup lang="ts">
import actions from '~/actions'
import type { LoginForm } from '~/actions/auth/login'
import AuthRepository from '~/repositories/AuthRepository'
import { useAuthStore } from '~/stores/useAuthStore'

definePageMeta({
    layout: 'guest',
    middleware: ['guest']
})

const authStore = useAuthStore()

const form = ref<LoginForm>({
    email: 'test@example.com',
    password: 'password'
})

const handleLogin = async () => {
    await AuthRepository.login(form.value)
    await actions.auth.login(form.value)
    navigateTo('/')
}

const getUser = async () => {
    console.log(authStore.user)
}
</script>

<template>
    <div>Login page</div>
    <form @submit.prevent="handleLogin" class="text-black flex flex-col w-1/4 space-y-4">
        <input v-model="form.email" type="email" />
        <input v-model="form.password" type="password" />
        <button type="submit" class="bg-gray-50 text-black">Login</button>
        <button type="button" class="bg-gray-50 text-black" @click="getUser">Get User</button>
    </form>
</template>

<style scoped></style>
