import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import { useAuthContext } from '../context/AuthContext';
import Pushwoosh from 'pushwoosh-react-native-plugin';



export const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const {user} = useAuthContext()
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <TextInput style={{borderWidth:1, width:"100%"}} />
      <Text>{user}</Text>
      <Button title='go to about' onPress={() => navigation.navigate("About")} />
      <Button title='local noti' onPress={() => Pushwoosh.createLocalNotification({msg:"Your pumpkins are ready!", seconds:7, userData:{name:"alvaritokore"}})
} />

    
    </View>
  );
};
