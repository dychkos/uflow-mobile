import { Button, ListItem } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Award } from './Award';
import { EditIcon, TrashIcon } from '../icons';
import { useApp } from '../../store/useApp';
import { useTasks } from '../../store/useTasks';
import { Helper } from '../../services/Helper';

export const FlowTask = ({ item }) => {
  const [visible, toggleVisible] = useApp((state) => [state.addingTask, state.toggleAddingTask]);
  const [setTaskToEdit, removeTask] = useTasks((state) => [state.setCurrent, state.removeTask]);

  const task = item.item;

  const title = `${task.action} ${task.how_many} ${task.unit}`;
  const days = Helper.formatTaskDays(task.days);

  const onTaskEdit = () => {
    setTaskToEdit(task);
    toggleVisible();
  };

  const onTaskRemove = () => {
    removeTask(task.id);
  };

  return (
    <ListItem
      title={title}
      description={days.join(', ')}
      accessoryLeft={() => <Award reward={task.reward} />}
      accessoryRight={() => <TaskRightAccessory onEdit={onTaskEdit} onRemove={onTaskRemove} />}
    />
  );
};

export const TaskRightAccessory = ({ onEdit, onRemove }) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Button
        style={styles.button}
        onPress={onRemove}
        appearance="ghost"
        status="danger"
        accessoryLeft={TrashIcon}
      />
      <Button
        style={styles.button}
        appearance="ghost"
        onPress={onEdit}
        status="danger"
        accessoryLeft={EditIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24
  }
});
