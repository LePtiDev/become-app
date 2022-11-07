import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      titleTemplate: '%s - Become',
      title: 'Welcome',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
    },
  },
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
  },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['class-validator'],
    },
  },
  css: [
    // SCSS file in the project
    '@/assets/styles/main.scss',
  ],
})
