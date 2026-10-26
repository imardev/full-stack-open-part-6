import { create } from "zustand";

const useStatisticsStore = create((set) => ({
  good: 0,
  neutral: 0,
  bad: 0,
  actions: {
    addGood: () =>
      set((state) => ({
        good: state.good + 1,
      })),
    addNeutral: () =>
      set((state) => ({
        neutral: state.neutral + 1,
      })),
    addBad: () =>
      set((state) => ({
        bad: state.bad + 1,
      })),

  },
}));

export const useGood = () => useStatisticsStore((state) => state.good);
export const useNeutral = () => useStatisticsStore((state) => state.neutral);
export const useBad = () => useStatisticsStore((state) => state.bad);
export const useControls = () => useStatisticsStore((state) => state.actions);
