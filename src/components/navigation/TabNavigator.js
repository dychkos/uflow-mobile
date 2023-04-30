import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import DailyTab from './DailyTab';
import FlowTab from './FlowTab';
import ProfileScreen from '../../screens/profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTab = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Daily" />
    <BottomNavigationTab title="Flow" />
    <BottomNavigationTab title="Profile" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomTab {...props} />} screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Daily Tap" component={DailyTab} options={{ headerShown: false }} />
    <Tab.Screen name="Flow Tap" component={FlowTab} options={{ headerShown: false }} />

    <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
  </Tab.Navigator>
);

export default TabNavigator;
