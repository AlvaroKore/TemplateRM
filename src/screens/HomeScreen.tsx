import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

export const HomeScreen = () => {
    const navigation = useNavigation<any>();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <Button title='go to about' onPress={() => navigation.navigate("About")} />
    </View>
  );
};
