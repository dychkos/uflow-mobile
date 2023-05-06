import { StyleSheet, View } from 'react-native';
import { Icon, Text } from '@ui-kitten/components';
import { ProgressBar } from './ui/Progressbar';
import { globalStyles } from '../styles';
import React from 'react';
import { useUser } from '../store/useUser';
import { useTasksStore } from '../store/useTasksStore';
import { Helper } from '../app/services/Helper';
import { useCallback } from 'react/index';

export const HeaderComponent = ({ flowName, hideProgress }) => {
  const tasks = useTasksStore((state) => state.tasks);
  const user = useUser((state) => state.user);
  const { doneTasks, globalCoins, earnedCoins } = user;

  const filtered = Helper.filterTaskByCurrentDay(tasks);

  const calcDonePercentage = useCallback(() => (doneTasks / filtered.length) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.box} />

      <View style={[styles.box, styles.main]}>
        <Text category="h4">{flowName}</Text>
        {!hideProgress && <ProgressBar percentage={calcDonePercentage()} />}
      </View>

      <View style={[styles.box, styles.statistic]}>
        <View style={{ alignSelf: 'center' }}>
          <Text category={'h6'}>{globalCoins}</Text>
          {earnedCoins > 0 && (
            <Text style={[globalStyles.colorPrimary, { textAlign: 'right' }]} category={'label'}>
              + {earnedCoins}
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
    alignItems: 'center',
    height: 80
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
