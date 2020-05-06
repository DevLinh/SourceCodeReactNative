/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View} from 'react-native';

import HelloWorld from './components/HelloWorld';
import TestScrollView from './components/TestScrollView'
import ChangeBackground from'./components/ChangeBackground'
class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
        <ChangeBackground />
      </View>
    );
  }
}

export default App;
