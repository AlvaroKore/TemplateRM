import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {AboutScreen} from '../../screens/AboutScreen';
import {HomeScreen} from '../../screens/HomeScreen';
import { TabNavigation } from './TabNavigation';

const Drawer = createDrawerNavigator();

export const PrivateNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: true}}>
      <Drawer.Screen name="TabScreen" component={TabNavigation} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};
