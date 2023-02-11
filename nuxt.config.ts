// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Cameron R Design portfolio",
      meta: [
        {
          name: "description",
          content: "Vue/ Nuxt.js Portfolio created by Cameron",
        },
        {
          property: "og:title",
          content: "Cameron R Design portfolio",
        },
        {
          property: "og:description",
          content: "Vue/ Nuxt.js Portfolio created by Cameron",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://vue.cameronrdesign.com" },
        { property: "og:locale", content: "en_US" },
        {
          property: "og:image",
          content:
            "https://res.cloudinary.com/dg6sd9yyx/image/upload/v1676136904/meta/koalavue-ogimage_xjiqwx.jpg",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400;600&display=swap",
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        // For some stupid reason unknown to the coding jebus himself
        // I can't use scss so using sass
        sass: {
          additionalData: '@use "@/assets/styles/app.sass" as *\n',
        },
      },
    },
  },
  build: {
    transpile: ["gsap"],
  },
  // Used to access env variables
  runtimeConfig: {
    // Private keys that are exposed to the server
    API_NINJA_KEY: process.env.API_NINJA_KEY,
    // Public keys that are exposed to the client
    public: {},
  },
  modules: ["@nuxt/image-edge", "@pinia/nuxt", "@vueuse/nuxt"],

  // @ts-ignore
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dg6sd9yyx/image/upload/v1671834530",
    },
  },
});
