import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import WatchListScreen from '../screens/WatchList.screen';
import ProfileScreen from '../screens/Profile.screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import StackNavigator from './Stack.navigator';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Stack"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
          marginBottom: 2,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="home" color={focused ? '#f0283c' : 'gray'} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="heart" color={focused ? '#f0283c' : 'gray'} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="user" color={focused ? '#f0283c' : 'gray'} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
