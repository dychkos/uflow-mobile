import { create } from 'zustand';
import { UserApi } from '../app/api/UserApi';
import { FlowApi } from '../app/api/FlowApi';
import { useTasksStore } from './useTasksStore';

const refreshTasks = useTasksStore.getState().upload;

export const useFlow = create((set) => ({
  currentFlow: null,
  loading: false,
  error: null,

  list: [],

  fetchFlowList: async () => {
    set({ loading: true });
    try {
      const flows = await FlowApi.getAll();
      set({ list: flows });
    } catch (e) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  createFlow: async (flowDto) => {
    set({ loading: true });
    try {
      const flow = await FlowApi.create(flowDto);
      if (flow.chosen) {
        set({ currentFlow: flow });
      }
      set((state) => ({ list: [...state.list, flow] }));
    } catch (e) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  updateFlow: async (flowDto) => {
    set({ loading: true });
    try {
      console.log('tosend', flowDto);

      const flow = await FlowApi.update(flowDto);
      console.log('from apu', flow);
      if (flow.chosen) {
        set({ currentFlow: flow });
        await refreshTasks(flow.id);
      }
      set((state) => ({
        list: state.list.map((flowItem) => (flowItem.id === flowDto.id ? flowDto : flowItem))
      }));
    } catch (e) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  setCurrentFlow: (currentFlow) =>
    set(() => ({
      currentFlow
    })),

  setFlowList: (flowList) =>
    set(() => ({
      list: flowList
    }))
}));
