/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View, Image } from 'react-native';

class App extends Component {
  render() {
    let amgEType = require("./Classe_E_AMG.jpg");
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hope it will work !!!</Text>
        <Image source={amgEType} style={{ width: 320, height: 160 }} />
        <Text>Car Model {this.props.name}</Text>
      </View>
    );
  }
}

export default class LotsOfModel extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <App name="Classe E" />
        <App name="C63" />
        <App name="SLR" />
      </View>
    );
  }
}

AppRegistry.registerComponent('myApp', () => LotsOfModel);