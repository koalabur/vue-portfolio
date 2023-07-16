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
    case "Ecomm":
      return "tech tech--ecomm";
    case "GSAP":
      return "tech tech--gsap";
    case "React/Next":
      return "tech tech--react";
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
  color: $faded-purple
  padding: 6px 12px
  font-size: #{fluid(13px, 19px)}

  &--contentful
    background: #67B3FF
    color: #29303A

  &--ecomm
    background: #D94A3D
    color: #EFE205

  &--gsap
    background: #88CE02
    color: #FFFFFF

  &--react
    background: $react-blue
    color: $react-grey

  &--vue
    background: $vue-blue
    color: $vue-green

  &--wordpress
    background: $wordpress-blue
    color: #F2F2F1
</style>
