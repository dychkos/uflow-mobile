import { create } from 'zustand';

export const useUser = create((set) => ({
  doneTasks: 0,
  globalCoins: 45,
  earnedCoins: 0,

  incrementDone: () => set((state) => ({ doneTasks: state.doneTasks + 1 })),
  decrementDone: () => set((state) => ({ doneTasks: state.doneTasks - 1 })),

  setEarnedCoins: (coins, increment = true) =>
    set((state) => ({
      earnedCoins: increment ? state.earnedCoins + coins : state.earnedCoins - coins,
      globalCoins: increment ? state.globalCoins + coins : state.globalCoins - coins
    }))
}));
