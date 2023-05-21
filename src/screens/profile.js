import { Button, Card, Divider, Input, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { AuthService } from '../app/services/AuthService';
import { useUser } from '../store/useUser';
import { View, StyleSheet } from 'react-native';
import { InputField } from '../components/ui/InputField';

export default () => {
  const [user, setAuth] = useUser((state) => [state.user, state.setAuth]);
  const [username, setUsername] = React.useState(user.username);

  const onUsernameChange = (val) => {
    setUsername(val);
  };

  const handleLogout = async () => {
    await AuthService.makeLogout();
    setAuth(false);
  };
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 40
      }}>
      <Text category="h2">Hello, {user.username}</Text>

      <Divider />
      <Card style={styles.statisticsContainer}>
        <Text category={'h4'} style={styles.titleSub}>
          Statistics
        </Text>
        <View style={styles.statistics}>
          <View style={styles.statisticsRow}>
            <Text category="label" appearance="hint">
              Done Tasks
            </Text>
            <Text>{user.doneTasks}</Text>
          </View>
          <View style={styles.statisticsRow}>
            <Text category="label" appearance="hint">
              Earned Coin
            </Text>
            <Text>{user.globalCoins}</Text>
          </View>
          <View style={styles.statisticsRow}>
            <Text category="label" appearance="hint">
              Habit chain
            </Text>
            <Text>1 day</Text>
          </View>
        </View>
      </Card>

      <Divider />

      <Card style={styles.settingsContainer}>
        <Text category={'h4'} style={styles.titleSub}>
          User`s settings
        </Text>
        <View style={styles.settings}>
          <View style={{ width: '75%' }}>
            <Input value={username} onChangeText={onUsernameChange} />
          </View>
          <Button style={{ height: 25 }}>Save</Button>
        </View>
      </Card>

      <Card style={styles.supportContainer}>
        <Text category={'h4'} style={styles.titleSub}>
          Support
        </Text>
        <View style={styles.support}>
          <Button style={styles.supportItem} appearance={'ghost'} category={'h6'}>
            Term`s and conditions
          </Button>
          <Button style={styles.supportItem} appearance={'ghost'} category={'h6'}>
            Chat with dev
          </Button>
          <Button style={styles.supportItem} appearance={'ghost'} category={'h6'}>
            Share with friends
          </Button>
        </View>
      </Card>

      <Button onPress={handleLogout} appearance={'outline'} style={{ width: '100%', marginTop: 16 }}>
        Logout
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  titleSub: {
    textAlign: 'center',
    marginBottom: 16
  },
  statistics: {
    flexDirection: 'row',
    flexGrow: 1,
    width: '100%',
    justifyContent: 'space-between'
  },
  statisticsContainer: {
    width: '100%',
    marginTop: 24
  },
  statisticsRow: {},
  settingsContainer: {
    width: '100%',
    padding: 0,
    marginTop: 16
  },
  settings: {
    width: '100%',
    flexGrow: 1,
    flexDirection: 'row',
    gap: 4
  },
  supportContainer: {
    width: '100%',
    padding: 0,
    marginTop: 16
  },
  support: {
    width: '100%'
  },
  supportItem: {
    width: '100%'
  }
});
