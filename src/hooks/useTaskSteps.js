import { useTasks } from '../store/useTasks';
import React from 'react';

export const useTaskSteps = (onSubmit) => {
  const [currentTask, setCurrentTask] = useTasks((state) => [state.current, state.setCurrent]);
  const [task, setTask] = React.useState(currentTask);

  const defaultTask = {
    action: '',
    how_many: '0',
    unit: '',
    days: [],
    awardCount: 1
  };

  const handleSubmit = () => {
    setCurrentTask(task);
    setTask(defaultTask);

    onSubmit();
  };

  return {
    handleSubmit,
    task,
    setTask
  };
};
