import React from 'react';
import { Button, ButtonGroup } from '@ui-kitten/components';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { useTaskSteps } from '../../../hooks/useTaskSteps';

export const HowOftenStep = ({ onNextClick }) => {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const { task, setTask, handleSubmit } = useTaskSteps(onNextClick);

  const onSelect = (day) => {
    if (!task.days.includes(day)) {
      setTask({ ...task, days: [...task.days, day] });
    } else {
      setTask({ ...task, days: task.days.filter((item) => item !== day) });
    }
  };

  return (
    <>
      <View style={styles.form}>
        <ButtonGroup size={'small'} appearance="outline" status="info">
          {days.map((day) => (
            <Button
              key={day}
              style={task.days.includes(day) && styles.buttonCheck}
              onPress={() => onSelect(day)}>
              {day}
            </Button>
          ))}
        </ButtonGroup>
      </View>
      <Button style={styles.button} onPress={handleSubmit}>
        Next
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: 16
  },
  buttonCheck: {
    backgroundColor: '#4343ff'
  }
});
