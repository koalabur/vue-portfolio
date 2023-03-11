<template>
  <section id="portfolio" class="portfolio" ref="portfolio">
    <h1 class="portfolio__title">&lt portfolio /&gt</h1>
    <div class="portfolio__filters">
      <button
        v-for="filter in filters"
        :key="filter"
        :class="isFilterActiveClass(filter)"
        @click="() => activeFilterHandler(filter)"
      >
        {{ filter.toLowerCase() }}
        <img
          class="portfolio__filters-item-icon"
          :src="isFilterActiveIcon(filter)"
          width="27"
          height="27"
          loading="lazy"
          decoding="async"
        />
      </button>
    </div>
    <div class="portfolio__row">
      <a
        v-for="item in portfolioData"
        :href="item.url"
        :class="
          item.display
            ? 'portfolio__row-item portfolio__row-item--active'
            : 'portfolio__row-item'
        "
        target="_blank"
        rel="noreferrer"
        :key="item.id"
      >
        <nuxt-img
          provider="contentful"
          :src="item.image.url"
          :alt="item.title"
          width="610"
          height="458"
          class="portfolio__row-item-img"
        />
        <p class="portfolio__row-item-title">
          {{ item.title.toLowerCase() }}
        </p>
        <p class="portfolio__row-item-tools">
          <!-- Yea... I just looped in a loop. I'll do it again. -->
          <span
            class="portfolio__row-item-tools-inner"
            :class="
              tool.toLowerCase() === 'active'
                ? 'portfolio__row-item-tools-inner--active'
                : tool.toLowerCase() === 'coming soon'
                ? 'portfolio__row-item-tools-inner--comingsoon'
                : tool.toLowerCase() === 'wordpress'
                ? 'portfolio__row-item-tools-inner--wordpress'
                : tool.toLowerCase() === 'e-comm'
                ? 'portfolio__row-item-tools-inner--ecomm'
                : null
            "
            v-for="tool in item.tools"
            >{{ tool.toLowerCase() }}</span
          >
        </p>
      </a>
    </div>
  </section>
</template>
<script lang="ts" setup>
// Import pinia store (global state)
import { useCoreStore } from "@/stores/coreStore";
// vueuse.org
import { useIntersectionObserver } from "@vueuse/core";

// Contentful
interface DataFromContentful {
  id: number;
  title: string;
  tools: Array<string>;
  url: string;
  image: {
    url: string;
  };
  display: boolean;
}
/// Query
const portfolioQuery = `
  query portfolioCollectionQuery {
    portfolioCollection {
      items {
        id,
        title,
        url,
        image {
          url
        },
        tools,
        display
      }
    }
  }
`;
/// use contentful conposable
const rawData = await useContentful(portfolioQuery);
/// sort rawData
const portfolioContent = rawData.data.portfolioCollection.items.sort(function (
  a: { id: number },
  b: { id: number }
) {
  return a.id - b.id;
});
/// assign to empty const = ref()
const portfolioData = ref<Array<DataFromContentful>>();
portfolioData.value = portfolioContent;

// Filters (from contentful)
/// empty array for filters
const dupeFilters: Array<String> = [];
/// loop through portfolioContent (from above) and push to dupeFilters
for (let i = 0; i < portfolioContent.length; i++) {
  dupeFilters.push(portfolioContent[i].tools);
}
/// remove dupes (...new Set()) and put in alphabetical order (.sort())
const filters = ref<Array<String>>([...new Set(dupeFilters.flat().sort())]);

// Active Filters
const activeFilter = ref<Array<String>>([]);
/// change filters
function activeFilterHandler(filter: string) {
  if (!activeFilter.value.find((element) => element === filter.toLowerCase())) {
    //// push to activeFilter const for filter btns
    activeFilter.value.push(filter.toLowerCase());
    //// give me ALL objects that do NOT have the filter
    //// change === -1 to !== -1 for opposite effect
    const filteredPortfolio = portfolioData.value?.filter(
      (item) => item.tools.indexOf(filter) === -1
    );
    //// enable anchors (controlled by sass)
    filteredPortfolio?.forEach((item) => {
      item.display = false;
    });
  } else {
    //// remove deactivated filter from activeFilter array
    const removeSingleFilter = activeFilter.value.filter(
      (element) => element !== filter.toLowerCase()
    );
    activeFilter.value = removeSingleFilter;
    //// give me ALL objects that DO have the filter
    //// change === -1 to !== -1 for opposite effect
    const filteredPortfolio = portfolioData.value?.filter(
      (item) => item.tools.indexOf(filter) === -1
    );
    //// enable anchors (controlled by sass)
    filteredPortfolio?.forEach((item) => {
      item.display = true;
    });
  }
}
/// change symbol next to filter text
function isFilterActiveIcon(filter: string) {
  return activeFilter.value.find((element) => element === filter.toLowerCase())
    ? "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDQ4IDcxLjljLTE3LjMtMTMuNC00MS41LTkuMy01NC4xIDkuMUwyMTQgMzQ0LjJsLTk5LjEtMTA3LjNjLTE0LjYtMTYuNi0zOS4xLTE3LjQtNTQuNy0xLjgtMTUuNiAxNS41LTE2LjQgNDEuNi0xLjcgNTguMSAwIDAgMTIwLjQgMTMzLjYgMTM3LjcgMTQ3IDE3LjMgMTMuNCA0MS41IDkuMyA1NC4xLTkuMWwyMDYuMy0zMDEuN2MxMi42LTE4LjUgOC43LTQ0LjItOC42LTU3LjV6IiBmaWxsPSIjMzEyNjViIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4="
    : "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEzLjcgMTkuNTUgNS44OC01Ljg5IDMuMzUgMy4zNmEzLjU3IDMuNTcgMCAwIDEgMCA1LjA1bC0uODMuODNhMy41NyAzLjU3IDAgMCAxLTUuMDUgMHpNMjIuOTIgMS45bC0uODMtLjgzYTMuNTcgMy41NyAwIDAgMC01LjA1IDBMMTIgNi4xMiA2Ljk1IDEuMDdhMy41NyAzLjU3IDAgMCAwLTUuMDUgMGwtLjgzLjgzYTMuNTcgMy41NyAwIDAgMCAwIDUuMDVMNi4xMiAxMmwtNS4wNSA1LjA1YTMuNTcgMy41NyAwIDAgMCAwIDUuMDVsLjgzLjgzYTMuNTcgMy41NyAwIDAgMCA1LjA1IDBMMTIgMTcuODhsMy42OC0zLjY4IDIuMi0yLjIgNS4wNS01LjA1YTMuNTcgMy41NyAwIDAgMCAwLTUuMDV6IiBmaWxsPSIjMzEyNjViIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=";
}
/// change class of filter button
function isFilterActiveClass(filter: string) {
  return activeFilter.value.find((element) => element === filter.toLowerCase())
    ? "portfolio__filters-item portfolio__filters-item--active"
    : "portfolio__filters-item";
}

// intersection observer
/// Ref the HTML element
const portfolio = ref<HTMLElement | null>(null);
/// Assign const to global state
const coreStore = useCoreStore();
/// vueuse intersectionObserver
useIntersectionObserver(
  portfolio,
  ([{ isIntersecting }]) => {
    coreStore.setSection(isIntersecting ? portfolio.value?.id : "");
  },
  {
    threshold: process.client ? (window.innerWidth <= 768 ? 0.35 : 0.55) : 0.55,
  }
);
</script>
<style lang="sass" scoped>
.portfolio
  max-width: 1400px
  margin-left: auto
  margin-right: auto
  @include edge-padding
  padding-top: 5rem
  padding-bottom: 10rem

  &__filters
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    margin-bottom: #{fluid(20px, 30px)}
    gap: #{fluid(13px, 15px)}

    &-item
      box-shadow: none
      border: none
      cursor: pointer
      background: $faded-purple
      color: $font-color
      font-family: $main-font
      font-size: #{fluid(15px, 20px)}
      font-weight: 700
      padding-left: 5px
      border-radius: 12px
      outline: 2px solid transparent
      transition: .25s ease-in-out
      display: flex
      align-items: center

      &--active
        outline-color: $font-color

      &:hover
        outline-color: $font-color

      &-icon
        background: $font-color
        border-top-right-radius: 12px
        border-bottom-right-radius: 12px
        padding: 6px 5px
        margin-left: 8px
        height: 101%
        display: inline-block

  &__row
    display: flex
    flex-direction: row
    flex-wrap: wrap
    gap: #{fluid(10px, 20px)}
    justify-content: center

    &-item
      opacity: .5
      transition: 0.25s ease-in-out
      grid-area: 1 / 1 / 2 / 2
      transform: translateY(-10px)
      z-index: 0
      max-width: #{fluid(135px, 325px)}
      padding: #{fluid(5px, 10px)}
      border-radius: 12px
      cursor: not-allowed
      background: rgba(0,0,0,.5)
      pointer-events: none


      &--active
        transform: translateY(0px)
        opacity: 1
        z-index: 1
        cursor: pointer
        background: $faded-purple
        pointer-events: all

        &:hover
          box-shadow: 0px 0px 14px $light-purple
          transform: scale(1.15)
          z-index: 2

      &-img
        margin-bottom: 1rem

      &-title
        font-family: $main-font
        color: $font-color
        margin-bottom: #{fluid(10px, 16px)}
        font-size: #{fluid(20px, 36px)}

      &-tools
        font-family: $main-font
        font-size: #{fluid(12px, 17px)}
        font-weight: 600
        margin-bottom: 1rem
        display: flex
        gap: #{fluid(8px, 10px)}
        flex-wrap: wrap

        &-inner
          border-radius: 12px
          background: $font-color
          color: $faded-purple
          width: auto
          padding: 3px #{fluid(7px, 10px)}
          word-break: break-all
          white-space: nowrap

          &--active
            background: $active-bg
            color: $active-fc


          &--comingsoon
            background: $comingsoon-bg
            color: $comingsoon-fc


          &--wordpress
            background: $wordpress-blue
            color: $active-fc


          &--ecomm
            background: $ecomm-red
            color: $ecomm-yellow


    &-link
      outline: 5px solid transparent
      transition: 0.25s ease-in-out
      height: 100%

      img
        vertical-align: bottom

      &:hover,
      &:focus
        outline-color: #b629f2

  &__title
    font-family: $main-font
    font-size: #{fluid(26px, 38px)}
    font-weight: 600
    background: -webkit-linear-gradient(left, #3700ff 0%, #b629f2 45%)
    background-clip: text
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    margin-bottom: 2.5rem
    text-align: center
</style>
