import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AboutScreen} from '../../../../screens/AboutScreen';
import {HomeScreen} from '../../../../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};
