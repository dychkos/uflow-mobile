import { Button } from '@ui-kitten/components';
import { LoadingIndicator } from '../LoadingIndicator';
import React from 'react';

export const LoadingButton = ({ loading, onPress, children, style = [] }) => (
  <Button
    onPress={onPress}
    style={style}
    accessoryLeft={() => (loading ? <LoadingIndicator /> : null)}
    disabled={loading}>
    {children}
  </Button>
);
