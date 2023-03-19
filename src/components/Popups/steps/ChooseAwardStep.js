import { Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { CoinIcon, DecremIcon, IncremIcon } from '../../icons';

export const ChooseAwardStep = ({ onNextClick }) => {
  const [award, setAward] = React.useState(1);

  const allowDecrement = () => award > 1;
  const allowIncrement = () => award < 3;

  const decrement = () => {
    if (allowDecrement()) {
      setAward(award - 1);
    }
  };

  const increment = () => {
    if (allowIncrement()) {
      setAward(award + 1);
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
          <Text category="h1"> {award} </Text>
          <IncremIcon
            fill={allowIncrement() ? '#000' : '#ababa0'}
            onPress={increment}
            style={styles.actionIcon}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 16
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
