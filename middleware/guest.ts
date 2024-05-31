export default defineNuxtRouteMiddleware(() => {
    const auth = useAuthStore();

    if (auth.isLoggedIn) {
        return navigateTo("/", {replace: true});
    }
});
