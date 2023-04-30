import { UserApi } from '../api/UserApi';
import { useUser } from '../../store/useUser';
import { useFlow } from '../../store/useFlow';
import { useTasksStore } from '../../store/useTasksStore';

export const useAppHook = () => {
  const setUser = useUser((state) => state.setUser);

  const [currentFlow, setCurrentFlow] = useFlow((state) => [state.currentFlow, state.setCurrentFlow]);
  const uploadTasks = useTasksStore((state) => state.upload);

  async function initApp() {
    const user = await UserApi.getMe();
    setUser(user);
    if (user.chosenFlow) {
      setCurrentFlow(user.chosenFlow);
    }
  }

  async function loadTasks() {
    if (currentFlow) {
      await uploadTasks(currentFlow.id);
    }
  }

  return {
    initApp,
    loadTasks
  };
};
