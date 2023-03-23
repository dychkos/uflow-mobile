import { Layout, Text } from '@ui-kitten/components';
import BaseLayout from '../components/BaseLayout';
import { TaskList } from '../components/Task/TaskList';
import { useTasks } from '../store/useTasks';

export default () => {
  const tasks = useTasks((state) => state.tasks);
  return (
    <BaseLayout mode={'flow'}>
      <Text>Flow</Text>
      <TaskList data={tasks} isFlow={true} />
    </BaseLayout>
  );
};
