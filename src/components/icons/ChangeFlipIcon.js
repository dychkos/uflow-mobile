import { Icon } from '@ui-kitten/components';
import React from 'react';

export const ChangeFlipIcon = (props) => (
  <Icon
    name="flip-2-outline"
    {...props}
    style={{ width: 12, height: 12, marginHorizontal: 'auto', ...(props.style && { ...props.style }) }}
    fill={'#000'}
  />
);
