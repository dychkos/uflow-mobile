import { create } from 'zustand';

export const useApp = create((set) => ({
  loading: false,
  addingTask: false,
  addingFlow: false,
  changingFlow: false,

  toggleAddingTask: () => set((state) => ({ addingTask: !state.addingTask })),
  toggleAddingFlow: () => set((state) => ({ addingFlow: !state.addingFlow })),
  toggleChangingFlow: () => set((state) => ({ changingFlow: !state.changingFlow }))
}));
