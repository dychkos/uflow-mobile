import { Button, Input } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const InitialStep = ({ onNextClick }) => {
  return (
    <>
      <View style={styles.inputs}>
        <Input placeholder="What to do?" style={styles.inputItem} />
        <Input placeholder="How much?" style={styles.inputItem} />
        <Input placeholder="What thing?" style={styles.inputItem} />
      </View>
      <Button style={styles.button} onPress={onNextClick}>
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
