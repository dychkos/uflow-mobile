import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const getState = () => {
  return {
    // tasks: [
    //   {
    //     id: '1',
    //     action: 'Read',
    //     how_many: '120',
    //     unit: 'pages',
    //     days: [1, 2],
    //     reward: 1,
    //     done: false
    //   },
    //   {
    //     id: '2',
    //     action: 'Just dreaming',
    //     how_many: '1',
    //     unit: 'time',
    //     days: [6],
    //     reward: 1,
    //     done: false
    //   },
    //   {
    //     id: '3',
    //     action: 'Run',
    //     how_many: '5',
    //     unit: 'km',
    //     days: [4, 5, 6],
    //     reward: 2,
    //     done: false
    //   }
    // ],
    tasks: [],
    current: {
      action: '',
      how_many: '',
      unit: '',
      days: [],
      reward: 1,
      done: false
    }
  };
};

export const useTasks = create(
  devtools((set) => ({
    ...getState(),

    setUpTasks: (tasks) => set(() => ({ tasks })),
    setCurrent: (newTask) =>
      set(() => ({
        current: newTask
      })),
    addTask: () =>
      set((state) => ({
        tasks: [...state.tasks, { id: Date.now(), ...state.current }],
        current: getState().current
      })),
    updateTask: () =>
      set((state) => ({
        tasks: [
          ...state.tasks.map((task) => (task.id === state.current.id ? state.current : task))
        ],
        current: getState().current
      })),
    removeTask: (taskId) =>
      set((state) => ({
        tasks: [...state.tasks.filter((task) => task.id !== taskId)]
      })),
    toggleTaskStatus: (taskId) =>
      set((state) => ({
        tasks: [
          ...state.tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, done: !task.done };
            }
            return task;
          })
        ]
      }))
  }))
);
