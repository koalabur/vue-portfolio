// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Cameron R Design",
      meta: [{ name: "description", content: "Vue/ Nuxt.js portfolio" }],
      link: [
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
  // Used to access env variables
  runtimeConfig: {
    // Private keys that are exposed to the server
    FIREBASE_KEY: process.env.FIREBASE_KEY,
    // Public keys that are exposed to the client
    public: {},
  },
  modules: ["@nuxt/image-edge"],
  // @ts-ignore
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dg6sd9yyx/image/upload/v1671834530",
    },
  },
});
