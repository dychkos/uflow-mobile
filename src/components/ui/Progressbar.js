import { StyleSheet, View, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

export const ProgressBar = ({ percentage }) => {
  return (
    <View style={styles.progress}>
      <Filler percentage={percentage} />
    </View>
  );
};

const Filler = ({ percentage }) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the width based on the percentage value
    Animated.timing(animatedWidth, {
      toValue: percentage,
      duration: 500,
      useNativeDriver: false
    }).start();
  }, [percentage]);

  const animWidth = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  });

  return (
    <Animated.View
      style={[
        styles.filler,
        {
          width: animWidth
        }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  progress: {
    position: 'relative',
    marginTop: 8,
    height: 10,
    width: '100%',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#333'
  },
  filler: {
    position: 'absolute',
    backgroundColor: 'rgb(33,13,8)',
    borderRadius: 50,
    height: '100%'
  }
});
