import { Button, Layout, Text } from '@ui-kitten/components';
import { LoadingIndicator } from '../components/LoadingIndicator';
import React from 'react';
import { AuthService } from '../services/AuthService';
import { useUser } from '../store/useUser';

export default () => {
  const setAuth = useUser((state) => state.setAuth);

  const handleLogout = async () => {
    await AuthService.makeLogout();
    setAuth(false);
  };
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">Profile Screen</Text>
      <Button onPress={handleLogout}>Logout</Button>
    </Layout>
  );
};
