import { Card, Text } from '@ui-kitten/components';

const ErrorMessage = ({ message }) => {
  return (
    <Card status="danger">
      <Text>{message}</Text>
    </Card>
  );
};

export default ErrorMessage;
