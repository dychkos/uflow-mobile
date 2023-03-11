import React from 'react';
import { Text } from '@ui-kitten/components';
import { TaskList } from '../components/Task/TaskList';
import { useTasks } from '../store/store';
import BaseLayout from '../components/BaseLayout';

const DailyScreen = () => {
  const completedTasks = useTasks((state) => state.tasks.filter((task) => task.done));
  const needTasks = useTasks((state) => state.tasks.filter((task) => !task.done));

  return (
    <BaseLayout>
      <Text category="h3" style={{ textAlign: 'left' }}>
        Need to do:
      </Text>

      <TaskList data={needTasks} />

      <Text category="h3" style={{ textAlign: 'left', marginTop: 20 }}>
        Done for today:
      </Text>

      <TaskList data={completedTasks} />

      <Text appearance="hint" style={{ textAlign: 'center', marginTop: 20 }}>
        Powered by UnReal GO
      </Text>
    </BaseLayout>
  );
};

DailyScreen.navigationOptions = {
  headerShown: false
};

export default DailyScreen;
