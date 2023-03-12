import { ListItem } from '@ui-kitten/components';
import React from 'react';
import { CompleteButton } from './CompleteButton';
import { Award } from './Award';
import { useTasks } from '../../store/useTasks';
import { useUser } from '../../store/useUser';

export const Task = ({ item }) => {
  const toggleComplete = useTasks((state) => state.toggleTaskStatus);
  const [incrementDone, decrementDone] = useUser((state) => [
    state.incrementDone,
    state.decrementDone
  ]);
  const onComplete = () => {
    toggleComplete(item.id);
    if (item.done) {
      decrementDone();
    } else {
      incrementDone();
    }
  };
  item = item.item;

  return (
    <ListItem
      title={item.title}
      description={item.description}
      accessoryRight={() => <CompleteButton done={item.done} onComplete={onComplete} />}
      accessoryLeft={() => <Award awardCount={item.awardCount} />}
    />
  );
};
