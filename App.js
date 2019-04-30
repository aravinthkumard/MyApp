/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import codePush from "react-native-code-push";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to ReactNative with CodePush!</Text>
        <Text style={styles.codePushText1}>This is CodePush Demo!</Text>
       { /* <Image style={{width: 320, height: 220}} source={require('./image.png')}  />
        <Text style={styles.codePushText3}>Your app has been updated...</Text> */ }
        <Image style={{width: 290, height: 290}} source={require('./noUpdate.png')}  />
        </View>
    );
  }
}

App = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'ivory',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'darkblue'
  },
  codePushText1:{
    fontSize: 20,
    color: 'red'
  },
  codePushText2:{
    fontSize: 20,
    color: 'blue'
  },
  codePushText3:{
    fontSize: 15,
    color: 'darkorange'
  }
});

