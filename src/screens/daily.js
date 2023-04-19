import React, { useEffect } from 'react';
import { Text } from '@ui-kitten/components';
import { TaskList } from '../components/Task/TaskList';
import { useTasks } from '../store/useTasks';
import BaseLayout from '../components/BaseLayout';
import { View } from 'react-native';
import { useAppHook } from '../hooks/useAppHook';

const DailyScreen = () => {
  const completedTasks = useTasks((state) => state.tasks.filter((task) => task.done));
  const needTasks = useTasks((state) => state.tasks.filter((task) => !task.done));

  const app = useAppHook();

  useEffect(() => {
    console.log('here 1111');
    app.initDaily();
  }, []);

  return (
    <BaseLayout mode="dayli">
      {needTasks.length > 0 && (
        <View>
          <Text category="h4" style={{ textAlign: 'left' }}>
            Необхідно зробити:
          </Text>

          <TaskList data={needTasks} />
        </View>
      )}

      {completedTasks.length > 0 && (
        <View>
          <Text category="h4" style={{ textAlign: 'left', marginTop: 20 }}>
            Зроблено:
          </Text>

          <TaskList data={completedTasks} />
        </View>
      )}
    </BaseLayout>
  );
};

export default DailyScreen;
