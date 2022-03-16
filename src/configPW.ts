import Pushwoosh from 'pushwoosh-react-native-plugin';
import {DeviceEventEmitter} from 'react-native';
Pushwoosh.init(
  {
    pw_appid: 'FFCF4-BB839',
    project_number: '1002066116650',
  },
  () => {
    console.log('Pushwoosh configurado con exito');
  },
  () => {
    console.log('there was an error initializing Pushwoosh');
  },
);

Pushwoosh.getPushToken((token: string) => {
  console.log('pushwooshToken: ', token);
});

Pushwoosh.register();

DeviceEventEmitter.addListener('pushReceived', (e: Event) => {
  console.warn('pushReceived: ' + JSON.stringify(e));
});

DeviceEventEmitter.addListener('pushOpened', (e: Event) => {
  console.warn('pushOpened: ' + JSON.stringify(e));
});
