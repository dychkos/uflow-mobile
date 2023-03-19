import React from 'react';
import { Button, ButtonGroup } from '@ui-kitten/components';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

export const HowOftenStep = ({ onNextClick }) => {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const [selected, setSelected] = React.useState([]);

  const onSelect = (day) => {
    if (!selected.includes(day)) {
      setSelected([...selected, day]);
    } else {
      setSelected(selected.filter((item) => item !== day));
    }
    console.log(day);
  };

  return (
    <>
      <View style={styles.form}>
        <ButtonGroup size={'small'} appearance="outline" status="info">
          {days.map((day) => (
            <Button
              key={day}
              style={selected.includes(day) && styles.buttonCheck}
              onPress={() => onSelect(day)}>
              {day}
            </Button>
          ))}
        </ButtonGroup>
      </View>
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
    backgroundColor: '#424f69'
  }
});
