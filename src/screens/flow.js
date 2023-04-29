import { Text } from '@ui-kitten/components';
import BaseLayout from '../components/BaseLayout';
import { useTasksStore } from '../store/useTasksStore';
import { useAppHook } from '../hooks/useAppHook';
import React, { useEffect } from 'react';
import { TaskList } from '../components/Task/TaskList';
import { LoadingIndicator } from '../components/LoadingIndicator';

export default () => {
  const [tasks, error, loading] = useTasksStore((state) => [state.tasks, state.error, state.loading]);
  const app = useAppHook();

  useEffect(() => {
    app.initDaily();
  }, []);

  return (
    <BaseLayout mode={'flow'}>
      {error ? <Text status="danger">{error}</Text> : ''}
      {loading ? <LoadingIndicator status={'info'} /> : <TaskList data={tasks} isFlow={true} />}
    </BaseLayout>
  );
};
