import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Text} from 'native-base';
import DocumentPicker from 'react-native-document-picker';
import MyImagePicker from '../components/MyImagePicker';

export const SelectFileScreen = () => {
  const selectFile = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
      });
      console.log('pickerResult', JSON.stringify(pickerResult, null, 2))
      return pickerResult;
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View>
      <Text>SelectFile</Text>
      <Button onPress={selectFile}>
        <Text>Seleccionar acrhivo</Text>
      </Button>

      <Button onPress={selectFile}   success>
        <Text>Tomar foto</Text>
      </Button>

      <MyImagePicker/>
    </View>
  );
};
