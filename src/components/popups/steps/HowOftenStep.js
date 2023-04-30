import React from 'react';
import { Button, ButtonGroup } from '@ui-kitten/components';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { useTaskSteps } from '../../../app/hooks/useTaskSteps';
import { Helper } from '../../../app/services/Helper';

export const HowOftenStep = ({ onNextClick }) => {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const { task, setTask, handleSubmit } = useTaskSteps(onNextClick);

  const isIncluded = (day) => {
    day = dayToIndex(day);
    return task.days.includes(day);
  };

  const dayToIndex = (dayText) => {
    return days.indexOf(dayText) + 1;
  };

  const onSelect = (day) => {
    //'TH'
    day = dayToIndex(day);
    console.log('dayToIndex', day);
    // 1
    if (!task.days.includes(day)) {
      console.log('d', day);
      setTask({ ...task, days: [...task.days, day] });
    } else {
      setTask({ ...task, days: task.days.filter((item) => item !== day) });
    }
    console.log(task);
  };

  return (
    <>
      <View style={styles.form}>
        <ButtonGroup size={'small'} appearance="outline" status="info">
          {days.map((day) => (
            <Button key={day} style={isIncluded(day) && styles.buttonCheck} onPress={() => onSelect(day)}>
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
