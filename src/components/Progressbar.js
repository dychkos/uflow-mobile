import { StyleSheet, View } from 'react-native';

export const ProgressBar = ({ percentage }) => {
  return (
    <View style={styles.progress}>
      <Filler percentage={percentage} />
    </View>
  );
};

const Filler = ({ percentage }) => {
  return <View style={[styles.filler, { width: `${percentage}%` }]} />;
};

const styles = StyleSheet.create({
  progress: {
    position: 'relative',
    marginTop: 8,
    height: 14,
    width: '100%',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#333'
  },
  filler: {
    position: 'absolute',
    backgroundColor: '#1DA598',
    borderRadius: 50,
    width: 100,
    height: '100%',
    transitionProperty: 'width',
    transitionDuration: '.2s'
  }
});

// .progress-bar {
//   position: relative;
//   height: 20px;
//   width: 350px;
//   border-radius: 50px;
//   border: 1px solid #333;
// }
//
// .filler {
//   background: #1DA598;
//   height: 100%;
//   border-radius: inherit;
//   transition: width .2s ease-in;
// }
