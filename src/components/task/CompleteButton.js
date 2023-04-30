import { Button, Icon } from '@ui-kitten/components';
import React from 'react';

export const CompleteButton = ({ done, onComplete }) => (
  <Button size="tiny" onPress={onComplete} status={done ? 'warning' : 'success'}>
    {done ? 'Incomplete' : 'Complete'}
  </Button>
);
