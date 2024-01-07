import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetailsScreen from '../screens/MovieDetails.screen';
import HomeScreen from '../screens/Home.screen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
