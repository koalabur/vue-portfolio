<template>
  <aside :class="sidebar ? 'sidebar' : 'sidebar sidebar--inactive'">
    <!-- * Sidebar Toggle -->
    <img
      @click="sidebarClose"
      class="sidebar__close"
      :style="
        sidebar ? 'transform: rotate(-90deg)' : 'transform: rotate(90deg)'
      "
      src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTYuNjkzIDU2LjY5MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC45OTUgMzMuMzgzaDE5LjUyM2wuMDAxIDQuMTEzdjUuMjk2YTIuMTUgMi4xNSAwIDAgMCAuMTE3LjY3MWMuMDQ0LjEzMy4xLjI1OS4xNjYuMzc5LjAyMS4wMzcuMDM3LjA3NC4wNi4xMDguMDg0LjEzMy4xOC4yNTkuMjkuMzcuMDEuMDA5LjAyMS4wMTQuMDMxLjAyMi4xNS4xNDcuMzIzLjI3Ni41MTcuMzc1YTIuMTU5IDIuMTU5IDAgMCAwIDIuMjUyLS4xNzZsMTkuOS0xNC40NTVhMi4xNjQgMi4xNjQgMCAwIDAgMC0zLjQ5OEwzMS45NTEgMTIuMTM0YTIuMTQ4IDIuMTQ4IDAgMCAwLTEuMzYyLS4zOTNoLS4wMDNjLS4xNDQuMDA4LS4yODYuMDItLjQyNi4wNTdhMS44MyAxLjgzIDAgMCAwLS40NjIuMTU4IDIuMTY1IDIuMTY1IDAgMCAwLTEuMTggMS45MjhsLjAwMSA5LjQwOEg4Ljk5NmE1LjA0NCA1LjA0NCAwIDAgMC01LjA0NSA1LjA0NyA1LjA0NCA1LjA0NCAwIDAgMCA1LjA0NCA1LjA0NHoiIGZpbGw9IiNkMGQ1ZjIiIGNsYXNzPSJmaWxsLTQ3NGE1NiI+PC9wYXRoPjwvc3ZnPg=="
      alt="sidebar toggle"
      width="50"
      height="50"
      :title="sidebar ? 'Close Sidebar' : 'Open Sidebar'"
    />
    <div :style="sidebarAnim">
      <!-- Loop through portfolios -->
      <p class="sidebar__title">portfolios</p>
      <div class="sidebar__item" v-for="item in portfolios">
        <a
          :class="'sidebar__item-link sidebar__item-link--' + item.icon.alt"
          :href="item.url"
          :key="item.id"
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="sidebar__item-link-icon"
            :src="item.icon.src"
            :alt="item.icon.alt"
            :title="item.icon.alt + ' portfolio'"
            width="25"
            height="25"
          />
        </a>
        <p class="sidebar__item-title">{{ item.icon.alt }}</p>
      </div>
      <!-- Loop through socials -->
      <p class="sidebar__title">socials</p>
      <div class="sidebar__item" v-for="item in socials">
        <a
          :class="'sidebar__item-link sidebar__item-link--' + item.icon.alt"
          :href="item.url"
          :key="item.id"
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="sidebar__item-link-icon"
            :src="item.icon.src"
            :alt="item.icon.alt"
            :title="item.icon.alt + ' profile'"
            width="25"
            height="25"
          />
        </a>
        <p class="sidebar__item-title">{{ item.icon.alt }}</p>
      </div>
    </div>
  </aside>
</template>
<script lang="ts" setup>
// Import pinia store (global state)
import { useCoreStore } from "@/stores/coreStore";
const coreStore = useCoreStore();

const portfolios = ref([
  {
    id: 1,
    url: "https://react.cameronrdesign.com/",
    icon: {
      src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48cGF0aCBkPSJNMTIgOS44NjFBMi4xMzkgMi4xMzkgMCAxIDAgMTIgMTQuMTM5IDIuMTM5IDIuMTM5IDAgMSAwIDEyIDkuODYxek02LjAwOCAxNi4yNTVsLS40NzItLjEyQzIuMDE4IDE1LjI0NiAwIDEzLjczNyAwIDExLjk5NnMyLjAxOC0zLjI1IDUuNTM2LTQuMTM5bC40NzItLjExOS4xMzMuNDY4YTIzLjUzIDIzLjUzIDAgMCAwIDEuMzYzIDMuNTc4bC4xMDEuMjEzLS4xMDEuMjEzYTIzLjMwNyAyMy4zMDcgMCAwIDAtMS4zNjMgMy41NzhsLS4xMzMuNDY3ek01LjMxNyA4Ljk1Yy0yLjY3NC43NTEtNC4zMTUgMS45LTQuMzE1IDMuMDQ2IDAgMS4xNDUgMS42NDEgMi4yOTQgNC4zMTUgMy4wNDZhMjQuOTUgMjQuOTUgMCAwIDEgMS4xODItMy4wNDZBMjQuNzUyIDI0Ljc1MiAwIDAgMSA1LjMxNyA4Ljk1ek0xNy45OTIgMTYuMjU1bC0uMTMzLS40NjlhMjMuMzU3IDIzLjM1NyAwIDAgMC0xLjM2NC0zLjU3N2wtLjEwMS0uMjEzLjEwMS0uMjEzYTIzLjQyIDIzLjQyIDAgMCAwIDEuMzY0LTMuNTc4bC4xMzMtLjQ2OC40NzMuMTE5YzMuNTE3Ljg4OSA1LjUzNSAyLjM5OCA1LjUzNSA0LjE0cy0yLjAxOCAzLjI1LTUuNTM1IDQuMTM5bC0uNDczLjEyem0tLjQ5MS00LjI1OWMuNDggMS4wMzkuODc3IDIuMDYgMS4xODIgMy4wNDYgMi42NzUtLjc1MiA0LjMxNS0xLjkwMSA0LjMxNS0zLjA0NiAwLTEuMTQ2LTEuNjQxLTIuMjk0LTQuMzE1LTMuMDQ2YTI0Ljc4OCAyNC43ODggMCAwIDEtMS4xODIgMy4wNDZ6TTUuMzEgOC45NDVsLS4xMzMtLjQ2N0M0LjE4OCA0Ljk5MiA0LjQ4OCAyLjQ5NCA2IDEuNjIyYzEuNDgzLS44NTYgMy44NjQuMTU1IDYuMzU5IDIuNzE2bC4zNC4zNDktLjM0LjM0OWEyMy41NTIgMjMuNTUyIDAgMCAwLTIuNDIyIDIuOTY3bC0uMTM1LjE5My0uMjM1LjAyYTIzLjY1NyAyMy42NTcgMCAwIDAtMy43ODUuNjFsLS40NzIuMTE5em0xLjg5Ni02LjYzYy0uMjY4IDAtLjUwNS4wNTgtLjcwNS4xNzMtLjk5NC41NzMtMS4xNyAyLjU2NS0uNDg1IDUuMjUzYTI1LjEyMiAyNS4xMjIgMCAwIDEgMy4yMzMtLjUwMSAyNC44NDcgMjQuODQ3IDAgMCAxIDIuMDUyLTIuNTQ0Yy0xLjU2LTEuNTE5LTMuMDM3LTIuMzgxLTQuMDk1LTIuMzgxek0xNi43OTUgMjIuNjc3Yy0uMDAxIDAtLjAwMSAwIDAgMC0xLjQyNSAwLTMuMjU1LTEuMDczLTUuMTU0LTMuMDIzbC0uMzQtLjM0OS4zNC0uMzQ5YTIzLjUzIDIzLjUzIDAgMCAwIDIuNDIxLTIuOTY4bC4xMzUtLjE5My4yMzQtLjAyYTIzLjYzIDIzLjYzIDAgMCAwIDMuNzg3LS42MDlsLjQ3Mi0uMTE5LjEzNC40NjhjLjk4NyAzLjQ4NC42ODggNS45ODMtLjgyNCA2Ljg1NGEyLjM4IDIuMzggMCAwIDEtMS4yMDUuMzA4em0tNC4wOTYtMy4zODFjMS41NiAxLjUxOSAzLjAzNyAyLjM4MSA0LjA5NSAyLjM4MWguMDAxYy4yNjcgMCAuNTA1LS4wNTguNzA0LS4xNzMuOTk0LS41NzMgMS4xNzEtMi41NjYuNDg1LTUuMjU0YTI1LjAyIDI1LjAyIDAgMCAxLTMuMjM0LjUwMSAyNC42NzQgMjQuNjc0IDAgMCAxLTIuMDUxIDIuNTQ1ek0xOC42OSA4Ljk0NWwtLjQ3Mi0uMTE5YTIzLjQ3OSAyMy40NzkgMCAwIDAtMy43ODctLjYxbC0uMjM0LS4wMi0uMTM1LS4xOTNhMjMuNDE0IDIzLjQxNCAwIDAgMC0yLjQyMS0yLjk2N2wtLjM0LS4zNDkuMzQtLjM0OUMxNC4xMzUgMS43NzggMTYuNTE1Ljc2NyAxOCAxLjYyMmMxLjUxMi44NzIgMS44MTIgMy4zNy44MjQgNi44NTVsLS4xMzQuNDY4ek0xNC43NSA3LjI0YzEuMTQyLjEwNCAyLjIyNy4yNzMgMy4yMzQuNTAxLjY4Ni0yLjY4OC41MDktNC42OC0uNDg1LTUuMjUzLS45ODgtLjU3MS0yLjg0NS4zMDQtNC44IDIuMjA4QTI0Ljg0OSAyNC44NDkgMCAwIDEgMTQuNzUgNy4yNHpNNy4yMDYgMjIuNjc3QTIuMzggMi4zOCAwIDAgMSA2IDIyLjM2OWMtMS41MTItLjg3MS0xLjgxMi0zLjM2OS0uODIzLTYuODU0bC4xMzItLjQ2OC40NzIuMTE5YzEuMTU1LjI5MSAyLjQyOS40OTYgMy43ODUuNjA5bC4yMzUuMDIuMTM0LjE5M2EyMy41OTYgMjMuNTk2IDAgMCAwIDIuNDIyIDIuOTY4bC4zNC4zNDktLjM0LjM0OWMtMS44OTggMS45NS0zLjcyOCAzLjAyMy01LjE1MSAzLjAyM3ptLTEuMTktNi40MjdjLS42ODYgMi42ODgtLjUwOSA0LjY4MS40ODUgNS4yNTQuOTg3LjU2MyAyLjg0My0uMzA1IDQuOC0yLjIwOGEyNC45OTggMjQuOTk4IDAgMCAxLTIuMDUyLTIuNTQ1IDI0Ljk3NiAyNC45NzYgMCAwIDEtMy4yMzMtLjUwMXpNMTIgMTYuODc4Yy0uODIzIDAtMS42NjktLjAzNi0yLjUxNi0uMTA2bC0uMjM1LS4wMi0uMTM1LS4xOTNhMzAuMzg4IDMwLjM4OCAwIDAgMS0xLjM1LTIuMTIyIDMwLjM1NCAzMC4zNTQgMCAwIDEtMS4xNjYtMi4yMjhsLS4xLS4yMTMuMS0uMjEzYTMwLjMgMzAuMyAwIDAgMSAxLjE2Ni0yLjIyOGMuNDE0LS43MTYuODY5LTEuNDMgMS4zNS0yLjEyMmwuMTM1LS4xOTMuMjM1LS4wMmEyOS43ODUgMjkuNzg1IDAgMCAxIDUuMDMzIDBsLjIzNC4wMi4xMzQuMTkzYTMwLjAwNiAzMC4wMDYgMCAwIDEgMi41MTcgNC4zNWwuMTAxLjIxMy0uMTAxLjIxM2EyOS42IDI5LjYgMCAwIDEtMi41MTcgNC4zNWwtLjEzNC4xOTMtLjIzNC4wMmMtLjg0Ny4wNy0xLjY5NC4xMDYtMi41MTcuMTA2em0tMi4xOTctMS4wODRjMS40OC4xMTEgMi45MTQuMTExIDQuMzk1IDBhMjkuMDA2IDI5LjAwNiAwIDAgMCAyLjE5Ni0zLjc5OCAyOC41ODUgMjguNTg1IDAgMCAwLTIuMTk3LTMuNzk4IDI5LjAzMSAyOS4wMzEgMCAwIDAtNC4zOTQgMCAyOC40NzcgMjguNDc3IDAgMCAwLTIuMTk3IDMuNzk4IDI5LjExNCAyOS4xMTQgMCAwIDAgMi4xOTcgMy43OTh6Ii8+PC9zdmc+",
      alt: "react",
    },
  },
  {
    id: 2,
    url: "https://www.cameronrdesign.com/",
    icon: {
      src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjY5MyA1Ni42OTMiIGhlaWdodD0iNTYuNjkzcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0zLjU5LDI5LjM1NWMwLDkuNzQyLDUuNjYzLDE4LjE3LDEzLjg3OCwyMi4xNTZMNS43MjMsMTkuMzMyQzQuMzU1LDIyLjM5NiwzLjU5LDI1Ljc4MywzLjU5LDI5LjM1NXogTTQ0LjgzNiwyOC4xMTEgIGMwLTMuMDQzLTEuMDk2LTUuMTUyLTIuMDMxLTYuNzkxYy0xLjI0OC0yLjAzLTIuNDE2LTMuNzQ1LTIuNDE2LTUuNzc2YzAtMi4yNjQsMS43MTEtNC4zNjksNC4xMzUtNC4zNjkgIGMwLjEwNSwwLDAuMjExLDAuMDE0LDAuMzE2LDAuMDIxQzQwLjQ2MSw3LjE4MywzNC42MjUsNC43MywyOC4yMTUsNC43M2MtOC42MDUsMC0xNi4xNzIsNC40MTYtMjAuNTczLDExLjEgIGMwLjU3OSwwLjAxOCwxLjEyMSwwLjAzMSwxLjU4MywwLjAzMWMyLjU3NywwLDYuNTYzLTAuMzE2LDYuNTYzLTAuMzE2YzEuMzI0LTAuMDc0LDEuNDgxLDEuODcxLDAuMTU0LDIuMDMxICBjMCwwLTEuMzMyLDAuMTU0LTIuODE3LDAuMjM0bDguOTY4LDI2LjY2OGw1LjM4OS0xNi4xNThsLTMuODM4LTEwLjUxYy0xLjMyNi0wLjA4LTIuNTgyLTAuMjM0LTIuNTgyLTAuMjM0ICBjLTEuMzI4LTAuMDgtMS4xNy0yLjEwNSwwLjE1OC0yLjAzMWMwLDAsNC4wNjQsMC4zMTYsNi40ODIsMC4zMTZjMi41NzQsMCw2LjU2Ni0wLjMxNiw2LjU2Ni0wLjMxNiAgYzEuMzIyLTAuMDc0LDEuNDgsMS44NzEsMC4xNTIsMi4wMzFjMCwwLTEuMzMsMC4xNTQtMi44MTYsMC4yMzRsOC45LDI2LjQ2NWwyLjQ1Ny04LjIwM0M0NC4yMDksMzIuODcxLDQ0LjgzNiwzMC4yMjEsNDQuODM2LDI4LjExMSAgeiBNMjguNjQ2LDMxLjUxbC03LjM4OSwyMS40NjljMi4yMDUsMC42NDgsNC41MzUsMSw2Ljk1NywxYzIuODY1LDAsNS42MTctMC40OTYsOC4xNzYtMS4zOThjLTAuMDY2LTAuMTA1LTAuMTI3LTAuMjE1LTAuMTc2LTAuMzM2ICBMMjguNjQ2LDMxLjUxeiBNNDkuODE4LDE3LjUzOWMwLjEwOSwwLjc4NywwLjE3LDEuNjI3LDAuMTcsMi41MzVjMCwyLjQ5Ny0wLjQ2OSw1LjMwNS0xLjg3NSw4LjgxOWwtNy41MiwyMS43NDIgIGM3LjMxOC00LjI2NiwxMi4yNC0xMi4xOTUsMTIuMjQtMjEuMjc5QzUyLjgzNCwyNS4wNzIsNTEuNzQsMjEuMDQ5LDQ5LjgxOCwxNy41Mzl6Ii8+PC9zdmc+",
      alt: "wordpress",
    },
  },
]);

const socials = ref([
  {
    id: 1,
    url: "https://www.linkedin.com/in/cameron-roberts-design/",
    icon: {
      src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNi45NCA1YTIgMiAwIDEgMS00LS4wMDIgMiAyIDAgMCAxIDQgLjAwMnpNNyA4LjQ4SDNWMjFoNFY4LjQ4em02LjMyIDBIOS4zNFYyMWgzLjk0di02LjU3YzAtMy42NiA0Ljc3LTQgNC43NyAwVjIxSDIydi03LjkzYzAtNi4xNy03LjA2LTUuOTQtOC43Mi0yLjkxbC4wNC0xLjY4eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==",
      alt: "linkedin",
    },
  },
  {
    id: 2,
    url: "https://github.com/koalabur",
    icon: {
      src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDt9Cl1dPjwvc3R5bGU+PGc+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI1NiwzMkMxMzIuMywzMiwzMiwxMzQuOCwzMiwyNjEuN2MwLDEwMS41LDY0LjIsMTg3LjUsMTUzLjIsMjE3LjljMTEuMiwyLjEsMTUuMy01LDE1LjMtMTEuMSAgIGMwLTUuNS0wLjItMTkuOS0wLjMtMzkuMWMtNjIuMywxMy45LTc1LjUtMzAuOC03NS41LTMwLjhjLTEwLjItMjYuNS0yNC45LTMzLjYtMjQuOS0zMy42Yy0yMC4zLTE0LjMsMS41LTE0LDEuNS0xNCAgIGMyMi41LDEuNiwzNC4zLDIzLjcsMzQuMywyMy43YzIwLDM1LjEsNTIuNCwyNSw2NS4yLDE5LjFjMi0xNC44LDcuOC0yNSwxNC4yLTMwLjdjLTQ5LjctNS44LTEwMi0yNS41LTEwMi0xMTMuNSAgIGMwLTI1LjEsOC43LTQ1LjYsMjMtNjEuNmMtMi4zLTUuOC0xMC0yOS4yLDIuMi02MC44YzAsMCwxOC44LTYuMiw2MS42LDIzLjVjMTcuOS01LjEsMzctNy42LDU2LjEtNy43YzE5LDAuMSwzOC4yLDIuNiw1Ni4xLDcuNyAgIGM0Mi44LTI5LjcsNjEuNS0yMy41LDYxLjUtMjMuNWMxMi4yLDMxLjYsNC41LDU1LDIuMiw2MC44YzE0LjMsMTYuMSwyMywzNi42LDIzLDYxLjZjMCw4OC4yLTUyLjQsMTA3LjYtMTAyLjMsMTEzLjMgICBjOCw3LjEsMTUuMiwyMS4xLDE1LjIsNDIuNWMwLDMwLjctMC4zLDU1LjUtMC4zLDYzYzAsNi4xLDQsMTMuMywxNS40LDExQzQxNS45LDQ0OS4xLDQ4MCwzNjMuMSw0ODAsMjYxLjcgICBDNDgwLDEzNC44LDM3OS43LDMyLDI1NiwzMnoiLz48L2c+PC9zdmc+",
      alt: "github",
    },
  },
]);

const sidebar = ref(true);

function sidebarClose() {
  sidebar.value = !sidebar.value;
}

const sidebarAnim = computed(() => {
  return sidebar.value
    ? "transition: all 0.75s ease-in-out; opacity: 1; visibility: visible;"
    : "transition: all 0.15s ease-in-out; opacity: 0; visibility: hidden;";
});

// Need to use computed property to watch changes
const isSiteReady = computed(() => {
  return coreStore.getIsSiteReady;
});

// Watch for getIsSiteReady to change state AND mobile
// hide sidebar after 1500ms
watch(
  () => coreStore.getIsSiteReady,
  () => {
    setTimeout(() => {
      window.innerWidth < 1024 && isSiteReady ? (sidebar.value = false) : null;
    }, 1500);
  }
);
</script>
<style lang="sass" scoped>
.sidebar
    display: flex
    flex-direction: column
    position: fixed
    height: 100%
    left: 0
    top: 0
    z-index: 11
    background: $faded-purple
    border-top-right-radius: 15px
    border-bottom-right-radius: 15px
    padding: 10px 5px
    transition: .25s ease-in-out
    max-height: 100%

    &--inactive
      max-height: #{fluid(55px, 65px)}
      margin-top: 2.6rem

    &__close
      width: #{fluid(35px, 45px)}
      height: #{fluid(35px, 45px)}
      margin-left: auto
      margin-right: auto
      cursor: pointer
      border: 1px solid transparent
      padding: 3px
      transition: .25s ease-in-out
      border-radius: 10px
      animation: pulse 10s alternate infinite

      @keyframes pulse
        0%
          border: 1px solid rgba(255,255,255,0)

        96%
          border: 1px solid rgba(255,255,255,0)

        100%
          border: 1px solid rgba(255,255,255,1)

      &:hover
        box-shadow: 0px 0px 20px rgba(255,255,255,.4)
        background: $purple

    &__title
      color: $purple
      background: $font-color
      font-family: $main-font
      font-size: $sidebar-text-size
      margin-top: #{fluid(20px, 30px)}
      margin-bottom: #{fluid(10px, 14px)}
      text-decoration: underline
      width: 100%
      text-align: center


    &__item
      width: auto
      display: flex
      flex-direction: column
      margin-bottom: #{fluid(5px, 16px)}

      &-link
        margin-bottom: 5px
        transition: 0.25s ease-in-out
        border-radius: 10px
        margin-left: auto
        margin-right: auto
        padding: #{fluid(6px, 10px)}

        &:hover
          box-shadow: 0px 0px 20px rgba(0,0,0,.4)

        &--github &-icon
          transition: 0s

        &--github:hover
          background: $github-grey

        &--github:hover &-icon
          filter: invert(100%) sepia(0%) saturate(3284%) hue-rotate(225deg) brightness(111%) contrast(92%)

        &--linkedin:hover
          background: $linkedin-grey

        &--linkedin:hover &-icon
          filter: invert(28%) sepia(91%) saturate(1322%) hue-rotate(175deg) brightness(97%) contrast(101%)

        &--react:hover
          background: $react-grey

        &--react:hover &-icon
          filter: invert(67%) sepia(82%) saturate(451%) hue-rotate(165deg) brightness(105%) contrast(97%)

        &--wordpress:hover
          background: $wordpress-grey

        &--wordpress:hover &-icon
          filter: invert(23%) sepia(57%) saturate(3360%) hue-rotate(176deg) brightness(101%) contrast(103%)

        &-icon
          filter: invert(98%) sepia(89%) saturate(5457%) hue-rotate(179deg) brightness(102%) contrast(90%)
          display: flex
          align-items: center
          text-align: center
          transition: 0.25s ease-in-out

      &-title
        font-family: $main-font
        color: $font-color
        width: 100%
        text-align: center
        font-size: $sidebar-text-size
</style>
