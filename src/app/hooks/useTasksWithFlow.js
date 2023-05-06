import { useTasksStore } from '../../store/useTasksStore';
import { useFlow } from '../../store/useFlow';

export const useTasksWithFlow = () => {
  const { tasks, loading, error, create, edit, remove, upload } = useTasksStore((state) => ({ ...state }));
  const flow = useFlow((state) => state.currentFlow);

  const createTask = async (taskDto) => {
    if (!flow.id) return;

    return create(taskDto, flow.id);
  };

  const editTask = async (taskDto) => {
    if (!flow.id) return;

    return edit(taskDto, flow.id);
  };

  return {
    tasks,
    loading,
    error,

    createTask,
    editTask
  };
};
