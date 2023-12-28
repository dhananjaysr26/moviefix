import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home.screen';
import WatchListScreen from '../screens/WatchList.screen';
import ProfileScreen from '../screens/Profile.screen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WatchListScreen}
        options={{
          tabBarLabel: 'WishList',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
