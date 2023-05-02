import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FlowScreen from '../../screens/flow';
import TaskScreen from '../../screens/edit-task';
import { Text } from '@ui-kitten/components';

const Stack = createStackNavigator();

// Main Stack Navigator
function FlowTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Flow Screen" component={FlowScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Edit Task"
        component={TaskScreen}
        options={{ headerTitle: (props) => <Text>Edit the task</Text> }}
      />
    </Stack.Navigator>
  );
}

export default FlowTab;
