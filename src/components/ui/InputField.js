import { Input, Text } from '@ui-kitten/components';
import React from 'react';

export const InputField = ({
  value,
  onChangeText,
  placeholder,
  maxLength = 30,
  status = 'primary',
  keyboardType = 'default',
  error = null,
  style = []
}) => (
  <>
    <Input
      placeholder={placeholder}
      style={style}
      value={value}
      onChangeText={onChangeText}
      maxLength={maxLength}
      keyboardType={keyboardType}
      status={error ? 'danger' : status}
    />
    {error && (
      <Text status="danger" category={'c2'}>
        {error}
      </Text>
    )}
  </>
);
