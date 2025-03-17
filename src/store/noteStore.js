import { create } from "zustand";

const useNoteStore = create((set) => ({
  activeSection: null,
  selectedNote: null,
  setActiveSection: (sectionName) =>
    set((state) => ({
      // Optionally, clear the selected note when switching sections
      activeSection: state.activeSection === sectionName ? null : sectionName,
      selectedNote: null,
    })),
  setSelectedNote: (note) => set(() => ({ selectedNote: note })),
}));

export default useNoteStore;
