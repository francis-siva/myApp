/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Hope it will work !!!</Text>
        <Image source={require("./Classe_E_AMG.jpg")} style={{ width: 320, height: 160 }} />
      </View>
    );
  }
}