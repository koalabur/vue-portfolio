<template>
  <NuxtLink class="link" :to="props.link" target="_blank"
    >{{ linkType }}
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      class="link__icon"
    >
      <path
        d="M11.29 12.71a1 1 0 0 0 1.41 0l5.3-5.3 1.29 1.29A1 1 0 0 0 21 8V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-.71 1.71L16.59 6l-5.29 5.29a1 1 0 0 0-.01 1.42Z"
        fill="#31265b"
        class="fill-000000"
      ></path>
      <path
        d="M4 21h16a1 1 0 0 0 1-1v-8a1 1 0 0 0-2 0v7H5V5h7a1 1 0 0 0 0-2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
        fill="#31265b"
        class="fill-000000"
      ></path>
    </svg>
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  linkType: {
    type: String,
    required: true,
    default: "website",
    validator: (value: string) => {
      return ["github", "website"].includes(value);
    },
  },
});

const linkType = computed(() => {
  switch (props.linkType) {
    case "github":
      return "Visit Github Repo";
    case "website":
      return "Visit Site";
  }
});
</script>
<style lang="sass" scoped>
.link
  background: $font-color
  display: inline-flex
  align-items: center
  width: fit-content
  font-family: $main-font
  color: $purple
  font-size: #{fluid(16px, 25px)}
  padding: 6px 14px
  border-radius: 10px
  gap: #{fluid(10px, 15px)}
  transition: .2s ease-in-out
  border: 2px solid transparent

  &:hover, &:active, &:focus
    box-shadow: -3px 6px 0px $font-color
    border-color: #31265b

  &__icon
    width: #{fluid(20px, 26px)}
    min-width: #{fluid(20px, 26px)}
    height: #{fluid(20px, 26px)}
    min-height: #{fluid(20px, 26px)}
</style>
