import { Button, Input } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTaskSteps } from '../../../hooks/useTaskSteps';

export const InitialStep = ({ onNextClick }) => {
  const { setTask, task, handleSubmit } = useTaskSteps(onNextClick);

  const handleInputChange = (inputName, inputValue) => {
    setTask({ ...task, [inputName]: inputValue });
  };

  return (
    <>
      <View style={styles.inputs}>
        <Input
          placeholder="What to do?"
          style={styles.inputItem}
          value={task.action}
          onChangeText={(text) => handleInputChange('action', text)}
        />
        <Input
          placeholder="How much?"
          style={styles.inputItem}
          value={task.how_many}
          onChangeText={(text) => handleInputChange('how_many', text)}
        />
        <Input
          placeholder="What thing?"
          style={styles.inputItem}
          value={task.unit}
          onChangeText={(text) => handleInputChange('unit', text)}
        />
      </View>
      <Button style={styles.button} onPress={handleSubmit}>
        Next
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 16
  },
  inputs: {
    display: 'flex'
  },
  inputItem: {
    marginVertical: 5
  }
});
