
export default defineNuxtPlugin( async (nuxtApp) => {
    const store = useAuthStore();

    try {
        await store.fetchUser();
        navigateTo('/');
    } catch (error) {
        console.error(error);
        navigateTo('/login');
    }
})
