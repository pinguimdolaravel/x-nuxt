// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss"],
    app: {
        head: {
            bodyAttrs: {
                class: "bg-black text-white font-semibold font-mono"
            }
        }
    }
})
