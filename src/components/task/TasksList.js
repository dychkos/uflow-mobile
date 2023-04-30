import React, { useState } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import { List } from '@ui-kitten/components';
import { View } from 'react-native';
import { Task } from './Task';
import { FlowTask } from './FlowTask';

export const TasksList = ({ tasks, refreshTasks, isFlow = false }) => {
  const [refreshing, setRefreshing] = useState(false);

  const TaskComponent = ({ item }) => (isFlow ? <FlowTask item={item} /> : <Task item={item} />);

  const onRefresh = async () => {
    setRefreshing(true);
    await refreshTasks();
    setRefreshing(false);
  };

  return (
    <View>
      <List
        data={tasks}
        renderItem={(item) => <TaskComponent item={item} />}
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
