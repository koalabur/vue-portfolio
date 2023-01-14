import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
  }
});
