/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import codePush from "react-native-code-push";

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to ReactNative with CodePush!</Text>
        <Text style={styles.codePushText1}>This is CodePush Demo!</Text>
        <Text style={styles.codePushText2}>Currently there are no updates...</Text>
      </View>
    );
  }
}

App = codePush(codePushOptions)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  codePushText1:{
    fontSize: 20,
    color: 'green'
  },
  codePushText2:{
    fontSize: 20,
    color: 'blue'
  }
});

