import { Button, Icon, ListItem, Text } from '@ui-kitten/components';
import React from 'react';
import { CompleteButton } from './CompleteButton';
import { Award } from './Award';
import { useTasks } from '../../store/store';

export const Task = ({ item }) => {
  const toggleComplete = useTasks((state) => state.toggleTaskStatus);
  item = item.item;

  return (
    <ListItem
      title={item.title}
      description={item.description}
      accessoryRight={() => (
        <CompleteButton done={item.done} onComplete={() => toggleComplete(item.id)} />
      )}
      accessoryLeft={() => <Award awardCount={item.awardCount} />}
    />
  );
};
