export default defineNuxtRouteMiddleware(() => {
    const authenticated = true

    if (!authenticated) {
        return navigateTo('/login', {replace: true})
    }
})
