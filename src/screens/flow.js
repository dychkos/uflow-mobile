import { Layout, Text } from '@ui-kitten/components';
import BaseLayout from '../components/BaseLayout';
import { TaskList } from '../components/Task/TaskList';
import { useTasks } from '../store/useTasks';
import { useAppHook } from '../hooks/useAppHook';
import React, { useEffect } from 'react';

export default () => {
  const tasks = useTasks((state) => state.tasks);
  const app = useAppHook();

  useEffect(() => {
    console.log('here 1111');
    app.initDaily();
  }, []);

  return (
    <BaseLayout mode={'flow'}>
      <Text>Flow</Text>
      <TaskList data={tasks} isFlow={true} />
    </BaseLayout>
  );
};
