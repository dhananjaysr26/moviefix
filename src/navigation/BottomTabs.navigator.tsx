import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home.screen';
import WatchListScreen from '../screens/WatchList.screen';
import ProfileScreen from '../screens/Profile.screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
        component={HomeScreen}
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
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="user" color={focused ? '#f0283c' : 'gray'} size={24} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
