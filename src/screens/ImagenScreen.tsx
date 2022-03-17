import {Content} from 'native-base';
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import PhotoGrid from 'react-native-thumbnail-grid';

import ImageModal from 'react-native-image-modal';

const images = [
  'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',

];

export const ImagenScreen = () => {
  return (
    <Content>
      <ImageModal
        resizeMode="contain"
        imageBackgroundColor="#000000"
        style={{
          width: Dimensions.get('screen').width,
          height: 250,
        }}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2019/07/25/18/58/church-4363258_960_720.jpg',
        }}
      />

      <PhotoGrid source={images} onPressImage={(uri:any) => console.log("uri",uri)} />
    </Content>
  );
};
