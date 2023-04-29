import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from '@ui-kitten/components';
import { View } from 'react-native';
import { Task } from './Task';
import { FlowTask } from './FlowTask';

export const TaskList = ({ data, isFlow }) => {
  const TaskComponent = ({ item }) => (isFlow ? <FlowTask item={item} /> : <Task item={item} />);

  return (
    <View>
      <List
        style={[styles.container, isFlow && styles.bigContainer]}
        data={data}
        renderItem={(item) => <TaskComponent item={item} />}
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
