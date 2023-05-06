import { ListItem } from '@ui-kitten/components';
import React from 'react';
import { CompleteButton } from './CompleteButton';
import { Award } from './Award';
// import { useTasks } from '../../store/useTasks';
import { useUser } from '../../store/useUser';
import { Helper } from '../../app/services/Helper';
import { useTasksWithFlow } from '../../app/hooks/useTasksWithFlow';

export const Task = ({ item }) => {
  const { editTask } = useTasksWithFlow();
  const [user, updateUser] = useUser((state) => [state.user, state.updateUser]);

  item = item.item;

  const onComplete = async () => {
    const reward = item.reward;
    if (item.done) {
      await updateUser({
        earnedCoins: user.earnedCoins - reward,
        globalCoins: user.globalCoins - reward,
        doneTasks: user.doneTasks - 1
      });
    } else {
      await updateUser({
        earnedCoins: user.earnedCoins + reward,
        globalCoins: user.globalCoins + reward,
        doneTasks: user.doneTasks + 1
      });
    }

    await editTask({ ...item, done: !item.done });
  };

  const title = `${item.action} ${item.how_many} ${item.unit}`;
  const days = Helper.formatTaskDays(item.days);

  return (
    <ListItem
      title={title}
      description={days.join(', ')}
      accessoryRight={() => <CompleteButton done={item.done} onComplete={onComplete} />}
      accessoryLeft={() => <Award reward={item.reward} />}
    />
  );
};
