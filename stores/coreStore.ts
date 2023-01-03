import { defineStore } from "pinia";

export const useCoreStore = defineStore("core", {
  state: () => ({
    section: "",
  }),
  actions: {
    setSection(section: any) {
      this.section = section;
    },
  },
  getters: {
    getSection(): string {
      return this.section;
    },
  },
});

// Actions Usage

//* Import pinia store (global state)
// import { useCoreStore } from "@/stores/coreStore";

// Assign const
// const coreStore = useCoreStore();

// coreStore.action
// coreStore.setSection();

// Getters Usage

//* Import pinia store (global state)
// import { useCoreStore } from "@/stores/coreStore";

// Assign const
// const coreStore = useCoreStore();

// coreStore.getter
// coreStore.getSection();