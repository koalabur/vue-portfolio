<template>
  <section class="intro">
    <div class="intro__fg">
      <nuxt-img
        provider="cloudinary"
        class="intro__fg-img"
        src="/intro/koala-hero_eo3buf.png"
        width="423"
        height="385"
        alt="Koala Intro"
      />
      <h1 class="intro__fg-title">
        i&apos;m just a web guy doing web guy things
      </h1>
      <a href="#about" class="intro__fg-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="mouse"
          role="img"
          viewBox="0 0 384 512"
        >
          <path
            d="M0 352a160 160 0 0 0 160 160h64a160 160 0 0 0 160-160V224H0zM176 0h-16A160 160 0 0 0 0 160v32h176zm48 0h-16v192h176v-32A160 160 0 0 0 224 0z"
          />
        </svg>
      </a>
    </div>

    <div class="intro__bg">
      <svg
        version="1.1"
        viewBox="0 0 261.76 226.69"
        xmlns="http://www.w3.org/2000/svg"
        class="intro__bg-svg"
        width="600"
        height="600"
      >
        <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
          <g transform="translate(178.06 235.01)">
            <path
              d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
              fill="#41b883"
            />
          </g>
          <g transform="translate(178.06 235.01)">
            <path
              d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
              fill="#34495e"
            />
          </g>
        </g>
      </svg>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="sass" scoped>
.intro
    margin-bottom: calc(40vh + 7rem)
    display: grid
    align-items: center
    padding-top: 7rem
    background: #2a2773
    background: linear-gradient(180deg, #2a2773, #1c1240)
    overflow: hidden
    @include edge-padding

    &__fg
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        margin-left: auto
        margin-right: auto
        grid-area: 1 / 1 / 2 / 2
        z-index: 1

        &-img
            width: 423px
            height: auto


        &-title
            font-family: "IBM Plex Sans", sans-serif
            color: #d0d5f2
            text-transform: lowercase
            // font-size: 3.5rem
            font-size: #{fluid(32px, 56px)}
            font-weight: 200
            margin-bottom: 1rem
            text-align: center
            padding-left: 0.9rem
            padding-right: 0.9rem


        &-svg
            width: calc(4rem + 0.8vw)
            height: auto
            cursor: pointer
            margin-bottom: 1rem
            padding-left: 0.9rem
            padding-right: 0.9rem
            -webkit-animation: bounceAnimation 2s ease 0s infinite alternate forwards
            animation: bounceAnimation 2s ease 0s infinite alternate forwards
            fill: $font-color
            transition: .25s ease-in-out

            &:hover
              fill: $vue-green


    &__bg
        grid-area: 1 / 1 / 2 / 2
        margin-left: auto

        &-svg
            opacity: 0.2
            margin-left: 30%


@keyframes bounceAnimation
    0%
        animation-timing-function: ease-in
        opacity: 1
        transform: translateY(-45px)


    24%
        opacity: 1


    40%
        animation-timing-function: ease-in
        transform: translateY(-24px)


    65%
        animation-timing-function: ease-in
        transform: translateY(-12px)


    82%
        animation-timing-function: ease-in
        transform: translateY(-6px)


    93%
        animation-timing-function: ease-in
        transform: translateY(-4px)


    25%,
    55%,
    75%,
    87%
        animation-timing-function: ease-out
        transform: translateY(0px)


    100%
        animation-timing-function: ease-out
        opacity: 1
        transform: translateY(0px)
</style>
