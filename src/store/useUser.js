import { create } from 'zustand';

export const useUser = create((set) => ({
  doneTasks: 0,

  incrementDone: () => set((state) => ({ doneTasks: state.doneTasks + 1 })),
  decrementDone: () => set((state) => ({ doneTasks: state.doneTasks - 1 }))
}));
