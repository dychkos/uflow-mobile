import { StyleSheet, View } from 'react-native';
import { Icon, Text } from '@ui-kitten/components';
import { ProgressBar } from './Progressbar';
import { globalStyles } from '../styles';
import React from 'react';

export const HeaderComponent = ({ flowName }) => (
  <View style={styles.container}>
    <View style={styles.box} />

    <View style={[styles.box, styles.main]}>
      <Text category="h4">{flowName}</Text>
      <ProgressBar percentage={29} />
    </View>

    <View style={[styles.box, styles.statistic]}>
      <View>
        <Text category={'h6'}>100</Text>
        <Text style={[globalStyles.colorPrimary, { textAlign: 'right' }]} category={'label'}>
          + 12
        </Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Icon style={{ width: 32, height: 32, marginLeft: 8 }} fill="#000" name="smiling-face" />
      </View>
    </View>
  </View>
);

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 5,
    paddingRight: 8,
    paddingLeft: 8,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box: {
    flex: 1,
    marginHorizontal: 10
  },
  main: {
    minWidth: 90,
    alignItems: 'center'
  },
  statistic: {
    flexDirection: 'row',
    justifyContent: 'end'
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
});
