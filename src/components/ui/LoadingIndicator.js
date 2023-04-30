import { Spinner } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';

export const LoadingIndicator = (props) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size="small" status={props.status ? props.status : 'control'} />
  </View>
);

const styles = StyleSheet.create({
  indicator: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
