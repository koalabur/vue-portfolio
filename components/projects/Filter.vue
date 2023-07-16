<template>
  <div class="filter">
    <button
      v-for="tech in filteredTechUsed"
      type="button"
      :class="activeFilter(tech)"
      @click="toggleFilter(tech), $emit('filter', filters)"
    >
      <svg
        class="filter__btn-icon"
        viewBox="0 0 100 100"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 100 100"
      >
        <path
          d="M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zM5272.7 2417h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM86.8 39.3H60.7V13.2c0-5.9-4.8-10.7-10.7-10.7-5.9 0-10.7 4.8-10.7 10.7v26.1H13.2C7.3 39.3 2.5 44.1 2.5 50s4.8 10.7 10.7 10.7h26.1v26.1c0 5.9 4.8 10.7 10.7 10.7 5.9 0 10.7-4.8 10.7-10.7V60.7h26.1c5.9 0 10.7-4.8 10.7-10.7s-4.8-10.7-10.7-10.7z"
          fill="#1c1240"
          class="fill-000000"
        ></path>
      </svg>
      {{ tech }}
    </button>
  </div>
</template>
<script setup lang="ts">
defineEmits(["filter"])
const props = defineProps({
  techUsed: {
    type: Array as () => string[],
    required: true,
  },
});

// Remove dupes from props.techUsed
const uniqueTech = [...new Set(props.techUsed)];

/// Remove certain tech from the filter
const filteredTechUsed = computed(() => {
  return uniqueTech.filter(
    (item) =>
      item !== "GSAP" && item !== "Contentful" && item !== "Side Project"
  );
});

// Active filter styling
const filters = ref(filteredTechUsed.value);

function activeFilter(item: string) {
  return filters.value.includes(item)
    ? "filter__btn filter__btn--active"
    : "filter__btn";
}

function toggleFilter(item: string) {
  if (filters.value.includes(item)) {
    filters.value = filters.value.filter((filter) => filter !== item);
  } else {
    filters.value.push(item);
  }
}
</script>
<style lang="sass" scoped>
.filter
  display: flex
  flex-direction: row
  gap: #{fluid(16px, 24px)}
  margin-bottom: #{fluid(20px, 55px)}
  width: 100%
  justify-content: center
  flex-wrap: wrap

  &__btn
    background: $font-color
    font-family: $main-font
    display: inline-flex
    color: $purple
    border-radius: 10px
    transition: .25s ease-in-out
    justify-content: center
    align-items: center
    padding: 10px 26px 10px 14px
    border: none
    cursor: pointer
    font-size: #{fluid(16px, 22px)}
    gap: #{fluid(12px, 30px)}
    line-height: 100%
    border: 2px solid transparent

    @include mobile-break
      font-size: #{fluid(14px, 18px)}
      padding: 8px 20px 8px 12px
      max-width: calc(50% - 12px)
      width: 100%
      justify-content: flex-start

    &--active
      background: $vue-green

    &--active > &-icon
      transform: rotate(0deg)

    &:hover > &-icon
      transform: rotate(0deg)

    &:hover
      border-color: $purple

    &-icon
      $icon-size: #{fluid(20px, 26px)}
      max-width: $icon-size
      min-width: $icon-size
      max-height: $icon-size
      min-height: $icon-size
      transition: .15s ease-in-out
      transform: rotate(45deg)
</style>
