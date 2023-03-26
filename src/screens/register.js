import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { LoadingIndicator } from '../components/LoadingIndicator';

function RegistrationScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(true);

  const handleRegistration = () => {
    // handle registration logic here
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.title} category="h2">
        Create an account
      </Text>
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
      <Input
        placeholder="Confirm password"
        value={confirmPassword}
        style={styles.input}
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
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
