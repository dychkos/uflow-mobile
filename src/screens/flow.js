import { Text } from '@ui-kitten/components';
import BaseLayout from '../components/BaseLayout';
import { useTasksStore } from '../store/useTasksStore';
import { useAppHook } from '../hooks/useAppHook';
import React, { useEffect } from 'react';
import { LoadingIndicator } from '../components/ui/LoadingIndicator';
import { TasksList } from '../components/task/TasksList';

export default () => {
  const [tasks, error, loading] = useTasksStore((state) => [state.tasks, state.error, state.loading]);
  const app = useAppHook();

  useEffect(() => {
    app.loadTasks();
  }, []);

  return (
    <BaseLayout mode={'flow'}>
      {error ? <Text status="danger">{error}</Text> : ''}
      {loading ? (
        <LoadingIndicator status={'info'} />
      ) : (
        <TasksList tasks={tasks} refreshTasks={app.loadTasks} isFlow={true} />
      )}
    </BaseLayout>
  );
};
