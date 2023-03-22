import { create } from 'zustand';

const getState = () => {
  return {
    tasks: [
      {
        id: '1',
        action: 'Read',
        how_many: 120,
        unit: 'pages',
        days: ['Mn'],
        awardCount: 1,
        done: false
      },
      {
        id: '2',
        action: 'Just dreaming',
        how_many: 1,
        unit: 'time',
        days: ['Sa', 'Su'],
        awardCount: 1,
        done: false
      },
      {
        id: '3',
        action: 'Run',
        how_many: 5,
        unit: 'km',
        days: ['Fr'],
        awardCount: 2,
        done: false
      }
    ],
    current: {
      action: '',
      how_many: '',
      unit: '',
      days: [],
      awardCount: 1,
      done: false
    }
  };
};

export const useTasks = create((set) => ({
  ...getState(),

  setCurrent: (newTask) =>
    set(() => ({
      current: newTask
    })),
  addTask: () =>
    set((state) => ({
      tasks: [...state.tasks, state.current],
      current: getState().current
    })),
  removeTask: (taskId) =>
    set((state) => ({
      tasks: [...state.tasks.filter((task) => task.id === taskId)]
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
}));
