import { ListItem } from '@ui-kitten/components';
import React from 'react';
import { CompleteButton } from './CompleteButton';
import { Award } from './Award';
// import { useTasks } from '../../store/useTasks';
// import { useUser } from '../../store/useUser';
import { Helper } from '../../services/Helper';

export const Task = ({ item }) => {
  // const toggleComplete = useTasks((state) => state.toggleTaskStatus);
  // const [incrementDone, decrementDone, setEarnedCoins] = useUser((state) => [
  //   state.incrementDone,
  //   state.decrementDone,
  //   state.setEarnedCoins
  // ]);
  item = item.item;

  const onComplete = () => {
    // toggleComplete(item.id);
    // if (item.done) {
    //   decrementDone();
    //   setEarnedCoins(item.reward, false);
    // } else {
    //   incrementDone();
    //   setEarnedCoins(item.reward);
    // }
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
