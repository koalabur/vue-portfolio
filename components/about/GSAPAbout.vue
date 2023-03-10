<template>
  <section id="about" class="about" ref="about">
    <div class="about__offset"></div>
    <div>
      <!-- whoAmI -->
      <div class="about__row" ref="scrollTrigA">
        <div class="about__col">
          <div class="about__col-row">
            <div class="about__col-title">
              <h1 class="about__col-title-text">
                &lt;h1&#62;
                <span class="about__col-title-text-indent">
                  {{ whoAmI?.title }}
                </span>
                &lt;/h1&#62;
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
            {{ whoAmI?.subtitle }}
          </h2>
          <div class="about__col-highlights">
            <div
              class="about__col-highlights-item"
              v-for="item in whoAmI?.contentInJsonFormat"
              :key="item.id"
            >
              <nuxt-img
                provider="cloudinary"
                :src="item.base64img"
                :alt="item.title"
                width="101"
                height="101"
                :class="
                  item.id !== 4
                    ? 'about__col-highlights-item-img'
                    : 'about__col-highlights-item-img about__col-highlights-item-img--rotate'
                "
                loading="lazy"
                decoding="async"
              />
              <h3 class="about__col-highlights-item-title">
                {{ item.title }}
              </h3>
              <p class="about__col-highlights-item-subtitle">
                {{ item.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- codeyThings -->
      <div class="about__row" ref="scrollTrigB">
        <div class="about__col">
          <div class="about__col-row">
            <div class="about__col-title">
              <h1 class="about__col-title-text">
                &lt;h1&#62;
                <span class="about__col-title-text-indent">
                  {{ codeyThings?.title }}
                </span>
                &lt;/h1&#62;
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
              v-for="(code, index) in codeyThings?.contentInListFormat"
              class="about__col-skills-item"
              :key="index"
            >
              {{ code }}
            </p>
          </div>
        </div>
      </div>

      <!-- coolConcepts -->
      <div class="about__row" ref="scrollTrigC">
        <div class="about__col">
          <div class="about__col-row">
            <div class="about__col-title">
              <h1 class="about__col-title-text">
                &lt;h1&#62;
                <span class="about__col-title-text-indent">
                  {{ coolConcepts?.title }}
                </span>
                &lt;/h1&#62;
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
              v-for="(concept, index) in coolConcepts?.contentInListFormat"
              class="about__col-skills-item"
              :key="index"
            >
              {{ concept }}
            </p>
          </div>
        </div>
      </div>

      <!-- coolThings -->
      <div class="about__row" ref="scrollTrigD">
        <div class="about__col">
          <div class="about__col-row">
            <div class="about__col-title">
              <h1 class="about__col-title-text">
                &lt;h1&#62;
                <span class="about__col-title-text-indent">
                  {{ coolThings?.title }}
                </span>
                &lt;/h1&#62;
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
              v-for="(thing, index) in coolThings?.contentInListFormat"
              :key="index"
              class="about__col-skills-item"
            >
              {{ thing }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
// Import pinia store (global state)
import { useCoreStore } from "@/stores/coreStore";
// vueuse.org
import { useIntersectionObserver } from "@vueuse/core";

// Import and register gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

// Create refs for elements
/// Intersection Obs ref
const about = ref<HTMLElement | null>(null);
/// Gsap refs
const scrollTrigA = ref<HTMLDivElement | null>(null);
const scrollTrigB = ref<HTMLDivElement | null>(null);
const scrollTrigC = ref<HTMLDivElement | null>(null);
const scrollTrigD = ref<HTMLDivElement | null>(null);

/// Assign const to global state
const coreStore = useCoreStore();

/// vueuse intersectionObserver
useIntersectionObserver(
  about,
  ([{ isIntersecting }]) => {
    coreStore.setSection(isIntersecting ? about.value?.id : "");
  },
  {
    threshold: 0,
  }
);

onMounted(() => {
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
        section?.childNodes[0].childNodes[0].childNodes[0],
        // Line
        section?.childNodes[0].childNodes[0].childNodes[1].childNodes[0],
        // Dot
        section?.childNodes[0].childNodes[0].childNodes[1].childNodes[1],
        // Right Column
        section?.childNodes[1],
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
        },
      }
    );
  });
});

// Contentful
interface DataFromContentful {
  id: number;
  title: string;
  subtitle: string;
  contentInListFormat: Array<string> | null;
  contentInJsonFormat: {
    // yes I know I shouldn't use ANY but wtf TS screams at me -_-
    id: number | any;
    title: string;
    subtitle: string;
    base64img: string;
  } | null;
  icon: {
    alt: string;
    height: string;
    width: string;
    img: string;
  };
}
/// Query
const GSAPAboutQuery = `
  query aboutCollectionQuery {
    aboutCollection {
      items {
        id,
        title,
        subtitle,
        contentInJsonFormat,
        contentInListFormat
      }
    }
  }
`;
/// use conposable
const GSAPAboutContent = await useContentful(GSAPAboutQuery);
/// whoAmI
const whoAmI = ref<DataFromContentful>();
whoAmI.value = GSAPAboutContent.data.aboutCollection.items.find(
  ({ id }: { id: number }) => id === 1
);
/// codeyThings
const codeyThings = ref<DataFromContentful>();
codeyThings.value = GSAPAboutContent.data.aboutCollection.items.find(
  ({ id }: { id: number }) => id === 2
);
/// coolConcepts
const coolConcepts = ref<DataFromContentful>();
coolConcepts.value = GSAPAboutContent.data.aboutCollection.items.find(
  ({ id }: { id: number }) => id === 3
);
/// coolThings
const coolThings = ref<DataFromContentful>();
coolThings.value = GSAPAboutContent.data.aboutCollection.items.find(
  ({ id }: { id: number }) => id === 4
);
</script>
<style lang="sass" scoped>
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
        height: #{fluid(22px, 42px)}
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
