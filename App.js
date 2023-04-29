import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import AppNavigator from './src/components/navigation/AppNavigator';
import * as eva from '@eva-design/eva';
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
