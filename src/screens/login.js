import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
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
      <Button onPress={handleLogin} style={styles.button}>
        Sign in
      </Button>
      <Button
        onPress={() => navigation.navigate('Registration')}
        appearance={'ghost'}
        style={styles.button}>
        Create an account
      </Button>
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
