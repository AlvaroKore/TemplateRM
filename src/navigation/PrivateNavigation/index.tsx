import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import { ImagenScreen } from '../../screens/ImagenScreen';
import { VideoScreen } from '../../screens/VideoScreen';
import { TabNavigation } from './TabNavigation';

const Drawer = createDrawerNavigator();

export const PrivateNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: true}}>
      <Drawer.Screen name="TabScreen" component={TabNavigation} />
      <Drawer.Screen name="Video Player" component={VideoScreen} />
      <Drawer.Screen name="Imagen" component={ImagenScreen} />
    </Drawer.Navigator>
  );
};
