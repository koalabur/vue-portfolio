<template>
  <section id="portfolio" class="portfolio" ref="portfolio">
    <h1 class="portfolio__title">&lt portfolio /&gt</h1>
    <p class="portfolio__index">
      {{ currentSlide + 1 }} / {{ portfolioData.length }}
    </p>
    <div class="portfolio__row">
      <div class="portfolio__row-carousel">
        <a
          v-for="(item, index) in portfolioData"
          :href="item.url"
          :class="
            index === currentSlide
              ? 'portfolio__row-item portfolio__row-item--active'
              : 'portfolio__row-item'
          "
          target="_blank"
          rel="noreferrer"
          :key="item.id"
        >
          <nuxt-img
            provider="cloudinary"
            :src="item.img.src"
            :alt="item.img.alt"
            width="800"
            height="600"
            class="portfolio__row-item-img"
          />
          <p class="portfolio__row-item-title">{{ item.title }}</p>
          <p class="portfolio__row-item-tools">
            <!-- Yea... I just looped in a loop. I'll do it again. -->
            <span
              class="portfolio__row-item-tools-inner"
              :class="
                tool === 'active'
                  ? 'portfolio__row-item-tools-inner--active'
                  : tool === 'coming soon'
                  ? 'portfolio__row-item-tools-inner--comingsoon'
                  : null
              "
              v-for="tool in item.tools"
              >{{ tool }}</span
            >
          </p>
        </a>
      </div>
      <button
        class="portfolio__row-arrow portfolio__row-arrow--left"
        @click="prevSlide"
      >
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"
          />
        </svg>
      </button>
      <button
        class="portfolio__row-arrow portfolio__row-arrow--right"
        @click="nextSlide"
      >
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"
          />
        </svg>
      </button>
    </div>
  </section>
</template>
<script lang="ts" setup>
//* Import pinia store (global state)
import { useCoreStore } from "@/stores/coreStore";
// vueuse.org
import { useIntersectionObserver } from "@vueuse/core";

// Init vars before everything else
let portfolioData: any = ref();

// Ref the element
const portfolio = ref(null);

// Assign const to global state
const coreStore = useCoreStore();

// vueuse intersectionObserver
useIntersectionObserver(
  portfolio,
  ([{ isIntersecting }]) => {
    coreStore.setSection(isIntersecting ? portfolio.value.id : "");
    console.log(coreStore.getSection);
  },
  {
    threshold: 0.6,
  }
);

async function initApi() {
  // API data from firebase
  const rawPortfolioData = await $fetch("/api/query?col=portfolio");

  // sort id descending order
  // @ts-ignore
  rawPortfolioData.sort(function (a: { id: number }, b: { id: number }) {
    return a.id - b.id;
  });

  // Assign to ref.value
  portfolioData.value = rawPortfolioData;
}

// Everything below this will wait until the api returns
// can't do anything without data regardless
// TODO: ERR HANDLING
await initApi();

// CAROUSEL
// Current slide
let currentSlide: any = ref(0);

// Length of imported data array
const length = portfolioData.value.length;

function nextSlide() {
  // if current slide is equal to the length of the array then reset to 0
  // else + 1 and do normal thingy
  currentSlide.value =
    currentSlide.value === length - 1 ? 0 : currentSlide.value + 1;
}

function prevSlide() {
  // if currentSlide slide is equal to 0 (first slide) then go to the end
  // else - 1 and do normal thingy
  currentSlide.value =
    currentSlide.value === 0 ? length - 1 : currentSlide.value - 1;
}
</script>
<style lang="sass" scoped>
.portfolio
  max-width: 1400px
  margin-left: auto
  margin-right: auto
  @include edge-padding
  padding-top: 5rem
  padding-bottom: 10rem

  &__index
    font-family: $main-font
    text-align: center
    color: $font-color
    // font-size: 2rem
    font-size: #{fluid(26px, 32px)}
    font-weight: 600
    margin-bottom: 2rem

  &__row
    display: flex
    align-items: center
    justify-content: center
    position: relative
    max-width: 820px
    margin-left: auto
    margin-right: auto

    &-arrow
      background: transparent
      border: none
      width: calc(2rem + 1vw)
      height: calc(2rem + 1vw)
      fill: rgba(208, 213, 242, 0.8)
      transition: 0.25s ease-in-out
      cursor: pointer
      border-radius: 50%
      border: 1px solid $faded-purple
      background: $faded-purple
      position: absolute
      z-index: 1

      &:hover
        fill: $font-color
      &--left
        left: -60px

        @media (max-width: 992px)
          left: 0

      &--right
        right: -60px

        @media (max-width: 992px)
          right: 0

    &-carousel
      display: grid
      grid-template-columns: 1fr
      grid-template-rows: 1fr
      justify-items: center
      position: relative
      max-width: 800px
      padding: 10px
      transition: 0.25s ease-in-out
      border-bottom-left-radius: 12px
      border-bottom-right-radius: 12px
      background: transparent
      box-shadow: 0px 0px 20px 7px $font-color
      background: $faded-purple

      @media (max-width: 768px)
        box-shadow: 0px 0px 6px 2px $font-color

      &:hover
        transform: translateY(-10px)

    &-item
      opacity: 0
      transition: 0.25s ease-in-out
      grid-area: 1 / 1 / 2 / 2
      transform: translateY(-20px)
      z-index: -1

      &--active
        transform: translateY(0px)
        opacity: 1
        z-index: 1

      &-img
        margin-bottom: 1rem

      &-title
        font-family: $main-font
        color: $font-color
        margin-bottom: 1rem
        // font-size: 2.5rem
        font-size: #{fluid(32px, 40px)}

      &-tools
        font-family: $main-font
        // font-size: 1.3rem
        font-size: #{fluid(16px, 22px)}
        font-weight: 600
        margin-bottom: 1rem

        &-inner
          border-radius: 12px
          background: $font-color
          color: $faded-purple
          width: auto
          padding: 3px 10px
          margin-right: #{fluid(5px, 10px)}

          &:last-child
            margin-right: 0

          &--active
            background: $active-bg
            color: $active-fc

          &--comingsoon
            background: $comingsoon-bg
            color: $comingsoon-fc

    &-link
      outline: 5px solid transparent
      transition: 0.25s ease-in-out
      height: 100%

      img
        vertical-align: bottom

      &:hover,
      &:focus
        outline-color: #b629f2

  &__title
    font-family: $main-font
    // font-size: 2.2rem
    font-size: #{fluid(26px, 38px)}
    font-weight: 600
    background: -webkit-linear-gradient(left, #3700ff 0%, #b629f2 45%)
    background-clip: text
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    margin-bottom: 2.5rem
    text-align: center
</style>
