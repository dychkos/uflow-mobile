import { Button, Divider, Layout, Text } from '@ui-kitten/components';
import { LoadingIndicator } from '../components/ui/LoadingIndicator';
import React from 'react';
import { AuthService } from '../app/services/AuthService';
import { useUser } from '../store/useUser';

export default () => {
  const [user, setAuth] = useUser((state) => [state.user, state.setAuth]);

  const handleLogout = async () => {
    await AuthService.makeLogout();
    setAuth(false);
  };
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">Profile Screen</Text>
      <Text category="h2">{user.username}</Text>
      <Divider />
      <Button onPress={handleLogout}>Logout</Button>
    </Layout>
  );
};
