import { Input, Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';

export const InputField = ({
  value,
  onChangeText,
  placeholder,
  maxLength = 30,
  status = 'primary',
  keyboardType = 'default',
  error = null,
  style = [],
  secureTextEntry = false
}) => (
  <View style={style}>
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      maxLength={maxLength}
      keyboardType={keyboardType}
      status={error ? 'danger' : status}
      secureTextEntry={secureTextEntry}
    />
    {error && (
      <Text status="danger" category={'c2'}>
        {error}
      </Text>
    )}
  </View>
);
