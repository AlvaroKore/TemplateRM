import React from 'react';
import {Text} from 'react-native';

import VideoPlayer from 'react-native-video-player';

export const MyVideo = () => {
  return (
    <VideoPlayer
      video={{
        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      }}
      videoWidth={1600}
      videoHeight={900}
      thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
    />
  );
};
