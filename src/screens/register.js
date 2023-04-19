import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { AuthService } from '../services/AuthService';
import { useUser } from '../store/useUser';
import { UserApi } from '../api/UserApi';
import { useAppHook } from '../hooks/useAppHook';

function RegistrationScreen({ navigation }) {
  const setAuth = useUser((state) => state.setAuth);
  const app = useAppHook();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegistration = async () => {
    setLoading(true);
    try {
      await AuthService.register({ username, email, password });
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
        Create an account
      </Text>

      <Input
        placeholder="Username"
        value={username}
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <Input
        placeholder="Password"
        value={password}
        style={styles.input}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        onPress={handleRegistration}
        accessoryLeft={() => (loading ? <LoadingIndicator /> : null)}
        disabled={loading}
        style={styles.button}>
        Sign up
      </Button>
      <Button onPress={() => navigation.goBack()} style={styles.button} appearance={'ghost'}>
        Back to login
      </Button>

      {error ? <Text status="danger">{error}</Text> : ''}
    </Layout>
  );
}

export default RegistrationScreen;

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
