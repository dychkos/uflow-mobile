import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TaskApi } from '../api/TaskApi';
import { useFlow } from './useFlow';

const getState = () => {
  return {
    tasks: [],
    loading: true,
    error: null,

    current: {
      action: '',
      how_many: 0,
      unit: '',
      days: [],
      reward: 1,
      done: false
    }
  };
};

export const useTasks = create((set, get) => ({
  ...getState(),

  flow: useFlow.getState().currentFlow,

  setUpTasks: async (flowId) => {
    try {
      set({ loading: true });
      const tasks = await TaskApi.getTasksByFlow({ flowId });
      set({ tasks });
      set({ error: null });
    } catch (e) {
      console.log(e);
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  setCurrent: (newTask) => {
    set(() => ({
      current: newTask
    }));
  },

  addTask: () => {
    set((state) => {
      return {
        tasks: [...state.tasks, state.current],
        current: getState().current
      };
    });
  },

  updateTask: () => {
    set((state) => ({
      tasks: [...state.tasks.map((task) => (task.id === state.current.id ? state.current : task))],
      current: getState().current
    }));
  },

  removeTask: (taskId) => {
    set((state) => ({
      tasks: [...state.tasks.filter((task) => task.id !== taskId)]
    }));
  },

  toggleTaskStatus: (taskId) => {
    set((state) => ({
      tasks: [
        ...state.tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, done: !task.done };
          }
          return task;
        })
      ]
    }));
  }
}));
