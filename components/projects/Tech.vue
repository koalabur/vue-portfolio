<template>
  <p :class="techStyling">{{ tech }}</p>
</template>
<script setup lang="ts">
const props = defineProps({
  tech: {
    type: String,
    required: true,
  },
});

const techStyling = computed(() => {
  switch (props.tech) {
    case "Contentful":
      return "tech tech--contentful";
    case "D3.js":
      return "tech tech--d3";
    case "Ecomm":
      return "tech tech--ecomm";
    case "GSAP":
      return "tech tech--gsap";
    case "React/Next":
      return "tech tech--react";
    case "Storyblok":
      return "tech tech--storyblok";
    case "Vue/Nuxt":
      return "tech tech--vue";
    case "WordPress":
      return "tech tech--wordpress";
    default:
      return "tech";
  }
});
</script>
<style lang="sass" scoped>
.tech
  font-family: $main-font
  font-weight: 700
  background: $font-color
  color: $purple
  padding: 6px 12px
  font-size: #{fluid(13px, 19px)}

  &--contentful
    background: #67B3FF
    color: #29303A

  &--d3
    background: #ef7234
    color: #EDEDED

  &--ecomm
    background: #D94A3D
    color: #EFE205

  &--gsap
    background: #88CE02
    color: #FFFFFF

  &--react
    background: $react-blue
    color: $react-grey

  &--storyblok
    background: #00b3b0
    color: #fff

  &--vue
    background: $vue-blue
    color: $vue-green

  &--wordpress
    background: $wordpress-blue
    color: #F2F2F1
</style>
