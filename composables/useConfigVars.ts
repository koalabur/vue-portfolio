// useRuntimeConfig can only be accessed through <script setup> or lifecycle hooks
// will cause nuxt instance error
// known bug in nuxt 3

// Resources:
// https://github.com/nuxt/framework/discussions/3215#discussioncomment-3082845
// https://nuxt.com/docs/guide/going-further/runtime-config
// https://nuxt.com/docs/guide/directory-structure/composables

export default () => {
  // useRuntimeConfig is used to access .envs
  // see nuxt.config.ts
  return useRuntimeConfig();
};
