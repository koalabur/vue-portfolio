<template>
  <section id="projects" class="projects" ref="projects">
    <ProjectsModal
      v-if="modalContent"
      :content="modalContent"
      @closeModal="closeModal"
    />
    <h1 class="projects__title">&lt projects /&gt</h1>
    <ProjectsFilter :tech-used="unfilteredTech" @filter="filterHandler" />
    <div class="projects__content">
      <ProjectsCard
        v-if="filteredProjects.length !== 0"
        v-for="project in filteredProjects"
        :key="project.title"
        :project="project"
        @dataForModal="openModal"
      />
      <WobbleText
        v-else
        class="projects__content-notice"
        text="Please select a filter to see projects"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { useCoreStore } from "@/stores/coreStore";
import { useIntersectionObserver } from "@vueuse/core";
import WobbleText from "../ui/WobbleText.vue";

// When the section is in view, put the id in the global state
const projects = ref<HTMLElement | null>(null);
const coreStore = useCoreStore();
useIntersectionObserver(
  projects,
  ([{ isIntersecting }]) => {
    coreStore.setSection(isIntersecting ? projects.value?.id : "");
  },
  {
    threshold: process.client ? (window.innerWidth <= 768 ? 0.35 : 0.55) : 0.55,
  }
);

// Contentful
const projectsQuery = `
  query projectsEntryQuery {
    projects(id: "Ue3loenRUlViyPr30MZDV") {
      projectsCollection {
        items {
          title
          projectColorTheme
          image {
            title
            url
            width
            height
          }
          imagePosition
          projectDescription {
            json
          }
          tech
          websiteLink
          githubLink
        }
      }
    }
  }
`;
/// use contentful conposable
const { data } = await useContentful(projectsQuery);
const projectData = data.projects.projectsCollection.items;

// Modal/*  */
const modalContent = ref<Project | null>(null);
function openModal(modalData: Project) {
  modalContent.value = modalData;
  coreStore.openModal();
}

function closeModal() {
  modalContent.value = null;
  coreStore.closeModal();
}

// Look into the tech array of every object and return everything
const unfilteredTech = ref<String[]>([]);

projectData.forEach((item: Project) => {
  item.tech.forEach((string) => {
    unfilteredTech.value.push(string);
  });
});

// Compare filters with the contentful projectData
const filteredProjects = ref(projectData);

function filterHandler(filter: string[]) {
  const matches = projectData.filter((item: Project) => {
    return item.tech.some((tech) => filter.includes(tech));
  });

  filteredProjects.value = matches;
}
</script>

<style lang="sass" scoped>
.projects
  max-width: 1700px
  margin-left: auto
  margin-right: auto
  @include edge-padding
  padding-top: 5rem
  padding-bottom: 10rem

  &__content
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-column-gap: 14px
    grid-row-gap: 47px

    @include mobile-break
      grid-template-columns: repeat(2, 1fr)
      grid-column-gap: 5px
      grid-row-gap: 15px

    &-notice
      font-family: $main-font
      color: $font-color
      text-align: center
      width: 100%
      font-size: #{fluid(22px, 40px)}
      grid-area: 1 / 1 / 2 / 5

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
