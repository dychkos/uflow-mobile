import { UserApi } from '../api/UserApi';
import { useUser } from '../../store/useUser';
import { useFlow } from '../../store/useFlow';
import { useTasksStore } from '../../store/useTasksStore';
import { useApp } from '../../store/useApp';

export const useAppHook = () => {
  const showAddingFlowPopup = useApp((state) => state.toggleAddingFlow);

  const [fetchUser, user] = useUser((state) => [state.fetchUser, state.user]);

  const [currentFlow, setCurrentFlow] = useFlow((state) => [state.currentFlow, state.setCurrentFlow]);
  const [uploadTasks, cleanTasks] = useTasksStore((state) => [state.upload, state.clean]);

  async function initApp() {
    cleanTasks();
    await fetchUser();
    if (user.chosenFlow) {
      setCurrentFlow(user.chosenFlow);
    } else {
      setCurrentFlow(null);
      showAddingFlowPopup();
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
