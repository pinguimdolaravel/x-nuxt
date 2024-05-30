export default defineNuxtRouteMiddleware(() => {
  const authenticated = false;

  if (authenticated) {
    return navigateTo("/", { replace: true });
  }
});
