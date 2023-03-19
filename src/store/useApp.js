import { create } from 'zustand';

export const useApp = create((set) => ({
  loading: false,
  addingTask: false,
  addingFlow: false,

  toggleAddingTask: () => set((state) => ({ addingTask: !state.addingTask })),
  toggleAddingFlow: () => set((state) => ({ addingFlow: !state.addingFlow }))
}));
