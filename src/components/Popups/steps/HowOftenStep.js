import { Button } from '@ui-kitten/components';
import { NextIcon } from '../../icons';
import React from 'react';
import { StyleSheet } from 'react-native';

export const HowOftenStep = ({ onNextClick }) => {
  return (
    <>
      <Button style={styles.button} onPress={onNextClick}>
        Next
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 16
  }
});
