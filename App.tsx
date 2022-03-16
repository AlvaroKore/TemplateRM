// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TextInput} from 'react-native-gesture-handler';
import { MyVideo } from './components/MyVideo';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: true}}>
      <Drawer.Screen name="Feed" component={MyTabNavigator} />
      <Drawer.Screen name="Article" component={Aboutcreen} />
    </Drawer.Navigator>
  );
}

function MyTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
    </Tab.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
}

function HomeScreen() {
  const navigation = useNavigation<any>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <MyVideo />
      <TextInput />
      <Button
        title="go"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </View>
  );
}

function Aboutcreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>About Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
