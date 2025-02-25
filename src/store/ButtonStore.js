import { create } from "zustand";

const useButtonStore = create((set) => ({
  // Track which section is currently active (null if none)
  activeSection: null,

  // Set a specific section as active, deactivating any other
  setActiveSection: (sectionName) =>
    set((state) => ({
      // If clicking the already active section, deactivate it
      // Otherwise, activate the new section
      activeSection: state.activeSection === sectionName ? null : sectionName,
    })),
}));

export default useButtonStore;
