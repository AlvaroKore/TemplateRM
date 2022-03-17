// In App.js in a new project
import './src/configPW';
import * as React from 'react';
import {LogBox} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import {NavigationContainer} from '@react-navigation/native';
import ReactArrayToTree from 'react-array-to-tree';
import {PrivateNavigation} from './src/navigation/PrivateNavigation';
import {AuthProvider} from './src/context/AuthContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

function App() {
  return (
    <NavigationContainer  onReady={() => RNBootSplash.hide()}>
      <AppState>
        <PrivateNavigation />
      </AppState>
    </NavigationContainer>
  );
}

const Providers = ReactArrayToTree([[AuthProvider]]);

const AppState: React.FC = ({children}) => {
  return <Providers>{children}</Providers>;
};

export default App;
