<template>
  <section id="about" class="about">
    <div class="about__title">
      <h1 class="about__title-text">&lt; who am i? /&#62;</h1>
      <div class="about__title-divider"></div>
      <div>
        <nuxt-img
          provider="cloudinary"
          class="about__title-icon"
          src="/about/mouse-icon_ycm62k.png"
          alt="Mouse"
          width="18"
          height="18"
          loading="lazy"
          decoding="async"
        />
        <nuxt-img
          provider="cloudinary"
          class="about__title-icon about__title-icon--controller"
          src="/about/controller-icon_anmj8o.png"
          alt="Controller"
          width="27"
          height="18"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
    <h2 class="about__subtitle">
      my name is <strong>cameron</strong>, i am a
      <strong>front end dev</strong> who likes...
    </h2>
    <div class="about__highlights">
      <div
        v-for="about in aboutData"
        :key="about.id"
        class="about__highlights-col"
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

        <h3 class="about__highlights-col-title">{{ about.title }}</h3>
        <p class="about__highlights-col-subtitle">{{ about.desc }}</p>
      </div>
    </div>

    <div class="about__divider"></div>

    <div class="about__title">
      <h1 class="about__title-text">
        &lt; i know cool codey (and non codey) things like /&gt;
      </h1>
      <div class="about__title-divider"></div>
      <div>
        <nuxt-img
          provider="cloudinary"
          src="/about/bug-icon_sx93jk.png"
          alt="Bug"
          width="20"
          height="18"
          class="about__title-icon"
          loading="lazy"
          decoding="async"
        />
        <nuxt-img
          provider="cloudinary"
          src="/about/web-icon_vttje2.png"
          alt="Web"
          width="34"
          height="18"
          class="about__title-icon about__title-icon--controller"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
    <div class="about__skills">
      <p
        class="about__skills-item"
        v-for="items in skillsData.items"
        :key="items"
      >
        {{ items }}
      </p>
    </div>
  </section>
</template>
<script lang="ts" setup>
// Imports
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
// @ts-ignore
import { db } from "/firebase.config.ts";

// SKILLS DATA
let skillsData = ref();
const dbCollectionSkills = "skills";

const docRef = doc(db, dbCollectionSkills, "bhGO42yK5Voe2pvPilS0");
const docSnap = await getDoc(docRef);

// err handling
if (docSnap.exists()) {
  const firebaseSkillsData = ref(docSnap.data());
  skillsData = firebaseSkillsData;
} else {
  // doc.data() will be undefined in this case
  console.warn(
    `There was a problem fetching the ${dbCollectionSkills.toUpperCase()} document!`
  );
}

// ABOUT DATA
let aboutData: any = ref();
const dbCollectionAbout = "about";

const collectionRef = collection(db, dbCollectionAbout);
const result = await getDocs(collectionRef);
const mapResult = result.docs.map((doc) => ({ ...doc.data() }));

// err handling
if (mapResult.length !== 0) {
  const cleanResult = ref(mapResult);
  aboutData = cleanResult;
} else {
  console.warn(
    `There was a problem fetching the ${dbCollectionAbout.toUpperCase()} collection!`
  );
}

// sort id descending order
aboutData.value.sort(function (a: { id: number }, b: { id: number }) {
  return a.id - b.id;
});
</script>
<style lang="sass" scoped>
.about
    max-width: 1400px
    width: 100%
    margin-left: auto
    margin-right: auto
    padding-left: 0.9rem
    padding-right: 0.9rem
    margin-bottom: calc(40vh + 7rem)
    @include edge-padding

    &__divider
        background-image: linear-gradient(#af27f2, #4003fe)
        width: 2px
        height: 350px
        margin: 2rem 0


    &__highlights
        display: flex
        flex-direction: row
        flex-wrap: nowrap

        @media (max-width: 768px)
            flex-direction: column


        &-col
            background-color: rgba(64, 52, 109, 0.6)
            height: auto
            text-align: center
            width: 25%
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


    &__skills
        display: grid
        grid-template-columns: repeat(5, 1fr)
        grid-template-rows: repeat(2, 1fr)

        @media (max-width: 768px)
            grid-template-columns: repeat(2, 1fr)


        &-item
            font-family: $main-font
            color: #d0d5f2
            // font-size: 1.1rem
            font-size: #{fluid(17.6px, 20px)}
            text-align: center
            line-height: 120%
            margin: auto
            padding: 0 1rem
            background: $faded-purple
            width: 100%
            height: 135px
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


            &:nth-child(1)
                border-top-left-radius: 10px

                &:before
                    border-top-left-radius: 10px


            &:nth-child(2)
                @media (max-width: 768px)
                    border-top-right-radius: 10px


                &:before
                    @media (max-width: 768px)
                        border-top-right-radius: 10px


            &:nth-child(5)
                border-top-right-radius: 10px

                @media (max-width: 768px)
                    border-top-right-radius: 0px


                &:before
                    border-top-right-radius: 10px

                    @media (max-width: 768px)
                        border-top-right-radius: 0px


            &:nth-child(6)
                border-bottom-left-radius: 10px

                @media (max-width: 768px)
                    border-bottom-left-radius: 0px


                &:before
                    border-bottom-left-radius: 10px

                    @media (max-width: 768px)
                        border-bottom-left-radius: 0px


            &:nth-child(9)
                @media (max-width: 768px)
                    border-bottom-left-radius: 10px


                &:before
                    @media (max-width: 768px)
                        border-bottom-left-radius: 10px


            &:nth-child(10)
                border-bottom-right-radius: 10px

                &:before
                    border-bottom-right-radius: 10px

    &__title
        display: flex
        flex-direction: row
        flex-wrap: wrap
        align-items: center
        // margin-bottom: 2.5rem
        margin-bottom: #{fluid(24px, 40px)}


        &-divider
            height: 1px
            width: 200px
            background: #af27f2
            margin: 5px 15px 0 10px


        &-icon
            margin-top: 5px
            margin-left: 2px
            margin-right: 2px

            &--controller
                margin-top: 0



        &-text
            font-family: $main-font
            // font-size: 2.2rem
            font-size: #{fluid(26px, 36px)}
            font-weight: 600
            background: -webkit-linear-gradient(left, #3700ff, #b629f2 45%)
            background-clip: text
            -webkit-background-clip: text
            -webkit-text-fill-color: transparent


    &__subtitle
        font-family: $main-font
        color: #d0d5f2
        // font-size: 1.3rem
        font-size: #{fluid(16px, 21px)}
        font-weight: 400
        // margin-bottom: 3rem
        margin-bottom: #{fluid(32px, 48px)}



@keyframes rotateAnimation
    0%
        transform: rotate(0)

    100%
        transform: rotate(360deg)
</style>
