<template>
  <Teleport to="body">
    <div class="modal">
      <div class="modal__content">
        <svg
          class="modal__content-close"
          viewBox="0 0 100 100"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 100 100"
          @click="$emit('closeModal')"
        >
          <path
            d="M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zM5272.7 2417h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM86.8 39.3H60.7V13.2c0-5.9-4.8-10.7-10.7-10.7-5.9 0-10.7 4.8-10.7 10.7v26.1H13.2C7.3 39.3 2.5 44.1 2.5 50s4.8 10.7 10.7 10.7h26.1v26.1c0 5.9 4.8 10.7 10.7 10.7 5.9 0 10.7-4.8 10.7-10.7V60.7h26.1c5.9 0 10.7-4.8 10.7-10.7s-4.8-10.7-10.7-10.7z"
            fill="#d0d5f2"
            class="fill-000000"
          ></path>
        </svg>
        <div class="modal__content-left">
          <div
            class="modal__content-left-hero"
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
              class="modal__content-left-hero-img"
            />
          </div>
          <div class="modal__content-left-tech">
            <ProjectsModalLink :link="data.websiteLink" linkType="website" />
            <ProjectsModalLink
              v-if="data.githubLink"
              :link="data.githubLink"
              linkType="github"
            />
          </div>
        </div>
        <div class="modal__content-right">
          <p class="modal__content-right-title">
            About the <strong>{{ data.title }}</strong> project
          </p>
          <ProjectsContentfulRichText
            :richText="data.projectDescription.json"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
defineEmits(["closeModal"]);
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const data = computed(() => {
  return props.content;
});
</script>
<style lang="sass" scoped>
$top-spacing: #{fluid(30px, 60px)}
.modal
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: $purple
  padding: #{fluid(10px, 50px)}
  z-index: 11

  &__content
    background: #31265B
    width: 100%
    height: 100%
    display: flex
    flex-direction: row
    justify-content: center
    padding: 5px
    gap: 72px
    position: relative
    overflow-y: auto
    overflow-x: hidden

    @include mobile-break
      flex-direction: column
      gap: 0

    &-close
      position: absolute
      top: 10px
      right: 10px
      width: #{fluid(40px, 60px)}
      height: #{fluid(40px, 60px)}
      cursor: pointer
      transform: rotate(45deg)
      background: $purple
      border-radius: 50%
      padding: 5px
      transition: .2s ease-in-out

      &:hover
        background: #CC0000

    &-left
      display: flex
      flex-direction: column
      padding-top: $top-spacing

      &-hero
        display: flex
        justify-content: center
        margin-bottom: 13px
        padding: 0 #{fluid(0px, 50px)}
        min-height: 400px

        @include mobile-break
          min-height: 550px

        &-img
          object-fit: contain

      &-tech
        display: flex
        flex-direction: column
        gap: 13px
        justify-content: flex-start
        padding-bottom: 15px

        @include mobile-break
          padding-bottom: 0

    &-right
      display: flex
      flex-direction: column
      padding-top: $top-spacing
      max-width: 1000px
      width: 100%

      &-title
        font-family: $main-font
        font-size: #{fluid(30px, 42px)}
        margin-bottom: #{fluid(20px, 40px)}
        color: $font-color
</style>
