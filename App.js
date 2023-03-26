import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { AppNavigator } from './src/components/AppNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useUser } from './src/store/useUser';

export default function App() {
  const isAuth = useUser((state) => state.isAuth);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator isAuth={isAuth} />
      </ApplicationProvider>
    </>
  );
}
