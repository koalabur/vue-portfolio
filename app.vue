<template>
  <NavBar />
  <main>
    <IntroSection />
    <AboutSection />
    <PortfolioSection />
  </main>
  <SidebarSection />
  <FooterSection />
</template>

<script setup>
import NavBar from "./components/nav/v1";
import IntroSection from "./components/intro/v1";
import AboutSection from "./components/about/v1";
import PortfolioSection from "./components/portfolio/v1";
import SidebarSection from "./components/sidebar/v2";
import FooterSection from "./components/footer/v1";
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
</style>
