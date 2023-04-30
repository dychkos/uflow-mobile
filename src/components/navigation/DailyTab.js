import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DailyScreen from '../../screens/daily';
import TaskScreen from '../../screens/create-task';
import { Text } from '@ui-kitten/components';

const Stack = createStackNavigator();

// Main Stack Navigator
function DailyTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DailyScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Create Task"
        component={TaskScreen}
        options={{ headerTitle: (props) => <Text>Create a new task</Text> }}
      />
    </Stack.Navigator>
  );
}

export default DailyTab;
