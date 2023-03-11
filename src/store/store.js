import { create } from 'zustand';

export const useTasks = create((set) => ({
  tasks: [
    {
      id: '1',
      title: 'Читати 5 сторінок',
      description: 'Кожен день',
      awardCount: 1,
      done: false
    },
    {
      id: '2',
      title: 'Пасти 1 раз коров',
      description: 'Раз на місяць',
      awardCount: 1,
      done: false
    },
    {
      id: '3',
      title: 'Біг 5 кілометрів',
      description: 'Кожну середу, четверг',
      awardCount: 2,
      done: true
    }
  ],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task]
    })),
  removeTaks: (taskId) =>
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
