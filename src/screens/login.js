import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { AuthService } from '../services/AuthService';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { useUser } from '../store/useUser';
import { UserApi } from '../api/UserApi';
import { useAppHook } from '../hooks/useAppHook';

function LoginScreen({ navigation }) {
  const setAuth = useUser((state) => state.setAuth);
  const app = useAppHook();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await AuthService.login({ email, password });
      const isAuth = await AuthService.isLoggedIn();
      if (isAuth) {
        await app.initApp();
      }
      setAuth(isAuth);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.title} category="h2">
        Welcome back!
      </Text>
      <Input
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        onPress={handleLogin}
        style={styles.button}
        accessoryLeft={() => (loading ? <LoadingIndicator /> : null)}
        disabled={loading}>
        Sign in
      </Button>
      <Button
        onPress={() => navigation.navigate('Registration')}
        appearance={'ghost'}
        style={styles.button}>
        Create an account
      </Button>
      {error ? <Text status="danger">{error}</Text> : ''}
    </Layout>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    marginBottom: 16
  },
  input: {
    marginBottom: 8
  },
  button: {
    marginBottom: 8,
    width: '100%'
  }
});
