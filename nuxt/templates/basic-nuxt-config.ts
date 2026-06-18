// nuxt.config.ts
export default defineNuxtConfig({
  // Development Server
  devServer: {
    port: 3000,
    host: 'localhost'
  },

  // App Configuration
  app: {
    head: {
      title: 'My Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  // CSS Framework
  css: ['~/assets/css/main.css'],

  // Modules
  modules: [
    // Add modules here
  ],

  // TypeScript
  typescript: {
    strict: true,
    typeCheck: true
  },

  // Build
  build: {
    transpile: []
  },

  // Vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/css/variables.scss" as *;`
        }
      }
    }
  }
})
