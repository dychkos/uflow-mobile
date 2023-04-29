import { useState } from 'react';
import { TaskApi } from '../api/TaskApi';
import { useFlow } from '../store/useFlow';
import { useTasks } from '../store/useTasks';

export const useTaskAction = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const currentFlow = useFlow((state) => state.currentFlow);

  const [currentTask, addTask, updateTask, removeTask] = useTasks((state) => [
    state.current,
    state.addTask,
    state.updateTask,
    state.removeTask
  ]);

  async function create() {
    try {
      setLoading(true);
      console.log({
        flowId: currentFlow.id,
        taskDto: { ...currentTask, how_many: +currentTask.how_many }
      });
      await TaskApi.create({
        flowId: currentFlow.id,
        taskDto: { ...currentTask, how_many: +currentTask.how_many }
      });
      addTask();
    } catch (e) {
      setError(e.message);
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function update() {
    try {
      setLoading(true);
      console.log('suka');
      await TaskApi.update({
        flowId: currentFlow.id,
        taskDto: { ...currentTask, how_many: +currentTask.how_many }
      });
      updateTask();
    } catch (e) {
      setError(e.message);
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function remove(taskDto) {
    try {
      setLoading(true);
      await TaskApi.delete({ flowId: currentFlow.id, taskId: taskDto.id });
      removeTask(taskDto.id);
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function toggleDone(taskDto) {
    await update({ ...taskDto, done: !taskDto.done });
  }

  return {
    create,
    update,
    remove,
    toggleDone,

    loading,
    error
  };
};
