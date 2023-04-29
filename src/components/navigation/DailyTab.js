import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DailyScreen from '../../screens/daily';
import TaskScreen from '../../screens/create-task';

const Stack = createStackNavigator();

// Main Stack Navigator
function DailyTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DailyScreen} />
      <Stack.Screen name="Create Task" component={TaskScreen} />
    </Stack.Navigator>
  );
}

export default DailyTab;
