<template>
  <nav class="siteNav">
    <a
      v-for="link in nav"
      :class="
        coreStore.getSection === link
          ? 'siteNav__link siteNav__link--active'
          : 'siteNav__link'
      "
      :href="'#' + link"
      >{{ link }}</a
    >
  </nav>
</template>
<script lang="ts" setup>
//* Import pinia store (global state)
import { useCoreStore } from "@/stores/coreStore";

// expose state
const coreStore = useCoreStore();

// Contentful
/// Nav
const nav = ref<Array<String>>();
/// Query
const navQuery = `
  query navEntryQuery {
    nav(id: "3JoFznXXx6b4rrvIx9UKqk") {
      link
    }
  }
`;
/// use composable
const navData = await useContentful(navQuery);
/// assign to ref
nav.value = navData.data.nav.link;
</script>
<style lang="sass" scoped>
.siteNav
  display: flex
  flex-direction: row
  justify-content: center
  gap: 1.5rem
  margin-top: 3rem
  position: fixed
  width: 100%
  z-index: 10
  @include edge-padding

  &__link
    font-family: $main-font
    font-weight: 400
    // font-size: 1.1rem
    font-size: #{fluid(15px, 17.6px)}
    border-radius: 7px
    z-index: 1
    background: $faded-purple
    color: #d0d5f2
    text-decoration: none
    padding: 0.7rem 1rem
    cursor: pointer
    border: none
    transition: 0.25s ease-in-out
    position: relative
    overflow: hidden

    &::after
      content: ""
      position: absolute
      top: 0
      left: 0
      width: 200px
      height: 200px
      background-color: $vue-green
      border-color: transparent
      border-radius: 50%
      transform: translate(-10px, -70px) scale(0.1)
      opacity: 0
      z-index: -1
      transition: transform 0.3s, opacity 0.3s, background-color 0.3s

    &:before
      content: ""
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      transition: opacity 0.3s, border 0.3s

    &:hover,
    &:focus
      color: $vue-white

    &:hover::before,
    &:focus::before
      opacity: 0

    &:hover::after,
    &:focus::after
      opacity: 1
      transform-origin: 100px 100px
      transform: scale(1) translate(-10px, -70px)

    &--active
      color: $vue-white

      &::before
        opacity: 0

      &::after
        opacity: 1
        transform-origin: 100px 100px
        transform: scale(1) translate(-10px, -70px)
</style>
