import React, { useEffect } from 'react';
import { Button, Text } from '@ui-kitten/components';
import { TaskList } from '../components/Task/TaskList';
import { useTasks } from '../store/useTasks';
import BaseLayout from '../components/BaseLayout';
import { View } from 'react-native';
import { useAppHook } from '../hooks/useAppHook';
import { LoadingIndicator } from '../components/LoadingIndicator';

const DailyScreen = () => {
  const [needTasks, completedTasks, loading, error] = useTasks((state) => [
    state.tasks.filter((task) => !task.done),
    state.tasks.filter((task) => task.done),
    state.loading,
    state.error
  ]);

  const app = useAppHook();

  useEffect(() => {
    app.initDaily();
    //todo update task list when reopen
    console.log('reopen');
  }, []);

  return (
    <BaseLayout mode="dayli">
      {error ? <Text status="danger">{error}</Text> : ''}

      <Button onPress={app.initDaily}>Refresh</Button>

      {loading ? (
        <LoadingIndicator status={'info'} />
      ) : (
        <>
          <View>
            {needTasks.length > 0 && (
              <>
                <Text category="h4" style={{ textAlign: 'left' }}>
                  Необхідно зробити:
                </Text>

                <TaskList data={needTasks} />
              </>
            )}
          </View>

          <View>
            {completedTasks.length > 0 && (
              <>
                <Text category="h4" style={{ textAlign: 'left', marginTop: 20 }}>
                  Зроблено:
                </Text>
                <TaskList data={completedTasks} />
              </>
            )}
          </View>
        </>
      )}
    </BaseLayout>
  );
};

export default DailyScreen;
