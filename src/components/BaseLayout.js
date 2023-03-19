import { Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { HeaderComponent } from './HeaderComponent';
import { View } from 'react-native';
import { AddButton } from './AddButton';
import { AddTaskPopup } from './Popups';

export default ({ children }) => (
  <View style={{ flex: 1 }}>
    <TopNavigation
      title={() => <HeaderComponent flowName="Summer" subtitle="Welcome to my app!" />}
    />
    <Divider />
    <Layout style={{ flex: 1, justifyContent: 'flex-start', padding: 12 }}>{children}</Layout>
    <AddButton />
    <AddTaskPopup />
  </View>
);
