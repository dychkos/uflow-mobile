import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { AppNavigator } from './src/components/AppNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useUser } from './src/store/useUser';
import { AuthService } from './src/api/AuthService';

export default function App() {
  const [isAuth, setAuth] = useUser((state) => [state.isAuth, state.setAuth]);

  // useEffect(() => {
  //   setAuth(AuthService.checkLoggedIn());
  // });

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator isAuth={isAuth} />
      </ApplicationProvider>
    </>
  );
}
