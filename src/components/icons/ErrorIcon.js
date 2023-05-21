import { Icon } from '@ui-kitten/components';
import React from 'react';

export const ErrorIcon = (props) => (
  <Icon
    name="alert-triangle-outline"
    {...props}
    style={{ width: 12, height: 12, marginHorizontal: 'auto' }}
    fill={'#A52A2A'}
  />
);
