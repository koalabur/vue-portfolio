<template>
  <p class="wobbleText" ref="wobbleText">{{ text }}</p>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

// Create a ref for the wobbleText element
const wobbleText = ref<HTMLParagraphElement | null>(null);

onMounted(() => {
  const text = props.text;
  const words = text.split(" ");
  const textCode = words
    .map((word) => {
      const letters = Array.from(word);
      const wordWithSpans = letters
        .map((letter, idx) => {
          let delay = (idx + 1) * 50;
          return `<span style="animation-delay: ${delay}ms">${letter}</span>`;
        })
        .join("");
      return wordWithSpans;
    })
    .join(" ");
  wobbleText.value!.innerHTML = textCode;
});
</script>

<style lang="sass">
.wobbleText
  span
    animation-name: wobb
    animation-iteration-count: infinite
    animation-timing-function: linear
    animation-duration: 400ms
    display: inline-block
    transform: translateY(0px)

@keyframes wobb
  0%,
  100%
    transform: translateY(0px)

  25%
    transform: translateY(-1px)

  75%
    transform: translateY(1px)
</style>
