/**
 * @format
 */

import codePush from 'react-native-code-push';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';

const codePushOptions = {
  installMode: codePush.InstallMode.ON_NEXT_RESTART,
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
};

AppRegistry.registerComponent(appName, () => App);


export default codePush(codePushOptions)(App);
