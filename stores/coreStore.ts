import { defineStore } from "pinia";

export const useCoreStore = defineStore("core", {
  state: () => ({
    section: "",
    isSiteReady: false,
  }),
  actions: {
    setSection(section: any) {
      this.section = section;
    },
    setIsSiteReady() {
      this.isSiteReady = true;
    },
  },
  getters: {
    getSection(): string {
      return this.section;
    },
    getIsSiteReady(): boolean {
      return this.isSiteReady;
    },
  },
});

//! Actions Usage

//* Import pinia store (global state)
// import { useCoreStore } from "@/stores/coreStore";

//// Assign const
// const coreStore = useCoreStore();

//// coreStore.action
// coreStore.setSection();

//! Getters Usage

//* Import pinia store (global state)
// import { useCoreStore } from "@/stores/coreStore";

//// Assign const
// const coreStore = useCoreStore();

//// coreStore.getter
// coreStore.getSection();
