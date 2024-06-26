// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  imports: {
    dirs: ['stores']
  }, 
  routeRules: {
    "/spa": {ssr: false},
    "/static":{isr: true},
    "/swr":{swr: true},
  }
})
