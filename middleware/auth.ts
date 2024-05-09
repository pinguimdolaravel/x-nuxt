export default defineNuxtRouteMiddleware(() => {
    const authenticated = false

    if (!authenticated) {
        return navigateTo('/login', {replace: true})
    }
})
