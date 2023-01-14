<template>
  <section id="about" class="about" ref="about">
    <div class="about__offset"></div>
    <div>
      <!-- aboutData -->
      <div class="about__row" ref="scrollTrigA">
        <div class="about__col">
          <div class="about__col-row">
            <div class="about__col-title">
              <h1 class="about__col-title-text">
                &lt;h1&#62;
                <span class="about__col-title-text-indent"> who am i? </span>
                &lt;h1/&#62;
              </h1>
            </div>
            <div class="about__col-divider">
              <div class="about__col-divider-line"></div>
              <div class="about__col-divider-dot"></div>
            </div>
          </div>
        </div>
        <div class="about__col">
          <h2 class="about__col-subtitle">
            my name is <strong><u>cameron</u></strong
            >, i am a <strong><u>front end dev</u></strong> who likes...
          </h2>
          <div class="about__col-highlights">
            <div
              class="about__col-highlights-item"
              v-for="about in aboutData"
              :key="about.id"
            >
              <nuxt-img
                provider="cloudinary"
                :src="about.icon.img"
                :alt="about.icon.alt"
                :width="about.icon.width"
                :height="about.icon.height"
                :class="
                  about.id !== 4
                    ? 'about__highlights-col-img'
                    : 'about__highlights-col-img about__highlights-col-img--rotate'
                "
                loading="lazy"
                decoding="async"
              />
              <h3 class="about__col-highlights-item-title">
                {{ about.title }}
              </h3>
              <p class="about__col-highlights-item-subtitle">
                {{ about.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- reactCode -->
      <div class="about__row" ref="scrollTrigB">
        <div class="about__col">
          <div class="about__col-row">
            <div class="about__col-title">
              <h1 class="about__col-title-text">
                &lt;h1&#62;
                <span class="about__col-title-text-indent">
                  i know cool codey things like
                </span>
                &lt;h1/&#62;
              </h1>
            </div>
            <div class="about__col-divider">
              <div class="about__col-divider-line"></div>
              <div class="about__col-divider-dot"></div>
            </div>
          </div>
        </div>
        <div class="about__col">
          <div class="about__col-skills">
            <p
              v-for="(code, index) in codesData.items"
              class="about__col-skills-item"
              :key="index"
            >
              {{ code }}
            </p>
          </div>
        </div>
      </div>

      <!-- conceptsData -->
      <div class="about__row" ref="scrollTrigC">
        <div class="about__col">
          <div class="about__col-row">
            <div class="about__col-title">
              <h1 class="about__col-title-text">
                &lt;h1&#62;
                <span class="about__col-title-text-indent">
                  i know cool concepts and libraries like
                </span>
                &lt;h1/&#62;
              </h1>
            </div>
            <div class="about__col-divider">
              <div class="about__col-divider-line"></div>
              <div class="about__col-divider-dot"></div>
            </div>
          </div>
        </div>
        <div class="about__col">
          <div class="about__col-skills">
            <p
              v-for="(concept, index) in conceptsData.items"
              class="about__col-skills-item"
              :key="index"
            >
              {{ concept }}
            </p>
          </div>
        </div>
      </div>

      <!-- othersData -->
      <div class="about__row" ref="scrollTrigD">
        <div class="about__col">
          <div class="about__col-row">
            <div class="about__col-title">
              <h1 class="about__col-title-text">
                &lt;h1&#62;
                <span class="about__col-title-text-indent">
                  i know other cool things like
                </span>
                &lt;h1/&#62;
              </h1>
            </div>
            <div class="about__col-divider">
              <div class="about__col-divider-line"></div>
              <div class="about__col-divider-dot"></div>
            </div>
          </div>
        </div>
        <div class="about__col">
          <div class="about__col-skills">
            <p
              v-for="(other, index) in othersData.items"
              :key="index"
              class="about__col-skills-item"
            >
              {{ other }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
//* Import pinia store (global state)
import { useCoreStore } from "@/stores/coreStore";

//* Import and register gsap
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// if (process.client) {
//   gsap.registerPlugin(ScrollTrigger);
// }

// Init vars before everything else
let aboutData: any = ref();
let codesData: any = ref();
let conceptsData: any = ref();
let othersData: any = ref();

//// Create refs for elements
// Intersection Obs ref
const about = ref(null);
// Gsap refs
const scrollTrigA = ref(null);
const scrollTrigB = ref(null);
const scrollTrigC = ref(null);
const scrollTrigD = ref(null);

// Assign const to global state
const coreStore = useCoreStore();

onMounted(() => {
  useIntersectionObs(about, coreStore.setSection, 0);

  // Timeout so gsap will wait for component to completely render
  // then apply effects

  // Put refs in array then loop through all and add the same effects
  const scrollTrig = [
    scrollTrigA.value,
    scrollTrigB.value,
    scrollTrigC.value,
    scrollTrigD.value,
  ];

  scrollTrig.forEach((section) => {
    // console.log(section.childNodes[1]);
    gsap.from(
      [
        // Title
        //@ts-ignore
        section.childNodes[0].childNodes[0].childNodes[0],
        // Line
        //@ts-ignore
        section.childNodes[0].childNodes[0].childNodes[1].childNodes[0],
        // Dot
        //@ts-ignore
        section.childNodes[0].childNodes[0].childNodes[1].childNodes[1],
        // Right Column
        //@ts-ignore
        section.childNodes[1],
      ],
      {
        opacity: 0,
        xPercent: -100,
        ease: "expo.out",
        stagger: 0.8,
        scrollTrigger: {
          trigger: section,
          scrub: 1,
          pin: true,
          start: "top top",
          end: "bottom",
          //@ts-ignore
          pinSpacer: window.innerWidth < 1024 ? true : false,
        },
      }
    );
  });
});

async function initApi() {
  // ABOUT DATA
  const rawAboutData = await $fetch("/api/query?col=about");

  // sort id descending order
  // @ts-ignore
  rawAboutData.sort(function (a: { id: number }, b: { id: number }) {
    return a.id - b.id;
  });

  // Assign to const ref.value
  aboutData.value = rawAboutData;

  // ************************* //
  // GET ALL SKILLS DATA
  const rawSkillsData = await $fetch("/api/query?col=skills");

  // Filter to REACT-CODE
  // @ts-ignore
  const filteredCodesData = rawSkillsData.find(
    (item: { id: string }) => item.id === "react-code"
  );

  // Assign to const ref.value
  codesData.value = filteredCodesData;

  // Filter to REACT-CONCEPTS
  // @ts-ignore
  const filteredConceptsData = rawSkillsData.find(
    (item: { id: string }) => item.id === "react-concepts"
  );

  // Assign to const ref.value
  conceptsData.value = filteredConceptsData;

  // Filter to REACT-OTHERS
  // @ts-ignore
  const filteredOthersData = rawSkillsData.find(
    (item: { id: string }) => item.id === "react-other"
  );

  // Assign to const ref.value
  othersData.value = filteredOthersData;
}

// TODO: ERR HANDLING
await initApi();
</script>
<style lang="sass">
.about
  display: flex
  flex-direction: column
  max-width: #{fluid(1300px, 1700px)}
  width: 100%
  margin-left: auto
  margin-right: auto
  padding-left: 0.9rem
  padding-right: 0.9rem
  margin-bottom: calc(40vh + 4rem)
  background: transparent
  @include edge-padding

  &__row
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: 1fr
    height: 100vh
    background: $purple

    @include mobile-break
      grid-template-columns: 1fr
      height: 100%

  &__col
    display: flex
    justify-content: center
    flex-direction: column
    margin-bottom: 3rem

    &-divider
      display: flex
      flex-direction: row
      align-items: center
      width: 100%
      padding-right: 55px
      padding-left: 15px

      &-dot
        background: $light-purple
        width: #{fluid(25px, 45px)}
        height: #{fluid(25px, 42px)}
        border-radius: 100%
        border: #{fluid(3px, 6px)} solid $purple

      &-line
        background: $light-purple
        width: 100%
        max-width: 500px
        height: 4px
        display: block

    &-highlights
      display: grid
      grid-template-columns: repeat(2, 1fr)
      grid-template-rows: 1fr

      @media (max-width: 768px)
        flex-direction: column

      &-item
        background-color: rgba(64, 52, 109, 0.6)
        height: auto
        text-align: center
        padding: 3rem 0.75rem

        @media (max-width: 768px)
          width: 100%

        &:last-child
          background-image: linear-gradient(190deg, rgba(175, 39, 242, 0.6), rgba(64, 3, 254, 0.6))

        &-img
          margin-bottom: 0.5rem

          &--rotate
            -webkit-animation: rotateAnimation 1.5s linear 0s infinite normal none
            animation: rotateAnimation 1.5s linear 0s infinite normal none
            transform-origin: 50% 55%
            transform-style: preserve-3D
        &-subtitle
          font-family: $main-font
          color: #d0d5f2
          // font-size: 1.1rem
          font-size: #{fluid(17.6px, 20px)}
          font-weight: 400

        &-title
          font-family: $main-font
          color: #d0d5f2
          // font-size: 2.2rem
          font-size: #{fluid(35.2px, 40px)}
          font-weight: 200
          margin-bottom: 0.5rem
    &-row
      display: grid
      grid-template-columns: 1fr 0.95fr
      grid-template-rows: 1fr

      @include mobile-break
        margin-top: 10rem
        grid-template-columns: 1fr

    &-skills
      display: grid
      grid-template-columns: repeat(2, 1fr)
      grid-template-rows: 1fr

      &-item
        font-family: $main-font
        color: #d0d5f2
        // font-size: 1.1rem
        font-size: #{fluid(17.6px, 22px)}
        text-align: center
        line-height: 120%
        margin: auto
        padding: 0 1rem
        background: $faded-purple
        width: 100%
        height: #{fluid(115px, 130px)}
        display: flex
        align-items: center
        justify-content: center
        position: relative
        overflow: hidden
        z-index: 0

        @media (max-width: 768px)
          border: 1px solid $purple

        &:hover
          z-index: 0

          &::before
            opacity: 1
            transform: scale(1) translate(0, 0)
            border-radius: 1px
        &:before
          position: absolute
          content: ""
          top: 0
          right: 0
          bottom: 0
          left: 0
          background-image: linear-gradient(200deg, hsla(255, 99%, 50%, 1), hsla(282, 89%, 55%, 1))
          transform: scale(0) translate(300px, 50px)
          z-index: -1
          transition: 0.25s ease-in-out
          opacity: 0
          border-radius: 50%
          transform-origin: 100px 100px

    &-subtitle
      font-family: $main-font
      color: #d0d5f2
      // font-size: 1.3rem
      font-size: #{fluid(18px, 30px)}
      font-weight: 400
      // margin-bottom: 3rem
      margin-bottom: #{fluid(32px, 71px)}

    &-title
      display: flex
      flex-direction: row
      flex-wrap: wrap
      align-items: center
      // margin-bottom: 2.5rem
      margin-bottom: #{fluid(24px, 40px)}

      &-text
        font-family: $main-font
        // font-size: 2.2rem
        font-size: #{fluid(30px, 58px)}
        font-weight: 400
        color: $light-purple
        max-width: #{fluid(300px, 450px)}

        @include mobile-break
          max-width: 100%

        &-indent
          margin-left: #{fluid(40px, 60px)}
          display: block
          color: $font-color

  &__offset
    margin-bottom: -150px

@keyframes rotateAnimation
  0%
    transform: rotate(0)
  100%
    transform: rotate(360deg)
</style>
