<template>
  <section class="facts">
    <img
      class="facts__img"
      src="data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDUiIHZpZXdCb3g9IjAgMCA2MDAgNjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zMC45NTcgNTMyLjY3NyAzMTkuMDg4IDUwLjE5YTI3LjI4MiAyNy4yODIgMCAwIDAgMjQuMDY0LTguMTc2YzIyLjk3LTI0LjI4IDcxLjg1Ni05OS42MzQgNzMuMjg2LTMwMi4wMkM0NDguMTYxIDE2NC4zMjggNTA0LjggODguMzUgNTI5LjIxMyA2MC42QTcuOTA3IDcuOTA3IDAgMCAwIDUyNCA0Ny40OTRMMTg3LjYwOCAxNi44NzZhMTguMzQ1IDE4LjM0NSAwIDAgMC0xNS4yNjEgNS45NThjLTE5LjgxNCAyMS44NjUtNzguNiA5Ny4xMjQtODkuMjc3IDIzMC4yNWE3LjMgNy4zIDAgMCAwIDIuMzI3IDUuOTMxbDMyLjEyOSAyOS42NjdhNS41MjYgNS41MjYgMCAwIDEtMi4xOSA5LjM2MWwtMjcuMTUgNy45ODRhNy4yNjkgNy4yNjkgMCAwIDAtNS4yMjIgNi41OTNDNzcuNjE2IDQxOS4yNjcgNDAuMTkyIDQ5NC4zNTEgMjUuMTQgNTIwLjU1NWE4LjE2IDguMTYgMCAwIDAgNS44MTcgMTIuMTIyWm0xNTYuNjItODQuNGMtNy42OTQtMzQuOTY1IDQ5Ljg0LTQ5LjcgNTEuOTI1LTYuOTkyIDEuNjUgMzEuNDg4LTQzLjczMiAzNy43NS01MS45MjUgNi45OTdabS05LjQyNS0yNzguMTk1YzMuODE1LTE5LjQ4MSAxNy4wMjUtMzMuNzk0IDMzLjc4My00My45NDYgNjEuMzgzLTM3LjE4NiAxMDkuMTk0LTE5Ljk3OCAxMzguNTM3IDMuODUzIDU5LjkyNiA0OC42NzIgNTUuMDc0IDEyNy40MDYtMS41ODYgMTQ4Ljc0OS0yOC40NDggMTAuNzE2LTc0LjYxIDYuMDY3LTEwNi4zMTYgODMuNjE2LTguMDc0IDE5Ljc0OC00NC44OTQgNS45MTEtMzQuMjMtMjguNDc2IDEyLjk3LTQxLjgyMSA0My43NjEtNjYuNzY4IDgxLjAxMS04Mi41MzMgNTUuMDM5LTIzLjI5MyAzOC4xOC02NCAyMi43ODMtODEuNjkyLTE3LjM1MS0xOS4wMDctNzkuOTgxLTMwLjE0My0xMDIuNSAyNi40ODEtNi4zNjggMTYuMDI1LTQwLjA4IDE3Ljg1Mi0zMS40ODItMjYuMDQ3Wk00OTguNDA1IDMxNy42OGMuMjc1IDEyMC41ODQtMjQuNjU2IDIwMS44Mi0zNy4yMDUgMjM1LjAyYTQuMjY1IDQuMjY1IDAgMCAwIDQuNyA1LjcwOSAxNS4xMzIgMTUuMTMyIDAgMCAwIDExLjgwNi05LjkwN2MzLjY2NS0xMC40MjYgNy45LTIzLjc5IDEyLjEzNS00MC4wMjkgMTAuNC0zOS44NTYgMjIuNzYtMTA1LjMxNyAyMi41NjUtMTkwLjgyNi0uMTk1LTg0Ljk0NyAyMi40NjgtMTM0LjgxNSAzOC40NDQtMTYzLjA2QTE0NyAxNDcgMCAwIDEgNTczLjkgMTIzLjRhNy4xMDcgNy4xMDcgMCAwIDAgLjk4OC04LjczN2wtLjAxOC0uMDI5YTYuOSA2LjkgMCAwIDAtMTAuNzU1LTEuMjczIDE1OS40ODYgMTU5LjQ4NiAwIDAgMC0yNC43NjggMzMuMTM5Yy0xNy4xMjEgMjkuNzgxLTQxLjE0NyA4Mi4zMDgtNDAuOTQyIDE3MS4xOFoiIGZpbGw9IiNkMGQ1ZjIiIGNsYXNzPSJmaWxsLTMzMzMzMyI+PC9wYXRoPjxwYXRoIGQ9Im00NjYuODgzIDMwMC40MTctLjAwNy4yMjdjLS4wMTkgMS44NDctMi40IDE3Ni43MTctNDYuMTg5IDI1OC4zMzFhNC4yNjQgNC4yNjQgMCAwIDAgNC40NzcgNi4yIDE3LjUyNSAxNy41MjUgMCAwIDAgMTMuMDI2LTkuOTc1YzE1Ljc0NS0zNC4wNjIgMjcuNTEyLTgyLjk2IDM1LjA3LTE0NS45MTggNi44NDctNTcuMDMyIDcuNTc4LTEwNS42MjMgNy42MTQtMTA4LjM3NSAyLjY2Ny02MS42NDYgMTQuNjg1LTExMy45NTEgMzUuNzIxLTE1NS40NTYgMTIuODIyLTI1LjMgMjYuNTA3LTQxLjUgMzYuNTIzLTUxLjEyN2E3LjEgNy4xIDAgMCAwIDEuMS04Ljg1MSA2LjkwOCA2LjkwOCAwIDAgMC0xMC42NjQtMS4zNjRjLTEwLjkyNiAxMC40OTItMjUuNzUzIDI4LTM5LjQ0NiA1NS4wMTMtMjEuOTU4IDQzLjMyNy0zNC40ODMgOTcuNTkzLTM3LjIyNSAxNjEuMjk1WiIgZmlsbD0iI2QwZDVmMiIgY2xhc3M9ImZpbGwtMzMzMzMzIj48L3BhdGg+PC9zdmc+"
      alt="Random Facts"
      width="300"
      height="300"
    />
    <h1 class="facts__title">
      Random Fact #{{ factNumber + 1 }}
      <div class="facts__title-btns">
        <button class="facts__title-btns-trigger" @click="incrementFactNumber">
          +
        </button>
        <button class="facts__title-btns-trigger" @click="decrementFactNumber">
          -
        </button>
      </div>
      /{{ facts.length }}
    </h1>
    <!-- Error message if user tries to go below 1 or above 30  -->
    <p
      :class="
        factNumberValidate
          ? 'facts__validate facts__validate--active'
          : 'facts__validate'
      "
    >
      Random Fact # cannot go
      <strong>{{ factNumber === 0 ? "below 0" : "above 30" }}</strong
      >!
    </p>

    <!-- Display random facts -->
    <div class="facts__fact">
      <p class="facts__fact-text">{{ facts[factNumber].fact }}</p>
    </div>
    <Transition name="showbtns">
      <div v-if="showBtns" class="facts__row">
        <button class="facts__row-btn" @click="coreStore.setIsSiteReady()">
          Show Me The Site! :D
        </button>
        <button
          class="facts__row-btn facts__row-btn--hollow"
          @click="randomFact"
        >
          Another Random, Random Fact
          <span class="facts__row-btn-icon">&#8693;</span>
        </button>
      </div>
    </Transition>
  </section>
</template>
<script lang="ts" setup>
// Import pinia store (global state)
import { useCoreStore } from "@/stores/coreStore";
const coreStore = useCoreStore();

// Used to index the facts in the facts state
const factNumber = ref(0);
// Show error if trying to go below 0 or above 30
const factNumberValidate = ref(false);
// Used to show buttons
const showBtns = ref(false);

function randomFact() {
  const length = facts.value.length;
  factNumber.value = Math.floor(Math.random() * length);
  factNumberValidate.value = false;
}

function incrementFactNumber(e: { preventDefault: () => void }) {
  e.preventDefault();
  if (factNumber.value === 29) {
    factNumberValidate.value = true;
  } else {
    factNumberValidate.value = false;
    factNumber.value++;
  }
}

function decrementFactNumber(e: { preventDefault: () => void }) {
  e.preventDefault();
  if (factNumber.value === 0) {
    factNumberValidate.value = true;
  } else {
    factNumberValidate.value = false;
    factNumber.value--;
  }
}

// fetch facts
const { data: facts, error }: any = await useFetch(
  "https://api.api-ninjas.com/v1/facts?limit=30",
  {
    method: "GET",
    headers: {
      "X-Api-Key": useRuntimeConfig().API_NINJA_KEY,
    },
  }
);

// Need to use computed property to watch changes
const isSiteReady = computed(() => {
  return coreStore.getIsSiteReady;
});

onMounted(() => {
  // Disable scrolling while site is not ready
  !isSiteReady.value
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  // Render buttons after 2500ms
  setTimeout(() => {
    showBtns.value = true;
  }, 2500);
});

onBeforeUnmount(() => {
  // Enable scrolling if site is ready
  !isSiteReady.value
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
});
</script>
<style lang="sass">
.facts
  height: 100%
  width: 100%
  position: fixed
  background: $purple
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  z-index: 20
  transition: 1s ease-in-out
  overflow: auto
  @include edge-padding

  &__row
    display: flex
    flex-direction: row
    margin-top: #{fluid(20px, 40px)}

    @include mobile-break
      flex-direction: column
      justify-content: center

    &-btn
      display: flex
      align-items: center
      justify-content: center
      padding: #{fluid(7px, 10px)} #{fluid(10px, 20px)}
      border-radius: 8px
      border: none
      font-size: #{fluid(14px, 26px)}
      cursor: pointer
      background-image: linear-gradient(190deg, rgba(175, 39, 242, 0.6), rgba(64, 3, 254, 0.6))
      font-family: $main-font
      color: $font-color
      transition: 0.25s ease-in-out
      text-align: center
      margin-right: 20px

      @include mobile-break
        margin-right: 0
        margin-bottom: 10px

      &:hover
        box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.4)
        opacity: 1
        transform: scale(1.05)

      &:last-child
        margin-right: 0

      &--hollow
        background: transparent
        border: 2px solid $font-color

      &-icon
        font-size: #{fluid(14px, 30px)}
        margin-left: #{fluid(6px, 10px)}

  &__fact
    border: 1px solid $font-color
    height: #{fluid(235px, 265px)}
    width: #{fluid(600px, 1400px)}
    display: flex
    justify-content: center

    @include mobile-break
      align-items: center

    &-text
      font-family: $main-font
      color: $font-color
      font-size: #{fluid(16px, 24px)}
      text-align: left
      padding: #{fluid(5px, 10px)} #{fluid(10px, 40px)}

  &__img
    width: #{fluid(100px, 235px)}
    height: #{fluid(100px, 235px)}
    margin-bottom: #{fluid(20px, 35px)}

    @media (max-width: 320px)
      display: none

  &__title
    font-family: $main-font
    color: $font-color
    font-size: #{fluid(20px, 40px)}
    margin-bottom: #{fluid(10px, 20px)}
    display: flex
    align-items: center
    justify-content: center

    &-btns
      display: flex
      flex-direction: column
      margin-right: #{fluid(6px, 8px)}
      margin-left: #{fluid(6px, 8px)}

      &-trigger
        display: block
        background: transparent
        border: 1px solid $font-color
        font-family: $main-font
        font-weight: 800
        font-size: #{fluid(14px, 26px)}
        color: $font-color
        padding: #{fluid(3px, 0px)} #{fluid(7px, 10px)}
        margin-bottom: #{fluid(6px, 8px)}
        cursor: pointer
        transition: 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)

        &:last-child
          margin-bottom: 0

        &:hover,
        &:focus
          background: $font-color
          color: $purple

        &:focus
          transform: scale(1.15)

  &__validate
    font-family: $main-font
    background: #cc0a00
    color: $font-color
    font-size: #{fluid(15px, 24px)}
    transform: translateY(-100%)
    max-height: 0
    text-align: center
    opacity: 0
    visibility: hidden
    transition: 0.25s ease-in-out

    &--active
      max-height: 100%
      margin: #{fluid(7px, 10px)} 0
      padding: #{fluid(3px, 5px)} 5px
      opacity: 1
      visibility: visible !important
      transform: translateY(0)

// Transition
.showbtns-enter-active, .showbtns-leave-active
  transition: .25s ease-in-out


.showbtns-enter-from, .showbtns-leave-to
  opacity: 0
  transform: translateY(100%)
</style>
