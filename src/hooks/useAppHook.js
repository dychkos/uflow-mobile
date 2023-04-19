import { UserApi } from '../api/UserApi';
import { useUser } from '../store/useUser';
import { useFlow } from '../store/useFlow';
import { useTasks } from '../store/useTasks';
import { TaskApi } from '../api/TaskApi';

export const useAppHook = () => {
  const setUser = useUser((state) => state.setUser);
  const [currentFlow, setCurrentFlow] = useFlow((state) => [
    state.currentFlow,
    state.setCurrentFlow
  ]);
  const setUpTasks = useTasks((state) => state.setUpTasks);

  async function initApp() {
    const user = await UserApi.getMe();
    setUser(user);
    if (user.chosenFlow) {
      setCurrentFlow(user.chosenFlow);
    }
  }

  async function initDaily() {
    if (currentFlow) {
      const tasks = await TaskApi.getTasksByFlow({ flowId: currentFlow.id });
      console.log('tasks', tasks);
      setUpTasks(tasks);
    }
  }

  return {
    initApp,
    initDaily
  };
};
