import React, { useEffect } from 'react';
import { Text } from '@ui-kitten/components';
import { useTasksStore } from '../store/useTasksStore';
import BaseLayout from '../components/BaseLayout';
import { View } from 'react-native';
import { useAppHook } from '../hooks/useAppHook';
import { LoadingIndicator } from '../components/ui/LoadingIndicator';
import { TasksList } from '../components/task/TasksList';

const DailyScreen = () => {
  const [tasks, loading, error] = useTasksStore((state) => [state.tasks, state.loading, state.error]);

  const app = useAppHook();

  useEffect(() => {
    app.loadTasks();
  }, []);

  return (
    <BaseLayout mode="dayli">
      {error ? <Text status="danger">{error}</Text> : ''}

      {loading ? (
        <LoadingIndicator status={'info'} />
      ) : (
        <View>
          <Text category="h4" style={{ textAlign: 'left' }}>
            Необхідно зробити:
          </Text>

          <TasksList tasks={tasks} refreshTasks={app.loadTasks} />
        </View>
      )}
    </BaseLayout>
  );
};

export default DailyScreen;
