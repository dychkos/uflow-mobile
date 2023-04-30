import { Button, ListItem } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Award } from './Award';
import { EditIcon, TrashIcon } from '../icons';
import { Helper } from '../../app/services/Helper';
import { useTasksStore } from '../../store/useTasksStore';

export const FlowTask = ({ item, flow }) => {
  // const setTaskToEdit = useTasks((state) => [state.setCurrent, state.removeTask]);
  const [loading, remove] = useTasksStore((state) => [state.loading, state.remove]);

  const task = item.item;
  console.log(flow);

  const title = `${task.action} ${task.how_many} ${task.unit}`;
  const days = Helper.formatTaskDays(task.days);

  const onTaskEdit = () => {
    // setTaskToEdit(task);
    // toggleVisible();
  };

  const onTaskRemove = async () => {
    if (flow.id) {
      await remove(task, flow.id);
    }
    // await remove(task);
  };

  return (
    <ListItem
      title={title}
      description={days.join(', ')}
      accessoryLeft={() => <Award reward={task.reward} />}
      accessoryRight={() => (
        <TaskRightAccessory onEdit={onTaskEdit} onRemove={onTaskRemove} disabled={loading} />
      )}
    />
  );
};

export const TaskRightAccessory = ({ onEdit, onRemove, disabled }) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Button
        style={styles.button}
        onPress={onRemove}
        appearance="ghost"
        status="danger"
        accessoryLeft={TrashIcon}
        disabled={disabled}
      />
      <Button
        style={styles.button}
        appearance="ghost"
        onPress={onEdit}
        status="danger"
        accessoryLeft={EditIcon}
        disabled={disabled}
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
