import { Card, Text } from '@ui-kitten/components';
import { ErrorIcon } from '../icons/ErrorIcon';
import { StyleSheet, View } from 'react-native';

const ErrorMessage = ({ message }) => {
  return (
    <Card status="danger" tyle={styles.card}>
      <ErrorIcon />
      <Text style={styles.text}>{message}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row'
  },
  text: {
    color: '#A52A2A'
  }
});

export default ErrorMessage;
