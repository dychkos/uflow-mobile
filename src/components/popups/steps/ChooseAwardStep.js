import { Button, Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { CoinIcon, DecremIcon, IncremIcon } from '../../icons';
import { useTasks } from '../../../store/useTasks';
import { useTaskSteps } from '../../../hooks/useTaskSteps';
import { useTaskAction } from '../../../hooks/useTaskAction';
import { LoadingIndicator } from '../../LoadingIndicator';

export const ChooseAwardStep = ({ onNextClick }) => {
  const { task, setTask, handleSubmit } = useTaskSteps(onNextClick);
  const { loading, error } = useTaskAction();

  const allowDecrement = () => task.reward > 1;
  const allowIncrement = () => task.reward < 3;

  const decrement = () => {
    if (allowDecrement()) {
      setTask({ ...task, reward: task.reward - 1 });
    }
  };

  const increment = () => {
    if (allowIncrement()) {
      setTask({ ...task, reward: task.reward + 1 });
    }
  };

  return (
    <>
      <View>
        <CoinIcon style={styles.icon} fill="#000" />
        <View style={styles.container}>
          <DecremIcon
            fill={allowDecrement() ? '#000' : '#ababa0'}
            onPress={decrement}
            style={styles.actionIcon}
          />
          <Text category="h1"> {task.reward} </Text>
          <IncremIcon
            fill={allowIncrement() ? '#000' : '#ababa0'}
            onPress={increment}
            style={styles.actionIcon}
          />
        </View>
      </View>
      {error ? <Text status="danger">{error}</Text> : ''}

      <Button
        style={styles.button}
        onPress={handleSubmit}
        disabled={loading}
        accessoryLeft={() => (loading ? <LoadingIndicator /> : null)}>
        Submit
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 'auto'
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 16
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionIcon: {
    width: 30,
    height: 30
  }
});
