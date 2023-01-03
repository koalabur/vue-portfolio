export default function useInterObs(
  elementRef: any,
  updateGlobalState: any,
  threshold: number = 0
) {
  // Create observer
  const observer = new IntersectionObserver(
    (entries) => {
      // Give me ALL entries in observer
      entries.forEach((entry) => {
        // Timeout to prevent flickering when state updates
        setTimeout(() => {
          updateGlobalState(entry.isIntersecting ? elementRef.value.id : "");
        }, 350);
      });
    },
    {
      //* Needs to be handled by each component to handle
      //* sections not registering properly
      // 0 (0%) - 1 (100%) of element that needs to be in view before
      // observer.observe is triggered
      threshold,
    }
  );

  // Init observer
  // @ts-ignore
  observer.observe(elementRef.value);
}

// Usage

//* Import pinia store (global state)
// import { useCoreStore } from "@/stores/coreStore";

// Assign const to global state
// const coreStore = useCoreStore();

// Ref the element
// ref={example} on element
// const example = ref(null);

// Intersection Observer needs to be init onMounted
//! Cannot onMounted in composable. Causes errors.
// onMounted(() => {
//   useIntersectionObs(portfolio, coreStore.setSection, 0.5);
// });
