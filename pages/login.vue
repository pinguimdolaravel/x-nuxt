<script setup lang="ts">
definePageMeta({
  layout: "guest",
  middleware: ["guest"],
});

const form = ref({
  email: "test@example.com",
  password: "password",
});

const handleLogin = async () => {
  await useApi("/sanctum/csrf-cookie");
  await useApi('/login', {method: 'POST', body: form.value});
  const user = await useApi('/api/user');

  console.log(user);
};

const getUser = async () => {
  await useApi("/sanctum/csrf-cookie");
  const user = await useApi('/api/user');

  console.log(user.data.value);
};
</script>

<template>
  <div>Login page</div>
  <form
      @submit.prevent="handleLogin"
      class="text-black flex flex-col w-1/4 space-y-4"
  >
    <input v-model="form.email" type="email"/>
    <input v-model="form.password" type="password"/>
    <button type="submit" class="bg-gray-50 text-black">Login</button>
    <button type="button" class="bg-gray-50 text-black" @click="getUser">
      Get User
    </button>
  </form>
</template>

<style scoped></style>
