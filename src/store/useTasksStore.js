import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';
import { TaskApi } from '../app/api/TaskApi';

export const useTasksStore = create((set, get) => {
  return {
    //
    tasks: [],
    error: null,
    loading: true, //todo: think maybe do true by default

    upload: async function (flowId) {
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

    create: async function (taskDto, flowId) {
      try {
        set({ loading: true });

        const created = await TaskApi.create({ flowId, taskDto });

        set((state) => {
          return { tasks: [...state.tasks, created] };
        });
        set({ error: null });
      } catch (e) {
        console.log(e);
        set({ error: e.message });
      } finally {
        set({ loading: false });
      }
    },

    edit: async function (taskDto, flowId) {
      try {
        set({ loading: true });

        const updated = await TaskApi.update({ flowId, taskDto });

        set((state) => ({
          tasks: [...state.tasks.map((task) => (task.id === updated.id ? updated : task))]
        }));
        set({ error: null });
      } catch (e) {
        set({ error: e.message });
      } finally {
        set({ loading: false });
      }
    },

    remove: async function (taskDto, flowId) {
      try {
        set({ loading: true });

        await TaskApi.delete({ flowId, taskId: taskDto.id });

        set((state) => ({
          tasks: [...state.tasks.filter((task) => task.id !== taskDto.id)]
        }));
        set({ error: null });
      } catch (e) {
        set({ error: e.message });
      } finally {
        set({ loading: false });
      }
    }
  };
});

// toggleTaskStatus: (taskId) => {
//   set((state) => ({
//     tasks: [
//       ...state.tasks.map((task) => {
//         if (task.id === taskId) {
//           return { ...task, done: !task.done };
//         }
//         return task;
//       })
//     ]
//   }));
// }
