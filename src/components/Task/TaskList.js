import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from '@ui-kitten/components';
import { View } from 'react-native';
import { Task } from './Task';

export const TaskList = ({ data }) => (
  <View>
    <List style={styles.container} data={data} renderItem={(item) => <Task item={item} />} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    maxHeight: 300
  }
});
