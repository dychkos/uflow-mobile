import { Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { HeaderComponent } from './HeaderComponent';
import { View } from 'react-native';

export default ({ children }) => (
  <View style={{ flex: 1 }}>
    <TopNavigation
      title={() => <HeaderComponent flowName="Summer" subtitle="Welcome to my app!" />}
    />
    <Divider />
    <Layout style={{ flex: 1, justifyContent: 'center', padding: 12 }}>{children}</Layout>
  </View>
);
