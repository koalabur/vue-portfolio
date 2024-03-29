import { defineStore } from "pinia";

export const useCoreStore = defineStore("core", {
  state: () => ({
    section: "",
    isModalOpen: false,
  }),
  actions: {
    setSection(section: any) {
      this.section = section;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    openModal() {
      this.isModalOpen = true;
    },
  },
  getters: {
    getSection(): string {
      return this.section;
    },
    getModalState(): boolean {
      return this.isModalOpen;
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
