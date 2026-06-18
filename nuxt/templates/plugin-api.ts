// plugins/api.ts
export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: useRuntimeConfig().public.apiBase
  })
  
  nuxtApp.provide('api', api)
})
