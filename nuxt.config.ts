// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  runtimeConfig: {
    public:{
      FLW_PUBLIC: process.env.FLW_PUBLIC,
    }
  },
  modules: ["@nuxt/fonts", "nuxt-aos"],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  routeRules:{
    '/**':{
      prerender: true,
      
    }
  },

  aos: {
    once: true
  }
});