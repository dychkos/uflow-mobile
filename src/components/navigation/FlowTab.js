import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FlowScreen from '../../screens/flow';
import TaskScreen from '../../screens/edit-task';

const Stack = createStackNavigator();

// Main Stack Navigator
function FlowTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Flow Screen" component={FlowScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Edit Task" component={TaskScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default FlowTab;
