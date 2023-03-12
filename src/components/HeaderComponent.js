import { StyleSheet, View } from 'react-native';
import { Icon, Text } from '@ui-kitten/components';
import { ProgressBar } from './Progressbar';
import { globalStyles } from '../styles';
import React from 'react';
import { useUser } from '../store/useUser';
import { useTasks } from '../store/useTasks';

export const HeaderComponent = ({ flowName }) => {
  const doneTasks = useUser((state) => state.doneTasks);
  const tasksCount = useTasks((state) => state.tasks.length);

  const calcDonePercentage = () => (doneTasks / tasksCount) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.box} />

      <View style={[styles.box, styles.main]}>
        <Text category="h4">{flowName}</Text>
        <ProgressBar percentage={calcDonePercentage()} />
      </View>

      <View style={[styles.box, styles.statistic]}>
        <View style={{ alignSelf: 'center' }}>
          <Text category={'h6'}>{6000 + doneTasks}</Text>
          {doneTasks > 0 && (
            <Text style={[globalStyles.colorPrimary, { textAlign: 'right' }]} category={'label'}>
              + {doneTasks}
            </Text>
          )}
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Icon style={{ width: 32, height: 32, marginLeft: 5 }} fill="#000" name="smiling-face" />
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 5,
    paddingRight: 2,
    paddingLeft: 2,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box: {
    flex: 1
  },
  main: {
    minWidth: 90,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  statistic: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
});
