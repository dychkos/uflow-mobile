import { View } from 'react-native';
import { Icon, Text } from '@ui-kitten/components';
import React from 'react';

export const Award = ({ reward }) => (
  <View style={{ flexDirection: 'row', marginRight: 12, marginLeft: 12 }}>
    <Text category="p2" style={{ marginRight: 3 }}>
      + {reward}
    </Text>
    <Icon style={{ width: 18, height: 18 }} fill="#000" name="smiling-face" />
  </View>
);
