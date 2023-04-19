import { create } from 'zustand';

export const useFlow = create((set) => ({
  currentFlow: null,

  list: [],

  setCurrentFlow: (currentFlow) =>
    set(() => ({
      currentFlow
    })),

  setFlowList: (flowList) =>
    set(() => ({
      list: flowList
    }))
}));
