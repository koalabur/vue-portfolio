<template>
  <NavBar />
  <main>
    <IntroSection />
    <AboutSection />
    <ProjectsSection />
  </main>
  <SidebarSection />
  <FooterSection />
</template>

<script setup>
import { useCoreStore } from "@/stores/coreStore";

// Components
import NavBar from "./components/nav/MainNav";
import IntroSection from "./components/intro/BigKoalaIntro";
import AboutSection from "./components/about/GSAPAbout";
import ProjectsSection from "./components/projects/ProjectView.vue";
import SidebarSection from "./components/sidebar/FullHeightSidebar";
import FooterSection from "./components/footer/BasicFooter";

const coreStore = useCoreStore();
const overflow = computed(() => {
  return coreStore.getModalState ? "hidden" : "auto";
});

useHead({
  bodyAttrs: {
    style: () => `overflow: ${overflow.value}`,
  },
});
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  height: auto
  box-sizing: border-box
  max-width: 100%

body, html
  font-synthesis: none
  text-rendering: optimizeLegibility
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  -webkit-text-size-adjust: 100%
  scroll-behavior: smooth
  background: $purple

a
  color: inherit
  text-decoration: none

// SCROLLBAR
// Whole bar
::-webkit-scrollbar
  width: auto


// Track
::-webkit-scrollbar-track
  background: $vue-blue
  border-radius: 10px


// Handle
::-webkit-scrollbar-thumb
  background: $vue-green
  border-radius: 10px

// Transition
.preloader-enter-active, .preloader-leave-active
  transition: .25s ease-in-out


.preloader-enter-from, .preloader-leave-to
  opacity: 0
  transform: translateY(-100%)
</style>
