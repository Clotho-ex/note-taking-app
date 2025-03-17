import { create } from "zustand";

export const useMobileViewStore = create((set) => ({
  view: "home", // Possible values: "home", "search", "archive", "tags", "settings"
  setView: (newView) => set({ view: newView }),
}));
