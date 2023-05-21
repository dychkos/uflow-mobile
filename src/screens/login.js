import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { AuthService } from '../app/services/AuthService';
import { LoadingIndicator } from '../components/ui/LoadingIndicator';
import { useUser } from '../store/useUser';
import { UserApi } from '../app/api/UserApi';
import { useAppHook } from '../app/hooks/useAppHook';
import { InputField } from '../components/ui/InputField';
import { useValidation } from '../app/hooks/useValidation';
import { loginRules } from '../app/validation';

function LoginScreen({ navigation }) {
  const setAuth = useUser((state) => state.setAuth);
  const app = useAppHook();

  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('admin');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { validate, clearError, errors } = useValidation(loginRules, { password, email });

  const onEmailChange = (val) => {
    if ('email' in errors) clearError('email');
    setEmail(val);
  };

  const onPasswordChange = (val) => {
    if ('password' in errors) clearError('password');
    setPassword(val);
  };

  const handleLogin = async () => {
    if (!validate()) return;

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
      <Text category="h6" appearance="hint">
        welcome to
      </Text>
      <Text style={styles.title} category="h2">
        Uflow - habit tracker
      </Text>
      <InputField
        placeholder="Email"
        style={[styles.input]}
        value={email}
        onChangeText={onEmailChange}
        error={errors.email}
      />
      <InputField
        placeholder="Password"
        style={[styles.input]}
        value={password}
        secureTextEntry
        onChangeText={onPasswordChange}
        error={errors.password}
      />
      <Button
        onPress={handleLogin}
        style={styles.button}
        accessoryLeft={() => (loading ? <LoadingIndicator /> : null)}
        disabled={loading}>
        Sign in
      </Button>
      <Button onPress={() => navigation.navigate('Registration')} appearance={'ghost'} style={styles.button}>
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
    marginBottom: 8,
    width: '100%'
  },
  button: {
    marginBottom: 8,
    width: '100%'
  }
});
