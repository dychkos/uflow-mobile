import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

const AppNavigator = ({ isAuth }) => (
  <NavigationContainer>{isAuth ? <TabNavigator /> : <AuthNavigator />}</NavigationContainer>
);

export default AppNavigator;
