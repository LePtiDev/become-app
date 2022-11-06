import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      titleTemplate: '%s - Starter',
      title: 'Welcome',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  build: {
    transpile: ['@heroicons/vue'],
  },
})
