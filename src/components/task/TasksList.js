import React, { useState } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import { List } from '@ui-kitten/components';
import { View } from 'react-native';
import { Task } from './Task';
import { FlowTask } from './FlowTask';
import { useFlow } from '../../store/useFlow';

export const TasksList = ({ tasks, refreshTasks, isFlow = false }) => {
  const [refreshing, setRefreshing] = useState(false);
  const currentFlow = useFlow((state) => state.currentFlow);

  const TaskComponent = ({ item, flow }) =>
    isFlow ? <FlowTask item={item} flow={flow} /> : <Task item={item} />;

  const onRefresh = async () => {
    setRefreshing(true);
    await refreshTasks();
    setRefreshing(false);
  };

  return (
    <View>
      <List
        data={tasks}
        renderItem={(item) => <TaskComponent item={item} flow={currentFlow} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 300
  },
  bigContainer: {
    maxHeight: '100%'
  }
});
