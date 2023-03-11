import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
const { Navigator, Screen } = createBottomTabNavigator();
import FlowScreen from '../screens/flow';
import ProfileScreen from '../screens/profile';
import DailyScreen from '../screens/daily';

const BottomTab = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Daily" />
    <BottomNavigationTab title="Flow" />
    <BottomNavigationTab title="Profile" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTab {...props} />} screenOptions={{ headerShown: false }}>
    <Screen name="Daily" component={DailyScreen} />
    <Screen name="Flow" component={FlowScreen} />
    <Screen name="Profile" component={ProfileScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
