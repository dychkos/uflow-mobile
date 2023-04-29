import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import DailyTab from './DailyTab';
import ProfileScreen from '../../screens/profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlowTab from './FlowTab';

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
  <Tab.Navigator
    tabBar={(props) => <BottomTab {...props} />}
    screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Daily" component={DailyTab} />
    <Tab.Screen name="Flow" component={FlowTab} />

    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
