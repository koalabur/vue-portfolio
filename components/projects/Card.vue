<template>
  <div class="card" @click="$emit('dataForModal', data)">
    <span class="card__border"></span>
    <span class="card__border"></span>
    <div
      class="card__hero"
      :style="`background: #${data.projectColorTheme}; align-items: ${
        data.imagePosition === 'Top'
          ? 'flex-start'
          : data.imagePosition === 'Bottom'
          ? 'flex-end'
          : 'center'
      }`"
    >
      <nuxt-img
        provider="contentful"
        :src="data.image.url"
        :alt="data.image.title"
        :width="data.image.width"
        :height="data.image.height"
        class="card__hero-img"
      />
    </div>
    <div class="card__tech">
      <ProjectsTech v-for="tech in data.tech" :tech="tech" />
    </div>
    <h3 class="card__title">
      {{ data.title }}
    </h3>
    <p class="card__cta">tell me more about {{ data.title }}</p>
  </div>
</template>
<script setup lang="ts">
defineEmits(["dataForModal"]);
const props = defineProps({
  project: {
    type: Object as () => Project,
    required: true,
  },
});

const data = props.project;

const colorTheme = computed(() => {
  return "#" + data.projectColorTheme;
});
</script>
<style lang="sass" scoped>
.card
  display: flex
  flex-direction: column
  cursor: pointer
  position: relative

  &__border
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: block
    box-sizing: border-box
    opacity: 0
    transition: .3s linear

    &:nth-child(1)
      transform: rotate(0deg)

    &:nth-child(2)
      transform: rotate(180deg)

    &:before
      content: ''
      position: absolute
      width: 100%
      height: 4px
      background: v-bind(colorTheme)
      animation: animate 3s linear infinite

  &:hover > &__border
    opacity: 1

  &:hover > &__cta
    text-decoration: underline

  &__cta
    font-family: $secondary-font
    color: $font-color
    font-size: #{fluid(14px, 17px)}

  &__hero
    height: 370px
    display: flex
    justify-content: center
    margin-bottom: 13px

    @include mobile-break
      height: 250px

    &-img
      max-height: 350px
      max-width: 100%
      width: auto

      @include mobile-break
        max-height: 240px

  &__tech
    display: flex
    flex-direction: row
    flex-wrap: wrap
    gap: 6px
    margin-bottom: #{fluid(8px, 13px)}

  &__title
    font-family: $main-font
    font-size: #{fluid(22px, 30px)}
    color: $font-color
    font-weight: 400
    margin-bottom: 4px

@keyframes animate
  0%
    transform: scaleX(0)
    transform-origin: left

  50%
    transform: scaleX(1)
    transform-origin: left

  50.1%
    transform: scaleX(1)
    transform-origin: right

  100%
    transform: scaleX(0)
    transform-origin: right
</style>
