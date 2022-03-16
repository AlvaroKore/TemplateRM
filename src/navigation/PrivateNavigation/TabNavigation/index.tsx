import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';
import {AboutScreen} from '../../../screens/AboutScreen';
import {HomeScreen} from '../../../screens/HomeScreen';
import {StackNavigation} from './StackNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="stack"
        component={StackNavigation}
        options={{
          tabBarIcon: () => <Icon name="rocket" size={30} color="#900" />,
        }}
      />
      <Tab.Screen name="Anbout" component={AboutScreen} />
    </Tab.Navigator>
  );
};
